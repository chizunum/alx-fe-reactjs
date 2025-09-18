import axios from "axios";

const GITHUB_API = "https://api.github.com/search/users";

export const fetchAdvancedUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(`${GITHUB_API}?q=${encodeURIComponent(query)}&per_page=10`);
    return response.data.items; // items = array of users
  } catch (error) {
    throw error;
  }
};
