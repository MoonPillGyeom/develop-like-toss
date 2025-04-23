import { NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "기억력 테스트",
    slug: "memorygame",
    name: "김철수",
    rank: "1위",
    score: "980점",
  },
  {
    id: 2,
    title: "반응속도 테스트",
    slug: "reactionSpeedGame",
    name: "이영희",
    rank: "1위",
    score: "950점",
  },
  {
    id: 3,
    title: "낱말 맞추기 게임",
    slug: "wordMatchGame",
    name: "박민수",
    rank: "1위",
    score: "920점",
  },
  {
    id: 4,
    title: "기억력 테스트",
    slug: "balanceGame",
    name: "최지우",
    rank: "2위",
    score: "910점",
  },
  {
    id: 5,
    title: "반응속도 테스트",
    name: "정하늘",
    rank: "2위",
    score: "890점",
  },
  {
    id: 6,
    title: "낱말 맞추기 게임",
    name: "오세훈",
    rank: "2위",
    score: "870점",
  },
];

export async function GET() {
  return NextResponse.json(data);
}
