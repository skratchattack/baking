import React, { useRef } from "react";

const NewRecipeDescription = ({ onDescription, onSetDescription }) => {

    const descriptionRef = useRef(null);

    const handleInputChange = () => {
        onSetDescription(descriptionRef.current.value);
        adjustHeight(descriptionRef.current);
    }

    const adjustHeight = (element) => {
        element.style.height = "100px";
        element.style.height = (element.scrollHeight)+"px";
    }


  return (
    <div className="border-2 border-blue-400 rounded-lg p-4 mt-10 w-full">
      <textarea ref={descriptionRef} rows={1} value={onDescription} onChange={handleInputChange} className="w-full h-24 border-2 border-gray-300 rounded-md p-2" placeholder="Description"></textarea>
    </div>
  );
};

export default NewRecipeDescription;
