import React from 'react';

const FoodItem = ({ foodItems }) => {
  return (
    <ul className="food-list">
      {foodItems.map((item) => (
        <li key={item} className="food-list-item">{item}</li>
      ))}
    </ul>
  );
};

export default FoodItem;
