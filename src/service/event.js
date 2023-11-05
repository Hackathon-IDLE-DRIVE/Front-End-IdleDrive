import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive";

export const getAllEvents = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/events`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailEvents = async (eventID) => {
  try {
    const response = await axios.get(`${BASE_URL}/events/${eventID}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};