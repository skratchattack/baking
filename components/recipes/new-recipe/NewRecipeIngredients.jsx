import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const NewRecipeIngredients = ({ onUpdateIngredients }) => {
  const nameRef = useRef();
  const amountRef = useRef();
  const unitRef = useRef();

  const addIngredient = (event) => {
    const id = uuidv4();
    const name = nameRef.current.value;
    const amount = amountRef.current.value;
    const unit = unitRef.current.value;
    onUpdateIngredients({ id, name, amount, unit });
    event.preventDefault();
    nameRef.current.value = "";
    amountRef.current.value = "";
    unitRef.current.value = "";
    nameRef.current.focus();
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addIngredient(event);
    }
  };

  return (
    <div className="flex flex-col mt-8 ml-4">
      <h2 className="flex justify-center mb-4 text-2xl">Ingredients</h2>
      <div className="flex flex-row justify-center">
        <label hidden>Name</label>
        <input type="text" ref={nameRef} className="p-1 border-2 rounded-md w-2/3" placeholder="Ingredient Name" />

        <label hidden>Amount</label>
        <input
          type="text"
          ref={amountRef}
          className="p-1 border-2 rounded-md flex-initial w-32 text-center"
          placeholder="Amount"
        />

        <label hidden>Unit</label>
        <input
          type="text"
          ref={unitRef}
          className="p-1 border-2 rounded-md flex-initial w-12 text-center"
          placeholder="Unit"
          onKeyDown={handleKeyPress}
        />

        <button
          onClick={addIngredient}
          className="text-slate-300 hover:text-blue-600 transition-colors duration-300 ml-4 font-semibold text-3xl pb-1"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewRecipeIngredients;
