import React, { useState } from 'react';
import { FaEdit, FaTrash, FaUser, FaCalendar, FaHeart, FaComment, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function BlogCard({ blog, onEdit, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`blog-card-compact ${isExpanded ? 'expanded' : ''}`}>
      <div className="blog-card-header">
        <div className="blog-title-section" onClick={toggleExpand}>
          <h3 className="blog-title-clickable">
            {blog.title}
            {isExpanded ? <FaChevronUp className="expand-icon" /> : <FaChevronDown className="expand-icon" />}
          </h3>
        </div>
        <div className="blog-quick-actions">
          <button onClick={onEdit} className="btn-edit-small" title="Edit">
            <FaEdit />
          </button>
          <button onClick={onDelete} className="btn-delete-small" title="Delete">
            <FaTrash />
          </button>
        </div>
      </div>

      <div className="blog-mini-meta">
        <span className="mini-meta-item">
          <FaUser /> {blog.author?.name || 'Unknown'}
        </span>
        <span className="mini-meta-item">
          <FaCalendar /> {formatDate(blog.createdAt)}
        </span>
        <span className="mini-meta-item">
          <FaHeart /> {blog.likes?.length || 0}
        </span>
        <span className="mini-meta-item">
          <FaComment /> {blog.comments?.length || 0}
        </span>
      </div>

      {isExpanded && (
        <div className="blog-expanded-content">
          <div className="blog-full-content">
            <h4>Content:</h4>
            <p>{blog.content}</p>
          </div>

          {blog.comments && blog.comments.length > 0 && (
            <div className="blog-comments-section">
              <h4>Comments ({blog.comments.length}):</h4>
              <div className="comments-list">
                {blog.comments.map((comment, index) => (
                  <div key={index} className="comment-item">
                    <div className="comment-header">
                      <span className="comment-author">
                        <FaUser /> {comment.user?.name || 'Anonymous'}
                      </span>
                      <span className="comment-date">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="comment-text">{comment.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {(!blog.comments || blog.comments.length === 0) && (
            <div className="no-comments">
              <p>No comments yet</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

