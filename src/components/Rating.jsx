import React from 'react';

const Rating = (props) => {
  const rating = Math.round(props.children);
  let ratingStars = '';

  for (let i = 0; i < 5; i++) {
    i < rating ? (ratingStars += '★') : (ratingStars += '☆');
  }

  return (
    <div>
      <h1>Iteration 6</h1>
      <h1>{ratingStars}</h1>
    </div>
  );
};

export default Rating;
