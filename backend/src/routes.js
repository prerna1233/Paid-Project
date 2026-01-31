/**
 * Centralized Routes Registration
 * All application routes are registered here
 * Maintains consistent API structure and easy route management
 */

import express from "express";

// Feature module routes
import authRoutes from "./modules/auth/routes/auth.routes.js";
import blogRoutes from "./modules/blog/routes/blog.routes.js";
import hotelRoutes from "./modules/hotel/routes/hotel.routes.js";

// Admin routes
import adminBlogRoutes from "./modules/blog/routes/admin.blog.routes.js";
import adminHotelRoutes from "./modules/hotel/routes/admin.hotel.routes.js";

const router = express.Router();

/**
 * API Routes Structure:
 * 
 * Public/User Routes:
 * - /api/auth        - Authentication (login, register)
 * - /api/blogs       - Blog operations
 * - /api/hotels      - Hotel browsing
 * 
 * Admin Routes (protected):
 * - /api/admin/blogs  - Blog management
 * - /api/admin/hotels - Hotel management
 */

// Register public/user routes
router.use("/auth", authRoutes);
router.use("/blogs", blogRoutes);
router.use("/hotels", hotelRoutes);

// Register admin routes
router.use("/admin/blogs", adminBlogRoutes);
router.use("/admin/hotels", adminHotelRoutes);

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({ 
    status: "OK", 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development"
  });
});

export default router;
