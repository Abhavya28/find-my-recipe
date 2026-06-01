import axios from "axios";
import { recipeType } from "../types";

const BASE_URL = "https://dummyjson.com/recipes";

export const getAllRecipes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const getRecipe = async (id: number) => {
  try {
    const res = await axios.get(`${BASE_URL}/${id}`);
    return res.data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    return null;
  }
};

export const getTrendingRecipes = async() =>{
  try {
    const res = await axios.get(`${BASE_URL}`);
    const filteredRecipes = res.data.recipes.filter(
      (recipe: recipeType) => recipe.rating > 4.7
    );
    return filteredRecipes;
  } catch (error) {
    console.error("Error fetching trending recipes:", error);
    return [];
  }
}
