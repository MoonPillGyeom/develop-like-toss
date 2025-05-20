"use client";

import StartCountdownWrapper from "@/components/organisms/GameStartWrapper";
import ReactionGameContent from "@/app/(game)/reactionSpeedGame/_components/GameContent";

export default function ReactionSpeadGame() {
  return (
    <StartCountdownWrapper gameName={"반응속도 테스트"} countdownStart={3}>
      <ReactionGameContent />
    </StartCountdownWrapper>
  );
}
