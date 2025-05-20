import { useState } from "react";
import { checkResult } from "@/app/(game)/wordMathGame/_lib/checkResult";
import { HistoryItem } from "@/app/(game)/wordMathGame/_lib/hooks/useWordMathGame";

export const useGameHistory = (answer: string | undefined) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [counter, setCounter] = useState(1);

  const submitAnswer = (charArray: string[]) => {
    if (!answer) return false;

    const answerStr = answer;
    const inputStr = charArray.join("");

    if (answerStr === inputStr) {
      // 정답 처리
      return true;
    }

    const result = checkResult({ answer: answerStr, value: charArray });
    setHistory((prev) => [...prev, { value: charArray, result }]);
    setCounter((prev) => prev + 1);
    return false;
  };

  return { history, counter, submitAnswer };
};
