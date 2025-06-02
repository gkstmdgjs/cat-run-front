import * as T from '@/shared/types';
import * as C from '@/constants';
/**
 * 보름달
 * @param ctx - 캔버스 컨텍스트
 * @param x - 달의 x 좌표
 * @param y - 달의 y 좌표
 * @param color - 달의 색상
 */
export function drawFullMoon(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.black60;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  
  ctx.lineTo(0, 0);
  ctx.lineTo(16, 0);
  ctx.lineTo(16, 1.5);
  ctx.lineTo(20, 1.5);
  ctx.lineTo(20, 3);
  ctx.lineTo(23, 3);
  ctx.lineTo(23, 4.5);
  ctx.lineTo(26, 4.5);
  ctx.lineTo(26, 6);
  ctx.lineTo(29, 6);
  ctx.lineTo(29, 7.5);
  ctx.lineTo(30, 7.5);
  ctx.lineTo(30, 9);
  ctx.lineTo(31, 9);
  ctx.lineTo(31, 10);
  ctx.lineTo(32, 10);
  ctx.lineTo(32, 11);
  ctx.lineTo(33, 11);
  ctx.lineTo(33, 12);
  ctx.lineTo(34, 12);
  ctx.lineTo(34, 13);
  ctx.lineTo(35, 13);
  ctx.lineTo(35, 14);
  ctx.lineTo(36, 14);
  ctx.lineTo(36, 15);
  ctx.lineTo(37, 15);
  ctx.lineTo(37, 16);
  ctx.lineTo(38.5, 16);
  ctx.lineTo(38.5, 19);
  ctx.lineTo(40, 19);
  ctx.lineTo(40, 22);
  ctx.lineTo(41.5, 22);
  ctx.lineTo(41.5, 25);
  ctx.lineTo(43, 25);
  ctx.lineTo(43, 30);
  ctx.lineTo(44.5, 30);
  ctx.lineTo(44.5, 46);
  ctx.lineTo(43, 46);
  ctx.lineTo(43, 51);
  ctx.lineTo(41.5, 51);
  ctx.lineTo(41.5, 54);
  ctx.lineTo(40, 54);
  ctx.lineTo(40, 57);
  ctx.lineTo(38.5, 57);
  ctx.lineTo(38.5, 60);
  ctx.lineTo(37, 60);
  ctx.lineTo(37, 61);
  ctx.lineTo(36, 61);
  ctx.lineTo(36, 62);
  ctx.lineTo(35, 62);
  ctx.lineTo(35, 63);
  ctx.lineTo(34, 63);
  ctx.lineTo(34, 64);
  ctx.lineTo(33, 64);
  ctx.lineTo(33, 65);
  ctx.lineTo(32, 65);
  ctx.lineTo(32, 66);
  ctx.lineTo(31, 66);
  ctx.lineTo(31, 67);
  ctx.lineTo(30, 67);
  ctx.lineTo(30, 68);
  ctx.lineTo(29, 68);
  ctx.lineTo(29, 69);
  ctx.lineTo(26, 69);
  ctx.lineTo(26, 70.5);
  ctx.lineTo(23, 70.5);
  ctx.lineTo(23, 72);
  ctx.lineTo(20, 72);
  ctx.lineTo(20, 73.5);
  ctx.lineTo(15, 73.5);
  ctx.lineTo(15, 75);
  ctx.lineTo(2, 75);
  ctx.lineTo(2, 73.5);
  ctx.lineTo(-3, 73.5);
  ctx.lineTo(-3, 72);
  ctx.lineTo(-6, 72);
  ctx.lineTo(-6, 70.5);
  ctx.lineTo(-9, 70.5);
  ctx.lineTo(-9, 69);
  ctx.lineTo(-12, 69);
  ctx.lineTo(-12, 68);
  ctx.lineTo(-14, 68);
  ctx.lineTo(-14, 67);
  ctx.lineTo(-15, 67);
  ctx.lineTo(-15, 66);
  ctx.lineTo(-16, 66);
  ctx.lineTo(-16, 65);
  ctx.lineTo(-17, 65);
  ctx.lineTo(-17, 64);
  ctx.lineTo(-18, 64);
  ctx.lineTo(-18, 63);
  ctx.lineTo(-19, 63);
  ctx.lineTo(-19, 62);
  ctx.lineTo(-20, 62);
  ctx.lineTo(-20, 61);
  ctx.lineTo(-21, 61);
  ctx.lineTo(-21, 60);
  ctx.lineTo(-22, 60);
  ctx.lineTo(-22, 57);
  ctx.lineTo(-23.5, 57);
  ctx.lineTo(-23.5, 54);
  ctx.lineTo(-25, 54);
  ctx.lineTo(-25, 51);
  ctx.lineTo(-26.5, 51);
  ctx.lineTo(-26.5, 46);
  ctx.lineTo(-28, 46);
  ctx.lineTo(-28, 30);
  ctx.lineTo(-26.5, 30);
  ctx.lineTo(-26.5, 25);
  ctx.lineTo(-25, 25);
  ctx.lineTo(-25, 22);
  ctx.lineTo(-23.5, 22);
  ctx.lineTo(-23.5, 19);
  ctx.lineTo(-22, 19);
  ctx.lineTo(-22, 16);
  ctx.lineTo(-21, 16);
  ctx.lineTo(-21, 15);
  ctx.lineTo(-20, 15);
  ctx.lineTo(-20, 14);
  ctx.lineTo(-19, 14);
  ctx.lineTo(-19, 13);
  ctx.lineTo(-18, 13);
  ctx.lineTo(-18, 12);
  ctx.lineTo(-17, 12);
  ctx.lineTo(-17, 11);
  ctx.lineTo(-16, 11);
  ctx.lineTo(-16, 10);
  ctx.lineTo(-15, 10);
  ctx.lineTo(-15, 9);
  ctx.lineTo(-14, 9);
  ctx.lineTo(-14, 7.5);
  ctx.lineTo(-13, 7.5);
  ctx.lineTo(-13, 6);
  ctx.lineTo(-10, 6);
  ctx.lineTo(-10, 4.5);
  ctx.lineTo(-7, 4.5);
  ctx.lineTo(-7, 3);
  ctx.lineTo(-4, 3);
  ctx.lineTo(-4, 1.5);
  ctx.lineTo(0, 1.5);
  ctx.lineTo(0, 0);

  ctx.fill();
  ctx.restore();
}
/**
 * 왼쪽 초승달
 * @param ctx - 캔버스 컨텍스트
 * @param x - 달의 x 좌표
 * @param y - 달의 y 좌표
 * @param color - 달의 색상
 */
