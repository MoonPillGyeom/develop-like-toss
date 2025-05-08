import { useEffect, useRef, useState } from "react";
import { RandomDelay } from "../RandomDelay";

interface UseGameSchedulerProps {
  startMeasure: () => void;
  gameEnd: () => void;
}

const TOTAL_TIMER = 12000;
const MAX_ATTEMPTS = 4;
const MAX_DELAY = 4000;
const MIN_DELAY = 1000;
const READY_DURATION = 1000;
const INIT_GAME_START_DELAY = 2000;

/**
 *
 * @param startMeasure 블루스크린이 화면에 등장하는 시간값
 * @param gameEnd 게임이 종료되는 순간
 * @returns isBlueScreen :현재 반응 테스트 화면이 활성화된 상태 (true면 반응 측정 중)
 */

export const useGameScheduler = ({
  startMeasure,
  gameEnd,
}: UseGameSchedulerProps) => {
  const [isBlueScreen, setIsBlueScreen] = useState(false);
  const attemptCountRef = useRef(0);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    const start = performance.now();

    const scheduleRound = () => {
      if (
        attemptCountRef.current >= MAX_ATTEMPTS ||
        performance.now() - start > TOTAL_TIMER
      ) {
        gameEnd();
        return;
      }

      const delay = RandomDelay(MAX_DELAY, MIN_DELAY);
      const timer = setTimeout(() => {
        setIsBlueScreen(true);
        startMeasure();

        setTimeout(() => {
          setIsBlueScreen(false);
        }, READY_DURATION);

        attemptCountRef.current += 1;
        scheduleRound(); // 다음 라운드 예약
      }, delay);
      timeouts.push(timer);
    };

    const gameStart = setTimeout(() => {
      scheduleRound();
    }, INIT_GAME_START_DELAY);
    const endGame = setTimeout(gameEnd, TOTAL_TIMER);

    timeouts.push(gameStart, endGame);

    return () => timeouts.forEach(clearTimeout);
  }, [startMeasure, gameEnd]);

  return { isBlueScreen };
};
