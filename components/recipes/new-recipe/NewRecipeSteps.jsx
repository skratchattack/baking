import React, { useRef } from "react";

const NewRecipeSteps = ({ onUpdateSteps }) => {
  const stepRef = useRef();

  const addStep = () => {
    const step = stepRef.current.value;
    onUpdateSteps({ step });
  };

  const handleAddStep = (event) => {
    event.preventDefault();
    addStep();
    stepRef.current.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddStep(event);
    }
  }

  return (
    <div className="flex flex-col mt-8">
      <h2 className="flex justify-center">Steps</h2>
      <div className="flex flex-row justify-center">
        <label hidden>Step</label>
        <textarea className="border-2 rounded-md flex-initial w-2/3" onKeyDown={handleKeyPress} ref={stepRef}/>
        <button
          onClick={handleAddStep}
          className="bg-blue-400 hover:bg-blue-600 transition-colors duration-300 rounded-full w-7 h-7 ml-4 text-white font-semibold text-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewRecipeSteps;
