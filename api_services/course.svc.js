import axios from 'axios';
const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1/courses`,
  headers: {
    'Content-Type': 'application/json',
  },
});


export const getAllCourses = async () => {
  try {
    const response = await axiosInstance.get('/get_all');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

