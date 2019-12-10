///useEffect-it can be used in order to simulate a component didMount, willMount and etc..
import React, { useState, useEffect } from 'react';
import Card from './components/card';
import generateCards from './cardsGenerator'

export default function App() {
  //create state for cards
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const handleClick = (id) => setFlipped([...flipped, id]);
  //this arrow function will run, when this effect happens, the second value sees when this need to be called 
  useEffect(() => {
    setCards(generateCards())
  }, [])

  return (
    <div className="mainDiv">
      {cards.map((card) => (
        <Card
          id={card.id}
          imgType={card.imgType}
          width={card.width}
          height={card.height}
          flipped={flipped.includes(card.id)}
          handleClick={() => handleClick(card.id)}
        />
      ))
      }

    </div>
  )
}