import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth'; // Update with your server URL

export const login = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, formData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const register = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
  } catch (error) {
    console.error('Error registering:', error);
    throw error;
  }
};

export const resetPassword = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/reset-password`, formData);
    return response.data;
  } catch (error) {
    console.error('Error resetting password:', error);
    throw error;
  }
};

export const updateProfile = async (formData) => {
  try {
    const response = await axios.put(`${API_URL}/profile`, formData);
    return response.data;
  } catch (error) {
    console.error('Error updating profile:', error);
    throw error;
  }
};
