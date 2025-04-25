import { SpaceControllers } from "@/app/(game)/galaga/_lib/spaceControllers";
import { LoadImage } from "@/app/(game)/galaga/_lib/loadImage";
import { bulletControllers } from "@/app/(game)/galaga/_lib/bulletControllers";
import { Bullet } from "@/app/(game)/galaga/_lib/bullet";

export const initGame = async (
  canvas: HTMLCanvasElement
): Promise<() => void> => {
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("2D not context");
  const { handleKeyboardListener, handleKeyboardDelete, handleSpaceUpdate } =
    SpaceControllers();
  const bullets: Bullet[] = [];

  const getFighterPosition = () => ({ x: spaceFighterX, y: spaceFighterY });

  const { handleKeyboardListener: testFuck, handleKeyboardDelete: testFuck2 } =
    bulletControllers(bullets, getFighterPosition);

  window.addEventListener("keydown", handleKeyboardListener);
  window.addEventListener("keyup", handleKeyboardDelete);
  window.addEventListener("keydown", testFuck);
  window.addEventListener("keyup", testFuck2);

  const images = await LoadImage();

  // 우주선 값
  const SPACEFIGHTER_SIZE = 50;
  let spaceFighterX = canvas.width / 2;
  let spaceFighterY = canvas.height - SPACEFIGHTER_SIZE;

  const bullet = new Bullet(0, 0);
  let animationFrameId: number;

  const update = () => {
    const { X, Y } = handleSpaceUpdate(spaceFighterX, spaceFighterY);
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
    window.removeEventListener("keydown", testFuck);
    window.removeEventListener("keydown", handleKeyboardListener);
    window.removeEventListener("keyup", handleKeyboardDelete);
  };
};
