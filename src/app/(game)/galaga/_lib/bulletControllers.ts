import { Bullet } from "@/app/(game)/galaga/_lib/bullet";

let keyDown: Record<string, boolean> = {};

export const bulletControllers = (
  bullets: Bullet[],
  getFighterPosition: () => { x: number; y: number }
) => {
  const handleKeyboardListener = (e: KeyboardEvent) => {
    if (e.key === " ") {
      const { x, y } = getFighterPosition();
      bullets.push(new Bullet(x + 20, y)); // 20은 우주선 가운데에서 쏘기 위해
    }
  };

  const handleKeyboardDelete = (e: KeyboardEvent) => {
    delete keyDown[e.key];
  };
  return { handleKeyboardListener, handleKeyboardDelete };
};
