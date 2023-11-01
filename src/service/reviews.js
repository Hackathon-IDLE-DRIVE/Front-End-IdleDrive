import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive";

export const getCarReviews = async (carId) => {
  try {
    const response = await axios.get(`${BASE_URL}/review/${carId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const createCarReview = async (carId, reviewData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/review/${carId}`,
      reviewData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const setRentalReview = async (rentalID, reviewData) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/booking/review/${rentalID}`,
      reviewData
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};