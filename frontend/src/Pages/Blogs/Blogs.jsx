import React, { useState, useEffect } from "react";
import { FaTimes, FaHeart, FaComment, FaCalendarAlt } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import './Blogs.style.css';

const Blogs = () => {
  // Common button style for all buttons
  const buttonStyle = { cursor: 'pointer' };
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [showEditBlog, setShowEditBlog] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: 'Kishanganj Heritage Walk',
      description: 'Join us for a walk through the historic sites of Kishanganj. Discover the stories behind the monuments and meet local historians.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      likes: 5,
      comments: [{ text: 'Amazing experience!' }],
      author: 'Admin',
      date: '2026-02-10'
    },
    {
      id: 2,
      title: 'Bihar Food Festival',
      description: 'A celebration of Bihar’s rich culinary heritage. Taste traditional dishes and learn recipes from local chefs.',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
      likes: 3,
      comments: [{ text: 'Loved the food!' }, { text: 'Great event!' }],
      author: 'User',
      date: '2026-02-09'
    },
    {
      id: 3,
      title: 'River Picnic',
      description: 'Spend a relaxing day by the river with family and friends. Activities include boating, fishing, and games for all ages.',
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
      likes: 7,
      comments: [],
      author: 'Guest',
      date: '2026-02-08'
    },
    {
      id: 4,
      title: 'Cultural Night',
      description: 'An evening of music, dance, and drama showcasing the vibrant culture of Bihar. Open to all residents and visitors.',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b',
      likes: 2,
      comments: [{ text: 'So much fun!' }],
      author: 'Admin',
      date: '2026-02-07'
    },
    {
      id: 5,
      title: 'Wildlife Safari',
      description: 'Explore the natural beauty of Kishanganj with a guided wildlife safari. Spot rare birds and animals in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9',
      likes: 4,
      comments: [],
      author: 'User',
      date: '2026-02-06'
    }
  ]);
  const [showBlogDetail, setShowBlogDetail] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState([]); // Track liked blogs by id
  const [commentInput, setCommentInput] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [newBlog, setNewBlog] = useState({ title: '', description: '', image: '', imageFile: null });
  const [showMyBlogs, setShowMyBlogs] = useState(false);
  const [currentUser, setCurrentUser] = useState('Admin'); // Dummy current user
  const [showCommentsDropdown, setShowCommentsDropdown] = useState({}); // main page
  const [showModalCommentsDropdown, setShowModalCommentsDropdown] = useState(false); // modal
  const [myBlogIds, setMyBlogIds] = useState([]); // Track blogs added from this device

  // Remove any CSS that sets 'overflow: hidden' or 'height: 100vh' on body, html, or .blogs-page-root
  // Optionally, force scroll for debugging:
  React.useEffect(() => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  }, []);

  useEffect(() => {
    const myBlogIds = JSON.parse(localStorage.getItem('myBlogIds') || '[]');
    setMyBlogIds(myBlogIds);
  }, []);

  const openBlogDetail = (blog) => {
    setSelectedBlog(blog);
    setShowBlogDetail(true);
    document.body.classList.add('modal-open');
  };

  const closeBlogDetail = () => {
    setShowBlogDetail(false);
    setSelectedBlog(null);
    document.body.classList.remove('modal-open');
  };

  const handleLike = (blogId) => {
    const updatedLikes = new Set(likedBlogs);
    if (updatedLikes.has(blogId)) {
      updatedLikes.delete(blogId);
    } else {
      updatedLikes.add(blogId);
    }
    setLikedBlogs(updatedLikes);

    // Update blog likes in the blogs state
    setBlogs(blogs.map(blog => 
      blog.id === blogId ? { ...blog, likes: updatedLikes.has(blogId) ? blog.likes + 1 : blog.likes - 1 } : blog
    ));
  };

  const handleAddBlog = () => {
    if (!newBlog.title.trim() || !newBlog.description.trim()) return;

    const blogToAdd = {
      id: blogs.length + 1, // Simple ID assignment, replace with your logic
      title: newBlog.title,
      description: newBlog.description,
      likes: 0,
      comments: [],
      author: 'Admin', // Replace with actual author
      date: new Date().toISOString().split('T')[0], // Current date
      image: newBlog.image // Assuming image is a URL or base64 string
    };

    setBlogs([...blogs, blogToAdd]);
    const myBlogIds = JSON.parse(localStorage.getItem('myBlogIds') || '[]');
    myBlogIds.push(blogToAdd.id);
    localStorage.setItem('myBlogIds', JSON.stringify(myBlogIds));
    setMyBlogIds(myBlogIds);
    setNewBlog({ title: '', description: '', image: '', imageFile: null });
    setShowAddBlog(false);
    document.body.classList.remove('modal-open');
  };

  const handleEditBlog = (blog) => {
    setEditingBlog(blog);
    setShowEditBlog(true);
    document.body.classList.add('modal-open');
  };

  const handleUpdateBlog = () => {
    if (!editingBlog.title.trim() || !editingBlog.description.trim()) return;

    setBlogs(blogs.map(blog => 
      blog.id === editingBlog.id ? { ...editingBlog, date: new Date().toISOString().split('T')[0] } : blog
    ));
    setShowEditBlog(false);
    setEditingBlog(null);
    document.body.classList.remove('modal-open');
  };

  const handleDeleteBlog = (blogId) => {
    setBlogs(prev => prev.filter(blog => blog.id !== blogId));
    setMyBlogIds(prev => {
      const updated = prev.filter(id => id !== blogId);
      localStorage.setItem('myBlogIds', JSON.stringify(updated));
      return updated;
    });
    if (showBlogDetail && selectedBlog?.id === blogId) {
      closeBlogDetail();
    }
  };

  // If not, you can use a combination of index and id as a fallback:
  // {blogs.map((blog, idx) => (
  //   <div key={blog.id ? blog.id : idx} ... >
  // ...
  // ))}

  // Dummy getUserBlogs function
  function getUserBlogs() {
    return blogs.filter(blog => blog.author === currentUser);
  }

  function handleOpenBlogDetail(blog) {
    setSelectedBlog(blog);
    setShowBlogDetail(true);
  }

  // Filter blogs for My Blogs modal
  const myBlogs = blogs.filter(blog => myBlogIds.includes(blog.id));

  // Like button logic (single definition)
  // Only one handleLikeBlog function should exist in this file

  // Like/unlike and comment logic for modal
  const [modalLiked, setModalLiked] = useState(false);
  const [modalLikes, setModalLikes] = useState(0);
  const [modalComment, setModalComment] = useState("");
  const [modalComments, setModalComments] = useState([]);

  useEffect(() => {
    if (selectedBlog) {
      setModalLiked(likedBlogs.includes(selectedBlog.id));
      setModalLikes(0); // Always start with 0 likes
      setModalComments(selectedBlog.comments || []);
    }
  }, [selectedBlog, likedBlogs]);

  // Ensure modal always uses latest blog data from main state
  const getModalBlog = () => blogs.find(blog => blog.id === selectedBlog?.id) || selectedBlog;
  const modalBlog = getModalBlog();

  const handleModalLike = () => {
    setBlogs(prev => prev.map(blog => {
      if (blog.id === modalBlog.id) {
        const liked = likedBlogs.includes(blog.id);
        if (!liked) {
          setLikedBlogs([...likedBlogs, blog.id]);
          return { ...blog, likes: (blog.likes || 0) + 1 };
        } else {
          setLikedBlogs(likedBlogs.filter(id => id !== blog.id));
          return { ...blog, likes: (blog.likes || 0) - 1 };
        }
      }
      return blog;
    }));
  };

  const handleModalComment = () => {
    if (modalComment.trim()) {
      setBlogs(prev => prev.map(blog => {
        if (blog.id === modalBlog.id) {
          const newComment = { author: 'Anonymous', text: modalComment };
          return { ...blog, comments: [...(blog.comments || []), newComment] };
        }
        return blog;
      }));
      setModalComment("");
    }
  };

  // Like/unlike and comment logic for main blog card
  const handleLikeBlog = (blogId) => {
    setBlogs(prev => prev.map(blog => {
      if (blog.id === blogId) {
        const liked = likedBlogs.includes(blogId);
        if (!liked) {
          setLikedBlogs([...likedBlogs, blogId]);
          return { ...blog, likes: (blog.likes || 0) + 1 };
        } else {
          setLikedBlogs(likedBlogs.filter(id => id !== blogId));
          return { ...blog, likes: (blog.likes || 0) - 1 };
        }
      }
      return blog;
    }));
  };

  const [commentInputs, setCommentInputs] = useState({});
  const handleCommentInputChange = (blogId, value) => {
    setCommentInputs(prev => ({ ...prev, [blogId]: value }));
  };
  const handleAddComment = (blogId) => {
    const comment = commentInputs[blogId];
    if (comment && comment.trim()) {
      setBlogs(prev => prev.map(blog => {
        if (blog.id === blogId) {
          const newComment = { author: 'Anonymous', text: comment };
          return { ...blog, comments: [...(blog.comments || []), newComment] };
        }
        return blog;
      }));
      setCommentInputs(prev => ({ ...prev, [blogId]: '' }));
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

      {/* Blog List - One Blog Per Row, Professional Card Layout */}
      <div className="blogs-list" style={{ maxWidth: 1200, margin: '48px auto', display: 'flex', flexDirection: 'column', gap: 40 }}>
        {blogs.map((blog, idx) => {
          const liked = likedBlogs.includes(blog.id);
          const dropdownOpen = showCommentsDropdown[blog.id];
          return (
            <div key={blog.id + '-' + idx} className="blog-card" style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(34,51,107,0.10)', border: '1.5px solid #e0e7ef', padding: 0, overflow: 'hidden', minHeight: 220 }}>
              <div className="blog-card-content" style={{ flex: 1, padding: '36px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <h3 className="blog-title" style={{ fontSize: '1.7rem', margin: 0, color: '#22336b', fontWeight: 700, cursor: 'pointer', textAlign: 'left' }} onClick={() => handleOpenBlogDetail(blog)}>
                    {blog.title}
                  </h3>
                  <span className="blog-date" style={{ color: '#6b7069', fontSize: '1.1rem', fontWeight: 600 }}><FaCalendarAlt /> {blog.date}</span>
                </div>
                <div className="blog-author" style={{ margin: '8px 0 12px 0', color: '#2e7d32', fontWeight: 600, fontSize: 16 }}>
                  By {blog.author}
                </div>
                <p className="blog-description" style={{ fontSize: '1.15rem', color: '#444', marginBottom: 18, textAlign: 'left' }}>{blog.description}</p>
                <div className="blog-actions" style={{ display: 'flex', gap: 18, marginTop: 8 }}>
                  <button className={`action-btn like-btn`} style={{ ...buttonStyle, background: liked ? '#e57373' : '#f4f6fa', color: liked ? '#fff' : '#e57373', fontWeight: 600, borderRadius: 6, border: 'none', padding: '8px 18px', fontSize: 16 }} onClick={() => handleLikeBlog(blog.id)}>
                    <FaHeart /> {blog.likes || 0} {blog.likes === 1 ? 'Like' : 'Likes'}
                  </button>
                  <button className="action-btn comment-btn" style={{ ...buttonStyle, background: '#f4f6fa', color: '#388e3c', fontWeight: 600, borderRadius: 6, border: 'none', padding: '8px 18px', fontSize: 16 }} onClick={() => setShowCommentsDropdown(prev => ({ ...prev, [blog.id]: !dropdownOpen }))}>
                    <FaComment /> {Array.isArray(blog.comments) ? blog.comments.length : 0} {Array.isArray(blog.comments) && blog.comments.length === 1 ? 'Comment' : 'Comments'}
                  </button>
                  <button className="read-more-btn" style={{ ...buttonStyle, background: '#4a7c59', color: '#fff', fontWeight: 600, borderRadius: 6, border: 'none', padding: '8px 18px', fontSize: 16 }} onClick={() => handleOpenBlogDetail(blog)}>
                    READ MORE
                  </button>
                </div>
                {/* Comments dropdown for main page only */}
                {dropdownOpen && (
                  <div className="blog-comments-dropdown" style={{ marginTop: 16, background: '#fff', border: '1px solid #e0e7ef', borderRadius: 8, boxShadow: '0 2px 8px rgba(34,51,107,0.08)', padding: '12px 16px', maxHeight: 220, overflowY: 'auto' }}>
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
                <div className="blog-image-preview" style={{ minWidth: 320, maxWidth: 320, height: 220, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f6fa', borderRadius: '0 16px 16px 0' }}>
                  <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 0 }} />
                </div>
              )}
            </div>
          );
        })}
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
            <div style={{ width: '100%', marginBottom: 18 }}>
              <label style={{ color: '#4a7c59', fontWeight: 600, fontSize: 15 }}>Upload Image (optional)</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setNewBlog({ ...newBlog, image: reader.result, imageFile: file });
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="modal-input-file"
                style={{ width: '100%', marginTop: 6, padding: '10px', borderRadius: 8, border: '1.5px solid #b7d7c9', fontSize: 15 }}
              />
            </div>
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
                  <div key={blog.id + '-my-' + idx} style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(34,51,107,0.08)', padding: '14px 12px', display: 'flex', flexDirection: 'row', gap: 16, alignItems: 'center', minHeight: 110 }}>
                    {blog.image && (
                      <div style={{ minWidth: 80, maxWidth: 80, height: 80, overflow: 'hidden', borderRadius: 8, background: '#f4f6fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
                      </div>
                    )}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <div style={{ fontWeight: 700, color: '#22336b', fontSize: 17 }}>{blog.title}</div>
                      <div style={{ color: '#2e7d32', fontWeight: 600, fontSize: 14 }}>By {blog.author}</div>
                      <div style={{ color: '#444', fontSize: 14, wordBreak: 'break-word' }}>{blog.description}</div>
                      <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
                        <button style={{ background: '#e57373', color: '#fff', borderRadius: 6, border: 'none', padding: '6px 16px', fontWeight: 600, fontSize: 14 }} onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
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