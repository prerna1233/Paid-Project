/**
 * Express Application Configuration
 * Main app setup with middleware and routes
 */

import express from "express";
import cors from "cors";
import { errorHandler, notFound } from "./middleware/error.middleware.js";

// Import routes
import authRoutes from "./auth/auth.routes.js";
import blogRoutes from "./blog/blog.routes.js";
import hotelRoutes from "./hotel/hotel.routes.js";
import adminBlogRoutes from "./admin/blog/admin.blog.routes.js";
import adminHotelRoutes from "./admin/hotel/admin.hotel.routes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware (development)
if (process.env.NODE_ENV === "development" || true) {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// Health check
app.get("/", (req, res) => {
  res.json({ 
    message: "Kishanganj Tourism API is running...",
    status: "OK"
  });
});

// API Routes
app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);
app.use("/hotels", hotelRoutes);
app.use("/admin/blogs", adminBlogRoutes);
app.use("/admin/hotels", adminHotelRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

export default app;
