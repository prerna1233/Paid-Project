/**
 * Blogs API
 * Handles public blog operations
 */

import axiosInstance from '../../../api/axios.config.js';

// Fetch all blogs (public endpoint)
export const fetchBlogs = async () => {
  try {
    const response = await axiosInstance.get('/blogs');
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Fetch single blog by ID (public endpoint)
export const fetchBlogById = async (id) => {
  try {
    const response = await axiosInstance.get(`/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    throw error;
  }
};

// Create blog (authenticated users)
export const createBlog = async (blogData) => {
  try {
    const response = await axiosInstance.post('/blogs', blogData);
    return response.data;
  } catch (error) {
    console.error('Error creating blog:', error);
    throw error;
  }
};

export default {
  fetchBlogs,
  fetchBlogById,
  createBlog,
};
