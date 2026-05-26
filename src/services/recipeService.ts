import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getAllRecipes = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/recipes`);
    return res.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const getRecipe = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/recipes`);
    return res.data.recipes;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
