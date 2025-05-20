import DailyWord from "@/app/models/DailyWord";
import Word from "@/app/models/Word"; // 전체 단어 모음

export const addTodayWord = async () => {
  const now = new Date();

  // 오늘 날짜(연-월-일) 문자열 생성
  const todayStr = now.toISOString().slice(0, 10);

  // YYYY-MM-DDT00:00:00.000Z
  const startOfDay = new Date(todayStr);
  // 다음날 00시
  const endOfDay = new Date(startOfDay.getTime() + 24 * 60 * 60 * 1000);

  const existing = await DailyWord.findOne({
    createdAt: {
      $gte: startOfDay,
      $lt: endOfDay,
    },
  });
  if (existing) {
    return existing;
  }

  // 전체 단어 중 랜덤으로 하나 뽑기
  const [randomWord] = await Word.aggregate([{ $sample: { size: 1 } }]);
  if (!randomWord) {
    throw new Error("단어가 없습니다.");
  }

  // DailyWord에 저장 (word 필드에 넣기)
  const newDailyWord = new DailyWord({
    data: randomWord.data[0], // Word 스키마에 맞게
  });

  await newDailyWord.save();

  return newDailyWord;
};
