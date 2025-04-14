import React, { useState } from "react";
import styles from "./Tic-Tac-Toe.module.css";

const initialBoard = () => Array(9).fill(null);

function TicTacToe() {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsnext] = useState(false);

  const WINNING_PATTERN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculatedWinner = (currentBoard) => {
    for (let i = 0; i < WINNING_PATTERN.length; i++) {
      const [a, b, c] = WINNING_PATTERN[i];
      // console.log(currentBoard[a]);
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  };

  const getStatusMessag = () => {
    const winner = calculatedWinner(board);

    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!`;
    return `Player ${isNext ? "X" : "O"} turn`;
  };

  const handleOnClick = (index) => {
    // console.log(index);
    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsnext(!isNext);
  };

  // console.log(board);
  return (
    <div>
      <h2>{getStatusMessag()}</h2>
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
