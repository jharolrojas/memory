import React from "react";
import MemoryCard from "../memoryCard/MemoryCard";
import "./board.css";

const Board = ({ shuffledMemoBlocks, handleMemoryClick, animating }) => {
  return (
    <div className="board">
      {shuffledMemoBlocks.map((shuffledMemoBlocks, i) => (
        <MemoryCard
          key={`${i}_${shuffledMemoBlocks.emoji}`}
          shuffledMemoBlocks={shuffledMemoBlocks}
          handleMemoryClick={handleMemoryClick}
          animating={animating}
        />
      ))}
    </div>
  );
};

export default Board;
