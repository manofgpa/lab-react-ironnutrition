import React, { useState } from 'react';
import './FoodBox.css';

export const FoodBox = ({ food, handleNewTodayFood }) => {
  const { name, calories, image } = food;

  const [quantity, setQuantity] = useState(0);

  const handleClick = (e) => {
    e.target.id === 'increment'
      ? setQuantity(quantity + 1)
      : setQuantity(quantity - 1);
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt="Food" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <button
                onClick={(e) => handleClick(e)}
                className="button is-info"
                id="decrement"
                disabled={quantity <= 0}
              >
                -
              </button>
            </div>
            <div className="control">
              <input className="input" type="number" value={quantity} />
            </div>
            <div className="control">
              <button
                onClick={(e) => handleClick(e)}
                className="button is-info"
                id="increment"
                disabled={quantity >= 10}
              >
                +
              </button>
            </div>
            <div className="control">
              <button
                id="add"
                className="button is-primary"
                onClick={() => handleNewTodayFood({ name, calories, quantity })}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
