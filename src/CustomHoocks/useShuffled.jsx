import { useState, useEffect } from "react";
const emojilist = [..."🐶🐺🦊🐱🦉🐸🐴🐞"];

const useShuffled = () => {
  const [shuffledMemoBlocks, setShuffledMemoBlocks] = useState([]);
  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [count, setCount] = useState(1);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const shufflerEmoji = shuffleArray([...emojilist, ...emojilist]);
    setShuffledMemoBlocks(
      shufflerEmoji.map((emoji, i) => ({
        index: i,
        emoji: emoji,
        flipped: false,
      }))
    );
  }, [reset]);

  const shuffleArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const handleMemoryClick = (memoBlock) => {
    const flippedMemoBlock = { ...memoBlock, flipped: true };

    let shuffledMemoBlockCopy = [...shuffledMemoBlocks];

    shuffledMemoBlockCopy.splice(memoBlock.index, 1, flippedMemoBlock);

    setShuffledMemoBlocks(shuffledMemoBlockCopy);

    if (selectedMemoBlock === null) {
      setSelectedMemoBlock(memoBlock);
    } else if (selectedMemoBlock.emoji === memoBlock.emoji) {
      setSelectedMemoBlock(null);
      setCount(count + 1);

      console.log(count, shuffledMemoBlocks.length / 2);
      count == shuffledMemoBlocks.length / 2 &&
        setTimeout(() => {
          Swal.fire({ title: "¡Ganaste! Que buena memoria tienes" });
          setReset(!reset);
          setCount(1);
        }, 500);
    } else {
      setAnimating(true);

      setTimeout(() => {
        shuffledMemoBlockCopy.splice(memoBlock.index, 1, memoBlock);

        shuffledMemoBlockCopy.splice(
          selectedMemoBlock.index,
          1,
          selectedMemoBlock
        );

        setShuffledMemoBlocks(shuffledMemoBlockCopy);

        setSelectedMemoBlock(null);

        setAnimating(false);
      }, 1000);
    }
  };
  return {
    shuffledMemoBlocks,
    selectedMemoBlock,
    animating,
    count,
    handleMemoryClick,
  };
};

export default useShuffled;
