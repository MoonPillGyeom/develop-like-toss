import { CardType } from "@/app/types/cardType";
import { useEffect, useState } from "react";

/**
 *
 * @param flippedCardIds 뒤집힌 카드ID 값
 * @param cards 셔플된 카드
 * @param resetFlipped 뒤집힌 카드ID 배열 초기화
 * @returns 뒤집힌 카드ID 중 일치하는 값
 */

export const useMatchedCards = (
  flippedCardIds: string[],
  cards: CardType[],
  resetFlipped: () => void
) => {
  const [matchedCardIds, setMatchedCardIds] = useState<string[]>([]);

  useEffect(() => {
    if (flippedCardIds.length === 2) {
      const [firstId, secondId] = flippedCardIds;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      if (firstCard && secondCard) {
        const timeout = setTimeout(() => {
          if (firstCard.content === secondCard.content) {
            setMatchedCardIds((prev) => [...prev, firstId, secondId]);
          }
          resetFlipped();
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [flippedCardIds, cards]);
  return { matchedCardIds };
};
