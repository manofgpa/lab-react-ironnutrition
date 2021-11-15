import React from 'react';
import './Header.css';

export const Header = ({ handleOpenModal }) => {
  return (
    <>
      <h1 class="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          class="input search-bar"
          name="search"
          placeholder="Search"
          value=""
        />
      </div>
      <button class="button is-info new-food" onClick={handleOpenModal}>
        New food
      </button>
    </>
  );
};
