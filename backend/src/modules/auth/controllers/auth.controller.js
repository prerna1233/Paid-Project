/**
 * Auth Controller
 * Handles HTTP requests for authentication
 * Uses AuthService for business logic
 */

import authService from "../services/auth.service.js";

/**
 * User Registration
 * POST /auth/register
 */
export const register = async (req, res, next) => {
  try {
    const result = await authService.registerUser(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * User Login
 * POST /auth/login
 */
export const login = async (req, res, next) => {
  try {
    const result = await authService.loginUser(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Admin Login
 * POST /auth/admin/login
 */
export const adminLogin = async (req, res, next) => {
  try {
    const result = await authService.loginAdmin(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
