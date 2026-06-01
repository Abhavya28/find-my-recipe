"use client"

import { useEffect, useState } from "react";
import { recipeType } from "../types";
import { getAllRecipes } from "../services/recipeService";
import RecipeList from "./recipeList";

const AllRecipes = () => {
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
            <RecipeList recipes={recipes} />
        </div>
    )
}

export default AllRecipes;