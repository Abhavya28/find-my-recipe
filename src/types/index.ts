export interface recipeType {
    id: string;
    name: string;
    ingredients: string[];
    instructions: string[];
    difficulty: string;
    cuisine: string;
    tags: string[];
    image: string;
    rating: number;
    mealType: string[];
}