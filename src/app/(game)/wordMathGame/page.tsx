"use client";

import Inputs from "@/app/(game)/wordMathGame/_components/Inputs";
import Button from "@/components/common/Button/Button";
import { ChangeEvent, useState } from "react";
export default function WordMathGame() {
  const [word, setWord] = useState<string>("");
  const [counter, setCounter] = useState<number>(1);
  console.log(word);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    console.log("onChange");
  };

  const handleClick = () => {
    if (counter < 5) {
      setCounter((prev) => prev + 1);
    }
  };

  return (
    <div>
      {Array.from({ length: counter }).map((_, i) => (
        <Inputs onChange={handleOnChange} key={i} />
      ))}
      <Button
        disabled={word.trim() === "" || counter >= 5}
        onClick={handleClick}
      >
        정답
      </Button>
    </div>
  );
}
