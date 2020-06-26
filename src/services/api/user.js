import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${process.env.ENDPOINT}/user`);

    return {
      data: response.data,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      error: true,
    };
  }
};