export function drawLeftCrescentMoon(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.black60;
  ctx.beginPath();
  ctx.moveTo(0, 0);

  ctx.lineTo(0, 0);
  ctx.lineTo(-8, 0);
  ctx.lineTo(-8, 1);
  ctx.lineTo(-14, 1);
  ctx.lineTo(-14, 3);
  ctx.lineTo(-18, 3);
  ctx.lineTo(-18, 5);
  ctx.lineTo(-22, 5);
  ctx.lineTo(-22, 7);
  ctx.lineTo(-25, 7);
  ctx.lineTo(-25, 9);
  ctx.lineTo(-27, 9);
  ctx.lineTo(-27, 11)
  ctx.lineTo(-29, 11)
  ctx.lineTo(-29, 13)
  ctx.lineTo(-31, 13)
  ctx.lineTo(-31, 15)
  ctx.lineTo(-33, 15)
  ctx.lineTo(-33, 18);
  ctx.lineTo(-35, 18);
  ctx.lineTo(-35, 22);
  ctx.lineTo(-37, 22);
  ctx.lineTo(-37, 28);
  ctx.lineTo(-39, 28);
  ctx.lineTo(-39, 40);
  ctx.lineTo(-37, 40);
  ctx.lineTo(-37, 46);
  ctx.lineTo(-35, 46);
  ctx.lineTo(-35, 51);
  ctx.lineTo(-32, 51);
  ctx.lineTo(-32, 55);
  ctx.lineTo(-30, 55);
  ctx.lineTo(-30, 57);
  ctx.lineTo(-28, 57);
  ctx.lineTo(-28, 59);
  ctx.lineTo(-26, 59);
  ctx.lineTo(-26, 61);
  ctx.lineTo(-24, 61);
  ctx.lineTo(-24, 63);
  ctx.lineTo(-20, 63);
  ctx.lineTo(-20, 65);
  ctx.lineTo(-18, 65);
  ctx.lineTo(-18, 66);
  ctx.lineTo(-13, 66);
  ctx.lineTo(-13, 67);                                 
  ctx.lineTo(-8, 67);
  ctx.lineTo(-8, 69);
  ctx.lineTo(6, 69);
  ctx.lineTo(6, 67);
  ctx.lineTo(12, 67);
  ctx.lineTo(12, 65);
  ctx.lineTo(16, 65);
  ctx.lineTo(16, 63);
  ctx.lineTo(18, 63);
  ctx.lineTo(22, 63);
  ctx.lineTo(22, 61);
  ctx.lineTo(24, 61);
  ctx.lineTo(24, 59);
  ctx.lineTo(26, 59);
  ctx.lineTo(26, 57);
  ctx.lineTo(28, 57);
  ctx.lineTo(28, 53);
  ctx.lineTo(25, 53);
  ctx.lineTo(25, 55);
  ctx.lineTo(22, 55);
  ctx.lineTo(18, 56);
  ctx.lineTo(18, 57);
  ctx.lineTo(4, 58);
  ctx.lineTo(4, 56);
  ctx.lineTo(-1, 56);
  ctx.lineTo(-1, 54);
  ctx.lineTo(-5, 54);
  ctx.lineTo(-5, 54);
  ctx.lineTo(-5, 52);
  ctx.lineTo(-7, 52);
  ctx.lineTo(-7, 50);
  ctx.lineTo(-11, 50);
  ctx.lineTo(-11, 48);
  ctx.lineTo(-13, 48);
  ctx.lineTo(-13, 46);
  ctx.lineTo(-15, 46);
  ctx.lineTo(-15, 44);
  ctx.lineTo(-17, 44);
  ctx.lineTo(-17, 40);
  ctx.lineTo(-19, 40);
  ctx.lineTo(-19, 35);
  ctx.lineTo(-20, 35);
  ctx.lineTo(-20, 22);
  ctx.lineTo(-18, 22);
  ctx.lineTo(-18, 17);
  ctx.lineTo(-16, 17);
  ctx.lineTo(-16, 14);
  ctx.lineTo(-13, 14);
  ctx.lineTo(-13, 11);
  ctx.lineTo(-11, 11);
  ctx.lineTo(-11, 9);
  ctx.lineTo(-9, 9);
  ctx.lineTo(-9, 6);
  ctx.lineTo(-5, 6);
  ctx.lineTo(-5, 4);
  ctx.lineTo(0, 4);
  ctx.lineTo(0, 0);

  ctx.fill();
  ctx.restore();
}
/**
 * 오른쪽 초승달
 * @param ctx - 캔버스 컨텍스트
 * @param x - 달의 x 좌표
 * @param y - 달의 y 좌표
 * @param color - 달의 색상
 */
