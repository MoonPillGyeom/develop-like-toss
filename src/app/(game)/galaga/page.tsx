"use client";

import { initGame } from "@/app/(game)/galaga/_lib/initGame";
import { useEffect, useRef } from "react";

export default function Galaga() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // initGame return값 담을 함수 생성
    let cleanupFn: () => void;

    initGame(canvas).then((cleanup) => {
      cleanupFn = cleanup;
    });

    return () => {
      if (cleanupFn) cleanupFn();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={950}
      className="bg-[url('/background-space.jpeg')] bg-cover"
    ></canvas>
  );
}
