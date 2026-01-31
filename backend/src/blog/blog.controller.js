/**
 * Blog Controller
 * Handles HTTP requests for blog operations
 * Uses BlogService for business logic
 */

import blogService from "./blog.service.js";

/**
 * Get all published blogs (public)
 * GET /blogs
 */
export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await blogService.getAllPublishedBlogs();
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

/**
 * Get blog by ID (public)
 * GET /blogs/:id
 */
export const getBlogById = async (req, res, next) => {
  try {
    const blog = await blogService.getBlogById(req.params.id);
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

/**
 * Create blog (authenticated users)
 * POST /blogs
 */
export const createBlog = async (req, res, next) => {
  try {
    const blog = await blogService.createBlog(req.body, req.user.id);
    res.status(201).json(blog);
  } catch (error) {
    next(error);
  }
};

/**
 * Get user's own blogs
 * GET /blogs/my-blogs
 */
export const getMyBlogs = async (req, res, next) => {
  try {
    const blogs = await blogService.getBlogsByUser(req.user.id);
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

/**
 * Update own blog (authenticated users)
 * PUT /blogs/:id
 */
export const updateMyBlog = async (req, res, next) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body, req.user.id);
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete own blog (authenticated users)
 * DELETE /blogs/:id
 */
export const deleteMyBlog = async (req, res, next) => {
  try {
    const result = await blogService.deleteBlog(req.params.id, req.user.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get all blogs for admin (admin only)
 * GET /admin/blogs
 */
export const getAllBlogsAdmin = async (req, res, next) => {
  try {
    const blogs = await blogService.getAllBlogs();
    res.json(blogs);
  } catch (error) {
    next(error);
  }
};

/**
 * Update any blog (admin only)
 * PUT /admin/blogs/:id
 */
export const updateBlogAdmin = async (req, res, next) => {
  try {
    const blog = await blogService.updateBlog(req.params.id, req.body);
    res.json(blog);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete any blog (admin only)
 * DELETE /admin/blogs/:id
 */
export const deleteBlogAdmin = async (req, res, next) => {
  try {
    const result = await blogService.deleteBlog(req.params.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Toggle like on a blog (authenticated users)
 * POST /blogs/:id/like
 */
export const likeBlog = async (req, res, next) => {
  try {
    const result = await blogService.likeBlog(req.params.id, req.user.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Add comment to a blog (authenticated users)
 * POST /blogs/:id/comments
 */
export const addComment = async (req, res, next) => {
  try {
    const { text } = req.body;
    
    if (!text || text.trim().length === 0) {
      return res.status(400).json({ message: "Comment text is required" });
    }

    const result = await blogService.addComment(req.params.id, req.user.id, text);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a comment from a blog (authenticated users - own comments only)
 * DELETE /blogs/:id/comments/:commentId
 */
export const deleteComment = async (req, res, next) => {
  try {
    const result = await blogService.deleteComment(
      req.params.id,
      req.params.commentId,
      req.user.id
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Get blog with all interactions (likes and comments populated)
 * GET /blogs/:id/interactions
 */
export const getBlogWithInteractions = async (req, res, next) => {
  try {
    const blog = await blogService.getBlogWithInteractions(req.params.id);
    res.json(blog);
  } catch (error) {
    next(error);
  }
};
