import * as C from '@/constants';

/**
 * 바닥
 * @param ctx - 캔버스 컨텍스트
 * @param x - 바닥의 x 좌표
 * @param y - 바닥의 y 좌표
 * @param type - 바닥의 타입
 */
export function drawFloor(ctx: CanvasRenderingContext2D, x: number, y: number, type: string): void {
  if (type === 'stone') {
    ctx.lineTo(x, y);
  
    ctx.lineTo(x + 2 * C.SCALE, y);
    ctx.lineTo(x + 5 * C.SCALE, y - 2 * C.SCALE);
    ctx.lineTo(x + 12 * C.SCALE, y - 2 * C.SCALE);
    ctx.lineTo(x + 14 * C.SCALE, y);
    ctx.lineTo(x + 20 * C.SCALE, y);
    ctx.lineTo(x + 21 * C.SCALE, y - 2 * C.SCALE);
    ctx.lineTo(x + 24 * C.SCALE, y - 2 * C.SCALE);
    ctx.lineTo(x + 25 * C.SCALE, y - 4 * C.SCALE);
    ctx.lineTo(x + 31 * C.SCALE, y - 4 * C.SCALE);
    ctx.lineTo(x + 33 * C.SCALE, y);
    ctx.lineTo(x + 33 * C.SCALE, y);
  } else if (type === 'pit') {
    ctx.lineTo(x + 2, y);

    ctx.lineTo(x + 4 * C.SCALE, y + 2 * C.SCALE); 
    ctx.lineTo(x + 12 * C.SCALE, y + 2 * C.SCALE); 
    ctx.lineTo(x + 14 * C.SCALE, y);
  }
}
/**
 * 모래
 * @param ctx - 캔버스 컨텍스트
 * @param x - 모래의 x 좌표
 * @param y - 모래의 y 좌표
 * @param width - 모래의 너비
 */
export function drawSand(ctx: CanvasRenderingContext2D, x: number, y: number, width: number): void {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width * C.SCALE, y);
  ctx.stroke();
}