"use client";

export const LoadImage = () => {
  const bulletImage = new Image();
  bulletImage.src = "/bullet.png";

  const spaceFighterImage = new Image();
  spaceFighterImage.src = "/space-fighter-30.png";

  const enemyPlaneWhite = new Image();
  enemyPlaneWhite.src = "/enemy-plane-white.png";

  return {
    bulletImage,
    spaceFighterImage,
    enemyPlaneWhite,
  };
};
