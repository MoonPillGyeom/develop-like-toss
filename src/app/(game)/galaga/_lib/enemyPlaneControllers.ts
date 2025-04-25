import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";

export const enemyPlaneControllers = (
  enemyPlanes: EnemyPlane[],
  x: number,
  y: number
) => {
  setInterval(() => {
    const randomX = Math.floor(Math.random() * x);
    enemyPlanes.push(new EnemyPlane(randomX, 0));
  }, 1000);

  console.log("적기 생성 : ", enemyPlanes);
};
