import React from "react";
import "./memoryCard.css";

const MemoryCard = ({ shuffledMemoBlocks, handleMemoryClick, animating }) => {
  return (
    <div
      className="memo-card"
      onClick={() =>
        !shuffledMemoBlocks.flipped &&
        !animating &&
        handleMemoryClick(shuffledMemoBlocks)
      }
    >
      <div
        className={`memo-card-inner ${
          shuffledMemoBlocks.flipped && "memo-card-flipped"
        }`}
      >
        <div className="memo-card-front"></div>
        <div className="memo-card-back">{shuffledMemoBlocks.emoji}</div>
      </div>
    </div>
  );
};

export default MemoryCard;
