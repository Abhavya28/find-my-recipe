"use client"

import { useEffect, useState } from "react";
import { getAllRecipes } from "../services/recipeService";
import { recipeType } from "../types";

const RecipeList = () => {
    const [recipes, setRecipes] = useState<recipeType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getAllRecipes();
            setRecipes(res);
        };
        fetchData();
    }, []);

    // console.log(recipes);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >

                        <div className="h-48 w-full overflow-hidden">
                            {/* <img
                                src={recipe.image}
                                alt={recipe.name}
                                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                            /> */}

                        </div>

                        <div className="p-4">

                            <h2 className="text-lg font-semibold text-gray-800">
                                {recipe.name}
                            </h2>

                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                                    {recipe.cuisine}
                                </span>

                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                                    {recipe.difficulty}
                                </span>
                            </div>

                            <div className="flex justify-between text-sm text-gray-500 mt-3">
                                <span>⭐ {recipe.rating}</span>
                            </div>

                            <button className="mt-4 w-full bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                View Recipe
                            </button>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default RecipeList