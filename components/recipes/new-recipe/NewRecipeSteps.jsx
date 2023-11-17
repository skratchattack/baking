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
      <h2 className="flex justify-center mb-4 text-2xl">Instruction Steps</h2>
      <div className="flex flex-row justify-center">
        <label hidden>Instruction Steps</label>
        <textarea className="p-2 border-2 rounded-md flex-initial w-2/3" onKeyDown={handleKeyPress} ref={stepRef}/>
        <button
          onClick={handleAddStep}
          className="text-slate-300 hover:text-blue-600 transition-colors duration-300 ml-4 font-semibold text-3xl pb-1"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewRecipeSteps;
