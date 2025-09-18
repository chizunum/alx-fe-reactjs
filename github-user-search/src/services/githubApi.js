import axios from "axios";

const GITHUB_API = "https://api.github.com";

const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const searchUsers = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API}/users/${username}`, {
      headers: apiKey ? { Authorization: `token ${apiKey}` } : {},
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
