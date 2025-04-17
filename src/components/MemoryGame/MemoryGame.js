import React, { useState } from "react";
import styles from "./MemoryGame.module.css";

function MemoryGame() {
  const [cards, setCards] = useState(generateGrid());

  const handleClick = (id) => {
    const copy = [...cards];
    copy[id].isFlipped = true;
    setCards(copy);
  };
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
