"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { recipeType } from "../types";
import { getAllRecipes } from "../services/recipeService";
import RecipeList from "../components/recipeList";

const FavoriteRecipes = () => {
  const favorites = useSelector((state: any) => state.favorites.favorites);

  const [allRecipes, setAllRecipes] = useState<recipeType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllRecipes();
      setAllRecipes(res);
    };
    fetchData();
  }, []);

  // 🔥 filter favorites
  const favoriteRecipes = allRecipes.filter((recipe) =>
    favorites.includes(recipe.id)
  );

  return (
    <section className="w-full px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">❤️ Your Favorites</h1>

      {favoriteRecipes.length > 0 ? (
        <RecipeList recipes={favoriteRecipes} />
      ) : (
        <p className="text-gray-500">No favorites yet</p>
      )}
    </section>
  );
};

export default FavoriteRecipes;