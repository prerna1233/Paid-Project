import React, { useState, useEffect } from 'react';

export default function BlogForm({ onSubmit, initialData, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        content: initialData.content || '',
        author: initialData.author?._id || initialData.author || ''
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    
    // Reset form if not editing
    if (!initialData) {
      setFormData({
        title: '',
        content: '',
        author: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <h3>{initialData ? 'Edit Blog' : 'Add New Blog'}</h3>
      
      <div className="form-group">
        <label htmlFor="title">Blog Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Enter blog title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Content *</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
          placeholder="Enter blog content"
          rows="10"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Author ID *</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          placeholder="Enter author user ID"
        />
        <small>Enter the MongoDB ObjectId of the user</small>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          {initialData ? 'Update Blog' : 'Add Blog'}
        </button>
        {initialData && (
          <button type="button" onClick={onCancel} className="btn-cancel">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
