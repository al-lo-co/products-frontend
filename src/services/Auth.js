"use server"
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const API_URL = process.env.API_URL || "http://localhost:3001/api/v1"

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const cookieStore = cookies()
    if (response.data.token) {
      cookieStore.set("accessToken", response.data.token, {})
    }
    return { data: response.data, status: response.status };
  } catch (error) {
    return { data: error.response.data.error, status: error.response.status }
  }
};

export const logout = () => {
  const cookieStore = cookies()
  cookieStore.delete("accessToken")
  redirect("/login")
};

export const getToken = () => {
  const cookieStore = cookies()

  return cookieStore.get("accessToken")
};
