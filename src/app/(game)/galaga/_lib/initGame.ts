import { SpaceShipControllers } from "@/app/(game)/galaga/_lib/spaceShipControllers";
import { loadGameImages } from "@/app/(game)/galaga/_lib/loadImage";
import { enemyPlaneControllers } from "@/app/(game)/galaga/_lib/enemyPlaneControllers";
import { drawGameObjects } from "@/app/(game)/galaga/_lib/drawGameObjects";
import { bulletControllers } from "@/app/(game)/galaga/_lib/updateBullets";

export const initGame = async (
  canvas: HTMLCanvasElement,
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
): Promise<() => void> => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D not context");

  const images = await loadGameImages();

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

  const { handleBulletShot, handleBulletStop, getBullets, updateBullet } =
    bulletControllers(
      () => ({
        x: SpaceShipX,
        y: SpaceShipY,
      }),
      SPACEFIGHTER_SIZE
    );

  const { getEnemies, updateEnemies, clearEnemyInterval } =
    enemyPlaneControllers(canvas.width, ENEMYPLANE_SIZE);

  window.addEventListener("keydown", handleSpaceShipPostion);
  window.addEventListener("keyup", handleSpaceShipStop);
  window.addEventListener("keydown", handleBulletShot);
  window.addEventListener("keyup", handleBulletStop);

  /** 게임 업데이트 */
  const update = () => {
    const bullets = getBullets(); // 총알 배열을 가져옴

    // 우주선 좌,우 이동
    const { X, Y } = handleSpaceShipUpdate(SpaceShipX, SpaceShipY);
    SpaceShipX = X;
    SpaceShipY = Y;

    // 적기 업데이트
    updateEnemies(() => {
      endGame(); // 적기가 화면 밖으로 벗어나면 게임 종료
    });

    // 총알 업데이트
    updateBullet(getEnemies());
  };

  /** 게임 렌더링 */
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const bullets = getBullets(); // 총알 배열을 가져옴

    // 우주선
    ctx.drawImage(
      images.spaceFighterImage,
      SpaceShipX,
      SpaceShipY,
      SPACEFIGHTER_SIZE,
      SPACEFIGHTER_SIZE
    );

    // 적기
    drawGameObjects(
      getEnemies(),
      ctx,
      images.enemyPlaneSkeleton,
      ENEMYPLANE_SIZE
    );

    // 총알
    drawGameObjects(bullets, ctx, images.bulletImage, BULLET_SIZE);
  };

  /** 게임 종료 */
  const endGame = () => {
    if (gameEnded) return;
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
