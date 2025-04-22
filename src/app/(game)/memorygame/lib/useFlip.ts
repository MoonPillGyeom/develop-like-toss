import { useState, useEffect } from "react";
import { CardType } from "@/app/types/cardType";

export const useFlippedCards = (cards: CardType[]) => {
  const [flippedCardIds, setFlippedCardIds] = useState<string[]>([]);

  const flipCard = (id: string) => {
    if (flippedCardIds.includes(id)) return;
    if (flippedCardIds.length >= 2) return;
    setFlippedCardIds((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (flippedCardIds.length === 2) {
      const [firstId, secondId] = flippedCardIds;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      if (firstCard && secondCard && firstCard.content !== secondCard.content) {
        const timeout = setTimeout(() => {
          setFlippedCardIds([]);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [flippedCardIds, cards]);

  return { flippedCardIds, flipCard };
};
