"use client";

const loadImage = (src: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });

export const loadGameImages = async () => {
  const [bulletImage, spaceFighterImage, enemyPlaneSkeleton] =
    await Promise.all([
      loadImage("/bullet.png"),
      loadImage("/space-fighter-30.png"),
      loadImage("/skeleton.png"),
    ]);
  return { bulletImage, spaceFighterImage, enemyPlaneSkeleton };
};
