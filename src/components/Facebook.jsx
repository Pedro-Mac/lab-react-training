import React from 'react';
import Data from './../data/berlin.json';

import './styles/Facebook.css';

const Facebook = () => {
  const countries = [];
  for (let el of Data) {
    if (!countries.includes(el.country)) {
      countries.push(el.country);
    }
  }

  return (
    <div>
      <h1>Iteration 13</h1>
      <div>
        {countries.map((country) => {
          return <button key={country}>{country}</button>;
        })}
      </div>

      {Data.map((profile) => {
        let type = profile.isStudent ? 'Student' : 'Teacher';

        return (
          <div className="Facebook-profile-container" key={profile.img}>
            <img
              className="Facebook-img"
              src={profile.img}
              alt={profile.firstName}
            />
            <div>
              <p>First name: {profile.firstName}</p>
              <p>First name: {profile.lastName}</p>
              <p>Country: {profile.country}</p>
              <p>Type: {type}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Facebook;
