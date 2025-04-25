"use client";

export const LoadImage = async () => {
  const load = (src: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = reject;
    });

  const spaceFighterImage = await load("/space-fighter-30.png");
  const bulletImage = await load("/bullet.png");
  const enemyPlaneWhite = await load("/enemy-plane-white.png");

  return { bulletImage, spaceFighterImage, enemyPlaneWhite };
};
