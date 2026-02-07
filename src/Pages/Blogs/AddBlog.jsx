import React from "react";
import "./Blogs.style.css";

const AddBlog = ({ formData, onChange, onFileChange, onRemoveFile, onSubmit, onClose, isEditing = false }) => {
  return (
    <div className="modal-overlay">
      <form className="post-form" onSubmit={onSubmit}>
        <h2>{isEditing ? "Edit Post" : "Create New Post"}</h2>

        <input
          name="authorName"
          placeholder="Your Name"
          value={formData.authorName}
          onChange={onChange}
          required
        />

        <input
          name="title"
          placeholder="Post Title"
          value={formData.title}
          onChange={onChange}
          required
        />

        <textarea
          name="description"
          placeholder="What's on your mind?"
          value={formData.description}
          onChange={onChange}
          required
        />

        {/* Image Upload */}
        <div className="file-upload-section">
          <label className="file-label">
            📷 Upload Image
            <input
              type="file"
              accept="image/*"
              onChange={(e) => onFileChange(e, "image")}
              className="file-input"
            />
          </label>
          {formData.imagePreview && (
            <div className="preview-container">
              <img src={formData.imagePreview} alt="Preview" className="preview-image" />
              <button type="button" className="remove-btn" onClick={() => onRemoveFile("image")}>
                ✕
              </button>
            </div>
          )}
        </div>

        {/* Video Upload */}
        <div className="file-upload-section">
          <label className="file-label">
            🎥 Upload Video
            <input
              type="file"
              accept="video/*"
              onChange={(e) => onFileChange(e, "video")}
              className="file-input"
            />
          </label>
          {formData.videoPreview && (
            <div className="preview-container">
              <video src={formData.videoPreview} controls className="preview-video" />
              <button type="button" className="remove-btn" onClick={() => onRemoveFile("video")}>
                ✕
              </button>
            </div>
          )}
        </div>

        <div className="form-buttons">
          <button type="submit" className="save-btn">
            {isEditing ? "Update" : "Publish"}
          </button>
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
