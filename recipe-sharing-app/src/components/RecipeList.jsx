import { useRecipeStore } from "../components/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  if (recipes.length === 0) {
    return <p>No recipes yet. Add one below! 🍲</p>;
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="p-4 mb-2 border rounded-md shadow-sm bg-gray-100"
        >
          <h3 className="font-bold text-lg">{recipe.title}</h3>
          <p className="text-gray-700">{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
