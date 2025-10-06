import React from "react";
import { useQuery } from "@tanstack/react-query";


const { data, isLoading, isError, error, refetch } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  staleTime: 5000,
  cacheTime: 10000,
});


// Function to fetch posts from the API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // Use React Query’s useQuery hook
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery("posts", fetchPosts, {
    staleTime: 5000, // cache data for 5 seconds before considering it stale
    cacheTime: 10000, // data stays in cache for 10 seconds
  });

  // Handle loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Handle error state
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Refresh Posts
        </button>
      </div>

      {/* Display fetched posts */}
      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="border p-3 rounded shadow-sm">
            <h3 className="font-bold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
