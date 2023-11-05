import axios from "axios";

const BASE_URL = "http://localhost:3000/api/v1/idledrive";

export const getAllRoutes = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/routes`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  export const getDetailRoutes = async (routeID) => {
    try {
      const response = await axios.get(`${BASE_URL}/routes/${routeID}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };