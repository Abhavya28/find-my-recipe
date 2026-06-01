"use client";

import { useEffect, useState } from "react";
import { recipeType } from "../../types";
import { getTrendingRecipes } from "../../services/recipeService";
import RecipeList from "../recipeList";

const TrendingRecipes = () => {
  const [recipes, setRecipes] = useState<recipeType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getTrendingRecipes();
      setRecipes(res);
    };
    fetchData();
  }, []);

  return (
    <section className="w-full px-8 py-10 bg-[#fff7f0] ">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl sm:text-3xl font-bold text-gray-800">
            Trending Recipes
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Top rated recipes loved by users
          </p>
        </div>

        <span className="text-xs sm:text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
          Live Trending
        </span>
      </div>

      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} />
      ) : (
        <div className="text-center py-10 text-gray-500">
          Loading trending recipes...
        </div>
      )}
    </section>
  );
};

export default TrendingRecipes;