import React from "react";
import Modal from "react-modal";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, onMessage }) => {
  const customStyles = {
    content: {
        position: "absolute",
        top: "40%",
        left: "40%",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirm Delete"
      ariaHideApp={false}
      style={customStyles}
      overlayClassName={"fixed inset-0 bg-gray-900 bg-opacity-20"}
      className="w-96 p-5 flex flex-col justify-center items-center bg-slate-50 border-4 border-red-600 rounded-md shadow-xl"
    >
      <h2 className="text-xl ">You sure?</h2>
      <p className="text-center">{onMessage}</p>
      <div className="">
        <button onClick={onConfirm} className=" text-white p-1 px-4 rounded-lg bg-red-700">
          Yes
        </button>
        <button onClick={onClose} className="p-1 rounded-lg text-white px-4 ml-8 mt-4 bg-blue-700">
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
