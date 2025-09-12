import { useState } from 'react';
import { useRecipeStore } from '../components/recipeStore';


export default function EditRecipeForm({ recipe, onCancel }) {
const updateRecipe = useRecipeStore((s) => s.updateRecipe);
const [title, setTitle] = useState(recipe.title || '');
const [description, setDescription] = useState(recipe.description || '');


const handleSubmit = (event) => {
event.preventDefault();
if (!title.trim() || !description.trim()) return;


updateRecipe({ id: recipe.id, title: title.trim(), description: description.trim() });


if (onCancel) onCancel();
};


return (
<form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
<input
className="p-2 border rounded"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<textarea
className="p-2 border rounded h-28"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>


<div className="flex gap-2">
<button type="submit" className="px-3 py-2 rounded bg-green-600 text-white">
Save
</button>
<button type="button" onClick={onCancel} className="px-3 py-2 rounded border">
Cancel
</button>
</div>
</form>
);
}

