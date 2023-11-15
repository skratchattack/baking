import React from "react";

const NewRecipeHeader = () => {
  return (
    <div>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" />
      <label htmlFor="image">Image</label>
      <input type="text" id="image" />
    </div>
  );
};

export default NewRecipeHeader;
