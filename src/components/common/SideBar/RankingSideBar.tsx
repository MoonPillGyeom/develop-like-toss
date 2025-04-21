import Image from "next/image";
import test2 from "@/../public/test2.svg";

function RankingSideBar({
  rank,
  onClose,
}: {
  rank: string;
  onClose: () => void;
}) {
  return (
    <>
      <div
        className="fixed top-0 right-0 bottom-0 w-[300px] bg-black-60 shadow-xl z-50 transform transition-transform duration-300 ease-in-out"
        style={{
          transform: "translateX(0)",
        }}
      >
        <div className="relative p-4">
          <h3>게임 랭킹</h3>
          <div className="flex items-center gap-2.5">
            <Image src={test2} alt="profile" width={50} height={50} />
            <div>
              <span className="flex items-center gap-1">
                <p>{rank}</p>
                <p className="font-bold text-xl">{"name"}</p>
              </span>
              <p className="text-gray-40">점수 : {"250"}</p>
            </div>
          </div>
          <button
            onClick={onClose} // 사이드바 닫기 버튼
            className="absolute top-2 right-2 px-2.5 py-2 bg-red-500 text-white rounded-full"
          >
            X
          </button>
        </div>
      </div>

      {/* 사이드바 외부 클릭 시 닫기 */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"
        onClick={onClose}
      />
    </>
  );
}

export default RankingSideBar;
