import { useRecipeStore } from '../components/recipeStore';
import { useNavigate } from 'react-router-dom';


export default function DeleteRecipeButton({ id }) {
const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
const navigate = useNavigate();


const handleDelete = () => {
if (!confirm('Are you sure you want to delete this recipe? This cannot be undone.')) return;
deleteRecipe(id);
// after deletion, go back to home list
navigate('/');
};


return (
<button onClick={handleDelete} className="px-2 py-1 rounded border text-red-600">
Delete
</button>
);
}

