"use client";

import Description from "@/app/(game)/wordMathGame/_components/_atoms/Description";
import WordPanel from "@/app/(game)/wordMathGame/_components/molecules/WordPanel";
import useTodayWord from "@/app/(game)/wordMathGame/_lib/hooks/useTodayWord";
import { useWordMathGame } from "@/app/(game)/wordMathGame/_lib/hooks/useWordMathGame";
import Input from "@/components/atoms/Input";
import { useEffect, useRef } from "react";

export default function WordMathGameConent() {
  const { data, isPending, error } = useTodayWord();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    inputValue,
    charArray,
    counter,
    history,
    handleChangeValue,
    handleSubmitAnswer,
  } = useWordMathGame(data);

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
    <div className="flex justify-between gap-40">
      <Description />
      <div className="flex flex-col gap-5 justify-center items-center">
        {/* 실제 입력은 여기서 받지만 숨김 처리 */}
        <Input
          id="word"
          ref={inputRef}
          value={inputValue}
          onChange={handleChangeValue}
          className="absolute opacity-0 w-0 h-0 pointer-events-none"
          autoComplete="off"
        />
        {isPending ? (
          <div>로딩중</div>
        ) : (
          <WordPanel
            data={data}
            charArray={charArray}
            history={history}
            onClick={handleSubmitAnswer}
            counter={counter}
          />
        )}
      </div>
    </div>
  );
}
