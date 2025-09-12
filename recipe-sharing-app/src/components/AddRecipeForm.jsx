import { useState } from "react";
import { useRecipeStore } from "../store/recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    addRecipe({ id: Date.now(), title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mt-4 p-4 border rounded-md shadow-md bg-white"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe title"
        className="p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe description"
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
