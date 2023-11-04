import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive";

export const getDetailCar = async (carID) => {
  try {
    const response = await axios.get(`${BASE_URL}/car/${carID}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const createCar = async (formData) => {
  console.log("FormData content:", formData);

  try {
    const response = await axios.post(`${BASE_URL}/car`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const updateCar = async (carID, carDetails) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/car/${carID}`,
      carDetails
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
