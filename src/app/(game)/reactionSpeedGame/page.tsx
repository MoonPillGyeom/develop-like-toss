"use client";

import StartCountdownWrapper from "@/components/common/StartWrapper/StartWrapper";
import ReactionGameContent from "@/app/(game)/reactionSpeedGame/_components/GameContent";

export default function ReactionSpeadGame() {
  return (
    <StartCountdownWrapper gameName={"반응속도"}>
      <ReactionGameContent />
    </StartCountdownWrapper>
  );
}
