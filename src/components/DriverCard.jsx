import React from 'react';

import './styles/DriverCard.css';

const DriverCard = ({ name, rating, img, car }) => {
  let ratingStars = '';
  const ratingValue = Math.round(rating);

  for (let i = 0; i < 5; i++) {
    i < ratingValue ? (ratingStars += '★') : (ratingStars += '☆');
  }

  return (
    <div className="Driver-Card-container">
      <h3>It. 7</h3>
      <img src={img} alt={name} />
      <div className="Driver-Info-container">
        <h3>{name}</h3>
        <p>{ratingStars}</p>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
