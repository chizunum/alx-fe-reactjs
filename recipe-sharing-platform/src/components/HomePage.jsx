import { useEffect, useState } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // Load mock data when component mounts
  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍳 Recipe Sharing Platform
      </h1>

      {/* Grid layout for recipes */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
              <button className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
