import { SpaceShipControllers } from "@/app/(game)/galaga/_lib/spaceShipControllers";
import { LoadImage } from "@/app/(game)/galaga/_lib/loadImage";
import { bulletControllers } from "@/app/(game)/galaga/_lib/bulletControllers";
import { Bullet } from "@/app/(game)/galaga/_lib/bullet";

export const initGame = async (
  canvas: HTMLCanvasElement
): Promise<() => void> => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D not context");

  const bullets: Bullet[] = [];

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

    // 총알
    bullets.forEach((bullet, index) => {
      bullet.update();
      bullet.draw(ctx, images.bulletImage);

      if (bullet.y < 0) {
        bullets.splice(index, 1);
      }
    });
  };

  const loop = () => {
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
