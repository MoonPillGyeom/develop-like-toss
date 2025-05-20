export const drawGameObjects = (
  objects: {
    draw: (
      ctx: CanvasRenderingContext2D,
      image: HTMLImageElement,
      size: number
    ) => void;
  }[],
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  size: number
) => {
  objects.forEach((object) => {
    object.draw(ctx, image, size);
  });
};
