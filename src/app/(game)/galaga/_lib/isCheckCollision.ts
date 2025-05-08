import { Bullet } from "@/app/(game)/galaga/_lib/bullet";
import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";

// 충돌 검사 함수
export const isCheckCollision = (
  bullet: Bullet,
  enemy: EnemyPlane,
  SPACEFIGHTER_SIZE: number
): boolean => {
  return (
    bullet.x < enemy.x + SPACEFIGHTER_SIZE &&
    bullet.x + 10 > enemy.x &&
    bullet.y < enemy.y + SPACEFIGHTER_SIZE &&
    bullet.y + 20 > enemy.y
  );
};
