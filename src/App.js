///useEffect-it can be used in order to simulate a component didMount, willMount and etc..
import React, { useState, useEffect } from 'react';
import Card from './components/card';
import generateCards from './cardsGenerator';
import './App.css';
let count = 0;

export default function App() {
  //create state for cards
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [solved, setSolved] = useState([]);

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (clickedSame(flipped, id)) return
      setFlipped([flipped[0], id])
      if (checkForMatch(id)) {
        hideImg(id);
        setTimeout(unflipCards, 1000);

      } else {
        setTimeout(unflipCards, 1000);
      }
    }
  }

  const clickedSame = (id) => flipped.includes(id);
  const hideImg = (id) => {
    setSolved([...solved, flipped[0], id]);
  }
  const unflipCards = () => {
    setFlipped([]);
    setDisabled(false);
  }

  function checkForMatch(id) {
    const clicked = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    count++;
    return flippedCard.imgType === clicked.imgType;
  }

  //this arrow function will run, when this effect happens, the second value sees when this need to be called 
  useEffect(() => {
    setCards(generateCards())
  }, [])


  return (
    <>
      <div className="checkSt">
        <p>Your number of steps is {count}</p>
      </div>
      <div className="mainDiv">
        {cards.map((card) => (
          <Card
            id={card.id}
            imgType={card.imgType}
            width={card.width}
            height={card.height}
            flipped={flipped.includes(card.id)}
            handleClick={handleClick}
            disabled={disabled || solved.includes(card.id)}
            solved={solved.includes(card.id)}

          />
        ))
        }
      </div>
    </>
  )
}