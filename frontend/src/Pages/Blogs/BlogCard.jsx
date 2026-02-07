import "./Blogs.style.css";
import React, { useState } from "react";

const BlogCard = ({ post, onLike, onDelete, onEdit}) => {
  const [showComment, setShowComment] = useState(false);

  return (
    <article className="post-container">
      <div className="post-content">
        <div className="author-info">
          <img src={post.authorAvatar} alt={post.authorName} className="avatar" />
          <span>{post.authorName} · {post.date}</span>
        </div>

        <h2 className="post-title">{post.title}</h2>
        <p className="post-description">{post.description}</p>

        {/* Display Video if available */}
        {post.videoUrl && (
          <div className="post-video-container">
            <video src={post.videoUrl} controls className="post-video" />
          </div>
        )}

        <div className="post-footer">
          <button className="action-btn" onClick={() => onLike(post.id)}>
            {post.isLiked ? "❤️" : "🤍"} {post.likes}
          </button>
          <button className="action-btn" onClick={() => setShowComment(!showComment)}>
            💬 {post.comments}
          </button>
          <button className="edit-btn" onClick={() => onEdit(post.id)}>Edit</button>
          <button className="delete-btn" onClick={() => onDelete(post.id)}>Delete</button>

          {showComment && (
            <input className="blog_comment_box" type="text" placeholder="Write a comment..." />
          )}
        </div>
      </div>

      {post.thumbnailUrl && (
        <div className="post-image">
          <img src={post.thumbnailUrl} alt="post" />
        </div>
      )}
    </article>
  );
};

export default BlogCard;
