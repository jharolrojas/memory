import "./App.css";
import Board from "./componets/board/Board";
import Header from "./componets/Header/Header";
import useShuffled from "./CustomHoocks/useShuffled";

function App() {
  const { shuffledMemoBlocks, handleMemoryClick, animating, count } =
    useShuffled();

  return (
    <div className="App">
      <Header shuffledMemoBlocks={shuffledMemoBlocks} count={count} />
      <Board
        shuffledMemoBlocks={shuffledMemoBlocks}
        handleMemoryClick={handleMemoryClick}
        animating={animating}
      />
    </div>
  );
}

export default App;
