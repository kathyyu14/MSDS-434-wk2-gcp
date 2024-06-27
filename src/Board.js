// Board.js
import React, { useState, useEffect } from 'react';
import Cell from './Cell';
import './Board.css';

const createBoard = (rows, cols, mines) => {
  let board = Array(rows).fill(null).map(() => Array(cols).fill({
    value: null,
    revealed: false,
  }));
  let minesPlaced = 0;

  while (minesPlaced < mines) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);

    if (!board[row][col].value) {
      board[row][col].value = 'M';
      minesPlaced++;
    }
  }

  return board;
};

const Board = () => {
  const [board, setBoard] = useState([]);
  const [rows] = useState(10);
  const [cols] = useState(10);
  const [mines] = useState(10);

  useEffect(() => {
    setBoard(createBoard(rows, cols, mines));
  }, [rows, cols, mines]);

  const handleClick = (rowIndex, colIndex) => {
    const newBoard = [...board];
    newBoard[rowIndex][colIndex].revealed = true;
    setBoard(newBoard);
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell.value}
            revealed={cell.revealed}
            onClick={() => handleClick(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};

export default Board;
