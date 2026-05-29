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
        <section className="bg-[#f5f5f5]">
            <div className="flex flex-col justify-center">
                <div className="h-[300px] md:h-[420px] w-full overflow-hidden">
                    {/* <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover"
                    /> */}
                </div>
                <div className="flex justify-center">
                    <div className="bg-white rounded-3xl py-4 shadow-lg -mt-16 relative z-10 flex flex-col items-center justify-center">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                                    {recipe.name}
                                </h1>
                                <div className="flex items-center gap-4">
                                    <div className=" text-black rounded-2xl flex gap-1">
                                        <h1 className="font-semibold">⭐ {recipe.rating}</h1>
                                        <span className="text-gray-500">
                                            ({recipe.reviewCount} reviews)
                                        </span>
                                    </div>
                                    <div className="flex gap-2">
                                        {recipe.tags.map((tag, tagIdx) => (
                                            <span
                                                key={tagIdx}
                                                className="px-4 py-1.5 rounded-full text-sm font-bold  text-orange-500 bg-orange-100 transition-all duration-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <div className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-1 text-orange-500">
                                <div className="flex justify-center">
                                    <Clock size={36} />
                                </div>
                                <p className="text-sm text-gray-500">
                                    Prep Time
                                </p>

                                <h3 className="font-semibold text-black">
                                    {recipe.prepTimeMinutes} mins
                                </h3>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-1 text-orange-500">
                                <div className="flex justify-center">
                                    <Clock size={36} />
                                </div>
                                <p className="text-sm text-gray-500">
                                    Cook Time
                                </p>

                                <h3 className="font-semibold text-black">
                                    {recipe.cookTimeMinutes} mins
                                </h3>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-1 text-orange-500">
                                <div className="flex justify-center">
                                    <Users size={36} />
                                </div>
                                <p className="text-sm text-gray-500">
                                    Servings
                                </p>

                                <h3 className="font-semibold text-black">
                                    {recipe.servings}
                                </h3>
                            </div>

                            <div className="bg-gray-100 p-6 rounded-2xl flex flex-col items-center justify-center gap-1 text-orange-500">
                                <div className="flex justify-center">
                                    <ChefHat size={36} />
                                </div>
                                <p className="text-sm text-gray-500">
                                    Difficulty
                                </p>

                                <h3 className="font-semibold text-black">
                                    {recipe.difficulty}
                                </h3>
                            </div>
                        </div>

                        {/*  Ingredients */}
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-5">
                                Ingredients
                            </h2>

                            <div className="grid grid-cols-1 gap-2">
                                {recipe.ingredients.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-50 rounded-2xl px-4 py-3 flex gap-2 items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={isChecked}
                                            onChange={handleOnChange}
                                            className="w-5 h-5 accent-gray-700 rounded border-gray-300 focus:ring-gray-600"
                                        />
                                        <label>
                                            {item}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-5">
                                Instructions
                            </h2>

                            <div className="grid grid-cols-1 gap-2">
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
            </div>
        </section>
    );
};

export default Recipe;