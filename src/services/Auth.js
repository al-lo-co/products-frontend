import axios from 'axios';

const API_URL = process.env.API_URL || "http://localhost:3001/api/v1"

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    return { data: response.data, status: response.status };
  } catch (error) {
    return { data: error.response.data.error, status: error.response.status }
  }
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  try {
    return localStorage.getItem('token')
  } catch (error) {
    return null
  }
};
