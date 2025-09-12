import { Link } from 'react-router-dom';
import { useRecipeStore } from "../components/recipeStore";

export default function RecipeList() {
const recipes = useRecipeStore((s) => s.recipes);


if (!recipes || recipes.length === 0) {
return <p className="mt-4 text-gray-600">No recipes yet — add one above! 🍽️</p>;
}


return (
<div className="grid gap-4 mt-4">
{recipes.map((recipe) => (
<article key={recipe.id} className="p-4 border rounded shadow-sm bg-white">
<h3 className="text-lg font-semibold">
<Link to={`/recipes/${recipe.id}`} className="hover:underline">
{recipe.title}
</Link>
</h3>
<p className="text-sm text-gray-700 mt-1 truncate">{recipe.description}</p>
</article>
))}
</div>
);
}