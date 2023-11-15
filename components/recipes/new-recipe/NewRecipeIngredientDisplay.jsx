import React from "react";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { MdDragIndicator } from "react-icons/md";

const NewRecipeIngredientDisplay = ({ onIngredients, onSetIngredients }) => {
  const handleInputChange = (index, field, value) => {
    const updatedIngredients = [...onIngredients];
    updatedIngredients[index] = {
      ...updatedIngredients[index],
      [field]: value,
    };
    onSetIngredients(updatedIngredients);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(onIngredients);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    onSetIngredients(items);
  };

  return (
    <div className="mt-10">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StrictModeDroppable droppableId="ingredients">
          {(provided, snapshot) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {onIngredients.map((ingredient, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex flex-row justify-center ${snapshot.isDragging ? "drop-shadow-xl" : ""}`}
                    >
                      <div className="bg-white text-slate-300 transition-colors duration-300 hover:text-slate-500 font-semibold pr-4 text-3xl flex justify-center items-center">
                        <MdDragIndicator />
                      </div>
                      <label hidden>Name</label>
                      <input
                        type="text"
                        className="border-b-2 w-1/2 pl-2"
                        placeholder="Ingredient Name"
                        value={ingredient.name}
                        onChange={(e) => handleInputChange(index, "name", e.target.value)}
                      />

                      <label hidden>Amount</label>
                      <input
                        type="text"
                        className="border-b-2 flex-initial w-32 text-right"
                        placeholder="Amount"
                        value={ingredient.amount}
                        onChange={(e) => handleInputChange(index, "amount", e.target.value)}
                      />

                      <label hidden>Unit</label>
                      <input
                        type="text"
                        className="border-b-2 flex-initial w-10 text-center"
                        placeholder="Unit"
                        value={ingredient.unit}
                        onChange={(e) => handleInputChange(index, "unit", e.target.value)}
                      />

                      {!snapshot.isDragging && (
                        <button
                          onClick={() => {
                            const updatedIngredients = [...onIngredients];
                            updatedIngredients.splice(index, 1);
                            onSetIngredients(updatedIngredients);
                          }}
                          className="text-slate-300 hover:text-red-400 transition-colors duration-300 ml-6 font-semibold text-4xl flex justify-center items-center"
                        >
                          -
                        </button>
                      )}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </StrictModeDroppable>
      </DragDropContext>
    </div>
  );
};

export default NewRecipeIngredientDisplay;
