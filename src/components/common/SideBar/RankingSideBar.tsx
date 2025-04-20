import Image from "next/image";
import { useEffect, useState } from "react";
import test2 from "@/../public/test2.svg";

function RankingSideBar() {
  const [data, setData] = useState();

  // 나중에 부모로 올려야함
  useEffect(() => {
    fetch("api/sideBar")
      .then((res) => res.json())
      .then(setData);
  }, []);
  return (
    <>
      <div>
        <h3>{"gameName"} 랭킹</h3>
        <div className="flex items-center gap-2.5">
          <Image src={test2} alt="profile" width={50} height={50} />
          <div>
            <span className="flex items-center gap-1">
              <p>1등</p>
              <p className="font-bold text-xl">{"name"}</p>
            </span>
            <p className="text-gray-40">점수 : {"250"}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RankingSideBar;
