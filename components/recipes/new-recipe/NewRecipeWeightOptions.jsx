import React, { useRef } from "react";

const NewRecipeWeightOptions = ({ onWeight, onSetWeight }) => {
  const itemRefOne = useRef("");
  const weightRefOne = useRef("");
  const itemRefTwo = useRef("");
  const weightRefTwo = useRef("");
  const itemRefThree = useRef("");
  const weightRefThree = useRef("");

    const handleInputChange = () => {
        onSetWeight([
            {
                item: itemRefOne.current.value,
                weight: weightRefOne.current.value
            },
            {
                item: itemRefTwo.current.value,
                weight: weightRefTwo.current.value
            },
            {
                item: itemRefThree.current.value,
                weight: weightRefThree.current.value
            }
        ]);
    }



  return (
    <div className="border-2 border-blue-400 rounded-lg pb-8 p-4 mt-10 h-44">
      <h3 className="flex justify-center mb-3">Weight Options:</h3>
      <div className="flex">
        <input onChange={handleInputChange} value={itemRefOne.current.value} type="text" placeholder="Item Name" className="border-2 mb-2 border-gray-300 rounded-md pl-2" ref={itemRefOne} />
        {":"}
        <input onChange={handleInputChange} value={weightRefOne.current.value} type="text" placeholder="Weight" className="border-2 mb-2 border-gray-300 rounded-md w-16 pl-1" ref={weightRefOne} />
      </div>
      <div className="flex">
        <input onChange={handleInputChange} value={itemRefTwo.current.value} type="text" placeholder="Item Name" className="border-2 mb-2 border-gray-300 rounded-md pl-2" ref={itemRefTwo} />
        {":"}
        <input onChange={handleInputChange} value={weightRefTwo.current.value} type="text" placeholder="Weight" className="border-2 mb-2 border-gray-300 rounded-md w-16 pl-1" ref={weightRefTwo} />
      </div>
      <div className="flex">
        <input onChange={handleInputChange} value={itemRefThree.current.value} type="text" placeholder="Item Name" className="border-2 border-gray-300 rounded-md pl-2" ref={itemRefThree} />
        {":"}
        <input onChange={handleInputChange} value={weightRefThree.current.value} type="text" placeholder="Weight" className="border-2 border-gray-300 rounded-md w-16 pl-1" ref={weightRefThree} />
      </div>
    </div>
  );
};

export default NewRecipeWeightOptions;
