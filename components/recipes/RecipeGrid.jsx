import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = (props) => {
  const { recipe } = props;
  return (
    <ul className="grid 2xl:grid-cols-3 xl:grid-cols-2 sm:grid-cols-1 gap-4 lg-2 p-4">
      {recipe.map((recipe) => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
    </ul>
  );
};

export default RecipeGrid;
