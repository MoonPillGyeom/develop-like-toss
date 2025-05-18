import { addTodayWord } from "@/app/lib/addTodayWord";
import { connectDB } from "@/app/lib/mongodb";
import Word from "@/app/models/Word";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  // try {
  //   await Word.deleteMany({});
  //   return NextResponse.json({ message: "전체 삭제 완료" });
  // } catch (error) {
  //   return NextResponse.json({ error: "삭제 실패" }, { status: 500 });
  // }
  try {
    const word = await addTodayWord();
    NextResponse.json(word);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

// export async function GET() {
//   await connectDB();

//   // try {
//   //   await Word.deleteMany({});
//   //   return NextResponse.json({ message: "전체 삭제 완료" });
//   // } catch (error) {
//   //   return NextResponse.json({ error: "삭제 실패" }, { status: 500 });
//   // }

//   const now = new Date();
//   const nowDay =
//     now.getUTCFullYear() +
//     "-" +
//     pad(now.getUTCMonth() + 1) +
//     "-" +
//     pad(now.getUTCDate());

//   if (cachedWord && lastFetched === nowDay) {
//     console.log("✅ 캐시된 데이터 사용:", cachedWord); // 여기!
//     return NextResponse.json(cachedWord);
//   }

//   const [word] = await Word.aggregate([{ $sample: { size: 1 } }]);
//   // const word = await Word.find(); // 모든 단어 가져오기
//   console.log("🔁 새로운 단어 가져옴 (MongoDB에서):", word); // 여기!
//   cachedWord = word;
//   lastFetched = nowDay;

//   return NextResponse.json(word);
// }

export async function POST(req: Request) {
  await connectDB();
  const body = await req.json();

  const { data } = body;

  if (!Array.isArray(data)) {
    return NextResponse.json(
      { error: "data는 배열이어야 합니다." },
      { status: 400 }
    );
  }

  try {
    const word = await Word.create({ data });
    return NextResponse.json(word, { status: 201 });
  } catch (error) {
    console.error("DB 저장 오류:", error);
    return NextResponse.json({ error: "서버 오류" }, { status: 500 });
  }
}
