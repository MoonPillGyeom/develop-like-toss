"use client";

import useEscapeKey from "@/app/hooks/useEscapeKey";
import useGameData from "@/app/hooks/useGameData";
import { gameData } from "@/app/types/gamedata";
import Card from "@/components/common/Card/Card";
import CategorySideBar from "@/components/common/SideBar/CategorySideBar";
import RankingSideBar from "@/components/common/SideBar/RankingSideBar";
import { useRouter } from "next/navigation";
import { MouseEvent, useState } from "react";

export default function Home() {
  const [selectedGame, setSelectedGame] = useState<gameData | null>(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // 사이드바 상태
  const router = useRouter();
  const data = useGameData();

  const handleNavigate = (title: string) => {
    const game = data.find((item) => item.title === title);
    if (game) {
      router.push(`/${game.slug}`);
    }
  };

  const handleCardClick = (e: MouseEvent<HTMLDivElement>, game: gameData) => {
    e.stopPropagation();
    setSelectedGame(game);
    setIsSidebarVisible(true); // 사이드바 나타나게 함
  };

  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
  };

  useEscapeKey(handleCloseSidebar); // ESC 키 훅 사용

  return (
    <>
      <div className="flex px-[180px] justify-between">
        <div className="flex gap-[90px]">
          <CategorySideBar
            menus={data.map(({ title, id }) => ({ title, id }))}
            onClick={handleNavigate}
          />
          <div className="grid grid-cols-3 gap-8">
            {data.map((item, i) => (
              <Card
                data={item}
                key={i}
                onClick={handleCardClick}
                handleNavigate={() => handleNavigate(item.title)}
              />
            ))}
          </div>
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
