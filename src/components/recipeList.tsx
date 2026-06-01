"use client"

import { recipeType } from "../types";
import Link from "next/link";

const RecipeList = ({ recipes }: { recipes: recipeType[] }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >

                        <div className="h-48 w-full overflow-hidden">
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            />

                        </div>

                        <div className="p-4">

                            <h2 className="text-lg font-semibold text-gray-800">
                                {recipe.name}
                            </h2>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="bg-purple-100 text-purple-500 px-4 py-2 rounded-full text-sm">
                                    🌍 {recipe.cuisine}
                                </span>

                                {recipe.mealType.map((meal, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full text-sm"
                                    >
                                        🍴 {meal}
                                    </span>
                                ))}

                                <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full text-sm">
                                    🔥 {recipe.caloriesPerServing} Calories
                                </span>
                            </div>

                            <div className="flex justify-between text-sm text-gray-500 mt-3">
                                <span>⭐ {recipe.rating} ({recipe.reviewCount} Reviews)</span>
                            </div>
                            <Link href={`/recipes/${recipe.id}`}>
                                <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                    View Recipe
                                </button>
                            </Link>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RecipeList