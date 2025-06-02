import * as T from '@/shared/types';
import * as C from '@/constants';
/**
 * 작은 장애물
 * @param ctx - 캔버스 컨텍스트
 * @param x - 장애물의 x 좌표
 * @param y - 장애물의 y 좌표
 * @param color - 장애물의 색상
 */
export const drawSmallObstacle = (ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color): void => {

  ctx.fillStyle = color.gray20;
  ctx.beginPath();
  
  if (C.IS_PC) {
    ctx.lineTo(x, y - 3);
    ctx.lineTo(x + 12, y - 3);
    ctx.lineTo(x + 12, y - 42);
    ctx.lineTo(x + 6, y - 51);
    ctx.lineTo(x, y - 42);
  } else {
    ctx.lineTo(x, y - 2);
    ctx.lineTo(x + 7, y - 2);
    ctx.lineTo(x + 7, y - 25);
    ctx.lineTo(x + 3.5, y - 30);
    ctx.lineTo(x, y - 25);
  }

  ctx.fill();
}
/**
 * 중간 장애물
 * @param ctx - 캔버스 컨텍스트
 * @param x - 장애물의 x 좌표
 * @param y - 장애물의 y 좌표
 * @param color - 장애물의 색상
 */
export const drawMediumObstacle = (ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color): void => {

  ctx.fillStyle = color.gray20;
  ctx.beginPath();

  if (C.IS_PC) {
    ctx.lineTo(x, y - 3);
    ctx.lineTo(x + 12, y - 3);
    ctx.lineTo(x + 12, y - 51);
    ctx.lineTo(x + 6, y - 60);
    ctx.lineTo(x, y - 51);
  } else {
    ctx.lineTo(x, y - 2);
    ctx.lineTo(x + 7, y - 2);
    ctx.lineTo(x + 7, y - 30);
    ctx.lineTo(x + 3.5, y - 36);
    ctx.lineTo(x, y - 30);
  }

  ctx.fill();
}
/**
 * 큰 장애물
 * @param ctx - 캔버스 컨텍스트
 * @param x - 장애물의 x 좌표
 * @param y - 장애물의 y 좌표
 * @param color - 장애물의 색상
 */
export const drawBigObstacle = (ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color): void => {

  ctx.fillStyle = color.gray20;
  ctx.beginPath();

  if (C.IS_PC) {
    ctx.lineTo(x, y - 3);
    ctx.lineTo(x + 12, y - 3);
    ctx.lineTo(x + 12, y - 60);
    ctx.lineTo(x + 6, y - 69);
    ctx.lineTo(x, y - 60);
  } else {
    ctx.lineTo(x, y - 2);
    ctx.lineTo(x + 7, y - 2);
    ctx.lineTo(x + 7, y - 36);
    ctx.lineTo(x + 3.5, y - 41);
    ctx.lineTo(x, y - 36);
  }

  ctx.fill();
}