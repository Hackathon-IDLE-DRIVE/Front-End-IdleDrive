import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive";

export const bookRental = async (bookingData) => {
  try {
    const response = await axios.post(`${BASE_URL}/booking`, bookingData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const listAllRentals = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/booking`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateBookingStatus = async (bookingId, status) => {
  try {
    const response = await axios.put(`${BASE_URL}/booking/${bookingId}`, {
      status,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getBookingDetails = async (bookingId) => {
  try {
    const response = await axios.get(`${BASE_URL}/booking/${bookingId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
