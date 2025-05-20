"use client";

import WordPanel from "@/app/(game)/wordMathGame/_components/molecules/WordPanel";
import useTodayWord from "@/app/(game)/wordMathGame/_lib/hooks/useTodayWord";
import { useWordMathGame } from "@/app/(game)/wordMathGame/_lib/hooks/useWordMathGame";
import Input from "@/components/atoms/Input";
import { useEffect, useRef } from "react";
export default function WordMathGame() {
  const { data, error } = useTodayWord();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { inputValue, charArray, counter, handleChange, handleClick } =
    useWordMathGame(data);

  // 항상 input에 포커스 유지
  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus();
    };

    focusInput();

    // 전체 문서 클릭 시 포커스 유지
    document.addEventListener("click", focusInput);

    return () => {
      document.removeEventListener("click", focusInput);
    };
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {/* 실제 입력은 여기서 받지만 숨김 처리 */}
      <Input
        id="word"
        ref={inputRef}
        value={inputValue}
        onChange={handleChange}
        className="absolute opacity-0 w-0 h-0 pointer-events-none"
        autoComplete="off"
      />
      <WordPanel
        data={data}
        charArray={charArray}
        onClick={handleClick}
        counter={counter}
      />
    </div>
  );
}
