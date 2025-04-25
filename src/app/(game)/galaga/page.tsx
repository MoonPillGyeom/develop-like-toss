"use client";

import {
  handleKeyboardListener,
  handleKeyboardDelete,
  handleSpaceUpdate,
} from "@/app/(game)/galaga/_lib/controllers";
import { LoadImage } from "@/app/(game)/galaga/_lib/loadImage";
import { useEffect, useRef } from "react";

export default function Galaga() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    window.addEventListener("keydown", handleKeyboardListener);
    window.addEventListener("keyup", handleKeyboardDelete);

    const { bulletImage, spaceFighterImage, enemyPlaneWhite } = LoadImage();

    // 내 우주선
    const SPACEFIGHTER_HEIGHT_WIDTH = 50;
    let spaceFighterX = canvas.width / 2;
    let spaceFighterY = 950 - SPACEFIGHTER_HEIGHT_WIDTH;

    let animationFrameId: number;

    const render = () => {
      const { X, Y } = handleSpaceUpdate(spaceFighterX, spaceFighterY);
      spaceFighterX = X;
      spaceFighterY = Y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(
        spaceFighterImage,
        spaceFighterX,
        spaceFighterY,
        SPACEFIGHTER_HEIGHT_WIDTH,
        SPACEFIGHTER_HEIGHT_WIDTH
      );
      animationFrameId = requestAnimationFrame(render); // 다음 프레임 요청
    };

    bulletImage.onload = () => {
      render();
    };

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.addEventListener("keydown", handleKeyboardListener);
      window.addEventListener("keyup", handleKeyboardDelete);
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
