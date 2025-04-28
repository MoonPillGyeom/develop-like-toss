const keyDown: Record<string, boolean> = {};

// 내 우주선을 조작하는 함수입니다.
export const SpaceShipControllers = () => {
  const handleSpaceShipPostion = (e: KeyboardEvent) => {
    keyDown[e.key] = true;
  };

  const handleSpaceShipStop = (e: KeyboardEvent) => {
    delete keyDown[e.key];
  };

  const handleSpaceShipUpdate = (
    spaceFighterX: number,
    spaceFighterY: number
  ) => {
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
  return {
    handleSpaceShipPostion,
    handleSpaceShipStop,
    handleSpaceShipUpdate,
  };
};
