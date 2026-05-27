"use client";

import { useEffect, useState } from "react";
import { getRecipe } from "../services/recipeService";
import { recipeType } from "../types";

const Recipe = ({ id }: { id: number }) => {
    const [recipe, setRecipe] = useState<recipeType | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getRecipe(id);
            setRecipe(res);
        };

        fetchData();
    }, [id]);

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <section className="min-h-screen bg-[#f5f5f5] p-4 md:p-8">
            <div className="max-w-5xl mx-auto relative">

                <div className="h-[300px] md:h-[420px] w-full overflow-hidden rounded-[30px]">
                    {/* <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover"
                    /> */}
                    img
                </div>

                <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-lg -mt-16 relative z-10 mx-2 md:mx-8">

                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                {recipe.name}
                            </h1>

                            <p className="text-gray-500 mt-2">
                                {recipe.cuisine} • {recipe.difficulty}
                            </p>
                        </div>

                        <div className="bg-orange-100 text-orange-600 px-4 py-2 rounded-2xl font-semibold">
                            ⭐ {recipe.rating}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">

                        <div className="bg-gray-100 px-5 py-3 rounded-2xl">
                            <p className="text-sm text-gray-500">
                                Prep Time
                            </p>

                            {/* <h3 className="font-semibold">
                                {recipe.prepTimeMinutes} mins
                            </h3> */}
                        </div>

                        <div className="bg-gray-100 px-5 py-3 rounded-2xl">
                            <p className="text-sm text-gray-500">
                                Cook Time
                            </p>

                            {/* <h3 className="font-semibold">
                                {recipe.cookTimeMinutes} mins
                            </h3> */}
                        </div>

                        <div className="bg-gray-100 px-5 py-3 rounded-2xl">
                            <p className="text-sm text-gray-500">
                                Servings
                            </p>

                            {/* <h3 className="font-semibold">
                                {recipe.servings} People
                            </h3> */}
                        </div>

                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-5">
                            Ingredients
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {recipe.ingredients.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="text-2xl font-bold mb-5">
                            Instructions
                        </h2>

                        <div className="space-y-4">
                            {recipe.instructions.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-4"
                                >
                                    <div className="min-w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>

                                    <p className="text-gray-700 leading-7">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Recipe;