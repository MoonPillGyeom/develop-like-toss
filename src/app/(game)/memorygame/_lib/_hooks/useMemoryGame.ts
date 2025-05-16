import { useEffect, useState } from "react";
import { initGame } from "@/app/(game)/memorygame/_lib/initGame";
import { useFlippedCards } from "@/app/(game)/memorygame/_lib/_hooks/useFlip";
import { useMatchCardsChecker } from "@/app/(game)/memorygame/_lib/_hooks/useMatchedCards";
import { CardType } from "@/app/types/cardType";

export const useMemoryGame = () => {
  const [flipCount, setFlipCount] = useState<number>(0);
  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const { flippedCardIds, flipCard, resetFlipped } =
    useFlippedCards(setFlipCount);

  const { matchedCardIds, isMatching, lastResult } = useMatchCardsChecker(
    flippedCardIds,
    shuffledCards,
    resetFlipped
  );

  useEffect(() => {
    setShuffledCards(initGame());
  }, []);

  // TODO: 추후 다시하기 버튼 용이하게 미리 구현
  // const resetGame = () => {
  //   setFlipCount(0);
  //   setShuffledCards(initGame());
  // };

  return {
    flipCount,
    shuffledCards,
    flippedCardIds,
    matchedCardIds,
    isMatching,
    lastResult,
    flipCard,
  };
};
