import * as D from '@/game/draw';
import * as U from '@/shared/utils';
import * as T from '@/shared/types';
import * as C from '@/constants';

export class Obstacle implements T.IMoveGameObject {
  x: number;
  y: number;
  width: number = 0;
  height: number = 0;
  speed: number;
  lastTime: number = 0;
  Interval: number = C.OBSTACLE_INTERVAL;
  color: T.Color;
  obstacles: T.Obstacle[] = [];

  private score: number = 0;
  private typeArray: T.ObstacleType[] = C.OBSTACLE_TYPE as T.ObstacleType[];
  private obstacleConfig: T.ObstacleConfig = {
    obstacleMin: 2,
    obstacleMax: 3,
    typeMax: 1
  };

  constructor(x: number, y: number, speed: number, color: T.Color) {
    this.x = x;
    this.y = y + C.OBSTACLE_OFFSET_Y;
    this.speed = speed;
    this.color = color;
  }
  /**
   * 속도 설정
   * @param speed - 속도
   */
  setSpeed(speed: number) {
    this.speed = speed;
  }
  /**
   * 장애물 업데이트
   * @param currentTime - 현재 시간
   */
  update(currentTime: number): void {
    // 일정 간격으로 새로운 장애물 생성
    if (currentTime - this.lastTime > this.Interval) {
      this.createObstacleGroup();

      this.lastTime = currentTime;
      this.Interval = U.randomNumber(C.OBSTACLE_INTERVAL, C.OBSTACLE_INTERVAL * 1.5) - (this.speed * 20);
    }
    // 장애물 이동 및 화면 밖 제거
    this.obstacles = this.obstacles.filter(obstacle => {
      obstacle.x -= this.speed;
      return obstacle.x > -obstacle.width;
    });
  }
  /**
   * 장애물 그리기
   * @param ctx - 캔버스 컨텍스트
   */
  draw(ctx: CanvasRenderingContext2D): void {
    this.obstacles.forEach(obstacle => {
      D[`draw${obstacle.type}Obstacle`](ctx, obstacle.x, obstacle.y, this.color);
    });
  }
  /**
   * 점수 설정
   * @param score - 점수
   */
  setScore(score: number): void {
    this.score = score;
    this.updateObstacleConfig();
  }
  /**
   * 장애물 설정 업데이트
   */
  private updateObstacleConfig(): void {
    if (this.score > 150) {
      this.obstacleConfig.obstacleMin = 3;
      this.obstacleConfig.obstacleMax = 4;
      this.obstacleConfig.typeMax = this.typeArray.length - 1;
    }
    if (this.score > 300) {
      this.obstacleConfig.obstacleMin = 4;
      this.obstacleConfig.obstacleMax = 5;
    }
  }
  /**
   * 장애물 그룹 생성
   */
  private createObstacleGroup(): void {
    const obstacleCount = U.randomNumber(this.obstacleConfig.obstacleMin, this.obstacleConfig.obstacleMax);
    let currentX = this.x;
    const deviceSizes = C.OBSTACLE_SIZES[C.DEVICE_TYPE];

    for (let i = 0; i < obstacleCount; i++) {
      const type = this.typeArray[U.randomNumber(0, this.obstacleConfig.typeMax)];
      const size = deviceSizes[type];

      this.obstacles.push({
        x: currentX,
        y: this.y,
        width: size.width,
        height: size.height,
        type: type
      })
      
      currentX += size.width + C.OBSTACLE_SPACING;
    }
  }
}


