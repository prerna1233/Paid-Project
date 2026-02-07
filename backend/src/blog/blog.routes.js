/**
 * Blog Routes (Public and User)
 * Public endpoints for viewing blogs
 * Authenticated endpoints for managing own blogs
 */

import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  getMyBlogs,
  updateMyBlog,
  deleteMyBlog,
  likeBlog,
  addComment,
  deleteComment,
  getBlogWithInteractions
} from "./blog.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.get("/:id/interactions", getBlogWithInteractions);

// Protected user routes
router.post("/", authMiddleware, createBlog);
router.get("/user/my-blogs", authMiddleware, getMyBlogs);
router.put("/:id", authMiddleware, updateMyBlog);
router.delete("/:id", authMiddleware, deleteMyBlog);

// Like and comment routes (authenticated)
router.post("/:id/like", authMiddleware, likeBlog);
router.post("/:id/comments", authMiddleware, addComment);
router.delete("/:id/comments/:commentId", authMiddleware, deleteComment);

export default router;
