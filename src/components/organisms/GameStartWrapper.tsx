"use client";

import { useCountdownStage } from "@/app/hooks/useCountdownStage";
import Button from "@/components/atoms/Button";
import { ReactNode } from "react";

interface StartWrapperProps {
  gameName: string;
  countdownStart: number;
  children: ReactNode;
}

export default function GameStartWrapper({
  gameName,
  countdownStart,
  children,
}: StartWrapperProps) {
  const { stage, count, startCountdown } = useCountdownStage(countdownStart);

  if (stage === "idle") {
    return (
      <div className="flex justify-center mt-4" onClick={startCountdown}>
        <Button className="px-3 py-2">{gameName} 시작하기</Button>
      </div>
    );
  }

  if (stage === "countdown") {
    return (
      <div className="h-80 flex items-center justify-center text-6xl font-bold text-white">
        {count}
      </div>
    );
  }

  return <>{children}</>;
}
