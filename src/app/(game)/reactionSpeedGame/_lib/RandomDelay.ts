export const RandomDelay = (max: number, min: number) => {
  return Math.random() * (max - min) + min;
};
