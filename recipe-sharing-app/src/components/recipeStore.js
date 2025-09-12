import create from 'zustand';


export const useRecipeStore = create((set) => ({
// initial empty list (you can seed sample recipes here if you like)
recipes: [],


// add a recipe
addRecipe: (newRecipe) =>
set((state) => ({ recipes: [...state.recipes, newRecipe] })),


// update an existing recipe (matches by id)
updateRecipe: (updatedRecipe) =>
set((state) => ({
recipes: state.recipes.map((r) =>
r.id === updatedRecipe.id ? { ...r, ...updatedRecipe } : r
),
})),


// delete by id
deleteRecipe: (id) =>
set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),


// replace entire list
setRecipes: (recipes) => set({ recipes }),
}));

