"use client";

import clsx from "clsx";

interface CardProps {
  content: string;
  isFlipped: boolean;
  onClick: () => void;
}

export default function Card({ content, isFlipped, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="w-20 h-28 sm:w-40 sm:h-52 cursor-pointer perspective transition-transform duration-500"
    >
      <div
        className={clsx(
          "relative w-full h-full transform-style-preserve-3d",
          "transition-transform duration-500",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* 앞면 */}
        <div className="absolute w-full h-full bg-white text-black rounded-lg shadow-md flex items-center justify-center backface-hidden">
          ?
        </div>

        {/* 뒷면 */}
        <div className="absolute w-full h-full bg-blue-500 text-white rounded-lg shadow-md flex items-center justify-center backface-hidden transform rotate-y-180 font-bold text-xl">
          {content}
        </div>
      </div>
    </div>
  );
}
