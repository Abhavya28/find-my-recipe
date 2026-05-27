import axios from "axios";

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
