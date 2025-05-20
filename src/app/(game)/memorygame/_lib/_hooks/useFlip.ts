import { Dispatch, SetStateAction, useState } from "react";

// 뒤집기만 관리하는게 아닌 뒤집기 이후 count를 올리는 역할도 담당하는데
// useFlippedCards가 맞을까
// 뒤집었을때 나오는 역할을 총괄하는 느낌의 useFlipController이 맞을까

export const useFlippedCards = (
  setFlipCount: Dispatch<SetStateAction<number>>
) => {
  const [flippedCardIds, setFlippedCardIds] = useState<string[]>([]);

  const flipCard = (id: string) => {
    if (flippedCardIds.includes(id)) return;
    if (flippedCardIds.length >= 2) return;

    setFlippedCardIds((prev) => [...prev, id]);
    setFlipCount((prev) => prev + 1);
  };

  const resetFlipped = () => setFlippedCardIds([]);

  return { flippedCardIds, flipCard, resetFlipped };
};
