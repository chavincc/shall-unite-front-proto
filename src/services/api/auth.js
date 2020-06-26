import axios from "axios";

export const loginAPI = async (formData) => {
  try {
    const response = await axios.post(`${process.env.ENDPOINT}/auth/login`, {
      username: formData.username,
    });

    return {
      username: response.data,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
};
