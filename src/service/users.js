import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive/users"; // Use the same variable name

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}`, userData); // Use BASE_URL here
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      // Use BASE_URL here
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${userId}`, userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDriverDocuments = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/${userId}/driver-documents`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

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
