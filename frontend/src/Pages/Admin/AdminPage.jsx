import React, { useState } from 'react'
import styles from './AdminPage.module.css'

const AdminPage = () => {
  const API_BASE = (import.meta && import.meta.env && import.meta.env.VITE_API_BASE) ? import.meta.env.VITE_API_BASE : 'https://paid-project.onrender.com';

  const safeParseJSON = (text) => {
    try { return JSON.parse(text); } catch { return null; }
  };

  const extractMessage = (value) => {
    if (!value && value !== 0) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      if (value.message) return value.message;
      if (value.error) return (typeof value.error === 'string') ? value.error : (value.error.message || JSON.stringify(value.error));
      if (value.data && (value.data.message || value.data.error)) return value.data.message || value.data.error;
      try { return JSON.stringify(value); } catch { return String(value); }
    }
    return String(value);
  };

  const [adminLoginForm, setAdminLoginForm] = useState({ email: '', password: '' });
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(!!localStorage.getItem('token'));
  // status feature removed from UI; provide a no-op to avoid runtime errors from existing calls
  const setStatusMessage = () => {};
  const [blogsResult, setBlogsResult] = useState(null);
  const [hotelsResult, setHotelsResult] = useState(null);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', published: true });
  const [commentsPanel, setCommentsPanel] = useState({ open: false, blogId: null, comments: [] });
  const [showAddHotelForm, setShowAddHotelForm] = useState(false);
  const [addHotelForm, setAddHotelForm] = useState({ name: '', location: '', description: '', price: '', rating: 3, facilities: '', image: '' });
  const [editingHotelId, setEditingHotelId] = useState(null);
  const [hotelEditForm, setHotelEditForm] = useState({ name: '', location: '', description: '', price: '', rating: 3, facilities: '', image: '' });

  const adminLogin = async (e) => {
    e && e.preventDefault();
    setStatusMessage('Logging in...');
    try {
      const res = await fetch(`${API_BASE}/auth/admin-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: adminLoginForm.email, password: adminLoginForm.password })
      });
      // fallback to older route if not found
      if (res.status === 404) {
        const res2 = await fetch(`${API_BASE}/auth/admin/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: adminLoginForm.email, password: adminLoginForm.password })
        });
        if (!res2.ok) {
          const txt = await res2.text();
          const j = safeParseJSON(txt) || txt;
          throw new Error(extractMessage(j) || `HTTP ${res2.status}`);
        }
        const d = await res2.json();
        if (d.token) {
          localStorage.setItem('token', d.token);
          setIsAdminLoggedIn(true);
          setStatusMessage('Admin login successful');
          return;
        }
      }

      if (!res.ok) {
        const txt = await res.text();
        const j = safeParseJSON(txt) || txt;
        throw new Error(extractMessage(j) || `HTTP ${res.status}`);
      }
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        setIsAdminLoggedIn(true);
        setStatusMessage('Admin login successful');
      } else {
        setStatusMessage('Login responded without token');
      }
    } catch (err) {
      console.error('adminLogin error', err);
      setStatusMessage('Login failed: ' + extractMessage(err));
    }
  };

  const adminLogout = () => {
    // Clear auth tokens and any saved session backup so admin can re-login cleanly
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('backupToken');
      localStorage.removeItem('userData');
  } catch { /* ignore */ }
    setIsAdminLoggedIn(false);
    setStatusMessage('Logged out');
    setBlogsResult(null);
    setHotelsResult(null);
    // Reload to ensure UI and in-memory state reflect logout
    setTimeout(() => { window.location.reload(); }, 50);
  };

  const fetchAdminBlogs = async () => {
    setStatusMessage('Fetching admin blogs...');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE}/admin/blogs`, {
        headers: { ...(token ? { 'Authorization': `Bearer ${token}` } : {}) }
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setBlogsResult(data);
      setStatusMessage('Fetched admin blogs');
    } catch (err) {
      console.error('fetchAdminBlogs error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };

  const handleEditStart = (blog) => {
    setEditingBlogId(blog._id);
    setEditForm({ title: blog.title || '', published: !!blog.published });
    setStatusMessage('Editing...');
  };

  const handleEditCancel = () => {
    setEditingBlogId(null);
    setEditForm({ title: '', published: true });
    setStatusMessage('');
  };

  const handleEditSave = async (id) => {
    setStatusMessage('Saving changes...');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE}/admin/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...(token ? { 'Authorization': `Bearer ${token}` } : {}) },
        body: JSON.stringify(editForm)
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      await fetchAdminBlogs();
      setEditingBlogId(null);
      setEditForm({ title: '', published: true });
      setStatusMessage('Saved');
    } catch (err) {
      console.error('handleEditSave error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };

  const handleDeleteBlog = async (id) => {
    const ok = window.confirm('Delete this blog permanently?');
    if (!ok) return;
    setStatusMessage('Deleting blog...');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE}/admin/blogs/${id}`, {
        method: 'DELETE',
        headers: { ...(token ? { 'Authorization': `Bearer ${token}` } : {}) }
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      await fetchAdminBlogs();
      setStatusMessage('Deleted');
    } catch (err) {
      console.error('handleDeleteBlog error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };

  // Comments: open panel and delete comment (admin)
  const openCommentsPanel = async (blog) => {
    // if blog already has comments populated, use them
    if (blog.comments && Array.isArray(blog.comments)) {
      setCommentsPanel({ open: true, blogId: blog._id, blogTitle: blog.title || '', comments: blog.comments });
      return;
    }
    // otherwise fetch single blog
    setStatusMessage('Fetching comments...');
    try {
      const res = await fetch(`${API_BASE}/blogs/${blog._id}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setCommentsPanel({ open: true, blogId: blog._id, blogTitle: data.title || '', comments: data.comments || [] });
      setStatusMessage('');
    } catch (err) {
      console.error('openCommentsPanel error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };

  const getInitials = (name) => {
    if (!name) return 'A';
    try {
      return name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase();
    } catch { return 'A'; }
  };

  const closeCommentsPanel = () => setCommentsPanel({ open: false, blogId: null, comments: [] });

  const handleDeleteComment = async (blogId, commentId) => {
    const ok = window.confirm('Delete this comment?');
    if (!ok) return;
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE}/admin/blogs/${blogId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: { ...(token ? { 'Authorization': `Bearer ${token}` } : {}), 'Accept': 'application/json' }
      });

      const text = await res.text();
      let body = null;
  try { body = JSON.parse(text); } catch { body = text; }

      if (!res.ok) {
        console.error('Delete comment failed', res.status, body);
        // show backend message if present
        const msg = (body && body.message) ? body.message : (typeof body === 'string' && body) ? body : `HTTP ${res.status}`;
        alert('Failed to delete comment: ' + msg);
        return;
      }

      console.debug('Delete comment success', res.status, body);
      // Refresh blogs and comments panel
      await fetchAdminBlogs();
      // remove comment locally
      setCommentsPanel(cp => ({ ...cp, comments: cp.comments.filter(c => c._id !== commentId) }));
      alert('Comment deleted');
    } catch (err) {
      console.error('handleDeleteComment error', err);
      alert('Error deleting comment: ' + extractMessage(err));
    }
  };

  // Hotels: add / edit / delete
  const handleAddHotel = async (e) => {
    e && e.preventDefault();
    setStatusMessage('Creating hotel...');
    const token = localStorage.getItem('token');
    try {
      const body = { ...addHotelForm, price: Number(addHotelForm.price), rating: Number(addHotelForm.rating) };
      const res = await fetch(`${API_BASE}/admin/hotels`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(token ? { 'Authorization': `Bearer ${token}` } : {}) },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      setAddHotelForm({ name: '', location: '', description: '', price: '', rating: 3, facilities: '', image: '' });
      setShowAddHotelForm(false);
      await fetchAdminHotels();
      setStatusMessage('Hotel created');
    } catch (err) {
      console.error('handleAddHotel error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };

  const handleHotelEditStart = (hotel) => {
    setEditingHotelId(hotel._id);
    setHotelEditForm({ name: hotel.name || '', location: hotel.location || '', description: hotel.description || '', price: hotel.price || '', rating: hotel.rating || 3, facilities: hotel.facilities || '', image: hotel.image || '' });
    setStatusMessage('Editing hotel...');
  };

  const handleHotelEditCancel = () => {
    setEditingHotelId(null);
    setHotelEditForm({ name: '', location: '', description: '', price: '', rating: 3, facilities: '', image: '' });
    setStatusMessage('');
  };

  const handleHotelEditSave = async (id) => {
    setStatusMessage('Saving hotel...');
    const token = localStorage.getItem('token');
    try {
      const body = { ...hotelEditForm, price: Number(hotelEditForm.price), rating: Number(hotelEditForm.rating) };
      const res = await fetch(`${API_BASE}/admin/hotels/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...(token ? { 'Authorization': `Bearer ${token}` } : {}) },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      await fetchAdminHotels();
      setEditingHotelId(null);
      setHotelEditForm({ name: '', location: '', description: '', price: '', rating: 3, facilities: '', image: '' });
      setStatusMessage('Saved hotel');
    } catch (err) {
      console.error('handleHotelEditSave error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };

  const handleDeleteHotel = async (id) => {
    const ok = window.confirm('Delete this hotel permanently?');
    if (!ok) return;
    setStatusMessage('Deleting hotel...');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE}/admin/hotels/${id}`, {
        method: 'DELETE',
        headers: { ...(token ? { 'Authorization': `Bearer ${token}` } : {}) }
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      await fetchAdminHotels();
      // clear status to avoid persistent 'Deleted hotel' text in the UI
      setStatusMessage('');
    } catch (err) {
      console.error('handleDeleteHotel error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };

  const fetchAdminHotels = async () => {
    setStatusMessage('Fetching admin hotels...');
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${API_BASE}/admin/hotels`, {
        headers: { ...(token ? { 'Authorization': `Bearer ${token}` } : {}) }
      });
      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }
      const data = await res.json();
      setHotelsResult(data);
      setStatusMessage('Fetched admin hotels');
    } catch (err) {
      console.error('fetchAdminHotels error', err);
      setStatusMessage('Failed: ' + extractMessage(err));
    }
  };
  

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <div className={styles.logo}>K</div>
          <div>
            <div className={styles.title}>Kishanganj Admin</div>
            <div className={styles.subtitle}>District Portal — Admin Console</div>
          </div>
        </div>
        <div className={styles.topButtons}>
          {isAdminLoggedIn ? (
            <>
              <button className={styles.button} onClick={fetchAdminBlogs}>Refresh Blogs</button>
              <button className={styles.button} onClick={fetchAdminHotels}>Refresh Hotels</button>
              
              <button className={`${styles.button} ${styles.btnDanger}`} onClick={adminLogout}>Logout</button>
            </>
          ) : (
            <div className={styles.muted}>Not logged in</div>
          )}
        </div>
      </header>

      <main className={styles.main}>
        {!isAdminLoggedIn ? (
          <section className={styles.loginPanel}>
            <h3>Admin Login</h3>
            <form onSubmit={adminLogin} className={styles.loginForm}>
              <label className={styles.label}>Email</label>
              <input className={styles.input} value={adminLoginForm.email} onChange={(e) => setAdminLoginForm({...adminLoginForm, email: e.target.value})} />
              <label className={styles.label}>Password</label>
              <input className={styles.input} type="password" value={adminLoginForm.password} onChange={(e) => setAdminLoginForm({...adminLoginForm, password: e.target.value})} />
              <div className={styles.loginActions}>
                <button type="submit" className={`${styles.button} ${styles.btnPrimary}`}>Login as Admin</button>
                <button type="button" className={styles.button} onClick={() => { setAdminLoginForm({ email: '', password: '' }); }}>Clear</button>
              </div>
            </form>
          </section>
        ) : (
          <section className={styles.dashboard}>
            <div className={styles.statRow}>
              <div className={styles.statCard}>
                <div className={styles.statLabel}>Blogs</div>
                <div className={styles.statValue}>{Array.isArray(blogsResult) ? blogsResult.length : 0}</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statLabel}>Hotels</div>
                <div className={styles.statValue}>{Array.isArray(hotelsResult) ? hotelsResult.length : 0}</div>
              </div>
              {/* Status card removed */}
            </div>
            <div className={styles.row}>
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <h4>Blogs</h4>
                  <div className={styles.panelActions}>
                    <button className={styles.smallBtn} onClick={fetchAdminBlogs}>Refresh</button>
                  </div>
                </div>
                <div className={styles.panelBody}>
                  {Array.isArray(blogsResult) && blogsResult.length ? (
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          <th className={styles.th}>Title</th>
                          <th className={styles.th}>Author</th>
                          <th className={styles.th}>Published</th>
                          <th className={styles.th}>Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogsResult.map(b => (
                          <tr key={b._id}>
                            <td className={styles.td}>
                              {editingBlogId === b._id ? (
                                <input className={styles.input} value={editForm.title} onChange={(e) => setEditForm({...editForm, title: e.target.value})} />
                              ) : (b.title || '(no title)')}
                            </td>
                            <td className={styles.td}>{b.author && b.author.name ? b.author.name : (b.author || '-')}</td>
                            <td className={styles.td}>
                              {editingBlogId === b._id ? (
                                <label style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                                  <input type="checkbox" checked={!!editForm.published} onChange={(e) => setEditForm({...editForm, published: e.target.checked})} />
                                  <span style={{ fontSize: 13 }}>{editForm.published ? 'Published' : 'Draft'}</span>
                                </label>
                              ) : (b.published ? 'Yes' : 'No')}
                            </td>
                            <td className={styles.td}>{b.createdAt ? new Date(b.createdAt).toLocaleString() : '-'}</td>
                            <td className={styles.td}>
                              {editingBlogId === b._id ? (
                                <div style={{ display: 'flex', gap: 8 }}>
                                  <button className={styles.smallBtn} onClick={() => handleEditSave(b._id)}>Save</button>
                                  <button className={styles.smallBtn} onClick={handleEditCancel}>Cancel</button>
                                </div>
                              ) : (
                                <div style={{ display: 'flex', gap: 8 }}>
                                  <button className={styles.smallBtn} onClick={() => handleEditStart(b)}>Edit</button>
                                  <button className={styles.smallBtn} onClick={() => handleDeleteBlog(b._id)} style={{ background: '#fff1f0', border: '1px solid #fde2e0' }}>Delete</button>
                                  <button className={styles.smallBtn} onClick={() => openCommentsPanel(b)}>Comments</button>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className={styles.empty}>No blog data. Click Refresh to query backend.</div>
                  )}
                </div>
              </div>

              {/* Comments slide-over / panel */}
              {commentsPanel && commentsPanel.open && (
                <div className={styles.commentsPanel}>
                  <div className={styles.commentsHeader}>
                    <h3>Comments for: {commentsPanel.blogTitle || 'Blog'}</h3>
                    <button className={styles.smallBtn} onClick={closeCommentsPanel}>Close</button>
                  </div>
                  <div className={styles.commentsBody}>
                    {Array.isArray(commentsPanel.comments) && commentsPanel.comments.length > 0 ? (
                      <ul>
                                {commentsPanel.comments.map((c) => (
                                  <li key={c._id} className={styles.commentItem}>
                                    <div className={styles.commentAvatar}>{getInitials(c.name || c.author)}</div>
                                    <div className={styles.commentMeta}>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                        <strong className={styles.commentAuthor}>{c.name || c.author || 'Anonymous'}</strong>
                                        <div className={styles.commentTime}>{new Date(c.createdAt || c.date || Date.now()).toLocaleString()}</div>
                                      </div>
                                      <div className={styles.commentText}>{c.text || c.comment || ''}</div>
                                    </div>
                                    <div className={styles.commentActions}>
                                      <button className={`${styles.smallBtn} ${styles.actionDanger}`} onClick={() => handleDeleteComment(commentsPanel.blogId, c._id)}>Delete</button>
                                    </div>
                                  </li>
                                ))}
                      </ul>
                    ) : (
                      <div style={{ padding: 16, color: '#666' }}>No comments found for this blog.</div>
                    )}
                  </div>
                </div>
              )}

              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  <h4>Hotels</h4>
                  <div className={styles.panelActions}>
                      <button className={styles.smallBtn} onClick={fetchAdminHotels}>Refresh</button>
                      <button className={styles.smallBtn} onClick={() => setShowAddHotelForm(s => !s)}>{showAddHotelForm ? 'Close' : 'Add Hotel'}</button>
                  </div>
                </div>
                <div className={styles.panelBody}>
                    {showAddHotelForm && (
                      <form onSubmit={handleAddHotel} style={{ display: 'grid', gap: 8, marginBottom: 12 }}>
                        <input className={styles.input} placeholder="Name" value={addHotelForm.name} onChange={(e) => setAddHotelForm({...addHotelForm, name: e.target.value})} required />
                        <input className={styles.input} placeholder="Location" value={addHotelForm.location} onChange={(e) => setAddHotelForm({...addHotelForm, location: e.target.value})} required />
                        <input className={styles.input} placeholder="Price" type="number" value={addHotelForm.price} onChange={(e) => setAddHotelForm({...addHotelForm, price: e.target.value})} required />
                        <input className={styles.input} placeholder="Rating" type="number" min="1" max="5" value={addHotelForm.rating} onChange={(e) => setAddHotelForm({...addHotelForm, rating: e.target.value})} />
                        <input className={styles.input} placeholder="Image URL" value={addHotelForm.image} onChange={(e) => setAddHotelForm({...addHotelForm, image: e.target.value})} />
                        <textarea className={styles.input} placeholder="Description" value={addHotelForm.description} onChange={(e) => setAddHotelForm({...addHotelForm, description: e.target.value})} />
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button className={styles.smallBtn} type="submit">Create</button>
                          <button className={styles.smallBtn} type="button" onClick={() => setShowAddHotelForm(false)}>Cancel</button>
                        </div>
                      </form>
                    )}

                    {Array.isArray(hotelsResult) && hotelsResult.length ? (
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th className={styles.th}>Name</th>
                            <th className={styles.th}>Location</th>
                            <th className={styles.th}>Price</th>
                            <th className={styles.th}>Rating</th>
                            <th className={styles.th}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {hotelsResult.map(h => (
                            <tr key={h._id}>
                              <td className={styles.td}>
                                {editingHotelId === h._id ? (
                                  <input className={styles.input} value={hotelEditForm.name} onChange={(e) => setHotelEditForm({...hotelEditForm, name: e.target.value})} />
                                ) : (
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                                    {h.image ? <img src={h.image} alt={h.name} className={styles.thumb} /> : null}
                                    <div>{h.name}</div>
                                  </div>
                                )}
                              </td>
                              <td className={styles.td}>{editingHotelId === h._id ? <input className={styles.input} value={hotelEditForm.location} onChange={(e) => setHotelEditForm({...hotelEditForm, location: e.target.value})} /> : h.location}</td>
                              <td className={styles.td}>{editingHotelId === h._id ? <input className={styles.input} type="number" value={hotelEditForm.price} onChange={(e) => setHotelEditForm({...hotelEditForm, price: e.target.value})} /> : `₹${h.price}`}</td>
                              <td className={styles.td}>{editingHotelId === h._id ? <input className={styles.input} type="number" min="1" max="5" value={hotelEditForm.rating} onChange={(e) => setHotelEditForm({...hotelEditForm, rating: e.target.value})} /> : (h.rating || '-')}</td>
                              <td className={styles.td}>
                                {editingHotelId === h._id ? (
                                  <div style={{ display: 'flex', gap: 8 }}>
                                    <button className={styles.smallBtn} onClick={() => handleHotelEditSave(h._id)}>Save</button>
                                    <button className={styles.smallBtn} onClick={handleHotelEditCancel}>Cancel</button>
                                  </div>
                                ) : (
                                  <div style={{ display: 'flex', gap: 8 }}>
                                    <button className={styles.smallBtn} onClick={() => handleHotelEditStart(h)}>Edit</button>
                                    <button className={styles.smallBtn} onClick={() => handleDeleteHotel(h._id)} style={{ background: '#fff1f0', border: '1px solid #fde2e0' }}>Delete</button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <div className={styles.empty}>No hotel data. Click Refresh to query backend.</div>
                    )}
                </div>
              </div>
            </div>

            

            <div className={styles.infoRow}>
              {/* status panel removed */}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default AdminPage;