export function drawRightCrescentMoon(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.black60;
  ctx.beginPath();
  ctx.moveTo(0, 0);

  ctx.lineTo(0, 0);
  ctx.lineTo(8, 0);
  ctx.lineTo(8, 1);
  ctx.lineTo(14, 1);
  ctx.lineTo(14, 3);
  ctx.lineTo(18, 3);
  ctx.lineTo(18, 5);
  ctx.lineTo(22, 5);
  ctx.lineTo(22, 7);
  ctx.lineTo(25, 7);
  ctx.lineTo(25, 9);
  ctx.lineTo(27, 9);
  ctx.lineTo(27, 11)
  ctx.lineTo(29, 11)
  ctx.lineTo(29, 13)
  ctx.lineTo(31, 13)
  ctx.lineTo(31, 15)
  ctx.lineTo(33, 15)
  ctx.lineTo(33, 18);
  ctx.lineTo(35, 18);
  ctx.lineTo(35, 22);
  ctx.lineTo(37, 22);
  ctx.lineTo(37, 28);
  ctx.lineTo(39, 28);
  ctx.lineTo(39, 40);
  ctx.lineTo(37, 40);
  ctx.lineTo(37, 46);
  ctx.lineTo(35, 46);
  ctx.lineTo(35, 51);
  ctx.lineTo(32, 51);
  ctx.lineTo(32, 55);
  ctx.lineTo(30, 55);
  ctx.lineTo(30, 57);
  ctx.lineTo(28, 57);
  ctx.lineTo(28, 59);
  ctx.lineTo(26, 59);
  ctx.lineTo(26, 61);
  ctx.lineTo(24, 61);
  ctx.lineTo(24, 63);
  ctx.lineTo(20, 63);
  ctx.lineTo(20, 65);
  ctx.lineTo(18, 65);
  ctx.lineTo(18, 66);
  ctx.lineTo(13, 66);
  ctx.lineTo(13, 67);                                 
  ctx.lineTo(8, 67);
  ctx.lineTo(8, 69);
  ctx.lineTo(-6, 69);
  ctx.lineTo(-6, 67);
  ctx.lineTo(-12, 67);
  ctx.lineTo(-12, 65);
  ctx.lineTo(-16, 65);
  ctx.lineTo(-16, 63);
  ctx.lineTo(-18, 63);
  ctx.lineTo(-22, 63);
  ctx.lineTo(-22, 61);
  ctx.lineTo(-24, 61);
  ctx.lineTo(-24, 59);
  ctx.lineTo(-26, 59);
  ctx.lineTo(-26, 57);
  ctx.lineTo(-28, 57);
  ctx.lineTo(-28, 53);
  ctx.lineTo(-25, 53);
  ctx.lineTo(-25, 55);
  ctx.lineTo(-22, 55);
  ctx.lineTo(-18, 56);
  ctx.lineTo(-18, 57);
  ctx.lineTo(-4, 58);
  ctx.lineTo(-4, 56);
  ctx.lineTo(1, 56);
  ctx.lineTo(1, 54);
  ctx.lineTo(5, 54);
  ctx.lineTo(5, 54);
  ctx.lineTo(5, 52);
  ctx.lineTo(7, 52);
  ctx.lineTo(7, 50);
  ctx.lineTo(11, 50);
  ctx.lineTo(11, 48);
  ctx.lineTo(13, 48);
  ctx.lineTo(13, 46);
  ctx.lineTo(15, 46);
  ctx.lineTo(15, 44);
  ctx.lineTo(17, 44);
  ctx.lineTo(17, 40);
  ctx.lineTo(19, 40);
  ctx.lineTo(19, 35);
  ctx.lineTo(20, 35);
  ctx.lineTo(20, 22);
  ctx.lineTo(18, 22);
  ctx.lineTo(18, 17);
  ctx.lineTo(16, 17);
  ctx.lineTo(16, 14);
  ctx.lineTo(13, 14);
  ctx.lineTo(13, 11);
  ctx.lineTo(11, 11);
  ctx.lineTo(11, 9);
  ctx.lineTo(9, 9);
  ctx.lineTo(9, 6);
  ctx.lineTo(5, 6);
  ctx.lineTo(5, 4);
  ctx.lineTo(0, 4);
  ctx.lineTo(0, 0);

  ctx.fill();
  ctx.restore();
}
/**
 * 별
 * @param ctx - 캔버스 컨텍스트
 * @param x - 별의 x 좌표
 * @param y - 별의 y 좌표
 * @param color - 별의 색상
 * @param glitter - 반짝임 효과 여부
 */
