let keyDown: Record<string, boolean> = {};

export const handleKeyboardListener = (e: KeyboardEvent) => {
  keyDown[e.key] = true;
};

export const handleKeyboardDelete = (e: KeyboardEvent) => {
  delete keyDown[e.key];
};

export const handleSpaceUpdate = (
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
