import { useEffect, useState } from "react";

type Stage = "idle" | "countdown" | "start";

export const useCountdownStage = (initialCount: number = 3) => {
  const [stage, setStage] = useState<Stage>("idle");
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    if (stage === "countdown") {
      if (count > 0) {
        const timer = setTimeout(() => {
          setCount((prev) => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
      } else {
        setStage("start");
      }
    }
  }, [stage, count]);

  const startCountdown = () => {
    setStage("countdown");
  };

  return {
    stage,
    count,
    startCountdown,
  };
};
