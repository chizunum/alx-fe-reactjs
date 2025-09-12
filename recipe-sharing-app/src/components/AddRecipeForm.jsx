import { useState } from "react";
import { useRecipeStore } from "../components/recipeStore";
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  
const addRecipe = useRecipeStore((s) => s.addRecipe);
const navigate = useNavigate();
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


const handleSubmit = (e) => {
e.preventDefault();
if (!title.trim() || !description.trim()) return;


const newRecipe = {
id: Date.now(),
title: title.trim(),
description: description.trim(),
};


addRecipe(newRecipe);


// clear form
setTitle('');
setDescription('');


// navigate to the newly created recipe's detail page
navigate(`/recipes/${newRecipe.id}`);
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 p-4 border rounded-md bg-white">
<input
className="p-2 border rounded"
placeholder="Recipe title"
value={title}
onChange={(e) => setTitle(e.target.value)}
/>


<textarea
className="p-2 border rounded h-24"
placeholder="Short description / instructions"
value={description}
onChange={(e) => setDescription(e.target.value)}
/>


<div className="flex gap-2">
<button className="px-3 py-2 rounded bg-blue-600 text-white" type="submit">
Add Recipe
</button>
</div>
</form>
);
};
export default AddRecipeForm;
