"use client";

import Card from "@/components/common/Card/Card";
import CategorySideBar from "@/components/common/SideBar/CategorySideBar";
import RankingSideBar from "@/components/common/SideBar/RankingSideBar";

export default function Home() {
  return (
    <>
      <div className="flex px-[180px] justify-between">
        <div className="flex gap-[90px]">
          <CategorySideBar />
          <Card />
        </div>
        <RankingSideBar />
      </div>
    </>
  );
}
