import axios from 'axios';

const API_URL = 'https://olsg-be-4571e51de231.herokuapp.com/';

const AuthService = {
  register: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { username, password }, { withCredentials: true });
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  login: async (username, password) => {
    try {
      const response = await axios.post(`${API_URL}login`, { username, password });
      const { data } = response;

      // Store the user token in localStorage
      localStorage.setItem('userToken', data.token);

      return data; // Server returns user information on successful login
    } catch (error) {
      console.error('Error logging in user:', error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('userToken');
  },

  isLoggedIn: () => {
    return !!localStorage.getItem('userToken');
  },

  getToken: () => {
    return localStorage.getItem('userToken');
  },
};

export default AuthService;
