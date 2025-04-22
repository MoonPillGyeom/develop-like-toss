"use client";

import Card from "@/app/(game)/memorygame/_components/Card";
import { useEffect, useState } from "react";
import { CardType } from "@/app/types/cardType";
import { initializeGame } from "@/app/(game)/memorygame/lib/initGame";
import { useFlippedCards } from "@/app/(game)/memorygame/lib/useFlip";

function MemoryGame() {
  const [shuffledCards, setShuffledCards] = useState<CardType[]>([]);
  const { flippedCardIds, flipCard } = useFlippedCards(shuffledCards);
  console.log(flippedCardIds);

  useEffect(() => {
    setShuffledCards(initializeGame());
  }, []);

  return (
    <div className="grid grid-cols-5 gap-10">
      {shuffledCards.map(({ id, content }) => (
        <Card
          key={id}
          content={content}
          isFlipped={flippedCardIds.includes(id)}
          onClick={() => flipCard(id)}
        />
      ))}
    </div>
  );
}
export default MemoryGame;
