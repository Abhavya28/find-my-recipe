"use client";

import { recipeType } from "../types";
import Link from "next/link";

const RecipeList = ({ recipes }: { recipes: recipeType[] }) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">

        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="group bg-white/90 backdrop-blur-lg border border-gray-100 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
          >

            {/* Image */}
            <div className="relative h-52 sm:h-56 overflow-hidden">

              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

              {/* Rating */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium shadow-md">
                ⭐ {recipe.rating}
              </div>

            </div>

            {/* Content */}
            <div className="p-5">

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-1">
                {recipe.name}
              </h2>

              {/* Meal Types */}
              <div className="flex flex-wrap gap-2 mt-4">

                {recipe.mealType.map((meal, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-600 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                  >
                    🍴 {meal}
                  </span>
                ))}

              </div>

              {/* Reviews */}
              <div className="flex items-center justify-between mt-5 text-sm text-gray-500">

                <span>
                  {recipe.reviewCount} Reviews
                </span>

                <span className="text-green-600 font-medium">
                  {recipe.difficulty}
                </span>

              </div>

              {/* Button */}
              <Link href={`/recipes/${recipe.id}`}>
                <button className="mt-5 w-full bg-black hover:bg-gray-900 text-white py-3 rounded-2xl font-medium transition duration-300 hover:scale-[1.02]">
                  View Recipe
                </button>
              </Link>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default RecipeList;