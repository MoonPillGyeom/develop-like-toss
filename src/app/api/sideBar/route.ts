import { NextResponse } from "next/server";

const data = [
  { id: 1, title: "홈" },
  { id: 2, title: "기억력 테스트" },
  { id: 3, title: "반응속도 테스트" },
  { id: 4, title: "균형 맞추기 게임" },
  { id: 5, title: "랭킹" },
  { id: 6, title: "설정" },
];

export async function GET() {
  return NextResponse.json(data);
}
