// "use client";

// import { useEffect, useState } from "react";

// export default function Page() {
//   const [titles, setTitles] = useState<string[]>([]);
//   const API_KEY = process.env.NEXT_PUBLIC_KCISA_API_KEY;
//   console.log(API_KEY);
//   useEffect(() => {
//     const BASE_URL =
//       "http://api.kcisa.kr/openapi/service/rest/meta6/getKRAG0401";
//     const query = `?serviceKey=${API_KEY}&numOfRows=100&pageNo=1&_type=json`;

//     // fetch(`${BASE_URL}${query}`)
//     //   .then((res) => {
//     //     if (!res.ok) throw new Error(`HTTP 오류: ${res.status}`);
//     //     return res.json();
//     //   })
//     //   .then((data) => {
//     //     const items = data.response.body.items.item || [];
//     //     const titles = items.map((item: any) => item.title);
//     //     setTitles(titles);
//     //   })      .catch((err) => console.error("에러:", err));
//     fetch(`${BASE_URL}${query}`)
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP 오류: ${res.status}`);
//         return res.text();
//       })
//       .then((xmlString) => {
//         const parser = new DOMParser();
//         const xmlDoc = parser.parseFromString(xmlString, "text/xml");

//         const items = Array.from(xmlDoc.getElementsByTagName("item"));

//         const results = items.map((item) => {
//           const obj: Record<string, string> = {};
//           // item 내부의 모든 자식 엘리먼트를 순회
//           Array.from(item.children).forEach((child) => {
//             obj[child.tagName] = child.textContent || "";
//           });
//           return obj;
//         });

//         console.log("전체 item 객체들:", results);
//         setTitles(results.map((r) => r.title || ""));
//       })
//       .catch((err) => console.error(err));
//   }, []);
//   console.log(titles);
//   return (
//     <div>
//       <h1>API로 가져온 제목 목록</h1>
//       <ul>
//         {titles.map((title, i) => (
//           <li key={i}>{title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";

export default function Page() {
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

  return <div>오늘의 단어 콘솔 확인하세요!</div>;
}
