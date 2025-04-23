import { useEffect, useState } from "react";

const TOTAL_TIMER = 12000;
const MAX_ATTEMPTS = 4;
const MIN_DELAY = 1000;
const MAX_DELAY = 4000;
const READY_DURATION = 1000;
const INIT_GAME_START_DELAY = 2000;

export function useReactionGame() {
  const [isBlueScreen, setIsBlueScreen] = useState(false);
  const [blueScreenStartTime, setBlueScreenStartTime] = useState<number | null>(
    null
  );
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const start = performance.now();

    const scheduleNextReady = (count: number) => {
      if (count >= MAX_ATTEMPTS || performance.now() - start > TOTAL_TIMER)
        return;

      const delay = Math.random() * (MAX_DELAY - MIN_DELAY) + MIN_DELAY;

      const timeout = setTimeout(() => {
        setIsBlueScreen(true);

        setBlueScreenStartTime(performance.now());

        setTimeout(() => setIsBlueScreen(false), READY_DURATION);

        scheduleNextReady(count + 1);
      }, delay);

      timeouts.push(timeout);
      console.log("추가된 timeout:", timeout);
      console.log("현재까지 timeouts:", timeouts);
    };

    const firsetGameStart = setTimeout(() => {
      scheduleNextReady(0);
    }, INIT_GAME_START_DELAY);
    timeouts.push(firsetGameStart);

    const endTimer = setTimeout(() => {
      setIsGameOver(true);
    }, TOTAL_TIMER);

    return () => {
      timeouts.forEach(clearTimeout);
      clearTimeout(endTimer);
    };
  }, []);

  const handleClick = () => {
    if (isGameOver) return false;

    if (!isBlueScreen) {
      alert("너무 빨라요! 다시 시작합니다.");
      window.location.reload();
      return false;
    }

    if (blueScreenStartTime) {
      const reaction = performance.now() - blueScreenStartTime;

      setReactionTimes((prev) => [...prev, reaction]);
    }

    setIsBlueScreen(false);
    return true;
  };

  const averageTime =
    reactionTimes.length > 0
      ? (
          reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length
        ).toFixed(2)
      : null;

  return {
    isBlueScreen,
    isGameOver,
    averageTime,
    handleClick,
  };
}
