/**
 * Auth Controller
 * Handles HTTP requests for authentication
 * Uses AuthService for business logic
 */

import authService from "./auth.service.js";

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

/**
 * Get User Profile
 * GET /auth/profile
 */
export const getUserProfile = async (req, res, next) => {
  try {
    const result = await authService.getUserProfile(req.user.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Update User Profile
 * PUT /auth/profile
 */
export const updateUserProfile = async (req, res, next) => {
  try {
    const result = await authService.updateUserProfile(req.user.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Change Password
 * PUT /auth/change-password
 */
export const changePassword = async (req, res, next) => {
  try {
    const result = await authService.changePassword(req.user.id, req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

/**
 * Delete User Account
 * DELETE /auth/account
 */
export const deleteUserAccount = async (req, res, next) => {
  try {
    const result = await authService.deleteUserAccount(req.user.id);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
