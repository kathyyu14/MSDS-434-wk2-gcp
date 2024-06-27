// Cell.js
import React from 'react';
import './Cell.css';

const Cell = ({ value, revealed, onClick }) => {
  const renderCell = () => {
    if (!revealed) {
      return '';
    }

    if (value === 'M') {
      return '💣';
    }
    return value;
  };

  return (
    <div className="cell" onClick={onClick}>
      {renderCell()}
    </div>
  );
};

export default Cell;
