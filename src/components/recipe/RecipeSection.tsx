import React from "react";
import "./RecipeSection.css";

interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  image: string;
}

interface RecipeProps {
  recipe: Recipe;
}

const RecipeSection: React.FC<RecipeProps> = ({ recipe }) => {
  const ingredientsString = recipe.ingredients;
  const ingredientsArray = ingredientsString.split("\n");

  return (
    <div className="recipe-section">
      <img src={"http://127.0.0.1:8000" + recipe.image} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <p>{recipe.description}</p>
      <ul>
        {ingredientsArray.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSection;
