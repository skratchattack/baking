import React, { useRef } from "react";

const NewRecipeDescription = ({ onDescription, onSetDescription }) => {

    const descriptionRef = useRef(null);

    const handleInputChange = () => {
        onSetDescription(descriptionRef.current.value);
    }

  return (
    <div className="border-2 border-blue-400 rounded-lg pb-8 w-1/2 p-4 mt-10 ml-10">
      <textarea ref={descriptionRef} value={onDescription} onChange={handleInputChange} className="w-full h-24 border-2 border-gray-300 rounded-md p-2" placeholder="Description"></textarea>
    </div>
  );
};

export default NewRecipeDescription;
