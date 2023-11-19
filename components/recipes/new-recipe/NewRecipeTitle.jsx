import React, { useRef } from "react";

const NewRecipeTitle = ({ onTitle, onSetTitle }) => {
  const titleRef = useRef();

  const handleSetTitle = () => {
    const title = titleRef.current.value;
    onSetTitle( title );
  };

  return (
    <div className="w-2/3 md:w-1/2 lg:w-1/3 lg:mt-24 lg:mb-12 mt-60">
      <label hidden htmlFor="title">
        Title
      </label>
      <input
        ref={titleRef}
        value={onTitle}
        onChange={handleSetTitle}
        type="text"
        id="title"
        className="mt-6 text-4xl p-1 text-center border-2 rounded-md w-full"
      />
    </div>
  );
};

export default NewRecipeTitle;
