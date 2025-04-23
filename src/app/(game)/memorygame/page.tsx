"use client";

import Card from "@/app/(game)/memorygame/_components/Card";
import { useEffect, useState } from "react";
import { CardType } from "@/app/types/cardType";
import initGame from "@/app/(game)/memorygame/_lib/initGame";
import { useFlippedCards } from "@/app/(game)/memorygame/_lib/useFlip";
import { useMatchedCards } from "@/app/(game)/memorygame/_lib/useMatchedCards";
import StartCountdownWrapper from "@/components/common/GameStartWrapper/GameStartWrapper";

function MemoryGame() {
  const [counter, setCounter] = useState<number>(Number);
  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const { flippedCardIds, flipCard, resetFlipped } =
    useFlippedCards(setCounter);

  const { matchedCardIds } = useMatchedCards(
    flippedCardIds,
    shuffledCards,
    resetFlipped
  );

  useEffect(() => {
    setShuffledCards(initGame());
  }, []);

  return (
    <StartCountdownWrapper gameName="기억력 테스트">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-blue-40 font-bold text-2xl">SCORE : {counter}</h1>
        <div className="grid grid-cols-5 gap-10">
          {shuffledCards.map(({ id, content }) => (
            <Card
              key={id}
              content={content}
              isFlipped={flippedCardIds.includes(id)}
              isMatched={matchedCardIds.includes(id)}
              onClick={() => flipCard(id)}
            />
          ))}
        </div>
      </div>
    </StartCountdownWrapper>
  );
}
export default MemoryGame;
