import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import RecipeSection from "../components/recipe/RecipeSection";

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  image: string;
}

interface RecipeListProps {
  category: string | null;
}

const Recipe: React.FC<RecipeListProps> = ({ category }: RecipeListProps) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    // Fetch recipes from API and set them in state
    const fetchRecipes = async () => {
      const response = await fetch(
        `http://127.0.0.1:8000/recipes/?category=${category}`
      );
      const data = await response.json();
      setRecipes(data);
    };
    fetchRecipes();
  }, [category]);

  return (
    <div>
      <Navbar logo="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
      <h1>Recipes</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeSection key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
