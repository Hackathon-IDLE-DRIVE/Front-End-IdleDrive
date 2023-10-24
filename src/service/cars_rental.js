import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive/car-rental"; // แทนที่ BASE_URL ด้วย URL ของคุณ

export const registerUser = async (rental_name, username, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      rental_name,
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const editUserProfile = async (
  userId,
  rental_name,
  username,
  email,
  password
) => {
  try {
    const response = await axios.put(`${BASE_URL}/auth/edit/${userId}`, {
      rental_name,
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/auth/delete/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Service สำหรับคำนวณราคารวมทั้งหมด
export const getTotalCost = async (carRentalId) => {
  try {
    const response = await axios.get(`${BASE_URL}/total-cost/${carRentalId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
