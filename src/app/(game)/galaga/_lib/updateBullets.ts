import { Bullet } from "@/app/(game)/galaga/_lib/bullet";
import { isCheckCollision } from "@/app/(game)/galaga/_lib/isCheckCollision";
import { EnemyPlane } from "@/app/(game)/galaga/_lib/enemyPlane";

const keyDown: Record<string, boolean> = {};
// const SPACEFIGHTER_SIZE = 50; // 우주선 크기 (적기와 비교에 사용)

// 총알 화면 밖으로 나가는지 검사하는 함수
const removeBulletIfOutOfBounds = (bullet: Bullet, bullets: Bullet[]) => {
  if (bullet.y < 0) {
    bullets.splice(bullets.indexOf(bullet), 1);
  }
};

// 총알의 위치를 업데이트하는 함수
const updateBulletPosition = (bullet: Bullet) => {
  bullet.update();
};

// 총알 충돌 처리 함수
const handleBulletCollision = (
  bullet: Bullet,
  enemyPlanes: EnemyPlane[],
  bullets: Bullet[],
  score: { value: number },
  SPACEFIGHTER_SIZE: number
) => {
  for (let i = enemyPlanes.length - 1; i >= 0; i--) {
    const enemy = enemyPlanes[i];
    if (isCheckCollision(bullet, enemy, SPACEFIGHTER_SIZE)) {
      bullets.splice(bullets.indexOf(bullet), 1); // 총알 제거
      enemyPlanes.splice(i, 1); // 적기 제거
      score.value++; // 점수 업데이트
      console.log(score.value);
      break; // 충돌 시 더 이상 적기와 비교하지 않도록
    }
  }
};

// 총알 업데이트 함수
const updateBullets = (
  bullets: Bullet[],
  enemyPlanes: EnemyPlane[],
  score: { value: number },
  SPACEFIGHTER_SIZE: number
) => {
  for (let j = bullets.length - 1; j >= 0; j--) {
    const bullet = bullets[j];
    updateBulletPosition(bullet); // 총알 위치 업데이트

    handleBulletCollision(
      bullet,
      enemyPlanes,
      bullets,
      score,
      SPACEFIGHTER_SIZE
    ); // 충돌 처리

    removeBulletIfOutOfBounds(bullet, bullets); // 화면 밖 총알 제거
  }
};

export const bulletControllers = (
  getFighterPosition: () => { x: number; y: number },
  SPACEFIGHTER_SIZE: number
) => {
  const bullets: Bullet[] = [];
  const score = { value: 0 }; // 점수를 객체로 관리 (불변성 유지)

  const handleBulletShot = (e: KeyboardEvent) => {
    if (e.key === " ") {
      const { x, y } = getFighterPosition();
      bullets.push(new Bullet(x + 20, y)); // 20은 우주선 가운데에서 쏘기 위해
    }
  };

  const handleBulletStop = (e: KeyboardEvent) => {
    if (e.key === " ") {
      delete keyDown[e.key];
    }
  };

  const getBullets = () => bullets;

  // 게임 루프에서 총알 업데이트 호출
  const updateBullet = (enemyPlanes: EnemyPlane[]) => {
    updateBullets(bullets, enemyPlanes, score, SPACEFIGHTER_SIZE); // 적기와 비교를 위한 로직은 필요 시 추가
  };
  return { handleBulletShot, handleBulletStop, getBullets, updateBullet };
};
