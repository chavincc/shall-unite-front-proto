import axios from "axios";

export const loginAPI = async ({ username }) => {
  try {
    await axios.post(`${process.env.ENDPOINT}/auth/login`, { username });
    return {
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
};

export const logoutAPI = async () => {
  try {
    await axios.get(`${process.env.ENDPOINT}/auth/logout`);
    return {
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
};
