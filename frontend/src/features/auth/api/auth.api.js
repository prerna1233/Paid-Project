/**
 * Auth API
 * Handles authentication operations
 */

import axiosInstance from '../../../api/axios.config.js';

// User registration
export const register = async (userData) => {
  try {
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
};

// User login
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

// Admin login
export const adminLogin = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/admin/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Error during admin login:', error);
    throw error;
  }
};

// Logout (client-side)
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  adminLogin,
  logout,
};
