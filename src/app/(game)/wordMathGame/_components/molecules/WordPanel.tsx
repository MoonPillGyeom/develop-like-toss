import CharBox from "@/app/(game)/wordMathGame/_components/_atoms/CharBox";
import Title from "@/app/(game)/wordMathGame/_components/_atoms/Title";
import { WordItem } from "@/app/types/word";
import Button from "@/components/atoms/Button";
interface WordPanelProps {
  data: WordItem[];
  charArray: string[];
  onClick: () => void;
  counter: number;
}
export default function WordPanel({
  data,
  charArray,
  onClick,
  counter,
}: WordPanelProps) {
  console.log(counter);
  return (
    <>
      <Title data={data} />
      {/* 사용자에게 보이는 입력 박스들 */}
      {Array.from({ length: counter }).map((_, i) => (
        <CharBox key={i} data={data} charArray={charArray} />
      ))}

      {counter < 6 && <Button onClick={onClick}>정답</Button>}
    </>
  );
}
