let keyDown: Record<string, boolean> = {};

// 내 우주선을 조작하는 함수입니다.
export const SpaceControllers = () => {
  const handleKeyboardListener = (e: KeyboardEvent) => {
    keyDown[e.key] = true;
  };

  const handleKeyboardDelete = (e: KeyboardEvent) => {
    delete keyDown[e.key];
  };

  const handleSpaceUpdate = (spaceFighterX: number, spaceFighterY: number) => {
    let X = spaceFighterX;
    let Y = spaceFighterY;
    if ("ArrowRight" in keyDown && spaceFighterX !== 850) {
      X += 5;
    }
    if ("ArrowLeft" in keyDown && spaceFighterX !== 0) {
      X -= 5;
    }
    return { X, Y };
  };
  return { handleKeyboardListener, handleKeyboardDelete, handleSpaceUpdate };
};
