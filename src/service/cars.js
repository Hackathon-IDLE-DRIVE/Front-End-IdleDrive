import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive/car-rental";

export const getDetailCar = async (carID) => {
    try {
      const response = await axios.get(`${BASE_URL}/car/${carID}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };