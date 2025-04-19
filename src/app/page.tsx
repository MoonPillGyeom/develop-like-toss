"use client";

import Card from "@/components/common/Card/Card";
import CategorySideBar from "@/components/common/SideBar/CategorySideBar";

export default function Home() {
  return (
    <>
      <div className="flex px-[180px] gap-[90px]">
        <CategorySideBar />
        <Card />
      </div>
    </>
  );
}
