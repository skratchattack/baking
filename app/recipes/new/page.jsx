"use client";
import NewRecipeDescription from "@/components/recipes/new-recipe/NewRecipeDescription";
import NewRecipeImageUploadWidget from "@/components/recipes/new-recipe/NewRecipeImageUploadWidget";
import NewRecipeIngredientDisplay from "@/components/recipes/new-recipe/NewRecipeIngredientDisplay";
import NewRecipeIngredients from "@/components/recipes/new-recipe/NewRecipeIngredients";
import NewRecipeOvenInstructions from "@/components/recipes/new-recipe/NewRecipeOvenInstructions";
import NewRecipeSteps from "@/components/recipes/new-recipe/NewRecipeSteps";
import NewRecipeStepsDisplay from "@/components/recipes/new-recipe/NewRecipeStepsDisplay";
import NewRecipeTitle from "@/components/recipes/new-recipe/NewRecipeTitle";
import NewRecipeType from "@/components/recipes/new-recipe/NewRecipeType";
import { useEffect, useState } from "react";



const NewRecipePage = (props) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const [ovenInstructions, setOvenInstructions] = useState({
    temperature: "",
    temperatureUnit: "",
    time: "",
    fanSpeed: "",
    steam: "",
  });
  const [recipeType, setRecipeType] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log(recipeType);
  }, [recipeType]);

  const addIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const addStep = (newSteps) => {
    setSteps([...steps, newSteps]);
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center mt-6 text-center items-center ">
        <NewRecipeImageUploadWidget onImage={image} onSetImage={setImage} />
        <NewRecipeTitle onTitle={title} onSetTitle={setTitle} />
        <NewRecipeOvenInstructions onSetOvenInstructions={setOvenInstructions} onOvenInstructions={ovenInstructions} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <NewRecipeIngredients onUpdateIngredients={addIngredient} />
          <NewRecipeIngredientDisplay onIngredients={ingredients} onSetIngredients={setIngredients} />
        </div>
        <div>
          <NewRecipeSteps onUpdateSteps={addStep} />
          <NewRecipeStepsDisplay onSteps={steps} onSetSteps={setSteps} />
        </div>
        <div className="flex flex-col lg:flex-row fixed bottom-0 pb-10 w-full">
          <NewRecipeType onRecipeType={recipeType} onSetRecipeType={setRecipeType} />
          <NewRecipeDescription onDescription={description} onSetDescription={setDescription} />
        </div>
      </div>
    </div>
  );
};

export default NewRecipePage;
