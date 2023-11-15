import AllRecipes from "@/components/recipes/AllRecipes";
import React from "react";

const DUMMY_RECIPE = [
  {
    slug: "carrot-cake",
    title: "Carrot Cake",
    image: "carrot-cake.jpeg",
    description: "A delicious carrot cake recipe",
  },
  {
    slug: "french-chocolate-cake",
    title: "French Chocolate Cake",
    image: "french-chocolate-cake.jpeg",
    description: "A delicious chocolate cake recipe",
  },
  {
    slug: "brownies",
    title: "Brownies",
    image: "brownies.jpeg",
    description: "A delicious brownie recipe",
  },
  {
    slug: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    image: "chocolate-chip-cookies.jpeg",
    description: "A delicious chocolate chip cookie recipe",
  },
];

const AllRecipesPage = () => {
  return <AllRecipes recipe={DUMMY_RECIPE} />;
};

export default AllRecipesPage;
