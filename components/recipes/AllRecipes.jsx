import React from "react";
import RecipeGrid from "./RecipeGrid";

const AllRecipes = (props) => {
  return (
    <section>
      <h1>All Recipes</h1>
      <RecipeGrid recipe={props.recipe} />
    </section>
  );
};

export default AllRecipes;
