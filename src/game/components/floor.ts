import * as U from '@/shared/utils';
import * as T from '@/shared/types';
import * as C from '@/constants';
import * as D from '@/game/draw';

export class Floor implements T.IMoveGameObject {
  x: number = 0;
  y: number = 0;
  width: number;
  height: number;  
  speed: number;
  color: T.Color;
  lastTime: number = 0;
  Interval: number = C.MATERIAL_INTERVAL;

  private sands: T.FloorSand[] = [];
  private materials: T.FloorMaterials[] = [];
  private materialWidth: number;

  constructor(width: number, height: number, speed: number, color: T.Color) {
    this.width = width;
    this.height = height - C.FLOOR_HEIGHT;
    this.speed = speed;
    this.color = color;
    this.materialWidth = C.MATERIAL_WIDTH;

    this.initSand();
  }
  /**
   * 속도 설정
   * @param speed - 속도
   */
  setSpeed(speed: number): void {
    this.speed = speed;
  }
  /**
   * 바닥 업데이트
   * @param currentTime - 현재 시간
   */
  update(currentTime: number): void {
    // 모래 이동 (화면에 벗어났다면 다시 시작)
    this.sands.forEach(item => {
      item.x -= this.speed;

      if (item.x < 0) {
        item.x = this.width;
        item.y = (this.height + C.SAND_OFFSET_MIN) + U.randomNumber(C.SAND_OFFSET_MIN, C.SAND_OFFSET_MAX);
        item.width = U.randomNumber(C.SAND_WIDTH_MIN, C.SAND_WIDTH_MAX);
      }
    });
    // 일정 간격으로 새로운 구조물 생성
    if (currentTime - this.lastTime > this.Interval) {
      // 구조물 간 최소 거리 확보
      const lastMaterial = this.materials[this.materials.length - 1];
      if (lastMaterial && lastMaterial.x > this.width - this.materialWidth) return;

      this.materials.push({
        x: this.width,
        type: U.randomNumber(1, 2) % 2 === 0 ? 'stone' : 'pit',
      });

      this.lastTime = currentTime;
      this.Interval = C.MATERIAL_INTERVAL + U.randomNumber(0, 500);
    }
    // 구조물 이동 및 화면 밖 제거
    this.materials = this.materials.filter(item => {
      item.x -= this.speed;
      return item.x > -this.materialWidth;
    });
  }
  /**
   * 바닥 그리기
   * @param ctx - 캔버스 컨텍스트
   */
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.strokeStyle = this.color.white100;
    ctx.lineWidth = C.FLOOR_LINE_WIDTH;

    this.sands.forEach(item => {
      D.drawSand(ctx, item.x, item.y, item.width);
    });
    this.drawFloor(ctx);
  }
  /**
   * 모래 초기 할당
   */
  private initSand(): void {
    const gap = this.width / C.SAND_COUNT;
    
    for (let i = 0; i < C.SAND_COUNT; i++) {
      // x 축이 겹치지 않도록 생성
      const x = (i * gap) + (Math.random() * gap * 0.5);
      
      this.sands.push({
        x: x,
        y: (this.height + C.SAND_OFFSET_MIN) + U.randomNumber(C.SAND_OFFSET_MIN, C.SAND_OFFSET_MAX),
        width: U.randomNumber(C.SAND_WIDTH_MIN, C.SAND_WIDTH_MAX)
      });
    }
  }
  /**
   * 구조물 그리기
   * @param ctx - 캔버스 컨텍스트
   */
  private drawFloor(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(this.x, this.height);

    this.materials.forEach(item => {
      D.drawFloor(ctx, item.x, this.height, item.type);
    });

    ctx.lineTo(this.x + this.width, this.height);
    ctx.stroke();
  }
}


