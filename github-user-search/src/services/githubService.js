import axios from "axios";

/**
 * Advanced search with filters (username, location, min repos)
 */
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  // Build final URL exactly as required
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}`;

  const response = await axios.get(url);
  return response.data.items; // GitHub returns { total_count, items: [...] }
};
