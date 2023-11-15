import React from "react";
import RecipeGrid from "../recipes/RecipeGrid";

const Posts = (props) => {
  return (
    <section>
      <h1>Latest Stuff</h1>
      <RecipeGrid recipe={props.posts} />
    </section>
  );
};

export default Posts;
