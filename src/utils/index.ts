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
