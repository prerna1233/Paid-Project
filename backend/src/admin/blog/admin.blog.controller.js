/**
 * Admin Blog Controller
 * Admin operations for managing all blogs
 */

import blogService from "../../blog/blog.service.js";

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
 * Delete any comment from any blog (admin only)
 * DELETE /admin/blogs/:id/comments/:commentId
 */
export const deleteCommentAdmin = async (req, res, next) => {
  try {
    const result = await blogService.deleteCommentAdmin(
      req.params.id,
      req.params.commentId
    );
    res.json(result);
  } catch (error) {
    next(error);
  }
};
