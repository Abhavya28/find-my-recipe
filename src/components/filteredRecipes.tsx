"use client";

import { useEffect, useState } from "react";
import { getAllRecipes } from "../services/recipeService";
import { recipeType } from "../types";
import RecipeList from "../components/recipeList";
import { calorieOptions, cuisineOptions, difficultyOptions, mealTypeOptions, ratingOptions } from "../utils";
import { useSearchParams } from "next/navigation";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState<recipeType[]>([]);

  // Sidebar Toggle
  const [showFilters, setShowFilters] = useState(false);

  const searchParams = useSearchParams();
  const categoryFromURL = searchParams.get("category") || "";

  // Filters
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");
  const [selectedMealType, setSelectedMealType] = useState(categoryFromURL);
  const [selectedCalories, setSelectedCalories] = useState("");
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllRecipes();
      setRecipes(res);
    };

    fetchData();
  }, []);

  // Filter Logic
  const filteredRecipes = recipes.filter((recipe) => {
    const cuisineMatch =
      !selectedCuisine || recipe.cuisine === selectedCuisine;

    const difficultyMatch =
      !selectedDifficulty ||
      recipe.difficulty === selectedDifficulty;

    const mealMatch =
      !selectedMealType ||
      recipe.mealType.includes(selectedMealType);

    const calorieMatch =
      !selectedCalories ||
      (selectedCalories === "Under 300" &&
        recipe.caloriesPerServing < 300) ||
      (selectedCalories === "300-500" &&
        recipe.caloriesPerServing >= 300 &&
        recipe.caloriesPerServing <= 500) ||
      (selectedCalories === "500+" &&
        recipe.caloriesPerServing > 500);

    const ratingMatch =
      !selectedRating ||
      (selectedRating === "4+" && recipe.rating >= 4) ||
      (selectedRating === "4.5+" && recipe.rating >= 4.5) ||
      (selectedRating === "4.7+" && recipe.rating >= 4.7);

    return (
      cuisineMatch &&
      difficultyMatch &&
      mealMatch &&
      calorieMatch &&
      ratingMatch
    );
  });

  return (
    <section className="w-full px-4 lg:px-8 py-8">

      {/* Header */}
      <div className="flex items-start justify-between mb-8">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Explore Recipes 
          </h1>

          <p className="text-gray-500 mt-1">
            Discover delicious meals curated for you
          </p>
        </div>

        {/* Mobile Filter Button */}
        <button
          onClick={() => setShowFilters(true)}
          className="lg:hidden bg-black text-white px-5 py-2 rounded-xl"
        >
          Filters
        </button>

      </div>

      <div className="flex gap-8">

        {/* Overlay */}
        {showFilters && (
          <div
            onClick={() => setShowFilters(false)}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-0 left-0 lg:top-24
            h-full
            w-72
            bg-white/90 backdrop-blur-xl
            border-r lg:border border-gray-100
            shadow-2xl lg:shadow-xl
            rounded-none lg:rounded-3xl
            p-6
            overflow-y-auto
            z-50
            transition-all duration-300
            
            ${
              showFilters
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >

          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-6 lg:hidden">

            <h2 className="text-2xl font-bold">
              Filters
            </h2>

            <button
              onClick={() => setShowFilters(false)}
              className="text-3xl"
            >
              ✕
            </button>

          </div>

          {/* Desktop Heading */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Filters
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Find your perfect recipe
            </p>
          </div>

          {/* Cuisine */}
          <div className="mb-8">

            <h3 className="font-semibold text-gray-700 mb-4">
              🌍 Cuisine
            </h3>

            <div className="flex flex-wrap gap-3">

              {cuisineOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedCuisine(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300

                  ${
                    selectedCuisine === item
                      ? "bg-black text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-500"
                  }
                  
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Difficulty */}
          <div className="mb-8">

            <h3 className="font-semibold text-gray-700 mb-4">
               ⚡ Difficulty
            </h3>

            <div className="flex flex-wrap gap-3">

              {difficultyOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedDifficulty(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300

                  ${
                    selectedDifficulty === item
                      ? "bg-black text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-yellow-100 hover:text-yellow-600"
                  }
                  
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Meal Type */}
          <div className="mb-8">

            <h3 className="font-semibold text-gray-700 mb-4">
              🍴 Meal Type
            </h3>

            <div className="flex flex-wrap gap-3">

              {mealTypeOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedMealType(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300

                  ${
                    selectedMealType === item
                      ? "bg-black text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-green-100 hover:text-green-600"
                  }
                  
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Calories */}
          <div className="mb-8">

            <h3 className="font-semibold text-gray-700 mb-4">
              🔥 Calories
            </h3>

            <div className="flex flex-wrap gap-3">

              {calorieOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedCalories(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300

                  ${
                    selectedCalories === item
                      ? "bg-black text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-pink-100 hover:text-pink-600"
                  }
                  
                  `}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          <div className="mb-8">

            <h3 className="font-semibold text-gray-700 mb-4">
              ⭐ Ratings
            </h3>

            <div className="flex flex-wrap gap-3">

              {ratingOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelectedRating(item)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300

                  ${
                    selectedRating === item
                      ? "bg-black text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-yellow-100 hover:text-yellow-600"
                  }
                  
                  `}
                >
                  ⭐ {item}
                </button>
              ))}

            </div>

          </div>

          <button
            onClick={() => {
              setSelectedCuisine("");
              setSelectedDifficulty("");
              setSelectedMealType("");
              setSelectedCalories("");
              setSelectedRating("");
            }}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl font-medium transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Clear Filters
          </button>

        </aside>

        <div className="flex-1">
          <RecipeList recipes={filteredRecipes} />
        </div>

      </div>

    </section>
  );
};

export default RecipesPage;