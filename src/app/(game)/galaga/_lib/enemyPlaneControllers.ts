import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";

export const enemyPlaneControllers = (
  enemyPlanes: EnemyPlane[],
  x: number,
  y: number
) => {
  const interval = setInterval(() => {
    console.log("1기 생성");
    const randomX = Math.floor(Math.random() * x);
    enemyPlanes.push(new EnemyPlane(randomX, 0));
  }, 1000);
  return () => clearInterval(interval);
};
