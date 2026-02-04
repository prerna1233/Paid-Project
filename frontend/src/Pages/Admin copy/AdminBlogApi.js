import axios from 'axios';

const API_URL = 'http://localhost:5000/admin/blogs';

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Update a blog (admin only)
export const updateBlog = async (id, blogData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, blogData);
    return response.data;
  } catch (error) {
    console.error('Error updating blog:', error);
    throw error;
  }
};

// Delete a blog (admin only)
export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting blog:', error);
    throw error;
  }
};
