/**
 * Admin Blog Routes
 * Admin endpoints for managing all blogs
 * Reuses blog service but with admin middleware protection
 */

import express from "express";
import {
  getAllBlogsAdmin,
  updateBlogAdmin,
  deleteBlogAdmin
} from "../controllers/blog.controller.js";
import authMiddleware from "../../../core/middleware/auth.middleware.js";
import adminMiddleware from "../../../core/middleware/admin.middleware.js";

const router = express.Router();

// All admin blog routes are protected
router.use(authMiddleware, adminMiddleware);

router.get("/", getAllBlogsAdmin);
router.put("/:id", updateBlogAdmin);
router.delete("/:id", deleteBlogAdmin);

export default router;
