import React from 'react';

const Random = (props) => {
  const randomNum = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );

  return (
    <div>
      <h3>It.3</h3>
      <p>
        Random number between {props.min} and {props.max} = {randomNum}
      </p>
    </div>
  );
};

export default Random;
