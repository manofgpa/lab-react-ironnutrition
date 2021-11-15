import React from 'react';
import { Form } from '../Form';

export const Modal = ({ isOpen, handleOpenModal, handleNewFood }) => {
  return (
    <div className={isOpen ? 'modal is-active' : 'modal'}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <Form handleOpenModal={handleOpenModal} handleNewFood={handleNewFood} />
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleOpenModal}
      ></button>
    </div>
  );
};
