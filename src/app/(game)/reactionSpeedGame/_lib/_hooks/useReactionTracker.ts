import { useState } from "react";

/**
 *
 * @returns markStartTime: 파란화면이 나타난 시간
 * @returns clickTimeRecording: 클릭 시간 기록
 * @returns averageTime: 반응속도 평균 시간 계산
 */
export const useReactionTracker = () => {
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);

  const startMeasure = () => setStartTime(performance.now());

  const clickTimeRecording = () => {
    if (!startTime) return;
    const reaction = performance.now() - startTime;
    setReactionTimes((prev) => [...prev, reaction]);
    setStartTime(null);
  };

  const averageTime =
    reactionTimes.length > 0
      ? (
          reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length
        ).toFixed(2)
      : null;

  return { startMeasure, clickTimeRecording, averageTime };
};
