import axios from 'axios';
import { getToken } from './Auth';

const API_URL = process.env.API_URL || "http://localhost:3001/api/v1";

const getAuthHeaders = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getProducts = async () => {
  const response = await axios.get(`${API_URL}/products`, getAuthHeaders());
  return response.data;
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`, getAuthHeaders());
    return { data: response.data, status: response.status };
  } catch (error) {
    return { data: error.response.data.error, status: error.response.status }
  };
};

export const createProduct = async (product) => {
  const response = await axios.post(`${API_URL}/products`, product, getAuthHeaders());
  return response.data;
};

export const updateProduct = async (id, product) => {
  const response = await axios.put(`${API_URL}/products/${id}`, product, getAuthHeaders());
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/products/${id}`, getAuthHeaders());
  return response.data;
};
