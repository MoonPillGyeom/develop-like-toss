import Image from "next/image";
import { gameData } from "@/app/types/gamedata";
import { MouseEvent } from "react";

function Card({
  data,
  onClick,
  handleNavigate,
}: {
  data: gameData;
  onClick: (e: MouseEvent<HTMLDivElement>, game: gameData) => void;
  handleNavigate: () => void;
}) {
  return (
    <>
      <div
        className="w-80 rounded-xl overflow-hidden bg-black-60 shadow-md"
        onClick={handleNavigate}
      >
        <div className="relative w-full h-72 mb-2.5">
          <Image src={data.image} alt="test" fill className="object-cover" />
        </div>
        <div className="px-5 pb-6">
          <p className="text-lg font-semibold">{data.title}</p>
          <div
            className="flex justify-between items-center"
            onClick={(e) => onClick(e, data)}
          >
            <p className="text-sm text-gray-500">최고 점수: {data.score}</p>
            <span className="text-yellow-500">★ 4.5</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