export function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color, glitter: boolean): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.black60;
  ctx.beginPath();
  ctx.moveTo(0, 0);

  ctx.lineTo(0, 0);
  ctx.lineTo(3, 0);
  ctx.lineTo(3, -2);
  ctx.lineTo(5, -2);
  ctx.lineTo(5, -7);
  ctx.lineTo(7, -7);
  ctx.lineTo(7, -2);
  ctx.lineTo(9, -2);
  ctx.lineTo(9, 0);
  ctx.lineTo(12, 0);
  ctx.lineTo(12, 2);
  ctx.lineTo(9, 2);
  ctx.lineTo(9, 4);
  ctx.lineTo(7, 4);
  ctx.lineTo(7, 9);
  ctx.lineTo(5, 9);
  ctx.lineTo(5, 4);
  ctx.lineTo(3, 4);
  ctx.lineTo(3, 2);
  ctx.lineTo(0, 2);
  ctx.lineTo(0, 0);

  ctx.fill();

  if (glitter) {
    ctx.fillRect(9, -5, 2, 2);
    ctx.fillRect(9, 5, 2, 2);
    ctx.fillRect(1, 5, 2, 2);
    ctx.fillRect(1, -5, 2, 2);
  }
  
  ctx.restore();
}
/**
 * 구름
 * @param ctx - 캔버스 컨텍스트
 * @param x - 구름의 x 좌표
 * @param y - 구름의 y 좌표
 * @param color - 구름의 색상
 */
export function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, color: T.Color): void {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(C.SCALE, C.SCALE);
  
  ctx.fillStyle = color.black80;
  ctx.beginPath();
  ctx.moveTo(0, 0);

  ctx.lineTo(0, 0);
  ctx.lineTo(0, -3);
  ctx.lineTo(3, -3);
  ctx.lineTo(3, -6);
  ctx.lineTo(6, -6);
  ctx.lineTo(6, -9);
  ctx.lineTo(19, -9);
  ctx.lineTo(19, -12);
  ctx.lineTo(27, -12);
  ctx.lineTo(27, -15);
  ctx.lineTo(30, -15);
  ctx.lineTo(30, -18);
  ctx.lineTo(45, -18);
  ctx.lineTo(45, -15);
  ctx.lineTo(48, -15);
  ctx.lineTo(48, -12);
  ctx.lineTo(51, -12);
  ctx.lineTo(51, -9);
  ctx.lineTo(60, -9);
  ctx.lineTo(60, -6);
  ctx.lineTo(63, -6);
  ctx.lineTo(63, -3);
  ctx.lineTo(66, -3);
  ctx.lineTo(66, 0);
  ctx.lineTo(0, 0);

  ctx.fill();
  ctx.restore();
}