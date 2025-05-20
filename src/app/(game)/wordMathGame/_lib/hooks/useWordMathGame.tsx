import { WordItem } from "@/app/types/word";
import { useState } from "react";

export const useWordMathGame = (data: WordItem[]) => {
  const maxLength = data[0]?.korean.length || 0;
  const [inputValue, setInputValue] = useState<string>("");
  const [charArray, setCharArray] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(1);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (newValue.length <= maxLength) {
      setInputValue(newValue);
      setCharArray(newValue.split(""));
    }
  };

  const handleClick = () => {
    console.log(data[0]?.korean);
    if (data[0]?.korean === inputValue) {
      console.log("정답`s`");
    } else if (data[0]?.korean !== inputValue) {
      setCounter((prev) => prev + 1);
      console.log("오답!`s`");
      setInputValue("");
      setCharArray([]);
    }
  };

  return { inputValue, charArray, counter, handleChange, handleClick };
};
