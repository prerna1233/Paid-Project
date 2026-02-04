/**
 * Axios Configuration
 * Centralized HTTP client configuration
 * Base URL and interceptors are configured here
 */

import axios from 'axios';

// Base API URL - can be changed based on environment
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - add auth token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);



axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 Unauthorized - only redirect if not already on login/admin page
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Don't redirect if already on login or if on admin panel (let component handle)
      const currentPath = window.location.pathname;
      if (currentPath !== '/login' && !currentPath.includes('/admin')) {
        console.warn('Authentication failed, redirecting to login...');
        window.location.href = '/login';
      }
    }
    
    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      console.error('Access forbidden - insufficient permissions');
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
