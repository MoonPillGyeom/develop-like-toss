"use client";

import Inputs from "@/app/(game)/wordMathGame/_components/Inputs";
import useTodayWord from "@/app/(game)/wordMathGame/_lib/hooks/useTodayWord";
import { useWordMathGame } from "@/app/(game)/wordMathGame/_lib/hooks/useWordMathGame";
import { useComposition } from "@/app/(game)/wordMathGame/_lib/useComposition";
import Button from "@/components/atoms/Button";
export default function WordMathGame() {
  const 정답 = "사과";
  const { data, error } = useTodayWord();
  const { currentInput, counter, inputRefs, handleOnChange, handleClick } =
    useWordMathGame(정답, 6);
  const { isComposing, handleCompositionStart, handleCompositionEnd } =
    useComposition();

  // const [currentInput, setCurrentInput] = useState<string[]>(
  //   Array(정답.length).fill("")
  // );
  // console.log(currentInput);
  // const [counter, setCounter] = useState<number>(1);

  // const inputRefs = useRef<(HTMLInputElement | null)[]>(
  //   Array(정답.length).fill(null)
  // );
  // const handleOnChange = (char: string, index: number) => {
  //   // if (isComposing) return; // 조합 중엔 무시
  //   console.log("char: ", char);
  //   if (char.length === 1 && !char.match(/^[ㄱ-ㅎㅏ-ㅣ가-힣]$/)) {
  //     console.log("실행!!");
  //     focusNextInput(inputRefs.current, index, 정답.length); // 다음 input으로 포커스 이동
  //   }
  //   const newInput = updateInputValue(currentInput, char, index);
  //   setCurrentInput(newInput);
  // };

  // const handleClick = () => {
  //   const result = checkResult({ 정답, value: currentInput });
  //   console.log("각 인풋의 정답 체크 : ", result);
  //   setCurrentInput(Array(정답.length).fill(""));
  //   if (counter < 6) setCounter((prev) => prev + 1);
  // };
  console.log(currentInput.length);
  console.log(currentInput);
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-10 justify-center items-center">
        <p className="">순우리말 맞추기</p>
        <p className="font-bold text-2xl">{data[0]?.meaning}</p>
      </div>
      {Array.from({ length: counter }).map((_, i) => (
        <Inputs
          onChange={handleOnChange}
          key={i}
          inputRefs={inputRefs.current}
          정답={정답}
          // onCompositionStart={handleCompositionStart}
          // onCompositionEnd={handleCompositionEnd}
          // isComposing={isComposing} // 추가
        />
      ))}
      {counter < 6 && <Button onClick={handleClick}>정답</Button>}
    </div>
  );
}

// "use client";

// import Inputs from "@/app/(game)/wordMathGame/_components/Inputs";
// import { focusNextInput } from "@/app/(game)/wordMathGame/_lib/focusNextInput";
// import { checkResult } from "@/app/(game)/wordMathGame/_lib/getGuessResult";
// import { updateInputValue } from "@/app/(game)/wordMathGame/_lib/updateInputValue";
// import Button from "@/components/atoms/Button";
// import { useRef, useState } from "react";

// export default function WordMathGame() {
//   const 정답 = "사과";
//   const [currentInput, setCurrentInput] = useState<string[]>(
//     Array(정답.length).fill("")
//   );
//   const [counter, setCounter] = useState<number>(1);
//   const [isComposing, setIsComposing] = useState(false);

//   const inputRefs = useRef<(HTMLInputElement | null)[]>(
//     Array(정답.length).fill(null)
//   );

//   const handleCompositionStart = () => setIsComposing(true);
//   const handleCompositionEnd = () => setIsComposing(false);

//   const handleChange = (value: string, index: number) => {
//     if (isComposing) return;

//     const lastChar = [...value].at(-1) || "";
//     const newInput = updateInputValue(currentInput, lastChar, index);
//     setCurrentInput(newInput);
//     focusNextInput(inputRefs.current, index, 정답.length);
//   };

//   const handleClick = () => {
//     const result = checkResult({ 정답, value: currentInput });
//     console.log("각 인풋의 정답 체크 : ", result);
//     setCurrentInput(Array(정답.length).fill(""));
//     if (counter < 6) setCounter((prev) => prev + 1);
//   };

//   return (
//     <div className="flex flex-col gap-5">
//       {Array.from({ length: counter }).map((_, i) => (
//         <Inputs
//           key={i}
//           정답={정답}
//           onChange={handleChange}
//           onCompositionStart={handleCompositionStart}
//           onCompositionEnd={handleCompositionEnd}
//           inputRefs={inputRefs.current}
//         />
//       ))}
//       {counter < 6 && (
//         <Button disabled={currentInput.join("") === 정답} onClick={handleClick}>
//           정답
//         </Button>
//       )}
//     </div>
//   );
// }
