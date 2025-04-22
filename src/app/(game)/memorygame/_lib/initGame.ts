import { CardType } from "@/app/types/cardType";
import { MEMORYGAME_CONTENT } from "@/constants/MemoryGame";
import shuffle from "./shuffle";

export function initializeGame(): CardType[] {
  const duplicated = [...MEMORYGAME_CONTENT, ...MEMORYGAME_CONTENT];
  const withIds = duplicated.map((item) => ({
    id: crypto.randomUUID(),
    content: item,
  }));
  return shuffle(withIds);
}
