import Input from "@/components/atoms/Input";
import { ChangeEvent } from "react";

interface InputProps {
  onChange: (value: string, index: number) => void;
  // onCompositionStart: () => void;
  // onCompositionEnd: (
  //   e: React.CompositionEvent<HTMLInputElement>,
  //   index: number
  // ) => void;
  inputRefs: (HTMLInputElement | null)[];
  정답: string;
}

export default function Inputs({
  onChange,
  // onCompositionStart,
  // onCompositionEnd,
  inputRefs,
  정답,
}: InputProps) {
  return (
    <div className="flex w-[300px]">
      {Array.from({ length: 정답.length }).map((_, index) => (
        <Input
          key={index}
          ref={(el) => {
            inputRefs[index] = el;
          }}
          id={`word-${index}`}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value, index)
          }
          // onCompositionStart={onCompositionStart}
          // onCompositionEnd={(e) => onCompositionEnd(e, index)}
          // maxLength={1}
        />
      ))}
    </div>
  );
}
