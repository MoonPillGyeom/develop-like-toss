import CharBox from "@/app/(game)/wordMathGame/_components/_atoms/CharBox";
import Title from "@/app/(game)/wordMathGame/_components/_atoms/Title";
import { MatchResult } from "@/app/(game)/wordMathGame/_lib/checkResult";
import { HistoryItem } from "@/app/(game)/wordMathGame/_lib/hooks/useWordMathGame";
import { WordItem } from "@/app/types/word";
import Button from "@/components/atoms/Button";
interface WordPanelProps {
  data: WordItem[];
  charArray: string[];
  history: HistoryItem[];
  onClick: () => void;
  counter: number;
}
export default function WordPanel({
  data,
  charArray,
  history,
  onClick,
  counter,
}: WordPanelProps) {
  console.log(history);
  return (
    <>
      <Title data={data} />
      {history.map((item, i) => (
        <CharBox
          key={i}
          data={data}
          charArray={item.value}
          result={item.result}
        />
      ))}

      {/* 현재 입력 중인 줄 */}
      {counter <= 6 && <CharBox data={data} charArray={charArray} />}

      {counter < 6 && <Button onClick={onClick}>정답</Button>}
    </>
  );
}
