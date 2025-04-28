import { SpaceShipControllers } from "@/app/(game)/galaga/_lib/spaceShipControllers";
import { LoadImage } from "@/app/(game)/galaga/_lib/loadImage";
import { bulletControllers } from "@/app/(game)/galaga/_lib/bulletControllers";
import { Bullet } from "@/app/(game)/galaga/_lib/bullet";
import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";
import { enemyPlaneControllers } from "@/app/(game)/galaga/_lib/enemyPlaneControllers";

export const initGame = async (
  canvas: HTMLCanvasElement,
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
): Promise<() => void> => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D not context");

  const images = await LoadImage();

  const bullets: Bullet[] = [];
  const enemyPlanes: EnemyPlane[] = [];

  let score = 0;

  // 우주선 값
  const SPACEFIGHTER_SIZE = 50;
  let SpaceShipX = canvas.width / 2;
  let SpaceShipY = canvas.height - SPACEFIGHTER_SIZE;

  // 적기 값
  const ENEMYPLANE_SIZE = 50;

  // 총알 값
  const BULLET_SIZE = 20;

  let animationFrameId: number;
  let gameEnded = false; // 딱 cleanup 용으로만 사용

  const { handleSpaceShipPostion, handleSpaceShipStop, handleSpaceShipUpdate } =
    SpaceShipControllers();

  const { handleBulletShot, handleBulletStop } = bulletControllers(
    bullets,
    () => ({ x: SpaceShipX, y: SpaceShipY })
  );

  const clearEnemyInterval = enemyPlaneControllers(
    enemyPlanes,
    canvas.width,
    ENEMYPLANE_SIZE
  );

  window.addEventListener("keydown", handleSpaceShipPostion);
  window.addEventListener("keyup", handleSpaceShipStop);
  window.addEventListener("keydown", handleBulletShot);
  window.addEventListener("keyup", handleBulletStop);

  /** 게임 업데이트 함수 */
  const update = () => {
    // 우주선 좌,우 이동
    const { X, Y } = handleSpaceShipUpdate(SpaceShipX, SpaceShipY);
    SpaceShipX = X;
    SpaceShipY = Y;

    // 적기 업데이트
    for (let i = enemyPlanes.length - 1; i >= 0; i--) {
      const enemy = enemyPlanes[i];
      enemy.update();
      if (enemy.y > 900) {
        endGame();
        return;
      }

      // 총알 업데이트
      for (let j = bullets.length - 1; j >= 0; j--) {
        const bullet = bullets[j];
        bullet.update();

        const isHit =
          bullet.x < enemy.x + SPACEFIGHTER_SIZE &&
          bullet.x + 10 > enemy.x &&
          bullet.y < enemy.y + SPACEFIGHTER_SIZE &&
          bullet.y + 20 > enemy.y;

        if (isHit) {
          bullets.splice(j, 1);
          enemyPlanes.splice(i, 1);
          score++;
          console.log(score);
        }
        if (bullet.y < 0) {
          bullets.splice(j, 1);
        }
      }
    }
  };

  // 게임 렌더링
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 우주선
    ctx.drawImage(
      images.spaceFighterImage,
      SpaceShipX,
      SpaceShipY,
      SPACEFIGHTER_SIZE,
      SPACEFIGHTER_SIZE
    );
    // 적기
    enemyPlanes.forEach((enemyPlane, i) => {
      enemyPlane.draw(ctx, images.enemyPlaneSkeleton, ENEMYPLANE_SIZE);
    });

    // 총알
    bullets.forEach((bullet, i) => {
      bullet.draw(ctx, images.bulletImage, BULLET_SIZE);
    });
  };

  /** 게임 종료 */
  const endGame = () => {
    gameEnded = true;
    setIsGameOver(true);
    cancelAnimationFrame(animationFrameId);
    clearEnemyInterval();
  };

  const loop = () => {
    if (gameEnded) return;
    update();
    render();
    animationFrameId = requestAnimationFrame(loop);
  };

  loop();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener("keydown", handleBulletShot);
    window.removeEventListener("keydown", handleSpaceShipPostion);
    window.removeEventListener("keyup", handleSpaceShipStop);
    window.removeEventListener("keyup", handleBulletStop);
  };
};
