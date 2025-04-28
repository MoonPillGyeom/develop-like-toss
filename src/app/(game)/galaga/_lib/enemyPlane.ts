export class EnemyPlane {
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.speed = 3; // 아래로 이동하는 속도
  }
  update() {
    this.y += this.speed;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    image: HTMLImageElement,
    ENEMYPLANE_SIZE: number
  ) {
    ctx.drawImage(image, this.x, this.y, ENEMYPLANE_SIZE, ENEMYPLANE_SIZE);
  }

  init(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
