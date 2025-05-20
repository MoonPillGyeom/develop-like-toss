import { MatchResult } from "@/app/(game)/wordMathGame/_lib/checkResult";
import { WordItem } from "@/app/types/word";
import clsx from "clsx";

interface CharBoxProps {
  data: WordItem[];
  charArray: string[];
  result?: MatchResult[];
}

export default function CharBox({
  data,
  charArray,
  result = [],
}: CharBoxProps) {
  const getBoxClass = (result?: MatchResult) => {
    return clsx(
      "w-12 h-12 border rounded-md flex items-center justify-center text-xl font-bold transition-colors",
      {
        "bg-green-400 text-white": result === "match",
        "bg-yellow-400 text-white": result === "wrong-position",
        "bg-gray-300 text-white": result === "miss",
      }
    );
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length: data[0]?.korean.length }).map((_, i) => {
        const char = charArray[i] || "";
        const match = result[i];
        return (
          <div key={i} className={getBoxClass(match)}>
            {char}
          </div>
        );
      })}
    </div>
  );
}
