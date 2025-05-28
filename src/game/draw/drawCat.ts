import * as T from '@/shared/types';
import * as C from '@/constants';

/**
 * 고양이
 * @param ctx - 캔버스 컨텍스트
 * @param x - x 좌표
 * @param y - y 좌표
 * @param color - 색상
 */
export function drawCat(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.CatColor): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.body; 
  ctx.beginPath();
  
  ctx.moveTo(18, -13);
  ctx.lineTo(18, -3);
  ctx.lineTo(15, -3);
  ctx.lineTo(15, 11);
  ctx.lineTo(10, 11);
  ctx.lineTo(10, 8);
  ctx.lineTo(7, 8);
  ctx.lineTo(7, 8);
  ctx.lineTo(7, -2);
  ctx.lineTo(2, -2);
  ctx.lineTo(2, 10);
  ctx.lineTo(5, 10);
  ctx.lineTo(5, 13);
  ctx.lineTo(7, 13);
  ctx.lineTo(7, 27);
  ctx.lineTo(38, 27);
  ctx.lineTo(38, 13);
  ctx.lineTo(41, 13);
  ctx.lineTo(41, 10);
  ctx.lineTo(44, 10);
  ctx.lineTo(44, -4);
  ctx.lineTo(41, -4);
  ctx.lineTo(41, -13);
  ctx.lineTo(35, -13);
  ctx.lineTo(35, -10);
  ctx.lineTo(32, -10);
  ctx.lineTo(32, -7);
  ctx.lineTo(24, -7);
  ctx.lineTo(24, -10);
  ctx.lineTo(21, -10);
  ctx.lineTo(21, -13);
  ctx.lineTo(18, -13);

  ctx.fill(); 

  // 눈
  ctx.fillStyle = color.eye;
  ctx.fillRect(24, 3, 3, 4);
  ctx.fillRect(35, 3, 3, 4);
  
  // 얼굴
  ctx.fillStyle = color.line;
  ctx.fillRect(15.5, -14, 2.5, 11);
  ctx.fillRect(13, -3, 3, 13);
  ctx.fillRect(10, 10, 9, 3.5);
  ctx.fillRect(18.5, 13, 19.5, 3.5);
  ctx.fillRect(38, 10, 3, 3.5);
  ctx.fillRect(41, -3.5, 3, 13.5);
  ctx.fillRect(35, -13.5, 6, 3.5);
  ctx.fillRect(38, -10, 3, 7);
  ctx.fillRect(32, -10, 3, 3);
  ctx.fillRect(24, -7, 8, 3);
  ctx.fillRect(21, -10, 3, 3);
  ctx.fillRect(18, -14, 3, 3.5);
  
  // 몸통
  ctx.fillRect(7, 7, 3, 3);
  ctx.fillRect(4, 0, 3, 7);
  ctx.fillRect(2, -3, 5, 3);
  ctx.fillRect(-1, 0, 3, 10);
  ctx.fillRect(2, 10, 3, 3.5);
  ctx.fillRect(4.5, 13, 3, 4);
  ctx.fillRect(7, 17, 3, 10);
  ctx.fillRect(35, 16, 3, 11);
  ctx.fillRect(13, 23, 2.5, 4);
  ctx.fillRect(18, 23, 9, 4);
  ctx.fillRect(30, 23, 2.5, 4);
  
  ctx.restore();
}
/**
 * 고양이 달리기
 * @param ctx - 캔버스 컨텍스트
 * @param x - x 좌표
 * @param y - y 좌표
 * @param color - 색상
 */
