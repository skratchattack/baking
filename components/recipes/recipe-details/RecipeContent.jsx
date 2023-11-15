import React from "react";
import RecipeHeader from "./RecipeHeader";
import ReactMarkdown from 'react-markdown';

const A_DUMMY_RECIPE = 
  {
    slug: "carrot-cake",
    title: "Carrot Cake",
    image: "carrot-cake.jpeg",
    content: '# Carrot Cake',
  }
;

const testing = {
    content: "testing"
}


const RecipeContent = () => {
  const imagePath = `/images/recipes/${A_DUMMY_RECIPE.slug}/${A_DUMMY_RECIPE.image}`;
  return (
    <article className="flex flex-col items-center justify-center border-4 border-blue-500 rounded-lg mt-5 max-w-7xl">
      <RecipeHeader title={A_DUMMY_RECIPE.title} image={imagePath} />
      <ReactMarkdown>{A_DUMMY_RECIPE.content}</ReactMarkdown>
    </article>
  );
};

export default RecipeContent;
