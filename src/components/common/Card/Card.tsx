import Image from "next/image";
import test from "@/../public/test.svg";
import test2 from "@/../public/test2.svg";

function Card() {
  return (
    <>
      <div className="w-80 rounded-md overflow-hidden bg-black-60 shadow-md">
        <div className="relative w-full h-72">
          <Image src={test} alt="test" fill className="object-cover" />
        </div>
        <div className="px-5 pb-6">
          <p className="text-lg font-semibold">게임 제목</p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">최고 점수</p>
            <span className="text-yellow-500">★ 4.5</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
