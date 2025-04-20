"use client";

import Card from "@/app/(game)/memorygame/_components/Card";
import { useState } from "react";

function MemoryGame() {
  const [isBoolean, setIsBoolean] = useState(false);
  const handleClick = () => {
    setIsBoolean(!isBoolean);
  };
  return (
    <div className="grid grid-cols-5 gap-10">
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
      <Card content="사과" isFlipped={isBoolean} onClick={handleClick} />
    </div>
  );
}
export default MemoryGame;
