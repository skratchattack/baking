import React, { useState } from "react";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { MdDragIndicator } from "react-icons/md";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";

const NewRecipeIngredientDisplay = ({ onIngredients, onSetIngredients }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [indexToDelete, setIndexToDelete] = useState(null);

  const openModal = (index) => {
    setIsModalOpen(true);
    setIndexToDelete(index);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIndexToDelete(null);
  };

  const removeIngredientWithConfirmation = () => {
    if (indexToDelete !== null) {
      const updatedIngredients = [...onIngredients];
      updatedIngredients.splice(indexToDelete, 1);
      onSetIngredients(updatedIngredients);
      closeModal();
    }
  };

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
    <div className="mt-10 text-center">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StrictModeDroppable droppableId="ingredients">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="inline-block w-3/4">
              {onIngredients.map((ingredient, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex flex-row justify-center ${snapshot.isDragging ? "drop-shadow-xl" : ""}`}
                    >
                      <div
                        className={`bg-white transition-colors duration-300 hover:text-slate-500 font-semibold pr-4 text-2xl flex justify-center items-center ${
                          snapshot.isDragging ? "text-slate-500" : "text-slate-300"
                        }`}
                      >
                        <MdDragIndicator />
                      </div>
                      <label hidden>Name</label>
                      <input
                        type="text"
                        className={`${snapshot.isDragging ? "border-none" : "border-b-2"} w-full pl-2`}
                        placeholder="Ingredient Name"
                        value={ingredient.name}
                        onChange={(e) => handleInputChange(index, "name", e.target.value)}
                      />

                      <label hidden>Amount</label>
                      <input
                        type="text"
                        className={`flex-initial w-24 text-right ${snapshot.isDragging ? "border-none" : "border-b-2"}`}
                        placeholder="Amount"
                        value={ingredient.amount}
                        onChange={(e) => handleInputChange(index, "amount", e.target.value)}
                      />

                      <label hidden>Unit</label>
                      <input
                        type="text"
                        className={`border-b-2 flex-initial w-10 text-center ${snapshot.isDragging ? "border-none" : ""}`}
                        placeholder="Unit"
                        value={ingredient.unit}
                        onChange={(e) => handleInputChange(index, "unit", e.target.value)}
                      />

                      <button
                        onClick={() => openModal(index)}
                        className={`${
                          snapshot.isDragging ? "text-transparent" : "text-slate-300"
                        } hover:text-red-400 transition-colors duration-300 ml-6 font-semibold text-4xl flex justify-center items-center`}
                      >
                        -
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </StrictModeDroppable>
      </DragDropContext>

      <ConfirmDeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={removeIngredientWithConfirmation}
        onMessage={`Are you sure you want to delete ${indexToDelete !== null ? onIngredients[indexToDelete].name : ""}?`}
      />
    </div>
  );
};

export default NewRecipeIngredientDisplay;
