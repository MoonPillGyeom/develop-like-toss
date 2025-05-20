import {
  MatchResult,
  checkResult,
} from "@/app/(game)/wordMathGame/_lib/checkResult";
import { WordItem } from "@/app/types/word";
import { useState } from "react";

export type HistoryItem = {
  value: string[];
  result: MatchResult[];
};

export const useWordMathGame = (data: WordItem[]) => {
  const answer = data[0]?.korean;
  const maxLength = answer?.length || 0;

  const [history, setHistory] = useState<HistoryItem[]>([]);
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

  const handleSubmitAnswer = () => {
    const answer = data[0]?.korean;
    if (!answer) return;

    if (answer === inputValue) {
      console.log("정답!");
      // 필요하다면 정답도 저장 가능
    } else {
      const result = checkResult({ answer, value: charArray });
      setHistory((prev) => [...prev, { value: charArray, result }]);
      setCounter((prev) => prev + 1);
      setInputValue("");
      setCharArray([]);
    }
  };

  return {
    inputValue,
    charArray,
    counter,
    history,
    handleChange,
    handleSubmitAnswer,
  };
};
