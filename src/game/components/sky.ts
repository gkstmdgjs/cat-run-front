import * as U from '@/shared/utils';
import * as T from '@/shared/types';
import * as C from '@/constants';
import * as D from '@/game/draw'

export class Sky implements T.IGameConfig {
  x: number;
  y: number = 0;
  width: number = 0;
  height: number = 0;
  lastTime: number = 0;
  Interval: number = C.CLOUD_INTERVAL;
  color: T.Color;
  mode: T.Mode = 'light';
  clouds: T.Cloud[] = [];
  
  private moonX: number;
  private moonY: number;
  private moonType: T.MoonType = 'drawRightCrescentMoon';
  private stars: T.Star[] = [];
  private callBack: (() => void);
   
  constructor(x: number, color: T.Color, callBack: (() => void)) {
    this.x = x;
    this.moonY = C.SKY_MOON_OFFSET_Y;
    this.moonX = x + this.moonY;
    this.color = color;
    this.callBack = callBack;

    this.initStar();
  }
  /**
   * 하늘 업데이트
   * @param currentTime - 현재 시간
   */
  update(currentTime: number): void {
    // 일정 간격으로 새로운 구름 생성
    if (currentTime - this.lastTime > this.Interval) {
      this.clouds.push({
        x: this.x,
        y: U.randomNumber(C.SKY_CLOUD_MIN, C.SKY_CLOUD_MAX),
        speed: U.randomNumber(1, 1.5) * C.SKY_SPEED,
      });

      this.lastTime = currentTime;
      this.Interval = C.CLOUD_INTERVAL + U.randomNumber(1500, 2500);
    }
    // 별 이동 (화면에 벗어났다면 다시 시작)
    this.stars.forEach(item => {
      item.x -= item.speed;

      if(item.x < -20) {
        item.x = this.x;
        item.y = U.randomNumber(C.SKY_STAR_MIN_Y, C.SKY_STAR_MAX_Y);
        item.speed = U.randomNumber(0.1, 0.3) * C.SKY_SPEED;
        item.glitter = U.randomNumber(0, 1) % 2 === 0;
      }
    })
    // 구름 이동 및 화면 밖 제거
    this.clouds = this.clouds.filter((item) => {
      item.x -= item.speed; 
      return item.x > C.SKY_CLOUD_WIDTH;
    });
    // 달 이동 및 달 타입 변경 후 callback 호출
    if(this.mode === 'dark') {
      this.moonX -= C.SKY_MOON_SPEED;
      
      if (this.moonX < -50) {
        switch(this.moonType) {
          case 'drawRightCrescentMoon':
            this.moonType = 'drawFullMoon';
            break;
          case 'drawFullMoon':
            this.moonType = 'drawLeftCrescentMoon';
            break;
          case 'drawLeftCrescentMoon':
            this.moonType = 'drawRightCrescentMoon';
            break;
        }
        this.callBack();
      }
    }
  }
  /**
   * 하늘 그리기
   * @param ctx - 캔버스 컨텍스트
   */
  draw(ctx: CanvasRenderingContext2D): void {
    // 다크모드 일때만 달과 별 그리기
    if(this.mode === 'dark') {
      D[this.moonType](ctx, this.moonX, this.moonY, this.color);
      this.stars.forEach(item => {
        D.drawStar(ctx, item.x, item.y, this.color, item.glitter);
      })
    }
    // 구름 그리기
    this.clouds.forEach(item => {
      D.drawCloud(ctx, item.x, item.y, this.color);
    })
  }
  /**
   * 달의 x 좌표 설정
   * @param x - x 좌표
   */
  setMoonX(x: number): void {
    this.moonX = x;
  }
  /**
   * 별 초기 할당
   */
  private initStar(): void {
    // 모바일에서는 별 개수를 줄임
    for(let i = 0; i < C.START_COUNT; i++) {
      const starX = U.randomNumber(C.SKY_STAR_MIN_X, C.SKY_STAR_MAX_X) * (i + 1);
      const starY = U.randomNumber(C.SKY_STAR_MIN_Y, C.SKY_STAR_MAX_Y);
      const starSpeed = U.randomNumber(C.SKY_STAR_MIN_SPEED, C.SKY_STAR_MAX_SPEED);
      
      this.stars.push({
        x: starX,
        y: starY,
        speed: starSpeed,
        glitter: U.randomNumber(0, 1) % 2 === 0,
      });
    }
  }
}