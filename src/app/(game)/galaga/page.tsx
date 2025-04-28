"use client";

import { initGame } from "@/app/(game)/galaga/_lib/initGame";
import { useEffect, useRef, useState } from "react";

export default function Galaga() {
  const [isGameOver, setIsGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // initGame return값 담을 함수 생성
    let cleanupFn: () => void;

    initGame(canvas, setIsGameOver).then((cleanup) => {
      cleanupFn = cleanup;
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        width={900}
        height={950}
        className="bg-[url('/background-space.jpeg')] bg-cover"
      ></canvas>

      {isGameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black-40 opacity-40">
          <h1 className="text-4xl font-bold text-white">GAME OVER</h1>
        </div>
      )}
    </>
  );
}
