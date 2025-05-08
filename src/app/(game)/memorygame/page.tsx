"use client";

import StartCountdownWrapper from "@/components/organisms/GameStartWrapper";
import MemoryGameContent from "@/app/(game)/memorygame/_components/GameContent";

function MemoryGame() {
  return (
    <StartCountdownWrapper gameName="기억력 테스트" countdownStart={3}>
      <MemoryGameContent />
    </StartCountdownWrapper>
  );
}
export default MemoryGame;
