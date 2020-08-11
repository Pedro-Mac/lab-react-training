import React from 'react';

import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';

import './App.css';

function App() {
  return (
    <div className="App">
      <IdCard
        firstName="Juca"
        lastName="Sansao"
        gender="Male"
        height={1.78}
        birth={new Date(3, 5, 1989)}
      >
        <img
          src="https://source.unsplash.com/user/erondu/400x225"
          alt="blabla"
        />
      </IdCard>

      <Greetings lang="en">Marcelo</Greetings>
      <Greetings lang="de">Maximilian</Greetings>
      <Greetings lang="es">Sergio</Greetings>
      <Greetings lang="fr">Jean Pierre</Greetings>
      <Greetings>Joao Pedro</Greetings>

      <Random min={5} max={120} />
      <Random min={120} max={150} />
      <Random min={1} max={10} />

      <BoxColor r="50" g="150" b="200" />
      <BoxColor r="200" g="10" b="200" />
      <BoxColor r="209" g="150" b="100" />

      <CreditCard
        type="Visa"
        number="0123456789010995"
        expirationMonth={10}
        expirationYear={2021}
        bank="Santander"
        owner="Barack Obama"
        bgColor="040403"
        color="#c3e8bd"
      />

      <Rating>0.4</Rating>
      <Rating>0.5</Rating>
      <Rating>1.5</Rating>
      <Rating>2.59</Rating>
      <Rating>3.5</Rating>
      <Rating>5</Rating>

      <DriverCard
        name="Dara Khosrowshahi"
        rating={1.5}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />

      <LikeButton />

      <ClickablePicture />

      <Dice />

      <Carousel
        imgs={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg',
        ]}
      />
    </div>
  );
}

export default App;
