/**
 * Blog Controller
 * Handles HTTP requests for blog operations
 * Uses BlogService for business logic
 */

import blogService from "../services/blog.service.js";

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
