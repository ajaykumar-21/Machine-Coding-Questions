import React, { useEffect, useState } from "react";
import styles from "./MemoryGame.module.css";

function MemoryGame() {
  const [cards, setCards] = useState(generateGrid());
  const [isLocked, setIsLocked] = useState(false);
  const [flippedCard, setflippedCard] = useState([]);
  // console.log(cards[flippedCard[0]].number);

  const handleClick = (id) => {
    if (cards[id].isFlipped || isLocked) {
      return;
    }

    const copy = [...cards];
    copy[id].isFlipped = !copy[id].isFlipped;
    setCards(copy);
    setflippedCard([...flippedCard, id]);
  };

  useEffect(() => {
    if (flippedCard.length === 2) {
      setIsLocked(true);
      setTimeout(() => {
        if (cards[flippedCard[0]].number !== cards[flippedCard[1]].number) {
          setCards((prevCards) => {
            const copyCards = [...prevCards];
            copyCards[flippedCard[0]].isFlipped = false;
            copyCards[flippedCard[1]].isFlipped = false;
            return copyCards;
          });
        }
        setIsLocked(false);
        setflippedCard([]);
      }, 3000);
    }
  }, [flippedCard]);

  return (
    <div className={styles.gridContainer}>
      {cards.map(({ id, number, isFlipped }) => (
        <button
          key={id}
          className={styles.cards}
          onClick={() => handleClick(id)}
        >
          {isFlipped ? number : "?"}
        </button>
      ))}
    </div>
  );
}

export default MemoryGame;

function generateGrid() {
  const arr = Array.from({ length: 18 }, (_, index) => index + 1);
  const grid = [...arr, ...arr].sort(() => Math.random() - 0.5);
  const cards = grid.map((item, index) => {
    return {
      id: index,
      number: item,
      isFlipped: false,
    };
  });
  return cards;
}
