"use client";

import clsx from "clsx";
import { useReactionGame } from "@/app/(game)/reactionSpeedGame/_lib/useReactionGame";

export default function ReactionGameContent() {
  const { isBlueScreen, isGameOver, averageTime, handleClick } =
    useReactionGame();

  return (
    <div className="flex flex-col gap-2.5 w-full">
      <div
        onClick={handleClick}
        className={clsx(
          " h-80 flex justify-center items-center text-white text-xl font-bold cursor-pointer transition-colors",
          isBlueScreen ? "bg-blue-40" : "bg-red-40"
        )}
      >
        {isGameOver
          ? "게임종료"
          : isBlueScreen
          ? "클릭!!!"
          : "파란 화면이 나오면 클릭하세요!"}
      </div>

      {averageTime && (
        <p className="mt-4 text-center font-bold text-3xl">
          평균 반응속도: {averageTime}ms
        </p>
      )}
    </div>
  );
}
