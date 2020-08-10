import React from 'react';

const Greetings = (props) => {
  let greetings;

  switch (props.lang) {
    case 'en':
      greetings = 'Hello';
      break;
    case 'fr':
      greetings = 'Bonjour';
      break;
    case 'es':
      greetings = 'Hola';
      break;
    case 'de':
      greetings = 'Hallo';
      break;
    default:
      greetings = 'Ola';
  }
  return (
    <div>
      <h3>It.2</h3>
      <p>
        {greetings} {props.children}
      </p>
    </div>
  );
};

export default Greetings;
