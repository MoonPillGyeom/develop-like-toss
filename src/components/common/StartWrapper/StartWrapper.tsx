"use client";

import Button from "@/components/common/Button/Button";
import { useState, useEffect, ReactNode } from "react";

interface StartWrapperProps {
  gameName: string;
  children: ReactNode;
}

export default function StartWrapper({
  gameName,
  children,
}: StartWrapperProps) {
  const [stage, setStage] = useState<"idle" | "countdown" | "start">("idle");
  const [count, setCount] = useState(3);

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

  if (stage === "idle") {
    return (
      <div className="flex justify-center mt-4">
        <Button className="px-3 py-2" onClick={() => setStage("countdown")}>
          {gameName} 시작하기
        </Button>
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
