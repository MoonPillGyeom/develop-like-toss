import { useRef, useState } from "react";
import { updateInputValue } from "@/app/(game)/wordMathGame/_lib/updateInputValue";
import { checkResult } from "@/app/(game)/wordMathGame/_lib/getGuessResult";
import { focusNextInput } from "@/app/(game)/wordMathGame/_lib/focusNextInput";

export function useWordMathGame(정답: string, maxTry = 6) {
  const [currentInput, setCurrentInput] = useState<string[]>(
    Array(정답.length).fill("")
  );
  const [counter, setCounter] = useState(1);
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array(정답.length).fill(null)
  );

  const handleOnChange = (char: string, index: number) => {
    if (char.length === 1 && !char.match(/^[ㄱ-ㅎㅏ-ㅣ가-힣]$/)) {
      focusNextInput(inputRefs.current, index, 정답.length);
    }
    const newInput = updateInputValue(currentInput, char, index);
    setCurrentInput(newInput);
  };

  const handleClick = () => {
    const result = checkResult({ 정답, value: currentInput });
    console.log("각 인풋의 정답 체크 : ", result);
    setCurrentInput(Array(정답.length).fill(""));
    if (counter < maxTry) setCounter((prev) => prev + 1);
  };

  return {
    currentInput,
    counter,
    inputRefs,
    handleOnChange,
    handleClick,
  };
}
