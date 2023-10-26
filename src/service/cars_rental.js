import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive/car-rental";

//Service สำหรับลบ register
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

//Service สำหรับ login
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

//Service สำหรับแก้ไข user cars_rental
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

//Service สำหรับลบ user cars_rental
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
