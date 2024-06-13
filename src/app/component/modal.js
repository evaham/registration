import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    // <div className="modal-overlay" onClick={onClose}>
    //   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    //     <button className="modal-close" onClick={onClose}>X</button>
    //     {children}
    //   </div>
    // </div>
    <div className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-50" onClick={onClose}>
      <div className="relative w-5/6 h-3/4 rounded-xl bg-white p-4" onClick={(e) => e.stopPropagation()}>
        <button className="absolute right-2 top-2" onClick={onClose} >
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#333"><path d="M256-227.69 227.69-256l224-224-224-224L256-732.31l224 224 224-224L732.31-704l-224 224 224 224L704-227.69l-224-224-224 224Z"/></svg>
        </button>
      </div>
    </div>


  );
};

export default Modal;