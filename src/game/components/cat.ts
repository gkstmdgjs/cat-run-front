import * as T from '@/shared/types';
import * as C from '@/constants';
import * as D from '@/game/draw';

export class Cat implements T.ICat {
  x: number;
  y: number;
  width: number;
  height: number;
  lastTime: number = 0;  
  velocity: number = 0;
  isJumping: boolean = false;
  color: T.CatColor;
  catType: T.CatType = 'basic';
  canvas: HTMLCanvasElement;

  constructor(x: number, y: number, color: T.CatColor, canvas: HTMLCanvasElement) {
    this.width = C.CAT_WIDTH;
    this.height = C.CAT_HEIGHT;
    this.x = x - C.CAT_OFFSET_X;
    this.y = y;
    this.color = color;
    this.canvas = canvas;

    this.setupControls();
  }
  /**
   * 고양이 업데이트
   */
  update(currentTime: number): void {
    this.velocity += C.CAT_VELOCITY;
    this.y += this.velocity;
    
    if (this.y >= this.canvas.height - this.height) {
      this.y = this.canvas.height - this.height;
      this.isJumping = false;
    }
    // 고양이 뛰는 간격 (250ms)
    if (currentTime - this.lastTime > C.CAT_RUN_INTERVAL && !this.isJumping) {
      this.lastTime = currentTime;
      this.catType = this.catType === 'basic' ? 'run' : 'basic';
    }
    // 점프 중 최고점일 때 down 타입으로 변경
    if (this.isJumping && this.velocity > 0) this.catType = 'down';
  }
  /**
   * 고양이 그리기
   * @param ctx - 캔버스 컨텍스트
   */
  draw(ctx: CanvasRenderingContext2D) {
    const y = this.y - C.CAT_DRAW_OFFSET_Y;

    if (this.catType === 'basic') D.drawCat(ctx, this.x, y, this.color);
    if (this.catType === 'run') D.drawRunningCat(ctx, this.x, y, this.color);
    if (this.catType === 'jump') D.drawJumpingCat(ctx, this.x, y, this.color);
    if (this.catType === 'down') D.drawDownCat(ctx, this.x, y, this.color);
  }
  /**
   * 고양이 위치 반환
   */
  getLocation() {
    return {
      x: this.x + C.CAT_JUDGMENT,
      y: this.y,
      width: this.width - C.CAT_JUDGMENT,
      height: this.height
    }
  }
  /**
   * 점프
   */
  jump(): void {
    if (!this.isJumping) {
      this.velocity = C.CAT_JUMP_VELOCITY;
      this.isJumping = true;
      this.catType = 'jump';
    }
  }
  /**
   * 컨트롤 설정
   */
  private setupControls(): void {
    window.addEventListener('keydown', (e) => {
      if ((e.code === 'Space' || e.code === 'ArrowUp') && !this.isJumping) {
        this.jump();
      }
    });
  }
}