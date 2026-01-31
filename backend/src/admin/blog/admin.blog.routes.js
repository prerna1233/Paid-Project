/**
 * Admin Blog Routes
 * Admin endpoints for managing all blogs
 */

import express from "express";
import {
  getAllBlogsAdmin,
  updateBlogAdmin,
  deleteBlogAdmin,
  deleteCommentAdmin
} from "./admin.blog.controller.js";
import authMiddleware from "../../middleware/auth.middleware.js";
import adminMiddleware from "../../middleware/admin.middleware.js";

const router = express.Router();

// All admin blog routes are protected
router.use(authMiddleware, adminMiddleware);

router.get("/", getAllBlogsAdmin);
router.put("/:id", updateBlogAdmin);
router.delete("/:id", deleteBlogAdmin);
router.delete("/:id/comments/:commentId", deleteCommentAdmin);

export default router;
