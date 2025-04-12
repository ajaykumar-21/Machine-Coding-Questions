import React, { useState } from "react";
import styles from "./Tic-Tac-Toe.module.css";

const initialBoard = () => Array(9).fill(null);

function TicTacToe() {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsnext] = useState(false);
  console.log(board);

  const handleOnClick = (index) => {
    // console.log(index);
    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsnext(!isNext);
  };

  console.log(board);
  return (
    <div>
      <div>
        <button>Reset Game</button>
      </div>
      <div className={styles.boardContainer}>
        {board.map((b, i) => (
          <button
            key={i}
            className={styles.box}
            onClick={() => handleOnClick(i)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TicTacToe;
