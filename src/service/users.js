import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive/users";

//Service สำหรับ get user by id
export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Service สำหรับสร้าง  user
export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${BASE_URL}/auth/login`,credentials);
    return response;
};

//Service สำหรับแก้ไข user
export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Service สำหรับลบ user
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDriverInformation = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/driver/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateDriverInformation = async (userId,formData) => {
  try {
    const response = await axios.put(`${BASE_URL}/driver/${userId}`,formData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//Service สำหรับสร้าง driver doc
export const createDriverDocument = async (userId, documentData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/${userId}/driver-documents`,
      documentData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
