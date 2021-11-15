import React from 'react';
import './Header.css';

export const Header = ({ handleOpenModal, handleSearch }) => {
  return (
    <>
      <h1 className="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          onKeyUp={(e) => handleSearch(e.target.value)}
        />
      </div>
      <button className="button is-info new-food" onClick={handleOpenModal}>
        New food
      </button>
    </>
  );
};
