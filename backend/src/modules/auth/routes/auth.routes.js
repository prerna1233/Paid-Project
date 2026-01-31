/**
 * Auth Routes
 * Defines authentication endpoints
 */

import express from "express";
import { register, login, adminLogin } from "../controllers/auth.controller.js";

const router = express.Router();

// User routes
router.post("/register", register);
router.post("/login", login);

// Admin routes - support both URL formats
router.post("/admin-login", adminLogin);  // /auth/admin-login
router.post("/admin/login", adminLogin);   // /auth/admin/login (legacy)

// Debug: Log registered routes
console.log('🔍 Auth routes registered:');
console.log('  POST /auth/register');
console.log('  POST /auth/login');
console.log('  POST /auth/admin-login');
console.log('  POST /auth/admin/login');

export default router;
