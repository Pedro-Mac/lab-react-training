import React from 'react';

import './styles/IdCard.css';

const IdCard = (props) => {
  return (
    <div className="Id-Card-container">
      <div>{props.children}</div>
      <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}m</p>
        <p>Birth: {props.birth.toString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
