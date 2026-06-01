"use client";

import { useEffect, useState } from "react";
import { getRecipe } from "../services/recipeService";
import { recipeType } from "../types";
import { ChefHat, Clock, Users } from "lucide-react";
import Loading from "./loading";

const Recipe = ({ id }: { id: number }) => {
    const [recipe, setRecipe] = useState<recipeType | null>(null);
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await getRecipe(id);
            setRecipe(res);
        };
        fetchData();
    }, [id]);

    if (!recipe) {
        return <Loading />
    }

    return (
        <section className="min-h-screen bg-[#f8f8f8] pb-20">

            {/* Hero Image */}
            <div className="relative h-[320px] md:h-[500px] overflow-hidden">
                <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Main Container */}
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Floating Card */}
                <div className="bg-white rounded-[32px] shadow-xl p-6 md:p-10 -mt-24 relative z-10">

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                    {/* {recipe.tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="bg-orange-100 text-orange-500 px-4 py-1.5 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))} */}

                    <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full text-sm">
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

                {/* Title */}
                <div className="mt-5">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                        {recipe.name}
                    </h1>

                    <div className="flex items-center gap-3 mt-4">
                        <span className="text-yellow-500 font-semibold text-lg">
                            ⭐ {recipe.rating}
                        </span>

                        <span className="text-gray-500">
                            ({recipe.reviewCount} reviews)
                        </span>
                    </div>
                </div>



                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">

                    <div className="bg-gray-50 rounded-2xl p-5 flex flex-col items-center">
                        <Clock size={30} className="text-orange-500" />
                        <p className="text-gray-500 text-sm mt-2">
                            Prep Time
                        </p>
                        <h3 className="font-bold text-lg">
                            {recipe.prepTimeMinutes}m
                        </h3>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5 flex flex-col items-center">
                        <Clock size={30} className="text-orange-500" />
                        <p className="text-gray-500 text-sm mt-2">
                            Cook Time
                        </p>
                        <h3 className="font-bold text-lg">
                            {recipe.cookTimeMinutes}m
                        </h3>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5 flex flex-col items-center">
                        <Users size={30} className="text-orange-500" />
                        <p className="text-gray-500 text-sm mt-2">
                            Servings
                        </p>
                        <h3 className="font-bold text-lg">
                            {recipe.servings}
                        </h3>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-5 flex flex-col items-center">
                        <ChefHat size={30} className="text-orange-500" />
                        <p className="text-gray-500 text-sm mt-2">
                            Difficulty
                        </p>
                        <h3 className="font-bold text-lg">
                            {recipe.difficulty}
                        </h3>
                    </div>
                </div>

                {/* About */}
                <div className="mt-14 bg-gray-50 rounded-3xl">
                    <h2 className="text-2xl font-bold mb-4">
                        About This Recipe
                    </h2>

                    <p className="text-gray-600 leading-8">
                        This {recipe.cuisine} style {recipe.name} is a delicious{" "}
                        {recipe.difficulty.toLowerCase()} recipe perfect for{" "}
                        {recipe.mealType.join(", ")}. It serves{" "}
                        {recipe.servings} people and contains approximately{" "}
                        {recipe.caloriesPerServing} calories per serving.
                    </p>
                </div>

                {/* Ingredients + Instructions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">

                    {/* Ingredients */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Ingredients
                        </h2>

                        <div className="flex flex-col gap-3">
                            {recipe.ingredients.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 flex items-center gap-3"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-orange-500"
                                    />

                                    <p className="text-gray-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions */}
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Instructions
                        </h2>

                        <div className="flex flex-col gap-4">
                            {recipe.instructions.map((step, index) => (
                                <div
                                    key={index}
                                    className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5"
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
        </div>
        </section >
    );
};

export default Recipe;