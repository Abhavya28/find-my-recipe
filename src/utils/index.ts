import {
  Cake,
  ChefHatIcon,
  Clock,
  Heart,
  Home,
  Search,
  Utensils,
} from "lucide-react";

export const navLinks = [
  { title: "Home", icon: Home, href: "/" },
  { title: "Search", icon: Search, href: "/recipes" },
  { title: "Favorites", icon: Heart, href: "/favorites" },
];

export const categories = [
  {
    title: "Breakfast",
    icon: ChefHatIcon,
    bg: "bg-yellow-500",
  },
  {
    title: "Lunch",
    icon: Utensils,
    bg: "bg-green-500",
  },
  {
    title: "Dinner",
    icon: Clock,
    bg: "bg-blue-500",
  },
  {
    title: "Desserts",
    icon: Cake,
    bg: "bg-red-500",
  },
];

export const cuisineOptions = ["Italian", "Asian", "Mexican", "American", "Pakistani", "Japanese", "Moroccan", "Korean", "Greek", "Thai", "Indian", "Turkish", "Russian", "Lebanese", "Brazilian", "Mediterranean"];

export const difficultyOptions = ["Easy", "Medium"];

export const mealTypeOptions = ["Breakfast", "Lunch", "Snack", "Dinner", "Side Dish", "Appetizer", "Beverage", "Dessert"];

export const calorieOptions = ["Under 300", "300-500", "500+"];

export const ratingOptions = ["4+", "4.5+", "4.7+"];