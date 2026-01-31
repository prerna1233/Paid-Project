/**
 * Blog Service
 * Business logic for blog operations
 * Handles both public and admin blog operations
 */

import Blog from "../models/blog.model.js";

export class BlogService {
  /**
   * Get all published blogs (public)
   */
  async getAllPublishedBlogs() {
    return await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .populate("author", "name email");
  }

  /**
   * Get all blogs including unpublished (admin)
   */
  async getAllBlogs() {
    return await Blog.find()
      .sort({ createdAt: -1 })
      .populate("author", "name email");
  }

  /**
   * Get blog by ID (public)
   */
  async getBlogById(id) {
    const blog = await Blog.findById(id).populate("author", "name email");
    if (!blog) {
      throw new Error("Blog not found");
    }
    return blog;
  }

  /**
   * Create new blog
   */
  async createBlog(blogData, userId) {
    const { title, content, tags } = blogData;

    if (!title || !content) {
      throw new Error("Title and content are required");
    }

    const blog = await Blog.create({
      title,
      content,
      tags: tags || [],
      author: userId
    });

    return await blog.populate("author", "name email");
  }

  /**
   * Get blogs by user
   */
  async getBlogsByUser(userId) {
    return await Blog.find({ author: userId })
      .sort({ createdAt: -1 })
      .populate("author", "name email");
  }

  /**
   * Update blog
   */
  async updateBlog(id, blogData, userId = null) {
    // If userId is provided, ensure user owns the blog
    const query = userId ? { _id: id, author: userId } : { _id: id };
    
    const blog = await Blog.findOne(query);
    if (!blog) {
      throw new Error("Blog not found or unauthorized");
    }

    // Don't allow updating author field
    const { author, ...updateData } = blogData;

    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    ).populate("author", "name email");

    return updatedBlog;
  }

  /**
   * Delete blog
   */
  async deleteBlog(id, userId = null) {
    // If userId is provided, ensure user owns the blog
    const query = userId ? { _id: id, author: userId } : { _id: id };
    
    const blog = await Blog.findOneAndDelete(query);
    if (!blog) {
      throw new Error("Blog not found or unauthorized");
    }

    return { message: "Blog deleted successfully" };
  }
}

export default new BlogService();
