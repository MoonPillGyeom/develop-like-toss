"use client";

import Card from "@/app/(game)/memorygame/_components/Card";
import { useState } from "react";

function MemoryGame() {
  const [isBoolean, setIsBoolean] = useState(false);
  const handleClick = () => {
    setIsBoolean(!isBoolean);
  };
  return (
    <div>
      test
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
    </div>
  );
}
export default MemoryGame;
