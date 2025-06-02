import * as T from '@/shared/types';

/**
 * 기본 설정
 */
export interface IGameConfig {
  x: number;
  y: number;
  width: number;
  height: number;
  color: T.Color;
}
/**
 * 게임 객체
 */
export interface ICat {
  x: number;
  y: number;
  width: number;
  height: number;
  lastTime: number;
  velocity: number;
  isJumping: boolean;
  color: T.CatColor;
  catType: T.CatType;
  canvas: HTMLCanvasElement;
  
  update(currentTime: number): void; 
  draw(ctx: CanvasRenderingContext2D): void;
  getLocation(): { x: number, y: number, width: number, height: number };
}
/**
 * 이동 객체
 */
export interface IMoveGameObject extends IGameConfig {
  speed: number;
  lastTime: number;
  Interval: number;
  
  setSpeed(speed: number): void;
  update(currentTime: number): void;
  draw(ctx: CanvasRenderingContext2D): void;
}