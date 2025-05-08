import { useState } from "react";
import { useGameScheduler } from "./useGameScheduler";
import { useReactionTracker } from "./useReactionTracker";

export const useReactionGame = () => {
  const [isGameOver, setIsGameOver] = useState(false);

  const { startMeasure, clickTimeRecording, averageTime } =
    useReactionTracker();

  const gameEnd = () => {
    setIsGameOver(true);
    // TODO: 게임 종료 후 기록 저장 등 다른 작업
  };

  const { isBlueScreen } = useGameScheduler({
    startMeasure,
    gameEnd,
  });

  const handleClick = () => {
    if (isGameOver) return;

    if (!isBlueScreen) {
      alert("너무 빨라요! 다시 시작합니다.");
      window.location.reload();
      return;
    }

    clickTimeRecording();
  };

  return {
    isBlueScreen,
    isGameOver,
    averageTime,
    handleClick,
  };
};
