import { WordItem } from "@/app/types/word";

interface TitleProps {
  data: WordItem[];
}
export default function Title({ data }: TitleProps) {
  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <p className="">순우리말 맞추기</p>
      <p className="font-bold text-2xl">{data[0]?.meaning}</p>
    </div>
  );
}
