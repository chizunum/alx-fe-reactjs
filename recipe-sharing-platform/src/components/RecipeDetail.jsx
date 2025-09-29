import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe details:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-gray-600">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-xl"
        />
        <h1 className="text-3xl font-bold mt-4 text-gray-800">{recipe.title}</h1>
        <p className="text-gray-600 mt-2">{recipe.summary}</p>

        {/* Ingredients Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
            {recipe.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
          <ol className="list-decimal list-inside mt-2 text-gray-700 space-y-2">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            ← Back to Recipes
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
