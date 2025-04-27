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
  // console.log(canvas.width);
  if (!ctx) throw new Error("2D not context");

  // let isGameOver = false;

  const images = await LoadImage();

  const bullets: Bullet[] = [];
  const enemyPlanes: EnemyPlane[] = [];

  // 우주선 값
  const SPACEFIGHTER_SIZE = 50;
  let SpaceShipX = canvas.width / 2;
  let SpaceShipY = canvas.height - SPACEFIGHTER_SIZE;

  let animationFrameId: number;

  const { handleSpaceShipPostion, handleSpaceShipStop, handleSpaceShipUpdate } =
    SpaceShipControllers();

  const SpaceShipPosition = () => ({ x: SpaceShipX, y: SpaceShipY });

  const { handleBulletShot, handleBulletStop } = bulletControllers(
    bullets,
    SpaceShipPosition
  );

  const clearEnemyInterval = enemyPlaneControllers(
    enemyPlanes,
    canvas.width,
    canvas.height
  );

  window.addEventListener("keydown", handleSpaceShipPostion);
  window.addEventListener("keyup", handleSpaceShipStop);
  window.addEventListener("keydown", handleBulletShot);
  window.addEventListener("keyup", handleBulletStop);

  let gameEnded = false; // 딱 cleanup 용으로만 사용
  const update = () => {
    // if (isGameOver) return;

    const { X, Y } = handleSpaceShipUpdate(SpaceShipX, SpaceShipY);
    SpaceShipX = X;
    SpaceShipY = Y;

    // 적기 업데이트 및 제거
    for (let i = enemyPlanes.length - 1; i >= 0; i--) {
      enemyPlanes[i].update();
      if (enemyPlanes[i].y > 900) {
        gameEnded = true;
        if (gameEnded) {
          setIsGameOver(gameEnded);
        }
        cancelAnimationFrame(animationFrameId); // 루프 중단
        clearEnemyInterval(); // 적기 생성 멈추기
        return;
      }
    }
    // 총알 업데이트 및 제거
    for (let i = bullets.length - 1; i >= 0; i--) {
      bullets[i].update();
      if (bullets[i].y < 0) {
        bullets.splice(i, 1);
      }
    }
  };
  // console.log("stop...됐을까?");
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      images.spaceFighterImage,
      SpaceShipX,
      SpaceShipY,
      SPACEFIGHTER_SIZE,
      SPACEFIGHTER_SIZE
    );
    // 적기
    enemyPlanes.forEach((enemyPlane, i) => {
      enemyPlane.draw(ctx, images.enemyPlaneSkeleton);
    });

    // 총알
    bullets.forEach((bullet, i) => {
      bullet.draw(ctx, images.bulletImage);
    });
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
