import { checkCardMatch } from "@/app/(game)/memorygame/_lib/checkMatch";
import { CardType } from "@/app/types/cardType";
import { useEffect, useState } from "react";

/**
 * 카드 매칭 로직을 처리하는 커스텀 훅입니다.
 *
 * - flippedCardIds가 2개일 경우 카드 매칭을 확인하고,
 *   일치하면 matchedCardIds에 추가
 * - 매칭 여부에 관계없이 0.5초 후 flipped 상태를 초기화
 *
 * @param flippedCardIds 현재 뒤집힌 카드의 ID 배열 (최대 2개)
 * @param cards 전체 셔플된 카드 목록
 * @param resetFlipped 카드 뒤집힌 상태를 초기화하는 함수
 *
 * @returns matchedCardIds :  매칭된 카드 ID들의 배열
 * @returns isMatching :  카드 매칭 처리 중 여부 (0.5초 대기 중인지 여부)
 * @returns lastResult : 마지막 매칭 결과 (성공: 'success', 실패: 'fail', 아직 없음: null)
 */
export const useMatchCardsChecker = (
  flippedCardIds: string[],
  cards: CardType[],
  resetFlipped: () => void
) => {
  const [matchedCardIds, setMatchedCardIds] = useState<string[]>([]);
  const [isMatching, setIsMatching] = useState(false);
  const [lastResult, setLastResult] = useState<"success" | "fail" | null>(null);

  useEffect(() => {
    if (flippedCardIds.length !== 2) return;

    setIsMatching(true);

    const [firstId, secondId] = flippedCardIds;
    const isMatch = checkCardMatch(cards, [firstId, secondId]);

    const timeout = setTimeout(() => {
      if (isMatch) {
        setMatchedCardIds((prev) => [...prev, firstId, secondId]);
        setLastResult("success");
      } else {
        setLastResult("fail");
      }

      setIsMatching(false);
      resetFlipped();
    }, 500);
    return () => clearTimeout(timeout);
  }, [flippedCardIds, cards]);
  return { matchedCardIds, isMatching, lastResult };
};
