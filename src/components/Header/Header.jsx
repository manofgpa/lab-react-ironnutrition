import React from 'react';
import './Header.css';

export const Header = ({ handleNewFood }) => {
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
      <button class="button is-info new-food" onClick={handleNewFood}>
        New food
      </button>
    </>
  );
};
