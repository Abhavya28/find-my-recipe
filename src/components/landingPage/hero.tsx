"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllRecipes } from "@/src/services/recipeService";

const Hero = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<any[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getAllRecipes();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    if (!search.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = recipes
      .map((recipe) => recipe.name)
      .filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 5);

    setSuggestions(filtered);
  }, [search, recipes]);

  const handleSearch = () => {
    if (!search.trim()) return;

    router.push(`/recipes?search=${search}`);
    setSuggestions([]);
  };

  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-[#fff7f0] px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
          Discover Your Next
          <br />
          <span className="text-red-500">
            Favorite Recipe
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 leading-8 mt-6 max-w-2xl mx-auto">
          Explore thousands of delicious recipes from around the world.
          Find what to cook today!
        </p>

        <div className="relative mt-10 max-w-2xl mx-auto">

          <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">

            <input
              type="text"
              placeholder="Search recipes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              className="w-full px-6 py-5 outline-none"
            />

            <button
              onClick={handleSearch}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-5 font-semibold"
            >
              Search
            </button>

          </div>

          {suggestions.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">

              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setSearch(item);
                    setSuggestions([]);
                    router.push(`/recipes?search=${item}`);
                  }}
                  className="w-full text-left px-5 py-3 hover:bg-gray-50"
                >
                  {item}
                </button>
              ))}

            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Hero;