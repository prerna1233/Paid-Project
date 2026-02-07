import React, { useState } from 'react';
import './Blogs.style.css';
import { FaHeart, FaComment, FaUser, FaCalendarAlt, FaPlus, FaTimes } from 'react-icons/fa';
import Footer from '../../Components/Footer/Footer';

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Exploring the Beauty of Kishanganj",
      description: "Discover the hidden gems of Kishanganj, from its lush tea gardens to its rich cultural heritage. This border district offers a unique blend of natural beauty and cultural diversity.",
      fullContent: "Kishanganj, nestled in the northeastern part of Bihar, is a district that captivates visitors with its stunning landscapes and rich cultural tapestry. Known as the 'Tea Town of Bihar', this region boasts extensive tea plantations that stretch across rolling hills, creating a picturesque scenery that rivals any hill station. The district's strategic location near the borders of West Bengal and Nepal has fostered a unique cultural amalgamation, where different communities coexist harmoniously. From the aromatic tea gardens to the bustling local markets, Kishanganj offers an authentic experience of rural Bihar. The region's fertile land supports diverse agricultural activities, making it an important economic hub. Visitors can explore traditional villages, witness age-old farming techniques, and interact with locals who take pride in their heritage.",
      author: "Priya Sharma",
      avatar: "/src/assets/DM.jpeg",
      date: "2 days ago",
      likes: 0,
      comments: []
    },
    {
      id: 2,
      title: "Traditional Festivals of Bihar",
      description: "Experience the vibrant festivals that bring communities together in Bihar. From Chhath Puja to Durga Puja, each celebration tells a story of devotion and cultural unity.",
      fullContent: "Bihar's festival calendar is a vibrant tapestry of colors, sounds, and traditions that have been passed down through generations. Chhath Puja, the most significant festival of the region, sees devotees offering prayers to the Sun God while standing waist-deep in rivers and ponds. The four-day celebration transforms the entire state into a spiritual haven, with elaborate preparations and communal participation. Durga Puja brings artistic excellence to the forefront, with beautifully crafted pandals and intricate idols that showcase the region's artistic heritage. Kali Puja, Saraswati Puja, and numerous other festivals create a year-round celebration of faith, culture, and community bonding. Each festival not only serves as a religious observance but also as a platform for social interaction, economic activity, and cultural preservation.",
      author: "Amit Verma",
      avatar: "/src/assets/DM.jpeg",
      date: "5 days ago",
      likes: 0,
      comments: []
    },
    {
      id: 3,
      title: "Local Cuisine and Food Culture",
      description: "Delve into the authentic flavors of Bihar's traditional cuisine. From litti chokha to various fish preparations, the food culture reflects the region's agricultural abundance.",
      fullContent: "Bihar's culinary landscape is a testament to the region's agricultural richness and cultural diversity. Litti chokha, the state's most famous dish, represents the simplicity and nutritional wisdom of rural cooking. Made from wheat flour and stuffed with roasted gram flour, litti is traditionally cooked over cow dung cakes, imparting a unique smoky flavor. The accompanying chokha, made from roasted vegetables like brinjal, tomato, and potato, creates a perfect nutritional balance. Fish curry, prepared with local river fish, reflects the influence of Bengal's culinary traditions. Kheer, pua, and various sweets made during festivals showcase the region's expertise in dairy-based desserts. The traditional cooking methods, use of earthenware, and emphasis on seasonal ingredients make Bihari cuisine not just delicious but also environmentally sustainable.",
      author: "Kavita Jha",
      avatar: "/src/assets/DM.jpeg",
      date: "1 week ago",
      likes: 0,
      comments: []
    }
  ]);

  const [showAddBlog, setShowAddBlog] = useState(false);
  const [showBlogDetail, setShowBlogDetail] = useState(false);
  const [showMyBlogs, setShowMyBlogs] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [likedBlogs, setLikedBlogs] = useState(new Set());
  const [newBlog, setNewBlog] = useState({
    title: '',
    description: '',
    image: '',
    imageFile: null
  });
  const [imageFile, setImageFile] = useState(null);
  const [newComment, setNewComment] = useState('');

  const handleImageFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // Create object URL for preview
      const imageUrl = URL.createObjectURL(file);
      setNewBlog({...newBlog, image: imageUrl, imageFile: file});
    }
  };

  const handleAddBlog = () => {
    if (newBlog.title.trim() && newBlog.description.trim()) {
      const blog = {
        id: Date.now(), // Use timestamp for unique ID
        title: newBlog.title.trim(),
        description: newBlog.description.trim(),
        fullContent: newBlog.description.trim(), // Use description as full content
        author: "You",
        avatar: "/src/assets/DM.jpeg",
        date: "Just now",
        likes: 0,
        comments: [],
        image: newBlog.image || null, // Include image if provided
        imageFile: newBlog.imageFile || null // Store the file object
      };
      setBlogs([blog, ...blogs]);
      setNewBlog({ title: '', description: '', image: '', imageFile: null });
      setImageFile(null);
      setShowAddBlog(false);
      document.body.classList.remove('modal-open');
    } else {
      alert("Please fill in both title and description fields.");
    }
  };

  const handleLike = (blogId) => {
    const newLikedBlogs = new Set(likedBlogs);
    const updatedBlogs = blogs.map(blog => {
      if (blog.id === blogId) {
        let updatedBlog;
        if (likedBlogs.has(blogId)) {
          newLikedBlogs.delete(blogId);
          updatedBlog = { ...blog, likes: blog.likes - 1 };
        } else {
          newLikedBlogs.add(blogId);
          updatedBlog = { ...blog, likes: blog.likes + 1 };
        }
        // Update selectedBlog if it's the same blog
        if (selectedBlog && selectedBlog.id === blogId) {
          setSelectedBlog(updatedBlog);
        }
        return updatedBlog;
      }
      return blog;
    });
    setBlogs(updatedBlogs);
    setLikedBlogs(newLikedBlogs);
  };

  const handleAddComment = (blogId) => {
    if (newComment.trim()) {
      const updatedBlogs = blogs.map(blog => {
        if (blog.id === blogId) {
          const comment = {
            id: Date.now(),
            user: "You",
            text: newComment,
            time: "Just now"
          };
          const updatedBlog = { ...blog, comments: [...blog.comments, comment] };
          // Update selectedBlog if it's the same blog
          if (selectedBlog && selectedBlog.id === blogId) {
            setSelectedBlog(updatedBlog);
          }
          return updatedBlog;
        }
        return blog;
      });
      setBlogs(updatedBlogs);
      setNewComment('');
    }
  };

  const openBlogDetail = (blog) => {
    setSelectedBlog(blog);
    setShowBlogDetail(true);
    // If opening from My Blogs modal, close it first
    if (showMyBlogs) {
      setShowMyBlogs(false);
    }
  };

  const closeBlogDetail = () => {
    setShowBlogDetail(false);
    setSelectedBlog(null);
    setNewComment('');
  };

  const handleDeleteBlog = (blogId) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs(blogs.filter(blog => blog.id !== blogId));
      // If the deleted blog was being viewed in detail, close the modal
      if (selectedBlog && selectedBlog.id === blogId) {
        closeBlogDetail();
      }
    }
  };

  const getUserBlogs = () => {
    return blogs.filter(blog => blog.author === "You");
  };

  return (
    <div>
    <div className="blogs-container">
      {/* Header Section */}
      <div className="blogs-header">
        <div className="header-content">
          <h1>Discover Kishanganj Stories</h1>
          <p>Share your unique experiences, cultural insights, and unforgettable moments from the heart of Bihar. Connect with fellow explorers and celebrate the rich heritage, vibrant traditions, and hidden gems of our beautiful district.</p>
          <div className="header-buttons">
            <button 
              className="add-blog-btn" 
              onClick={() => {
                console.log('Write blog button clicked');
                setShowAddBlog(true);
                document.body.classList.add('modal-open');
              }}
              title="Share your thoughts and experiences"
              style={{ pointerEvents: 'auto', cursor: 'pointer', zIndex: 10 }}
            >
              <FaPlus /> Write a Blog
            </button>
            <button 
              className="view-blogs-btn" 
              onClick={() => {
                setShowMyBlogs(true);
                document.body.classList.add('modal-open');
              }}
              title="View and manage your blogs"
              style={{ pointerEvents: 'auto', cursor: 'pointer', zIndex: 10 }}
            >
              <FaUser /> View Your Blogs ({getUserBlogs().length})
            </button>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-content">
              <div className="blog-author">
                <img src={blog.avatar} alt={blog.author} className="author-avatar" />
                <div className="author-details">
                  <span className="author-name">{blog.author}</span>
                  <span className="blog-date">
                    <FaCalendarAlt /> {blog.date}
                  </span>
                </div>
              </div>
              <h3 className="blog-title" onClick={() => openBlogDetail(blog)}>
                {blog.title}
              </h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-actions">
                <button 
                  className={`action-btn like-btn ${likedBlogs.has(blog.id) ? 'liked' : ''}`}
                  onClick={() => handleLike(blog.id)}
                  title={likedBlogs.has(blog.id) ? "Unlike this post" : "Like this post"}
                >
                  <FaHeart /> {blog.likes} {blog.likes === 1 ? 'Like' : 'Likes'}
                </button>
                <button 
                  className="action-btn comment-btn"
                  onClick={() => openBlogDetail(blog)}
                  title="View and add comments"
                >
                  <FaComment /> {blog.comments.length} {blog.comments.length === 1 ? 'Comment' : 'Comments'}
                </button>
                <button 
                  className="read-more-btn"
                  onClick={() => openBlogDetail(blog)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Blog Modal */}
      {showAddBlog && (
        <div className="modal-overlay">
          <div className="blog-form-modal">
            <div className="modal-header">
              <h2>Write New Blog</h2>
              <button className="close-btn" onClick={() => {
                setShowAddBlog(false);
                document.body.classList.remove('modal-open');
              }}>
                <FaTimes />
              </button>
            </div>
            <div className="form-content">
              <input
                type="text"
                placeholder="Blog Title"
                className="form-input"
                value={newBlog.title}
                onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                required
              />
              
              <div className="image-upload-section">
                <label className="image-upload-label">Add Image (Optional)</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFile}
                    className="file-input"
                    id="imageFile"
                  />
                  <label htmlFor="imageFile" className="file-input-label">
                    📁 Choose File
                  </label>
                </div>
              </div>
              {newBlog.image && (
                <div className="image-preview">
                  <img src={newBlog.image} alt="Preview" className="preview-image" />
                  <button 
                    type="button" 
                    className="remove-image-btn"
                    onClick={() => {
                      setNewBlog({...newBlog, image: '', imageFile: null});
                      setImageFile(null);
                      // Reset file input
                      const fileInput = document.getElementById('imageFile');
                      if (fileInput) fileInput.value = '';
                    }}
                  >
                    ✕ Remove Image
                  </button>
                </div>
              )}
              <textarea
                placeholder="Write your blog description/content here..."
                className="form-textarea"
                style={{ minHeight: '150px' }}
                value={newBlog.description}
                onChange={(e) => setNewBlog({...newBlog, description: e.target.value})}
                required
              />
              <div className="form-buttons">
                <button 
                  className="submit-btn" 
                  onClick={handleAddBlog}
                  type="button"
                >
                  Publish Blog
                </button>
                <button className="cancel-btn" onClick={() => {
                  setShowAddBlog(false);
                  document.body.classList.remove('modal-open');
                }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Detail Modal */}
      {showBlogDetail && (
        <div className="modal-overlay">
          <div className="blog-detail-modal">
            <div className="modal-header">
              <h2>Blog Details</h2>
              <button className="close-btn" onClick={closeBlogDetail}>
                <FaTimes />
              </button>
            </div>
            <div className="modal-content">
              <h1>{selectedBlog?.title}</h1>
              <div className="blog-author">
                <img src={selectedBlog?.avatar} alt={selectedBlog?.author} className="author-avatar" />
                <div className="author-details">
                  <span className="author-name">{selectedBlog?.author}</span>
                  <span className="blog-date">
                    <FaCalendarAlt /> {selectedBlog?.date}
                  </span>
                </div>
              </div>
              
              {/* Blog Description */}
              <div className="blog-detail-description">
                <h3>Description</h3>
                <p>{selectedBlog?.description}</p>
              </div>

              {/* Blog Image */}
              {selectedBlog?.image && (
                <div className="blog-detail-image-container">
                  <h3>Featured Image</h3>
                  <img src={selectedBlog.image} alt={selectedBlog.title} className="blog-detail-image" />
                </div>
              )}

              {/* Blog Full Content */}
              {selectedBlog?.fullContent && selectedBlog?.fullContent !== selectedBlog?.description && (
                <div className="blog-detail-content">
                  <h3>Full Content</h3>
                  <div className="blog-content-text">
                    {selectedBlog?.fullContent}
                  </div>
                </div>
              )}
              
              {/* Comments Section */}
              <div className="comments-section">
                <h3>Comments ({selectedBlog?.comments.length})</h3>
                <div className="add-comment">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    className="comment-input"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment(selectedBlog?.id)}
                  />
                  <button 
                    className="comment-submit-btn"
                    onClick={() => handleAddComment(selectedBlog?.id)}
                    type="button"
                  >
                    Post
                  </button>
                </div>
                <div className="comments-list">
                  {selectedBlog?.comments.map((comment) => (
                    <div key={comment.id} className="comment">
                      <div className="comment-header">
                        <FaUser className="comment-avatar" />
                        <span className="comment-user">{comment.user}</span>
                        <span className="comment-time">{comment.time}</span>
                      </div>
                      <p className="comment-text">{comment.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* My Blogs Modal */}
      {showMyBlogs && (
        <div className="modal-overlay">
          <div className="my-blogs-modal">
            <div className="modal-header">
              <h2>Your Blogs ({getUserBlogs().length})</h2>
              <button className="close-btn" onClick={() => {
                setShowMyBlogs(false);
                document.body.classList.remove('modal-open');
              }}>
                <FaTimes />
              </button>
            </div>
            <div className="my-blogs-content">
              {getUserBlogs().length === 0 ? (
                <div className="no-blogs">
                  <h3>No blogs yet!</h3>
                  <p>You haven't written any blogs yet. Click "Write a Blog" to get started!</p>
                </div>
              ) : (
                <div className="my-blogs-grid">
                  {getUserBlogs().map((blog) => (
                    <div key={blog.id} className="my-blog-card" onClick={() => openBlogDetail(blog)}>
                      <div className="blog-content">
                        <div className="blog-text-content">
                          <div className="blog-meta">
                            <span className="blog-date">
                              <FaCalendarAlt /> {blog.date}
                            </span>
                            <div className="blog-stats-inline">
                              <span className="stat-item">
                                <FaHeart /> {blog.likes}
                              </span>
                              <span className="stat-item">
                                <FaComment /> {blog.comments.length}
                              </span>
                            </div>
                          </div>
                          <h3 className="blog-title">
                            {blog.title}
                          </h3>
                          <p className="blog-description">{blog.description}</p>
                        </div>
                        {blog.image && (
                          <div className="blog-image-preview">
                            <img src={blog.image} alt={blog.title} className="small-blog-image" />
                          </div>
                        )}
                        <div className="blog-actions">
                          <div className="blog-controls">
                            <button 
                              className="delete-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteBlog(blog.id);
                              }}
                            >
                              <FaTimes /> Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
    </div>
    <Footer />
    </div>
  );
};

export default Blogs;
