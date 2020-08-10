import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let monthWithZero = '';

  if (expirationMonth <= 9) {
    monthWithZero = '0';
  }

  return (
    <div
      style={{
        backgroundColor: `#${bgColor}`,
        color: `${color}`,
        width: '300px',
        height: '200px',
        borderRadius: '0.5rem',
      }}
    >
      <h3>It.5 {type}</h3>
      <p>**** **** **** {number.slice(number.length - 4, number.length)}</p>
      <div>
        <p>
          Expires {monthWithZero}
          {expirationMonth}/{expirationYear.toString()[2]}
          {expirationYear.toString()[3]}
        </p>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
