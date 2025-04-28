import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";

export const enemyPlaneControllers = (
  enemyPlanes: EnemyPlane[],
  x: number,
  ENEMYPLANE_SIZE: number
) => {
  const interval = setInterval(() => {
    const randomX = Math.floor(Math.random() * (x - ENEMYPLANE_SIZE));
    enemyPlanes.push(new EnemyPlane(randomX, 0));
  }, 1000);
  return () => clearInterval(interval);
};
