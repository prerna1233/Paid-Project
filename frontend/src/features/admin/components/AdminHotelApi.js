import axios from 'axios';

const API_URL = 'http://localhost:5000/admin/hotels';

// Fetch all hotels
export const fetchHotels = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    throw error;
  }
};

// Add a new hotel
export const addHotel = async (hotelData) => {
  try {
    const response = await axios.post(API_URL, hotelData);
    return response.data;
  } catch (error) {
    console.error('Error adding hotel:', error);
    throw error;
  }
};

// Update a hotel
export const updateHotel = async (id, hotelData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, hotelData);
    return response.data;
  } catch (error) {
    console.error('Error updating hotel:', error);
    throw error;
  }
};

// Delete a hotel
export const deleteHotel = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting hotel:', error);
    throw error;
  }
};
