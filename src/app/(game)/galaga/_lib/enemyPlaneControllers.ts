import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";

export const enemyPlaneControllers = (
  // enemyPlanes: EnemyPlane[],
  x: number,
  ENEMYPLANE_SIZE: number
) => {
  const enemyPlanes: EnemyPlane[] = [];
  const createEnemy = () => {
    const randomX = Math.floor(Math.random() * (x - ENEMYPLANE_SIZE));
    enemyPlanes.push(new EnemyPlane(randomX, 0));
  };

  const interval = setInterval(createEnemy, 1000);

  const getEnemies = () => enemyPlanes;

  const updateEnemies = (onOutOfBound: () => void) => {
    for (let i = enemyPlanes.length - 1; i >= 0; i--) {
      const enemy = enemyPlanes[i];
      enemy.update();
      if (enemy.y > 900) {
        onOutOfBound();
        return;
      }
    }
  };

  const clearEnemyInterval = () => clearInterval(interval);

  return {
    getEnemies,
    updateEnemies,
    clearEnemyInterval,
  };
};
