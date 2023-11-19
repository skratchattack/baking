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
import NewRecipeWeightOptions from "@/components/recipes/new-recipe/NewRecipeWeightOptions";
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
  const [weight, setWeight] = useState([]);

  useEffect(() => {
    console.log(weight);
  }, [weight]);

  const addIngredient = (newIngredient) => {
    setIngredients([...ingredients, newIngredient]);
  };

  const addStep = (newSteps) => {
    setSteps([...steps, newSteps]);
  };

  return (
    <div className="h-screen">
      <div className="ml-4 mt-6 absolute">
        <NewRecipeImageUploadWidget onImage={image} onSetImage={setImage} />
      </div>
      <div className="flex justify-center">
        <NewRecipeTitle onTitle={title} onSetTitle={setTitle} />
      </div>
      <div className="flex justify-evenly xl:flex-row flex-col min-h-[59%]">
        <div className="flex flex-col xl:w-1/2">
          <NewRecipeIngredients onUpdateIngredients={addIngredient} />
          <NewRecipeIngredientDisplay onIngredients={ingredients} onSetIngredients={setIngredients} />
        </div>
        <div className="flex flex-col xl:w-1/2">
          <NewRecipeSteps onUpdateSteps={addStep} />
          <NewRecipeStepsDisplay onSteps={steps} onSetSteps={setSteps} />
        </div>
      </div>
      <div className="flex flex-col 2xl:flex-row justify-evenly pb-10 w-full">
        <div className="flex justify-evenly 2xl:w-1/2">
          <div className="mx-5">
            <NewRecipeType onRecipeType={recipeType} onSetRecipeType={setRecipeType} />
          </div>
          <div className="mx-5">
            <NewRecipeWeightOptions onWeight={weight} onSetWeight={setWeight} />
          </div>
          <div className="mx-5">
            <NewRecipeOvenInstructions onSetOvenInstructions={setOvenInstructions} onOvenInstructions={ovenInstructions} />
          </div>
        </div>
        <div className="flex justify-center mx-5 2xl:w-1/2">
          <NewRecipeDescription onDescription={description} onSetDescription={setDescription} />
        </div>
      </div>
    </div>
  );
};

export default NewRecipePage;
