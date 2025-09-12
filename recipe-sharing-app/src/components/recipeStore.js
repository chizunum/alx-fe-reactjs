import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // Recipe CRUD (already exists, left intact)
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id), // cleanup
    })),

  // Favorites management
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])], // no duplicates
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Simple recommendation system
  generateRecommendations: () =>
    set((state) => {
      if (state.favorites.length === 0) return { recommendations: [] };

      // Mock logic: suggest random recipes not already in favorites
      const nonFavorites = state.recipes.filter(
        (r) => !state.favorites.includes(r.id)
      );
      const recommended = nonFavorites.filter(() => Math.random() > 0.5);

      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
