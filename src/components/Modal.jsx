import React from "react";

const Modal = ({ showModal, setShowModal, text }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="text-xl mb-4 text-black font-bold">
          {text}
        </h2>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
