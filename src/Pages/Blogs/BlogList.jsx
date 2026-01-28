import React, { useState } from "react";
import "./Blogs.style.css";

import BlogCard from "./BlogCard";
import AddBlog from "./AddBlog";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    authorName: "",
    image: null,
    imagePreview: "",
    video: null,
    videoPreview: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      if (type === "image") {
        setFormData({ 
          ...formData, 
          image: file, 
          imagePreview: previewUrl 
        });
      } else if (type === "video") {
        setFormData({ 
          ...formData, 
          video: file, 
          videoPreview: previewUrl 
        });
      }
    }
  };

  const removeFile = (type) => {
    if (type === "image") {
      if (formData.imagePreview) {
        URL.revokeObjectURL(formData.imagePreview);
      }
      setFormData({ ...formData, image: null, imagePreview: "" });
    } else if (type === "video") {
      if (formData.videoPreview) {
        URL.revokeObjectURL(formData.videoPreview);
      }
      setFormData({ ...formData, video: null, videoPreview: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update existing post
      setPosts(
        posts.map(post =>
          post.id === editingId
            ? {
                ...post,
                title: formData.title,
                description: formData.description,
                authorName: formData.authorName || post.authorName
              }
            : post
        )
      );
      setEditingId(null);
    } else {
      // Create new post
      const newPost = {
        id: Date.now(),
        authorName: formData.authorName || "Anonymous",
        authorAvatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
        date: "Just now",
        title: formData.title,
        description: formData.description,
        thumbnailUrl: formData.imagePreview || `https://picsum.photos/seed/${Date.now()}/200/130`,
        videoUrl: formData.videoPreview || null,
        likes: 0,
        comments: 0,
        isLiked: false
      };
      setPosts([newPost, ...posts]);
    }

    setIsFormOpen(false);
    // Don't revoke URLs when submitting - they're needed for displaying the post
    setFormData({ 
      title: "", 
      description: "", 
      authorName: "",
      image: null,
      imagePreview: "",
      video: null,
      videoPreview: ""
    });
  };

  const handleLike = (id) => {
    setPosts(
      posts.map(post =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };
 const handleDelete = (id) =>{
  const postToDelete = posts.find(post => post.id === id);
  if (postToDelete) {
    // Clean up blob URLs to prevent memory leaks
    if (postToDelete.thumbnailUrl && postToDelete.thumbnailUrl.startsWith('blob:')) {
      URL.revokeObjectURL(postToDelete.thumbnailUrl);
    }
    if (postToDelete.videoUrl && postToDelete.videoUrl.startsWith('blob:')) {
      URL.revokeObjectURL(postToDelete.videoUrl);
    }
  }
  setPosts(posts.filter(post => post.id !== id));
 };

 const handleEdit = (id) => {
  const postToEdit = posts.find(post => post.id === id);
  if (postToEdit) {
    setFormData({
      title: postToEdit.title,
      description: postToEdit.description,
      authorName: postToEdit.authorName
    });
    setEditingId(id);
    setIsFormOpen(true);
  }
 };
  return (
    <div className="feed">
    <div className="feed-wrapper">
      <header className="header">
        <h1>My Blog</h1>
        <button className="create-btn" onClick={() => setIsFormOpen(true)}>
          + New Post
        </button>
      </header>

      {isFormOpen && (
        <AddBlog
          formData={formData}
          onChange={handleInputChange}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
          onSubmit={handleSubmit}
          onClose={() => {
            setIsFormOpen(false);
            setEditingId(null);
            // Revoke URLs when canceling
            if (formData.imagePreview) URL.revokeObjectURL(formData.imagePreview);
            if (formData.videoPreview) URL.revokeObjectURL(formData.videoPreview);
            setFormData({ 
              title: "", 
              description: "", 
              authorName: "",
              image: null,
              imagePreview: "",
              video: null,
              videoPreview: ""
            });
          }}
          isEditing={editingId !== null}
        />
      )}

      <div className="posts-list">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} onLike={handleLike} onDelete={handleDelete} onEdit={handleEdit}/>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BlogList;
