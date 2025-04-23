"use client";

import { useRef } from "react";

export default function Galaga() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  return (
    <canvas
      ref={canvasRef}
      width={900}
      height={950}
      className="bg-red-40"
    ></canvas>
  );
}
