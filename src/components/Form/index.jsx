import React from 'react';

export const Form = ({ handleOpenModal, handleNewFood }) => {
  return (
    <div>
      <div class="field">
        <label class="label has-text-white">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
      </div>
      <div class="field">
        <label class="label has-text-white">Calories</label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
      </div>
      <div class="field">
        <label class="label has-text-white">Image Url</label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" onClick={() => handleNewFood()}>
            Submit
          </button>
        </div>
        <div class="control">
          <button class="button is-link is-light" onClick={handleOpenModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
