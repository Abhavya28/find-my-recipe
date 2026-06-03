import { Suspense } from "react";
import FilteredRecipes from "@/src/components/filteredRecipes";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading recipes...</div>}>
      <FilteredRecipes />
    </Suspense>
  );
}