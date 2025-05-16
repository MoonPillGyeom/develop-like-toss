import { useState, useCallback } from "react";

export function useComposition() {
  const [isComposing, setIsComposing] = useState(false);

  const handleCompositionStart = useCallback(() => {
    setIsComposing(true);
  }, []);

  const handleCompositionEnd = useCallback(
    (e: React.CompositionEvent<HTMLInputElement>) => {
      setIsComposing(false);
      // 필요 시 여기서 추가 로직 가능
      // e.currentTarget.value 등 사용 가능
    },
    []
  );

  return {
    isComposing,
    handleCompositionStart,
    handleCompositionEnd,
  };
}
