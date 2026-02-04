/**
 * Admin API
 * Consolidated API functions for admin operations
 * Handles both hotels and blogs management
 */

import axiosInstance from '../../../api/axios.config.js';

/**
 * ===================
 * HOTEL MANAGEMENT
 * ===================
 */

// Fetch all hotels (admin view)
export const fetchHotels = async () => {
  try {
    const response = await axiosInstance.get('/admin/hotels');
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};

// Add a new hotel
export const addHotel = async (hotelData) => {
  try {
    const response = await axiosInstance.post('/admin/hotels', hotelData);
    return response.data;
  } catch (error) {
    console.error('Error adding hotel:', error);
    throw error;
  }
};

// Update a hotel
export const updateHotel = async (id, hotelData) => {
  try {
    const response = await axiosInstance.put(`/admin/hotels/${id}`, hotelData);
    return response.data;
  } catch (error) {
    console.error('Error updating hotel:', error);
    throw error;
  }
};

// Delete a hotel
export const deleteHotel = async (id) => {
  try {
    const response = await axiosInstance.delete(`/admin/hotels/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting hotel:', error);
    throw error;
  }
};

/**
 * ===================
 * BLOG MANAGEMENT
 * ===================
 */

// Fetch all blogs (admin view - includes unpublished)
export const fetchBlogs = async () => {
  try {
    const response = await axiosInstance.get('/admin/blogs');
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Update a blog
export const updateBlog = async (id, blogData) => {
  try {
    const response = await axiosInstance.put(`/admin/blogs/${id}`, blogData);
    return response.data;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete a blog
export const deleteBlog = async (id) => {
  try {
    const response = await axiosInstance.delete(`/admin/blogs/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};

export default {
  // Hotels
  fetchHotels,
  addHotel,
  updateHotel,
  deleteHotel,
  // Blogs
  fetchBlogs,
  updateBlog,
  deleteBlog,
};
