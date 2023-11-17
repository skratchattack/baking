import React, { useState, useRef, useEffect } from "react";

const NewRecipeType = ({ onRecipeType, onSetRecipeType }) => {
  const recipeTypePicks = ["Bread", "Cake", "Pastry"];
  var otherRecipeType = "";

  const [selectedType, setSelectedType] = useState("");
  const otherTypeRef = useRef();

  useEffect(() => {
    if (selectedType === otherRecipeType && otherTypeRef.current) {
      otherTypeRef.current.focus();
      otherTypeRef.current.select();
    }
  }, [selectedType]);

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedType(value);
    onSetRecipeType(value);
  };

  return (
    <div className="border-2 border-blue-400 rounded-lg pb-8 w-48 p-4 mt-10 ml-10">
      <h3 className="flex justify-center mb-3">Type:</h3>
      <div className="flex flex-col">
        {recipeTypePicks.map((type, index) => (
          <label key={index} htmlFor={type} className="flex">
            <input
              type="radio"
              id={type}
              name="type"
              value={type}
              checked={selectedType === type}
              onChange={handleTypeChange}
            />
            <p className="pl-2">{type}</p>
          </label>
        ))}
      </div>
      <label htmlFor="other" className="flex">
        <input
          type="radio"
          id="other"
          name="type"
          value={otherRecipeType}
          checked={selectedType === otherRecipeType}
          onChange={handleTypeChange}
        />

        {selectedType === otherRecipeType ? (
          <input
            value={onRecipeType}
            ref={otherTypeRef}
            type="text"
            placeholder="Enter type"
            onChange={(e) => {
              onSetRecipeType(e.target.value);
            }}
            className="border-2 w-32 pl-2 flex"
          />
        ) : (
          <p className="pl-2">Other</p>
        )}
      </label>
    </div>
  );
};

export default NewRecipeType;
