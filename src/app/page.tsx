"use client";

import { gameData } from "@/app/types/gamedata";
import Card from "@/components/common/Card/Card";
import CategorySideBar from "@/components/common/SideBar/CategorySideBar";
import RankingSideBar from "@/components/common/SideBar/RankingSideBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<Array<gameData>>([]);
  const [selectedGame, setSelectedGame] = useState<gameData | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // 사이드바 상태
  const router = useRouter();
  console.log(selectedGame);
  useEffect(() => {
    fetch("/api/sideBar")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const handleNavigate = (title: string) => {
    const game = data.find((item) => item.title === title);
    console.log(game);
    if (game) {
      router.push(`/game/${game.id}`);
    }
  };

  const handleCardClick = (game: gameData) => {
    setSelectedGame(game); // 선택된 게임 데이터 저장
    setIsSidebarVisible(true); // 사이드바 나타나게 함
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false); // 사이드바 숨기기
  };

  // ESC 누르면 사이드바 닫히게 하는 effect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsSidebarVisible(false); // ESC 누르면 사이드바 닫기
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex px-[180px] justify-between">
        <div className="flex gap-[90px]">
          <CategorySideBar
            menus={data.map(({ title, id }) => ({ title, id }))}
            onClick={handleNavigate}
          />
          {data.map((item, i) => (
            <Card data={item} key={i} onClick={handleCardClick} />
          ))}
        </div>
        {/* 나중에 game데이터로 변경 후 해당 게임 랭킹 산출 */}
        {isSidebarVisible && selectedGame && (
          <RankingSideBar
            rank={selectedGame.rank}
            onClose={handleCloseSidebar}
          />
        )}
      </div>
    </>
  );
}
