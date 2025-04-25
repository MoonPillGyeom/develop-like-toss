import { Bullet } from "@/app/(game)/galaga/_lib/bullet";

let keyDown: Record<string, boolean> = {};

/**
 *
 * @param bullets Bullet
 * @param {x, y} 총알이 발사 되는 우주선의 좌표값
 * @returns
 */
export const bulletControllers = (
  bullets: Bullet[],
  {
    spaceFighterX,
    spaceFighterY,
  }: { spaceFighterX: number; spaceFighterY: number }
) => {
  const handleBulletShot = (e: KeyboardEvent) => {
    if (e.key === " ") {
      bullets.push(new Bullet(spaceFighterX + 20, spaceFighterY)); // 20은 우주선 가운데에서 쏘기 위해
    }
  };

  const handleBulletStop = (e: KeyboardEvent) => {
    delete keyDown[e.key];
  };
  return { handleBulletShot, handleBulletStop };
};
