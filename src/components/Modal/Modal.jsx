import React from 'react';

export const Modal = ({ isOpen, handleNewFood }) => {
  return (
    <div className={isOpen ? 'modal is-active' : 'modal'}>
      <div className="modal-background"></div>
      <div className="modal-content"></div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleNewFood}
      ></button>
    </div>
  );
};
