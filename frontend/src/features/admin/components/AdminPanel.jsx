import React, { useState, useEffect, useCallback } from 'react';
import { 
  fetchHotels, 
  addHotel, 
  updateHotel, 
  deleteHotel,
  fetchBlogs,
  updateBlog,
  deleteBlog 
} from '../api/admin.api.js';
import HotelForm from './HotelForm';
import HotelCard from './HotelCard';
import BlogForm from './BlogForm';
import BlogCard from './BlogCard';
import './AdminPanel.css';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('hotels');
  const [hotels, setHotels] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [editingHotel, setEditingHotel] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showAddHotelForm, setShowAddHotelForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Load hotels - wrapped in useCallback to prevent re-creation on every render
  const loadHotels = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("🔄 Fetching hotels from API...");
      
      const data = await fetchHotels();
      console.log("✅ Hotels fetched successfully:", data);
      console.log("📊 Number of hotels:", data?.length || 0);
      
      if (data && Array.isArray(data)) {
        data.forEach((hotel, index) => {
          console.log(`🏨 Hotel ${index + 1}:`, {
            id: hotel._id,
            name: hotel.name,
            imageType: typeof hotel.image,
            imageLength: hotel.image?.length || 0,
            imagePreview: hotel.image?.substring(0, 50) + '...'
          });
        });
        setHotels(data);
      } else {
        console.warn("⚠️ Invalid hotels data format:", data);
        setHotels([]);
      }
    } catch (err) {
      console.error("❌ Error loading hotels:", err);
      
      // Check if it's an authentication error
      if (err.response?.status === 401 || err.message?.includes('No token')) {
        setError('⚠️ Authentication required. Please login as admin first.');
      } else if (err.code === 'ECONNABORTED') {
        setError('⚠️ Request timed out. Please check if the backend server is running.');
      } else {
        setError('Failed to load hotels: ' + (err.response?.data?.message || err.message));
      }
      setHotels([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load blogs - wrapped in useCallback to prevent re-creation on every render
  const loadBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchBlogs();
      setBlogs(data || []);
    } catch (err) {
      console.error("Error loading blogs:", err);
      
      // Check if it's an authentication error
      if (err.response?.status === 401 || err.message?.includes('No token')) {
        setError('⚠️ Authentication required. Please login as admin first.');
      } else if (err.code === 'ECONNABORTED') {
        setError('⚠️ Request timed out. Please check if the backend server is running.');
      } else {
        setError('Failed to load blogs: ' + (err.response?.data?.message || err.message));
      }
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (activeTab === 'hotels') {
      loadHotels();
    } else if (activeTab === 'blogs') {
      loadBlogs();
    }
  }, [activeTab, loadHotels, loadBlogs]);

  // Hotel handlers
  const handleAddHotel = async (hotelData) => {
    try {
      setLoading(true);
      await addHotel(hotelData);
      await loadHotels();
      setShowAddHotelForm(false);
      setError(null);
    } catch (err) {
      console.error("Error adding hotel:", err);
      setError('Failed to add hotel: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateHotel = async (id, hotelData) => {
    try {
      setLoading(true);
      await updateHotel(id, hotelData);
      await loadHotels();
      setEditingHotel(null);
      setError(null);
    } catch (err) {
      console.error("Error updating hotel:", err);
      setError('Failed to update hotel: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteHotel = async (id) => {
    if (window.confirm('Are you sure you want to delete this hotel?')) {
      try {
        setLoading(true);
        await deleteHotel(id);
        await loadHotels();
        setError(null);
      } catch (err) {
        console.error("Error deleting hotel:", err);
        setError('Failed to delete hotel: ' + err.message);
      } finally {
        setLoading(false);
      }
    }
  };


  const handleUpdateBlog = async (id, blogData) => {
    try {
      setLoading(true);
      await updateBlog(id, blogData);
      await loadBlogs();
      setEditingBlog(null);
      setError(null);
    } catch (err) {
      console.error("Error updating blog:", err);
      setError('Failed to update blog: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        setLoading(true);
        await deleteBlog(id);
        await loadBlogs();
        setError(null);
      } catch (err) {
        console.error("Error deleting blog:", err);
        setError('Failed to delete blog: ' + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>
      
      {error && (
        <div className="error-message" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center'
        }}>
          <div>{error}</div>
          {(error.includes('Authentication required') || error.includes('No token')) && (
            <button 
              onClick={() => window.location.href = '/login'}
              style={{
                padding: '10px 20px',
                backgroundColor: '#26a69a',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Go to Login
            </button>
          )}
        </div>
      )}

      <div className="tab-buttons">
        <button
          className={activeTab === 'hotels' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('hotels')}
        >
          Hotels
        </button>
        <button
          className={activeTab === 'blogs' ? 'tab-button active' : 'tab-button'}
          onClick={() => setActiveTab('blogs')}
        >
          Blogs
        </button>
      </div>

      {loading && <div className="loading-spinner">Loading...</div>}

      {activeTab === 'hotels' && (
        <div className="hotels-section">
          <div className="section-header">
            <h2>Hotel Management</h2>
            {!showAddHotelForm && !editingHotel && (
              <button 
                className="btn-add-new" 
                onClick={() => setShowAddHotelForm(true)}
              >
                + Add New Hotel
              </button>
            )}
          </div>
          
          {(showAddHotelForm || editingHotel) && (
            <div className="form-container-modern">
              <div className="form-header-modern">
                <h3>{editingHotel ? 'Edit Hotel' : 'Add New Hotel'}</h3>
                <button 
                  className="btn-close-form" 
                  onClick={() => {
                    setEditingHotel(null);
                    setShowAddHotelForm(false);
                  }}
                >
                  ✕ Close
                </button>
              </div>
              <HotelForm
                onSubmit={editingHotel ? (data) => handleUpdateHotel(editingHotel._id, data) : handleAddHotel}
                initialData={editingHotel}
                onCancel={() => {
                  setEditingHotel(null);
                  setShowAddHotelForm(false);
                }}
              />
            </div>
          )}

          {hotels.length === 0 && !showAddHotelForm && !editingHotel ? (
            <div className="empty-state">
              <div className="empty-icon">🏨</div>
              <h3>No Hotels Yet</h3>
              <p>Get started by adding your first hotel</p>
              <button 
                className="btn-add-first" 
                onClick={() => setShowAddHotelForm(true)}
              >
                + Add Your First Hotel
              </button>
            </div>
          ) : (
            !showAddHotelForm && !editingHotel && (
              <div className="hotels-grid-modern">
                {hotels.map((hotel) => (
                  <HotelCard
                    key={hotel._id}
                    hotel={hotel}
                    onEdit={() => {
                      setEditingHotel(hotel);
                      setShowAddHotelForm(false);
                    }}
                    onDelete={() => handleDeleteHotel(hotel._id)}
                  />
                ))}
              </div>
            )
          )}
        </div>
      )}

      {activeTab === 'blogs' && (
        <div className="blogs-section">
          <h2>Manage Blogs (Edit/Delete Only)</h2>
          
          {editingBlog && (
            <BlogForm
              onSubmit={(data) => handleUpdateBlog(editingBlog._id, data)}
              initialData={editingBlog}
              onCancel={() => setEditingBlog(null)}
            />
          )}

          {!editingBlog && blogs.length === 0 && (
            <p className="no-data-message">No blogs available. Blogs are created by users on the platform.</p>
          )}

          <div className="blogs-grid">
            {blogs.map((blog) => (
              <BlogCard
                key={blog._id}
                blog={blog}
                onEdit={() => setEditingBlog(blog)}
                onDelete={() => handleDeleteBlog(blog._id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
