import { Dispatch, SetStateAction, useState } from "react";

export const useFlippedCards = (
  setCounter: Dispatch<SetStateAction<number>>
) => {
  const [flippedCardIds, setFlippedCardIds] = useState<string[]>([]);

  const flipCard = (id: string) => {
    if (flippedCardIds.includes(id)) return;
    if (flippedCardIds.length >= 2) return;
    setFlippedCardIds((prev) => [...prev, id]);
    setCounter((prev) => prev + 1);
  };

  const resetFlipped = () => setFlippedCardIds([]);

  return { flippedCardIds, flipCard, resetFlipped };
};
