import { connectDB } from "@/app/lib/mongodb";
import Word from "@/app/models/Word";
import { NextResponse } from "next/server";

let cachedWord: any = null;
let lastFetched: string | null = null;

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export async function GET() {
  await connectDB();

  const now = new Date();
  const nowDay =
    now.getUTCFullYear() +
    "-" +
    pad(now.getUTCMonth() + 1) +
    "-" +
    pad(now.getUTCDate());

  if (cachedWord && lastFetched === nowDay) {
    return NextResponse.json(cachedWord);
  }

  const [word] = await Word.aggregate([{ $sample: { size: 1 } }]);
  cachedWord = word;
  lastFetched = nowDay;

  return NextResponse.json(word);
}
