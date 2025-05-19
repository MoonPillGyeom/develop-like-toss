import { useEffect, useState } from "react";
import { WordItem } from "@/app/types/word";

export default function useTodayWord() {
  const [data, setData] = useState<WordItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchWord() {
      try {
        const response = await fetch("/api/word");
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          setError("서버 에러");
          console.error("API error:", errorData);
          return;
        }
        const data = await response.json();
        setData(data.data);
      } catch (err) {
        setError("네트워크 에러");
        console.error("fetch error:", err);
      }
    }

    fetchWord();
  }, []);

  return { data, error };
}
