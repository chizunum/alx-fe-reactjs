import axios from "axios";

const GITHUB_API = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API}${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