export function drawRunningCat(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.CatColor): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.body; 
  ctx.beginPath();
  
  ctx.moveTo(18, -13);
  ctx.lineTo(18, -3);
  ctx.lineTo(15, -3);
  ctx.lineTo(15, 11);
  ctx.lineTo(10, 11);
  ctx.lineTo(10, 8);
  ctx.lineTo(7, 8);
  ctx.lineTo(7, 8);
  ctx.lineTo(7, -2);
  ctx.lineTo(2, -2);
  ctx.lineTo(2, 10);
  ctx.lineTo(5, 10);
  ctx.lineTo(5, 13);
  ctx.lineTo(7, 13);
  ctx.lineTo(7, 27);
  ctx.lineTo(38, 27);
  ctx.lineTo(38, 13);
  ctx.lineTo(41, 13);
  ctx.lineTo(41, 10);
  ctx.lineTo(44, 10);
  ctx.lineTo(44, -4);
  ctx.lineTo(41, -4);
  ctx.lineTo(41, -13);
  ctx.lineTo(35, -13);
  ctx.lineTo(35, -10);
  ctx.lineTo(32, -10);
  ctx.lineTo(32, -7);
  ctx.lineTo(24, -7);
  ctx.lineTo(24, -10);
  ctx.lineTo(21, -10);
  ctx.lineTo(21, -13);
  ctx.lineTo(18, -13);

  ctx.fill(); 

  // 눈
  ctx.fillStyle = color.eye;
  ctx.fillRect(24, 3, 3, 4);
  ctx.fillRect(35, 3, 3, 4);
  
  // 얼굴
  ctx.fillStyle = color.line;
  ctx.fillRect(15.5, -14, 2.5, 11);
  ctx.fillRect(13, -3, 3, 13);
  ctx.fillRect(10, 10, 9, 3.5);
  ctx.fillRect(18.5, 13, 19.5, 3.5);
  ctx.fillRect(38, 10, 3, 3.5);
  ctx.fillRect(41, -3.5, 3, 13.5);
  ctx.fillRect(35, -13.5, 6, 3.5);
  ctx.fillRect(38, -10, 3, 7);
  ctx.fillRect(32, -10, 3, 3);
  ctx.fillRect(24, -7, 8, 3);
  ctx.fillRect(21, -10, 3, 3);
  ctx.fillRect(18, -14, 3, 3.5);
  
  // 몸통
  ctx.fillRect(7, 7, 3, 3);
  ctx.fillRect(2, -3, 5, 3);
  ctx.fillRect(4, 0, 3, 7);
  ctx.fillRect(-1, 0, 3, 10);
  ctx.fillRect(2, 10, 3, 3.5);
  ctx.fillRect(4.5, 13, 3, 4);
  ctx.fillRect(7, 17, 3, 6);
  ctx.fillRect(35, 15, 3, 8);
  ctx.fillRect(10, 23, 2.5, 4);
  ctx.fillRect(15, 23, 15, 4);
  ctx.fillRect(32, 23, 2.5, 4);
  
  ctx.restore();
}
/**
 * 고양이 점프
 * @param ctx - 캔버스 컨텍스트
 * @param x - x 좌표
 * @param y - y 좌표
 * @param color - 색상
 */
export function drawJumpingCat(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.CatColor): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.body; 
  ctx.beginPath();
  
  ctx.moveTo(18, -18);  
  ctx.lineTo(18, -9);
  ctx.lineTo(16, -9);
  ctx.lineTo(16, 6);
  ctx.lineTo(10, 6);
  ctx.lineTo(10, 9);
  ctx.lineTo(7, 9);
  ctx.lineTo(7, 12);
  ctx.lineTo(2, 12);
  ctx.lineTo(2, 15);
  ctx.lineTo(-1, 15);
  ctx.lineTo(-1, 24);
  ctx.lineTo(2, 24);
  ctx.lineTo(2, 18);
  ctx.lineTo(5, 18);
  ctx.lineTo(5, 15);
  ctx.lineTo(11, 15);
  ctx.lineTo(11, 27);
  ctx.lineTo(20, 27);
  ctx.lineTo(20, 21);
  ctx.lineTo(23, 21);
  ctx.lineTo(23, 18);
  ctx.lineTo(37, 18);
  ctx.lineTo(37, 7);
  ctx.lineTo(40, 7);
  ctx.lineTo(40, 4);
  ctx.lineTo(43, 4);
  ctx.lineTo(43, -9);
  ctx.lineTo(40, -9);
  ctx.lineTo(40, -18);
  ctx.lineTo(35, -18);
  ctx.lineTo(35, -15);
  ctx.lineTo(32, -15);
  ctx.lineTo(32, -12);
  ctx.lineTo(24, -12);
  ctx.lineTo(24, -15);
  ctx.lineTo(21, -15);
  ctx.lineTo(21, -18);
  ctx.lineTo(18, -18);

  ctx.fill();

  // 눈
  ctx.fillStyle = color.eye;
  ctx.fillRect(24, -4, 3, 4);
  ctx.fillRect(35, -4, 3, 4);
  
  // 얼굴
  ctx.fillStyle = color.line;
  ctx.fillRect(15.5, -20, 2.5, 11);
  ctx.fillRect(13, -9, 3, 13);
  ctx.fillRect(10, 4, 9, 3.5);
  ctx.fillRect(18.5, 7, 19.5, 3.5);
  ctx.fillRect(38, 4, 3, 3.5);
  ctx.fillRect(41, -9.5, 3, 13.5);
  ctx.fillRect(35, -19.5, 6, 3.5);
  ctx.fillRect(38, -16, 3, 7);
  ctx.fillRect(32, -16, 3, 3);
  ctx.fillRect(24, -13, 8, 3);
  ctx.fillRect(21, -16, 3, 3);
  ctx.fillRect(18, -20, 3, 3.5);
  
  // 몸통
  ctx.fillRect(7, 7, 3, 3);  
  ctx.fillRect(2, 10, 5, 3);  
  ctx.fillRect(-1, 13, 3, 3);  
  ctx.fillRect(-4, 16, 3, 11);  
  ctx.fillRect(-1, 24, 3, 3);  
  ctx.fillRect(2, 18, 3, 6);  
  ctx.fillRect(5, 15, 3, 3);  
  ctx.fillRect(8, 15, 3, 12);  
  ctx.fillRect(14, 23, 2, 4);  
  ctx.fillRect(19, 21, 3, 6);  
  ctx.fillRect(22, 18, 5, 3);  
  ctx.fillRect(30, 14, 2, 4);  
  ctx.fillRect(35, 10, 3, 8);  
  
  ctx.restore();
}
/**
 * 고양이 하강
 * @param ctx - 캔버스 컨텍스트
 * @param x - x 좌표
 * @param y - y 좌표
 * @param color - 색상
 */
