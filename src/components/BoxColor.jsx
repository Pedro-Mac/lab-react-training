import React from 'react';

import './styles/BoxColor.css';

const BoxColor = (props) => {
  const r = props.r;
  const g = props.g;
  const b = props.b;
  return (
    <div
      className="Box-Color"
      style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
    >
      <h1>It. 4</h1>
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
    </div>
  );
};

export default BoxColor;
