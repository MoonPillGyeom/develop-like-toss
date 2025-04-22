import { useEffect, useState } from "react";
import { gameData } from "@/app/types/gamedata";

export default function useGameData() {
  const [data, setData] = useState<gameData[]>([]);

  useEffect(() => {
    fetch("/api/sideBar")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return data;
}
