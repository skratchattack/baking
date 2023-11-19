import React, { useState } from "react";
import { DragDropContext, Draggable } from "@hello-pangea/dnd";
import { StrictModeDroppable } from "./StrictModeDroppable";
import { MdDragIndicator } from "react-icons/md";
import ConfirmDeleteModal from "@/components/ConfirmDeleteModal";

const NewRecipeStepsDisplay = ({ onSteps, onSetSteps }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = useState(null);

  const handleInputChange = (index, field, value) => {
    const updatedSteps = [...onSteps];
    updatedSteps[index] = {
      ...updatedSteps[index],
      [field]: value,
    };
    onSetSteps(updatedSteps);
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(onSteps);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    onSetSteps(items);
  };

  const openModal = (index) => {
    setIsOpen(true);
    setIndex(index);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIndex(null);
  };

  const removeStepWithConfirmation = () => {
    if (index !== null) {
      const updatedSteps = [...onSteps];
      updatedSteps.splice(index, 1);
      onSetSteps(updatedSteps);
      closeModal();
    }
  };

  return (
    <div className="mt-10 text-center overflow-y-auto">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <StrictModeDroppable droppableId="steps">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef} className="inline-block w-3/4">
              {onSteps.map((step, index) => (
                <Draggable key={index} draggableId={index.toString()} index={index}>
                  {(provided, snapshot) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`flex flex-row justify-end ${snapshot.isDragging ? "drop-shadow-xl" : ""}`}
                    >
                      <div
                        className={`bg-white transition-colors duration-300 hover:text-slate-500 font-semibold pr-4 text-2xl flex justify-center items-center ${
                          snapshot.isDragging ? "text-slate-500" : "text-slate-300"
                        }`}
                      >
                        <p>{index + 1}.</p>
                        <MdDragIndicator />
                      </div>
                      <label hidden>Instruction Steps</label>
                      <textarea
                        type="text"
                        className={`w-4/5 pl-2 ${snapshot.isDragging ? "border-none" : "border-b-2"}`}
                        placeholder="Instruction Steps"
                        value={step.step}
                        onChange={(e) => handleInputChange(index, "step", e.target.value)}
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
        isOpen={isOpen}
        onClose={closeModal}
        onConfirm={removeStepWithConfirmation}
        onMessage={`Are you sure you want to delete step ${index + 1}?`}
      />
    </div>
  );
};

export default NewRecipeStepsDisplay;
