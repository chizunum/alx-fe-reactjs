import { useParams, Link, useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import { useState } from 'react';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';


export default function RecipeDetails() {
const { id } = useParams();
const recipeId = Number(id);
const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === recipeId));
const [isEditing, setIsEditing] = useState(false);
const navigate = useNavigate();


if (!recipe) {
return (
<div className="p-4">
<p className="text-red-600">Recipe not found.</p>
<div className="mt-2">
<button onClick={() => navigate(-1)} className="px-2 py-1 border rounded">
Go back
</button>
</div>
</div>
);
}



return (
<div className="p-4 bg-white border rounded">
<div className="flex justify-between items-start">
<div>
<h1 className="text-2xl font-bold">{recipe.title}</h1>
<p className="text-sm text-gray-600 mt-1">ID: {recipe.id}</p>
</div>


<div className="flex gap-2">
<button onClick={() => setIsEditing((v) => !v)} className="px-2 py-1 border rounded">
{isEditing ? 'Close' : 'Edit'}
</button>


<DeleteRecipeButton id={recipe.id} />
</div>
</div>


{isEditing ? (
<EditRecipeForm recipe={recipe} onCancel={() => setIsEditing(false)} />
) : (
<div className="mt-4 whitespace-pre-wrap text-gray-800">{recipe.description}</div>
)}


<div className="mt-4">
<Link to="/" className="text-sm text-blue-600 hover:underline">
← Back to recipes
</Link>
</div>
</div>
);
}