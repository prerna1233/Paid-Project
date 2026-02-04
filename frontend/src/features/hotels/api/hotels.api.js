/**
 * Hotels API
 * Handles public hotel operations
 */

import axiosInstance from '../../../api/axios.config.js';

// Fetch all hotels (public endpoint)
export const fetchHotels = async () => {
  try {
    const response = await axiosInstance.get('/hotels');
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};

// Fetch single hotel by ID (public endpoint)
export const fetchHotelById = async (id) => {
  try {
    const response = await axiosInstance.get(`/hotels/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotel:', error);
    throw error;
  }
};

export default {
  fetchHotels,
  fetchHotelById,
};
