
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.style.css";
import biharLogo from "../../assets/bihar-housing-board.webp";

export default function WriteBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle blog submission (API call or state update)
    // For demo, just navigate back
    navigate("/Blogs");
  };

  return (
    <div className="write-blog-page-govt">
      <div className="write-blog-container-govt" style={{boxShadow: '0 4px 24px rgba(74,124,89,0.10)', border: '1.5px solid #e0e0e0'}}>
        <header style={{marginBottom: 32, borderBottom: '2px solid #e8825f', paddingBottom: 18, display: 'flex', alignItems: 'center', gap: 16}}>
          <img src={biharLogo} alt="District Logo" style={{height: 48, width: 48, borderRadius: 8, background: '#f4f6fa', border: '1px solid #e0e0e0'}} />
          <div>
            <h1 className="write-blog-heading-govt" style={{marginBottom: 2}}>Write a New Blog</h1>
            <p style={{fontSize: '1.02rem', color: '#4a7c59', margin: 0, fontWeight: 500}}>Share your story, experience, or insight for the Kishanganj District Portal.</p>
          </div>
        </header>
        <form className="write-blog-form-govt" onSubmit={handleSubmit}>
          <div style={{marginBottom: 10}}>
            <label htmlFor="blog-title" style={{fontWeight: 600}}>Title <span style={{color: '#e8825f'}}>*</span></label>
            <input
              id="blog-title"
              className="write-blog-input-govt"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Enter a clear, descriptive title (max 120 characters)"
              maxLength={120}
              aria-describedby="title-help"
              style={{fontSize: '1.13rem', fontWeight: 500}}
            />
            <div id="title-help" style={{fontSize: '0.93rem', color: '#6b7069', marginTop: 2}}>E.g., "My Experience at the Kishanganj Tea Gardens"</div>
          </div>

          <div style={{marginBottom: 10}}>
            <label htmlFor="blog-image" style={{fontWeight: 600}}>Image <span style={{color: '#6b7069', fontWeight: 400}}>(optional)</span></label>
            <input
              id="blog-image"
              className="write-blog-input-govt"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              aria-describedby="image-help"
            />
            <div id="image-help" style={{fontSize: '0.93rem', color: '#6b7069', marginTop: 2}}>Upload a photo to make your blog more engaging. JPG, PNG, or WebP recommended.</div>
            {imagePreview && (
              <div className="write-blog-image-preview-govt" style={{marginTop: 8}}>
                <img src={imagePreview} alt="Preview" style={{border: '1px solid #e0e0e0', borderRadius: 6, maxHeight: 220, background: '#f4f6fa'}} />
              </div>
            )}
          </div>

          <div style={{marginBottom: 10}}>
            <label htmlFor="blog-description" style={{fontWeight: 600}}>Content <span style={{color: '#e8825f'}}>*</span></label>
            <textarea
              id="blog-description"
              className="write-blog-textarea-govt"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Write your blog content here... (minimum 50 characters)"
              rows={12}
              minLength={50}
              aria-describedby="desc-help"
              style={{fontSize: '1.08rem', fontWeight: 400, background: '#f8f9fa'}}
            />
            <div id="desc-help" style={{fontSize: '0.93rem', color: '#6b7069', marginTop: 2}}>Describe your experience, story, or information in detail. Markdown supported.</div>
          </div>

          <div className="write-blog-actions-govt" style={{marginTop: 18, justifyContent: 'flex-end'}}>
            <button type="submit" className="write-blog-submit-govt" style={{fontSize: '1.13rem', minWidth: 160}}>
              Publish Blog
            </button>
            <button
              type="button"
              className="write-blog-cancel-govt"
              style={{fontSize: '1.13rem', minWidth: 120}}
              onClick={() => navigate("/Blogs")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
