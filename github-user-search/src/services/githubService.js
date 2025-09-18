import axios from "axios";

const BASE_URL = "https://api.github.com";

/**
 * Basic fetch by username
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

/**
 * Advanced search with filters (username, location, min repos)
 */
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query.trim())}`);
  return response.data.items; // GitHub returns { total_count, items: [...] }
};
