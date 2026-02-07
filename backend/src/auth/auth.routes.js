/**
 * Auth Routes
 * Defines authentication endpoints
 */

import express from "express";
import { 
  register, 
  login, 
  adminLogin,
  getUserProfile,
  updateUserProfile,
  changePassword,
  deleteUserAccount
} from "./auth.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);
router.post("/login", login);

// Admin routes - support both URL formats
router.post("/admin-login", adminLogin);  // /auth/admin-login
router.post("/admin/login", adminLogin);   // /auth/admin/login (legacy)

// Protected user profile routes (authentication required)
router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.put("/change-password", authMiddleware, changePassword);
router.delete("/account", authMiddleware, deleteUserAccount);

// Debug: Log registered routes
console.log('🔍 Auth routes registered:');
console.log('  POST /auth/register');
console.log('  POST /auth/login');
console.log('  POST /auth/admin-login');
console.log('  POST /auth/admin/login');
console.log('  GET  /auth/profile (protected)');
console.log('  PUT  /auth/profile (protected)');
console.log('  PUT  /auth/change-password (protected)');
console.log('  DELETE /auth/account (protected)');

export default router;
