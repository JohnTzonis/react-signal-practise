import axios from 'axios';

const API_URL = 'http://localhost:3000';

const AuthService = {
  register: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { username, password });
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { username, password });
      return response.data; // Assuming the server returns user information on successful login
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  },
  
};

export default AuthService;
