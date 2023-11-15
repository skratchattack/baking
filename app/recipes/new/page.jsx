"use client";
import React, { useState, useEffect } from "react";
import NewRecipeIngredients from "@/components/recipes/new-recipe/NewRecipeIngredients";
import NewRecipeSteps from "@/components/recipes/new-recipe/NewRecipeSteps";
import NewRecipeIngredientDisplay from "@/components/recipes/new-recipe/NewRecipeIngredientDisplay";


const NewRecipePage = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    console.log(ingredients);
  }, [ingredients]);

  const addIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const addStep = (newSteps) => {
    setSteps([...steps, { newSteps }]);
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <NewRecipeIngredients onUpdateIngredients={addIngredient} />
        <NewRecipeIngredientDisplay onIngredients={ingredients} onSetIngredients={setIngredients} />
      </div>
      <div>
        <NewRecipeSteps onUpdateSteps={addStep} />
      </div>
    </div>
  )
};

export default NewRecipePage;
