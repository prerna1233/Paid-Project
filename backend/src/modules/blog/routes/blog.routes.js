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
  deleteMyBlog
} from "../controllers/blog.controller.js";
import authMiddleware from "../../../core/middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

// Protected user routes
router.post("/", authMiddleware, createBlog);
router.get("/user/my-blogs", authMiddleware, getMyBlogs);
router.put("/:id", authMiddleware, updateMyBlog);
router.delete("/:id", authMiddleware, deleteMyBlog);

export default router;
