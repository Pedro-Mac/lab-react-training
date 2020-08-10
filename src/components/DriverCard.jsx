import React from 'react';

import './styles/DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  let emptyStars = '';
  let filledStars = '';

  for (let i = 0; i < Math.round(rating); i++) {
    filledStars += '★';
  }

  rating < 0.5 ? (emptyStars = '☆') : (emptyStars = '');

  for (let i = rating + 1; i < 5; i++) {
    emptyStars += '☆';
  }

  return (
    <div className="Driver-Card-container">
      <h3>It. 7</h3>
      <img src={img} alt={name} />
      <div className="Driver-Info-container">
        <h3>{name}</h3>
        <p>
          {filledStars}
          {emptyStars}
        </p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
