import axios from 'axios';

const API_URL = 'http://localhost:4000/api/chatbot'; // Update with your server URL

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(`${API_URL}/send`, { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
