"use client";

import { useEffect, useState } from "react";
import mock from "@/../mock.json";
import Button from "@/components/atoms/Button";

export default function Page() {
  const [isUploading, setIsUploading] = useState(false);
  // console.log(mock);
  useEffect(() => {
    async function fetchWord() {
      try {
        const response = await fetch("/api/word");
        if (!response.ok) {
          // 서버에서 에러 응답이 온 경우 처리
          const errorData = await response.json().catch(() => ({}));
          console.error("API error:", errorData);
          return;
        }
        const data = await response.json();
        console.log("받은 데이터:", data);
      } catch (error) {
        console.error("fetch error:", error);
      }
    }

    fetchWord();
  }, []);

  const handleBulkUpload = async () => {
    for (const item of mock) {
      const wrappedItem = {
        data: [item], // 배열로 감싸기
      };
      // console.log(wrappedItem);
      try {
        const response = await fetch("/api/word", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(wrappedItem),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error("실패:", item.korean, errorData);
        } else {
          const result = await response.json();
          console.log("성공:", result);
        }
      } catch (error) {
        console.error("에러 발생:", item.korean, error);
      }
    }
  };

  return (
    <>
      <div>오늘의 단어 콘솔 확인하세요!</div>
      <Button onClick={handleBulkUpload} disabled={isUploading}>
        {isUploading ? "업로드 중..." : "click!!!"}
      </Button>
    </>
  );
}
