import { WordItem } from "@/app/types/word";

interface CharBoxProps {
  data: WordItem[];
  charArray: string[];
}

export default function CharBox({ data, charArray }: CharBoxProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: data[0]?.korean.length }).map((_, i) => (
        <div
          key={i}
          className="w-12 h-12 border rounded-md flex items-center justify-center text-xl"
        >
          {charArray[i] || ""}
        </div>
      ))}
    </div>
  );
}
