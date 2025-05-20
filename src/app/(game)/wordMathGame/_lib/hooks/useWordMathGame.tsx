import { MatchResult } from "@/app/(game)/wordMathGame/_lib/checkResult";
import { useGameHistory } from "@/app/(game)/wordMathGame/_lib/hooks/useGameLogic";
import { useInput } from "@/app/(game)/wordMathGame/_lib/hooks/useInput";
import { WordItem } from "@/app/types/word";

export type HistoryItem = {
  value: string[];
  result: MatchResult[];
};

export const useWordMathGame = (data: WordItem[]) => {
  const answer = data[0]?.korean;
  const maxLength = answer?.length || 0;

  const { inputValue, charArray, handleChangeValue, reset } =
    useInput(maxLength);

  const { history, counter, submitAnswer } = useGameHistory(answer);

  const handleSubmitAnswer = () => {
    const isCorrect = submitAnswer(charArray);
    if (!isCorrect) reset();
  };

  return {
    inputValue,
    charArray,
    counter,
    history,
    handleChangeValue,
    handleSubmitAnswer,
  };
};