export function drawDownCat(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.CatColor): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.body; 
  ctx.beginPath();

  ctx.moveTo(18, -18);
  ctx.lineTo(18, -9);
  ctx.lineTo(15, -9);
  ctx.lineTo(15, 6);
  ctx.lineTo(11, 6);
  ctx.lineTo(11, 3);
  ctx.lineTo(9, 3);
  ctx.lineTo(9, 0);
  ctx.lineTo(6, 0);
  ctx.lineTo(6, -9);
  ctx.lineTo(2, -9);
  ctx.lineTo(2, 3);
  ctx.lineTo(5, 3);
  ctx.lineTo(5, 6);
  ctx.lineTo(8, 6);
  ctx.lineTo(8, 10);
  ctx.lineTo(11, 10);
  ctx.lineTo(11, 18);
  ctx.lineTo(24, 18);
  ctx.lineTo(24, 21);
  ctx.lineTo(27, 21);
  ctx.lineTo(27, 27);
  ctx.lineTo(37, 27);
  ctx.lineTo(37, 7);
  ctx.lineTo(40, 7);
  ctx.lineTo(40, 4);
  ctx.lineTo(43, 4);
  ctx.lineTo(43, -9);
  ctx.lineTo(40, -9);
  ctx.lineTo(40, -18);
  ctx.lineTo(35, -18);
  ctx.lineTo(35, -15);
  ctx.lineTo(32, -15);
  ctx.lineTo(32, -12);
  ctx.lineTo(24, -12);
  ctx.lineTo(24, -15);
  ctx.lineTo(21, -15);
  ctx.lineTo(21, -18);
  ctx.lineTo(18, -18);

  ctx.fill();

  // 눈
  ctx.fillStyle = color.eye;
  ctx.fillRect(24, -2, 3, 4);
  ctx.fillRect(35, -2, 3, 4);
  
  // 얼굴
  ctx.fillStyle = color.line;
  ctx.fillRect(15.5, -20, 2.5, 11);
  ctx.fillRect(13, -9, 3, 13);
  ctx.fillRect(11, 4, 8, 3.5);
  ctx.fillRect(18.5, 7, 19.5, 3.5);
  ctx.fillRect(38, 4, 3, 3.5);
  ctx.fillRect(41, -9.5, 3, 13.5);
  ctx.fillRect(35, -19.5, 6, 3.5);
  ctx.fillRect(38, -16, 3, 7);
  ctx.fillRect(32, -16, 3, 3);
  ctx.fillRect(24, -13, 8, 3);
  ctx.fillRect(21, -16, 3, 3);
  ctx.fillRect(18, -20, 3, 3.5);
  
  // 몸통
  ctx.fillRect(8, 0, 3, 4);  
  ctx.fillRect(5, -10, 3, 10);  
  ctx.fillRect(2, -10, 3, 3);  
  ctx.fillRect(-1, -7, 3, 10);  
  ctx.fillRect(2, 3, 3, 3);  
  ctx.fillRect(5, 6, 3, 4);  
  ctx.fillRect(8, 10, 3, 8);  
  ctx.fillRect(14, 14, 2, 4);  
  ctx.fillRect(19, 18, 5, 3);  
  ctx.fillRect(24, 21, 3, 6);  
  ctx.fillRect(30, 23, 2, 4);  
  ctx.fillRect(35, 10, 3, 17);  
  
  ctx.restore();
}