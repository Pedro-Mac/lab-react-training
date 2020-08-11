import React from 'react';

import './styles/BoxColor.css';

const NumbersTable = (props) => {
  const arrayOfNums = [];

  for (let i = 1; i <= props.limit; i++) {
    arrayOfNums.push(i);
  }

  return (
    <div className="NumberTable-Container">
      <h1>Iteration 12</h1>
      {arrayOfNums.map((number) => {
        let bgColor;
        number % 2 === 0 ? (bgColor = '#fff') : (bgColor = '#ffd6ba');

        return (
          <div
            className="NumberTable-Square"
            style={{ backgroundColor: `${bgColor}` }}
            key={number.toString()}
          >
            <p>{number.toString()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
