import { CardType } from "@/app/types/cardType";

export const checkCardMatch = (
  cards: CardType[],
  [id1, id2]: [string, string]
) => {
  const card1 = cards.find((card) => card.id === id1);
  const card2 = cards.find((card) => card.id === id2);
  if (!card1 || !card2) return false;
  return card1.content === card2.content;
};
