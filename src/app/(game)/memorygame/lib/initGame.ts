import { CardType } from "@/app/types/cardType";
import { content } from "@/constants/MemoryGame";
import shuffle from "./shuffle";

export function initializeGame(): CardType[] {
  const duplicated = [...content, ...content];
  const withIds = duplicated.map((item) => ({
    id: crypto.randomUUID(),
    content: item,
  }));
  return shuffle(withIds);
}
