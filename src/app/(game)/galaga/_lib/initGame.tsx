import { SpaceShipControllers } from "@/app/(game)/galaga/_lib/spaceShipControllers";
import { LoadImage } from "@/app/(game)/galaga/_lib/loadImage";
import { bulletControllers } from "@/app/(game)/galaga/_lib/bulletControllers";
import { Bullet } from "@/app/(game)/galaga/_lib/bullet";
import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";
import { enemyPlaneControllers } from "@/app/(game)/galaga/_lib/enemyPlaneControllers";

export const initGame = async (
  canvas: HTMLCanvasElement
): Promise<() => void> => {
  const ctx = canvas.getContext("2d");
  // console.log(canvas.width);
  if (!ctx) throw new Error("2D not context");

  const bullets: Bullet[] = [];
  const enemyPlanes: EnemyPlane[] = [];

  // 우주선 값
  const SPACEFIGHTER_SIZE = 50;
  let spaceFighterX = canvas.width / 2;
  let spaceFighterY = canvas.height - SPACEFIGHTER_SIZE;

  let animationFrameId: number;

  const { handleSpaceShipPostion, handleSpaceShipStop, handleSpaceShipUpdate } =
    SpaceShipControllers();

  const getFighterPosition = () => ({ x: spaceFighterX, y: spaceFighterY });

  const { handleBulletShot, handleBulletStop } = bulletControllers(
    bullets,
    getFighterPosition
  );

  const test = enemyPlaneControllers(enemyPlanes, canvas.width, canvas.height);

  window.addEventListener("keydown", handleSpaceShipPostion);
  window.addEventListener("keyup", handleSpaceShipStop);
  window.addEventListener("keydown", handleBulletShot);
  window.addEventListener("keyup", handleBulletStop);

  const images = await LoadImage();

  const update = () => {
    const { X, Y } = handleSpaceShipUpdate(spaceFighterX, spaceFighterY);
    spaceFighterX = X;
    spaceFighterY = Y;
  };

  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      images.spaceFighterImage,
      spaceFighterX,
      spaceFighterY,
      SPACEFIGHTER_SIZE,
      SPACEFIGHTER_SIZE
    );
    // 적기
    enemyPlanes.forEach((enemyPlane, i) => {
      enemyPlane.update();
      enemyPlane.draw(ctx, images.enemyPlaneSkeleton);
      if (enemyPlane.y > 900) {
        enemyPlanes.splice(i, 1);
        console.log("game over");
      }
    });

    // 총알
    bullets.forEach((bullet, i) => {
      bullet.update();
      bullet.draw(ctx, images.bulletImage);

      if (bullet.y < 0) {
        bullets.splice(i, 1);
      }
    });
  };

  const loop = () => {
    update();
    render();
    // test;
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
