import Card from "@/app/(game)/memorygame/_components/Card";
import { useMemoryGame } from "@/app/(game)/memorygame/_lib/_hooks/useMemoryGame";

function MemoryGameContent() {
  const {
    flipCount,
    shuffledCards,
    flippedCardIds,
    matchedCardIds,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isMatching,
    lastResult,
    flipCard,
  } = useMemoryGame();
  // console.log(isMatching);
  return (
    <div className="flex flex-col gap-8 items-center relative">
      <h1 className="text-blue-40 font-bold text-2xl">SCORE : {flipCount}</h1>
      {lastResult === "success" && (
        <span className="text-green-500 absolute top-7">짝이 맞아요!</span>
      )}
      {lastResult === "fail" && (
        <span className="text-red-500 absolute top-7">틀렸어요 😢</span>
      )}

      <div className="grid grid-cols-5 gap-10">
        {shuffledCards.map(({ id, content }) => (
          <Card
            key={id}
            content={content}
            isFlipped={flippedCardIds.includes(id)}
            isMatched={matchedCardIds.includes(id)}
            onClick={() => flipCard(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default MemoryGameContent;
