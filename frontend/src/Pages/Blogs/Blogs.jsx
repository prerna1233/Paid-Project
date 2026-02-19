import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaHeart, FaComment, FaCalendarAlt } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import './Blogs.style.css';

const Blogs = () => {
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [_showEditBlog, setShowEditBlog] = useState(false);
  const [_editingBlog, setEditingBlog] = useState(null);
  // blogs will come from backend
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  // API base (Vite env override)
  const API_BASE = (import.meta && import.meta.env && import.meta.env.VITE_API_BASE)
    ? import.meta.env.VITE_API_BASE
    : 'https://paid-project.onrender.com';

  const getToken = () => localStorage.getItem('token');

  const getLocalImagesMap = () => {
    try { return JSON.parse(localStorage.getItem('myBlogImages') || '{}'); } catch { return {}; }
  };

  const saveLocalImage = (blogId, image) => {
    try {
      const map = getLocalImagesMap();
      map[String(blogId)] = image;
      localStorage.setItem('myBlogImages', JSON.stringify(map));
    } catch (e) { console.error('saveLocalImage error', e); }
  };

  const removeLocalImage = (blogId) => {
    try {
      const map = getLocalImagesMap();
      delete map[String(blogId)];
      localStorage.setItem('myBlogImages', JSON.stringify(map));
    } catch (e) { console.error('removeLocalImage error', e); }
  };

  const mapBlogFromApi = (b) => ({
    id: b._id,
    title: b.title,
    description: b.content || b.description || '',
    image: b.image || '',
    likes: Array.isArray(b.likes) ? b.likes.length : (b.likeCount || 0),
    comments: Array.isArray(b.comments)
      ? b.comments.map(c => ({ author: (c.user && (c.user.name || c.user.email)) || 'Anonymous', text: c.text }))
      : [],
    author: (b.author && (b.author.name || b.author.email)) || 'Anonymous',
    date: b.createdAt ? new Date(b.createdAt).toISOString().split('T')[0] : ''
  });

  // fetch published blogs from backend on mount
  React.useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/blogs`);
        if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
        const data = await res.json();
        const localImages = getLocalImagesMap();
        setBlogs((data || []).map(b => {
          const mapped = mapBlogFromApi(b);
          mapped.image = localImages[String(b._id)] || mapped.image || '';
          return mapped;
        }));
      } catch (err) {
        console.error('Error loading blogs', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, [API_BASE]);
  const [showBlogDetail, setShowBlogDetail] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState([]); // Track liked blogs by id
  // kept commentInputs below; remove unused commentInput/showCommentBox
  const [newBlog, setNewBlog] = useState({ title: '', description: '', image: '', imageFile: null });
  const [showMyBlogs, setShowMyBlogs] = useState(false);
  const [_currentUser] = useState('Admin'); // Dummy current user (not currently read)
  const [showCommentsDropdown, setShowCommentsDropdown] = useState({}); // main page
  const [showModalCommentsDropdown, setShowModalCommentsDropdown] = useState(false); // modal
  const [myBlogIds, setMyBlogIds] = useState(() => {
    try { return JSON.parse(localStorage.getItem('myBlogIds') || '[]'); } catch { return []; }
  }); // Track blogs added from this device (initialized from localStorage)

  // Remove any CSS that sets 'overflow: hidden' or 'height: 100vh' on body, html, or .blogs-page-root
  // Optionally, force scroll for debugging:
  React.useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  }, []);

  // myBlogIds initialized from localStorage above; avoid setting state in an effect

  // openBlogDetail removed in favor of handleOpenBlogDetail below

  const closeBlogDetail = () => {
    setShowBlogDetail(false);
    setSelectedBlog(null);
    document.body.classList.remove('modal-open');
  };

  // legacy handleLike removed — using handleLikeBlog instead

  const handleAddBlog = async () => {
    if (!newBlog.title.trim() || !newBlog.description.trim()) return;
    const token = getToken();
    if (!token) {
      alert('Please log in to publish a blog');
      return;
    }

    try {
      const body = { title: newBlog.title, content: newBlog.description };
      const res = await fetch(`${API_BASE}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const txt = await res.text();
        const parsed = (() => { try { return JSON.parse(txt); } catch { return txt; } })();
        alert((parsed && parsed.message) || parsed || `Publish failed (HTTP ${res.status})`);
        return;
      }

      const created = await res.json();
      const mapped = mapBlogFromApi(created);
      // If the frontend had an image selected, prefer that (backend may not store it)
      if (newBlog.image) {
        mapped.image = newBlog.image;
        // persist mapping so image remains visible across reloads
        saveLocalImage(created._id || mapped.id, newBlog.image);
      }
      setBlogs(prev => [mapped, ...prev]);

      // remember this blog locally
      const myIds = JSON.parse(localStorage.getItem('myBlogIds') || '[]');
      myIds.push(String(mapped.id));
      localStorage.setItem('myBlogIds', JSON.stringify(myIds));
      setMyBlogIds(myIds);

      setNewBlog({ title: '', description: '', image: '', imageFile: null });
      setShowAddBlog(false);
      document.body.classList.remove('modal-open');
    } catch (err) {
      console.error('Publish error', err);
      alert('Failed to publish blog');
    }
  };

  // edit/update handlers left intact but they reference _editingBlog below if used
  const _handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setShowEditBlog(true);
    document.body.classList.add('modal-open');
  };

  const _handleUpdateBlog = () => {
    if (!_editingBlog || !_editingBlog.title.trim() || !_editingBlog.description.trim()) return;

    setBlogs(blogs.map(blog => 
      blog.id === _editingBlog.id ? { ..._editingBlog, date: new Date().toISOString().split('T')[0] } : blog
    ));
    setShowEditBlog(false);
    setEditingBlog(null);
    document.body.classList.remove('modal-open');
  };

  const navigate = useNavigate();

  const handleDeleteBlog = async (blogId) => {
    const token = getToken();

    if (!token) {
      const proceed = window.confirm('You must be logged in to delete a blog from the database. Click OK to delete locally only, or Cancel to go to Login.');
      if (!proceed) {
        navigate('/login');
        return;
      }

      // User opted to delete locally only
      setBlogs(prev => prev.filter(blog => blog.id !== blogId));
      setMyBlogIds(prev => {
        const updated = prev.filter(id => id !== blogId);
        localStorage.setItem('myBlogIds', JSON.stringify(updated));
        return updated;
      });
      // remove any local image mapping for this blog
      removeLocalImage(blogId);
      if (showBlogDetail && selectedBlog?.id === blogId) closeBlogDetail();
      return;
    }

    // We have a token - try to delete from database
    try {
      const res = await fetch(`${API_BASE}/blogs/${blogId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` }
      });

      if (!res.ok) {
        // If unauthorized, let user know and offer to re-login
        if (res.status === 401 || res.status === 403) {
          const goLogin = window.confirm('Not authorized to delete this blog. Would you like to login as the blog owner or admin?');
          if (goLogin) navigate('/login');
          return;
        }

        const txt = await res.text();
        const parsed = (() => { try { return JSON.parse(txt); } catch { return txt; } })();
        // If 404, the blog is already gone from DB; still remove locally
        if (res.status === 404) {
          setBlogs(prev => prev.filter(blog => blog.id !== blogId));
          setMyBlogIds(prev => {
            const updated = prev.filter(id => id !== blogId);
            localStorage.setItem('myBlogIds', JSON.stringify(updated));
            return updated;
          });
          if (showBlogDetail && selectedBlog?.id === blogId) closeBlogDetail();
          alert('Blog not found on server; removed locally.');
          return;
        }

        alert((parsed && parsed.message) || parsed || `Failed to delete (HTTP ${res.status})`);
        return;
      }

      // success - remove locally as well
      setBlogs(prev => prev.filter(blog => blog.id !== blogId));
      setMyBlogIds(prev => {
        const updated = prev.filter(id => id !== blogId);
        localStorage.setItem('myBlogIds', JSON.stringify(updated));
        return updated;
      });
      if (showBlogDetail && selectedBlog?.id === blogId) closeBlogDetail();
    } catch (err) {
      console.error('Delete error', err);
      alert('Failed to delete blog (network error)');
    }
  };

  // If not, you can use a combination of index and id as a fallback:
  // {blogs.map((blog, idx) => (
  //   <div key={blog.id ? blog.id : idx} ... >
  // ...
  // ))}

  // getUserBlogs removed — not used

  function handleOpenBlogDetail(blog) {
    setSelectedBlog(blog);
    setShowBlogDetail(true);
  }

  // Filter blogs for My Blogs modal
  const myBlogs = blogs.filter(blog => myBlogIds.includes(blog.id));

  // Like button logic (single definition)
  // Only one handleLikeBlog function should exist in this file

  // Like/unlike and comment logic for modal
  const [modalComment, setModalComment] = useState("");

  // Ensure modal always uses latest blog data from main state
  const getModalBlog = () => blogs.find(blog => blog.id === selectedBlog?.id) || selectedBlog;
  const modalBlog = getModalBlog();

  const handleModalLike = async () => {
    const blogId = modalBlog.id;
    const token = getToken();
    if (!token) { alert('Please log in to like'); return; }
    try {
      const res = await fetch(`${API_BASE}/blogs/${blogId}/like`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error(`Like failed ${res.status}`);
      const data = await res.json();
      setBlogs(prev => prev.map(b => b.id === blogId ? { ...b, likes: data.likeCount } : b));
      setLikedBlogs(prev => data.liked ? Array.from(new Set([...prev, blogId])) : prev.filter(id => id !== blogId));
    } catch (err) {
      console.error('Like error', err);
      alert('Failed to update like');
    }
  };

  const handleModalComment = async () => {
    const blogId = modalBlog.id;
    const token = getToken();
    if (!token) { alert('Please log in to comment'); return; }
    if (!modalComment.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/blogs/${blogId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ text: modalComment })
      });
      if (!res.ok) {
        const txt = await res.text();
        const parsed = (() => { try { return JSON.parse(txt); } catch { return txt; } })();
        alert((parsed && parsed.message) || parsed || `Comment failed (HTTP ${res.status})`);
        return;
      }
      const data = await res.json();
      // data.comment contains the added comment (populated user)
      const added = { author: data.comment.user ? (data.comment.user.name || data.comment.user.email) : 'Anonymous', text: data.comment.text };
      setBlogs(prev => prev.map(b => b.id === blogId ? { ...b, comments: [...(b.comments || []), added] } : b));
      setModalComment('');
    } catch (err) {
      console.error('Comment error', err);
      alert('Failed to post comment');
    }
  };

  // Like/unlike and comment logic for main blog card
  const handleLikeBlog = async (blogId) => {
    const token = getToken();
    if (!token) { alert('Please log in to like'); return; }
    try {
      const res = await fetch(`${API_BASE}/blogs/${blogId}/like`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
      if (!res.ok) throw new Error(`Like failed ${res.status}`);
      const data = await res.json();
      setBlogs(prev => prev.map(b => b.id === blogId ? { ...b, likes: data.likeCount } : b));
      setLikedBlogs(prev => data.liked ? Array.from(new Set([...prev, blogId])) : prev.filter(id => id !== blogId));
    } catch (err) {
      console.error('Like error', err);
      alert('Failed to update like');
    }
  };

  const [commentInputs, setCommentInputs] = useState({});
  const handleCommentInputChange = (blogId, value) => {
    setCommentInputs(prev => ({ ...prev, [blogId]: value }));
  };
  const handleAddComment = async (blogId) => {
    const token = getToken();
    if (!token) { alert('Please log in to comment'); return; }
    const comment = commentInputs[blogId];
    if (!comment || !comment.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/blogs/${blogId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({ text: comment })
      });
      if (!res.ok) {
        const txt = await res.text();
        const parsed = (() => { try { return JSON.parse(txt); } catch { return txt; } })();
        alert((parsed && parsed.message) || parsed || `Comment failed (HTTP ${res.status})`);
        return;
      }
      const data = await res.json();
      const added = { author: data.comment.user ? (data.comment.user.name || data.comment.user.email) : 'Anonymous', text: data.comment.text };
      setBlogs(prev => prev.map(b => b.id === blogId ? { ...b, comments: [...(b.comments || []), added] } : b));
      setCommentInputs(prev => ({ ...prev, [blogId]: '' }));
    } catch (err) {
      console.error('Comment error', err);
      alert('Failed to post comment');
    }
  };

  return (
  <div className="blogs-container">
      {/* Professional Government-Style Header */}
      <header className="blogs-header blogs-govt-header" style={{ background: '#eaf3e6', padding: '48px 0 32px 0', borderBottom: '2px solid #d1e0d7' }}>
  <div className="header-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, paddingTop: 32, minHeight: 180 }}>
          <h1 className="blogs-govt-title" style={{ fontSize: '2.6rem', fontWeight: 800, color: '#22336b', margin: 0, textAlign: 'center', letterSpacing: 1, lineHeight: 1.2, textShadow: '0 2px 8px #eaf3e6, 0 1px 0 #fff' }}>KISHANGANJ DISTRICT BLOGS</h1>
          <p className="blogs-govt-desc" style={{ fontSize: '1.18rem', color: '#4a7c59', margin: '12px 0 0 0', textAlign: 'center', maxWidth: 700 }}>
            Share your experiences, insights, and stories from the heart of Bihar. Connect with the community and celebrate our district's rich heritage and vibrant culture.
          </p>
          <div className="header-buttons blogs-govt-header-buttons" style={{ display: 'flex', gap: 18, marginTop: 24 }}>
            <button
              className="add-blog-btn blogs-govt-btn"
              style={{ background: '#f47c4c', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: 18, border: 'none', boxShadow: '0 2px 8px rgba(244,124,76,0.08)' }}
              onClick={() => setShowAddBlog(true)}
              title="Share your thoughts and experiences"
            >
              WRITE A BLOG
            </button>
            <button
              className="view-blogs-btn blogs-govt-btn-outline"
              style={{ background: '#fff', color: '#22336b', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: 18, border: '2px solid #22336b', boxShadow: '0 2px 8px rgba(34,51,107,0.08)' }}
              onClick={() => setShowMyBlogs(true)}
              title="View and manage your blogs"
            >
              VIEW MY BLOGS
            </button>
          </div>
        </div>
      </header>

  {/* Blog List - One Blog Per Row (stacked) */}
  <div className="blogs-list" style={{ maxWidth: 1200, margin: '48px auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
    {loading ? (
      <div style={{ textAlign: 'center', fontSize: '1.2rem', color: '#22336b', margin: '2rem 0' }}>
        Loading blogs...
      </div>
    ) : (
      blogs.map((blog, idx) => {
        const liked = likedBlogs.includes(blog.id);
        const dropdownOpen = showCommentsDropdown[blog.id];
        return (
          <div key={blog.id + '-' + idx} className="blog-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', padding: 22, gap: 20, background: '#fff', borderRadius: 14, boxShadow: '0 10px 40px rgba(34,51,107,0.08)', border: '1px solid #e6eef0', overflow: 'hidden' }}>
            <div className="blog-content" style={{ flex: 1, padding: '6px 12px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <h3 className="blog-title" onClick={() => handleOpenBlogDetail(blog)} style={{ fontSize: '1.4rem', margin: 0, cursor: 'pointer', color: '#22336b', lineHeight: 1.2 }}>
                  {blog.title}
                </h3>
                <div style={{ textAlign: 'right', minWidth: 110 }}>
                  <div style={{ fontSize: '0.9rem', color: '#6b7069', marginBottom: 6 }}><FaCalendarAlt /> {blog.date}</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8, marginBottom: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 6, background: '#f1f4f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2e7d32', fontWeight: 700 }}>{(blog.author || 'A').charAt(0)}</div>
                <div style={{ color: '#2e7d32', fontWeight: 700, fontSize: 15 }}>By {blog.author}</div>
              </div>
              <p className="blog-description" style={{ margin: '6px 0 14px 0', color: '#444', fontSize: '1rem', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.6 }}>{blog.description}</p>
              <div style={{ marginTop: 'auto', display: 'flex', gap: 14, alignItems: 'center' }}>
                <button className={`action-btn like-btn ${liked ? 'liked' : ''}`} onClick={() => handleLikeBlog(blog.id)} style={{ padding: '8px 12px', fontSize: 14 }}>
                  <FaHeart /> <span style={{ marginLeft: 8 }}>{blog.likes || 0}</span>
                </button>
                <button className="action-btn comment-btn" onClick={() => setShowCommentsDropdown(prev => ({ ...prev, [blog.id]: !dropdownOpen }))} style={{ padding: '8px 12px', fontSize: 14 }}>
                  <FaComment /> <span style={{ marginLeft: 8 }}>{Array.isArray(blog.comments) ? blog.comments.length : 0}</span>
                </button>
                <button className="read-more-btn" onClick={() => handleOpenBlogDetail(blog)} style={{ padding: '8px 14px', fontSize: 14 }}>
                  READ MORE
                </button>
              </div>
              {/* Comments dropdown for main page only */}
              {dropdownOpen && (
                <div className="blog-comments-dropdown">
                  <div style={{ fontWeight: 700, color: '#22336b', marginBottom: 8 }}>Comments</div>
                  {Array.isArray(blog.comments) && blog.comments.length > 0 ? (
                    blog.comments.map((comment, cidx) => (
                      <div key={blog.id + '-comment-' + cidx} style={{ borderBottom: '1px solid #e0e7ef', padding: '8px 0', color: '#22336b' }}>
                        <div style={{ fontWeight: 600, color: '#2e7d32', fontSize: 14 }}>By {comment.author || 'Anonymous'}</div>
                        <div style={{ fontSize: 15 }}>{comment.text}</div>
                      </div>
                    ))
                  ) : (
                    <div style={{ color: '#888', fontSize: 14 }}>No comments yet.</div>
                  )}
                  <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                    <input
                      type="text"
                      value={commentInputs[blog.id] || ''}
                      onChange={e => handleCommentInputChange(blog.id, e.target.value)}
                      placeholder="Write a comment..."
                      style={{ flex: 1, padding: '8px', borderRadius: 6, border: '1.5px solid #e0e7ef', fontSize: 14 }}
                    />
                    <button style={{ background: '#22336b', color: '#fff', fontWeight: 600, borderRadius: 6, border: 'none', padding: '8px 18px', fontSize: 14, cursor: 'pointer' }} onClick={() => handleAddComment(blog.id)}>
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
            {blog.image && (
              <div className="blog-image-preview" style={{ minWidth: 180, maxWidth: 180, height: 120, overflow: 'hidden', borderRadius: 8, flexShrink: 0, background: '#f4f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            )}
          </div>
        );
      })
    )}
  </div>

      {/* Add Blog Modal (conditionally rendered) */}
      {showAddBlog && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(34,51,107,0.12)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content blogs-govt-modal" style={{ width: 380, maxWidth: '95vw', background: '#eaf3e6', borderRadius: 16, boxShadow: '0 6px 32px rgba(34,51,107,0.13)', padding: '36px 32px 28px 32px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button className="close-modal-btn" style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 22, color: '#22336b', cursor: 'pointer' }} onClick={() => setShowAddBlog(false)} title="Close">
              <FaTimes />
            </button>
            <h2 className="modal-title" style={{ fontWeight: 800, fontSize: '1.6rem', color: '#22336b', marginBottom: 24, textAlign: 'center' }}>Write New Blog</h2>
            <input
              type="text"
              placeholder="Blog Title"
              value={newBlog.title}
              onChange={e => setNewBlog({...newBlog, title: e.target.value})}
              className="modal-input"
              style={{ width: '100%', padding: '12px', borderRadius: 8, border: '1.5px solid #b7d7c9', fontSize: 16, marginBottom: 18 }}
            />
            {/* Image upload removed as per requirements */}
            <textarea
              placeholder="Write your blog description/content here..."
              value={newBlog.description}
              onChange={e => setNewBlog({...newBlog, description: e.target.value})}
              className="modal-textarea"
              style={{ width: '100%', minHeight: 110, padding: '12px', borderRadius: 8, border: '1.5px solid #b7d7c9', fontSize: 16, marginBottom: 22 }}
            />
            <div style={{ display: 'flex', gap: 18, width: '100%', justifyContent: 'center' }}>
              <button
                className="publish-btn blogs-govt-btn"
                style={{ background: '#4a7c59', color: '#fff', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: 17, border: 'none', boxShadow: '0 2px 8px rgba(74,124,89,0.08)' }}
                onClick={handleAddBlog}
              >
                Publish Blog
              </button>
              <button
                className="cancel-btn blogs-govt-btn-outline"
                style={{ background: '#fff', color: '#22336b', fontWeight: 700, borderRadius: 8, padding: '12px 32px', fontSize: 17, border: '2px solid #22336b', boxShadow: '0 2px 8px rgba(34,51,107,0.08)' }}
                onClick={() => setShowAddBlog(false)}
              >
                Cancel
              </button>
            </div>
            <div style={{ marginTop: 18, color: '#888', fontSize: 13, textAlign: 'center' }}>
              Tip: Press Ctrl + Enter to publish quickly, or Esc to cancel
            </div>
          </div>
        </div>
      )}

      {/* Blog Detail Modal */}
      {showBlogDetail && modalBlog && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(34,51,107,0.12)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content blogs-govt-modal" style={{ width: 520, maxWidth: '95vw', background: '#fff', borderRadius: 16, boxShadow: '0 6px 32px rgba(34,51,107,0.13)', padding: '36px 32px 28px 32px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <button className="close-modal-btn" style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 22, color: '#22336b', cursor: 'pointer' }} onClick={() => setShowBlogDetail(false)} title="Close">
              <FaTimes />
            </button>
            <h2 className="modal-title" style={{ fontWeight: 800, fontSize: '2rem', color: '#22336b', marginBottom: 24, textAlign: 'center' }}>Blog Details</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div style={{ fontWeight: 700, fontSize: '1.5rem', color: '#22336b', marginBottom: 8, textAlign: 'center' }}>{modalBlog.title}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <span style={{ color: '#2e7d32', fontWeight: 600, fontSize: 15 }}>By {modalBlog.author}</span>
                <span style={{ color: '#6b7069', fontSize: '1.1rem', fontWeight: 600 }}><FaCalendarAlt /> {modalBlog.date}</span>
              </div>
              <div style={{ background: '#f4f6fa', borderRadius: 8, padding: '18px 16px', marginBottom: 18, color: '#444', fontSize: 15, textAlign: 'center', width: '100%' }}>{modalBlog.description}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 16 }}>
                <button style={{ background: likedBlogs.includes(modalBlog.id) ? '#e57373' : '#f4f6fa', color: likedBlogs.includes(modalBlog.id) ? '#fff' : '#e57373', fontWeight: 600, borderRadius: 6, border: 'none', padding: '8px 18px', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }} onClick={handleModalLike}>
                  <FaHeart /> {modalBlog.likes || 0} {modalBlog.likes === 1 ? 'Like' : 'Likes'}
                </button>
                <button style={{ background: '#f4f6fa', color: '#388e3c', fontWeight: 600, borderRadius: 6, border: 'none', padding: '8px 18px', fontSize: 16, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <FaComment /> {Array.isArray(modalBlog.comments) ? modalBlog.comments.length : 0} {Array.isArray(modalBlog.comments) && modalBlog.comments.length === 1 ? 'Comment' : 'Comments'}
                </button>
                <button style={{ background: '#eaf3e6', border: '1px solid #e0e7ef', borderRadius: 6, padding: '8px 18px', fontWeight: 600, color: '#22336b', fontSize: 16, cursor: 'pointer' }} onClick={() => setShowModalCommentsDropdown(prev => !prev)}>
                  {showModalCommentsDropdown ? 'Hide Comments' : 'View Comments'}
                </button>
              </div>
              {showModalCommentsDropdown && Array.isArray(modalBlog.comments) && modalBlog.comments.length > 0 && (
                <div className="blog-comments-dropdown" style={{ marginTop: 8, background: '#fff', border: '1px solid #e0e7ef', borderRadius: 8, boxShadow: '0 2px 8px rgba(34,51,107,0.08)', padding: '12px 16px', maxWidth: 340, width: '100%', overflowY: 'auto' }}>
                  <div style={{ fontWeight: 700, color: '#22336b', marginBottom: 8 }}>Comments</div>
                  {modalBlog.comments.map((comment, cidx) => (
                    <div key={modalBlog.id + '-modal-comment-' + cidx} style={{ borderBottom: '1px solid #e0e7ef', padding: '8px 0', color: '#22336b' }}>
                      <div style={{ fontWeight: 600, color: '#2e7d32', fontSize: 14 }}>By {comment.author || 'Anonymous'}</div>
                      <div style={{ fontSize: 15 }}>{comment.text}</div>
                    </div>
                  ))}
                </div>
              )}
              {/* Comment input */}
              <div style={{ width: '100%', marginTop: 16, display: 'flex', gap: 8 }}>
                <input
                  type="text"
                  value={modalComment}
                  onChange={e => setModalComment(e.target.value)}
                  placeholder="Write a comment..."
                  style={{ flex: 1, padding: '10px', borderRadius: 6, border: '1.5px solid #e0e7ef', fontSize: 15 }}
                />
                <button style={{ background: '#22336b', color: '#fff', fontWeight: 600, borderRadius: 6, border: 'none', padding: '10px 24px', fontSize: 15, cursor: 'pointer' }} onClick={handleModalComment}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* My Blogs Modal */}
      {showMyBlogs && (
        <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(34,51,107,0.12)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="modal-content blogs-govt-modal" style={{ width: '420px', maxWidth: '90vw', background: '#fff', borderRadius: 16, boxShadow: '0 6px 32px rgba(34,51,107,0.13)', padding: '28px 24px 20px 24px', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <button className="close-modal-btn" style={{ position: 'absolute', top: 18, right: 18, background: 'none', border: 'none', fontSize: 22, color: '#22336b', cursor: 'pointer' }} onClick={() => setShowMyBlogs(false)} title="Close">
              <FaTimes />
            </button>
            <h2 className="modal-title" style={{ fontWeight: 800, fontSize: '1.4rem', color: '#22336b', marginBottom: 18, textAlign: 'center' }}>My Blogs</h2>
            {myBlogs.length === 0 ? (
              <div style={{ color: '#888', fontSize: 16, marginTop: 24 }}>No blogs added from this device.</div>
            ) : (
              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
                {myBlogs.map((blog, idx) => (
                  <div key={blog.id + '-my-' + idx} style={{ display: 'flex', gap: 14, alignItems: 'stretch', background: '#f7faf7', padding: 12, borderRadius: 10, border: '1px solid #e6eef0' }}>
                    <div style={{ width: 110, height: 82, borderRadius: 8, overflow: 'hidden', background: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {blog.image ? (
                        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9aa8a1', fontWeight: 700 }}>{(blog.title || 'B').charAt(0)}</div>
                      )}
                    </div>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontWeight: 800, color: '#22336b', fontSize: 16 }}>{blog.title}</div>
                        <div style={{ color: '#2e7d32', fontWeight: 600, fontSize: 13, marginTop: 6 }}>By {blog.author} • {blog.date}</div>
                        <div style={{ marginTop: 8, color: '#444', fontSize: 14, maxHeight: 44, overflow: 'hidden', textOverflow: 'ellipsis' }}>{blog.description}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 10, marginTop: 10 }}>
                        <button onClick={() => { _handleEditBlog(blog); }} style={{ background: '#fff', border: '1px solid #d1e0d7', color: '#22336b', padding: '8px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => { if (window.confirm('Delete this blog?')) handleDeleteBlog(blog.id); }} style={{ background: '#e74c3c', border: 'none', color: '#fff', padding: '8px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>Delete</button>
                        <button onClick={() => { setShowMyBlogs(false); setTimeout(() => handleOpenBlogDetail(blog), 50); }} style={{ marginLeft: 'auto', background: '#4a7c59', border: 'none', color: '#fff', padding: '8px 12px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}>View</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blogs;