import React from 'react';

export const TodayFood = ({ todayFood }) => {
  return (
    <div className="column content">
      <h2 className="subtitle">Today's foods</h2>
      <ul>
        {todayFood.map((food) => (
          <li key={food.name}>
            {`${food.quantity} ${food.name} = ${food.calories * food.quantity}`}{' '}
            cal
          </li>
        ))}
      </ul>
      <strong>
        Total:{' '}
        {todayFood.reduce((acc, cur) => acc + cur.calories * cur.quantity, 0)}{' '}
        cal
      </strong>
    </div>
  );
};
