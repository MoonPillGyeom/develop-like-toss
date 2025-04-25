"use client";

import { useEffect, useRef } from "react";

export default function Galaga() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.src = "/bullet.png";

    let animationFrameId: number;
    let y = 0;

    const render = () => {
      // 나중에 render 내용 loop함수로 이동해서 담기.
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(image, canvas.width / 2 - 10, y, 20, 20);
      y += 4;
      if (y < -20) y = 950;

      animationFrameId = requestAnimationFrame(render); // 다음 프레임 요청
    };

    image.onload = () => {
      render();
    };

    return () => cancelAnimationFrame(animationFrameId); // cleanup
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
