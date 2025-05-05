import { useState } from "react";

// 값의 가시성 상태를 토글하는 훅
export function useToggle() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return { isVisible, toggleVisibility };
}
