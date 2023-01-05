import React from "react";
import "./header.css";

const Header = ({ shuffledMemoBlocks, count }) => {
  console.log(count);
  return (
    <div className="header">
      <div className="count">
        {count - 1} / {shuffledMemoBlocks.length / 2}
      </div>
    </div>
  );
};

export default Header;
