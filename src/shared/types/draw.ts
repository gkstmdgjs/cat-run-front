/**
 * 디바이스 타입
 */
export type DeviceType = 'PC' | 'Mobile';
/**
 * 모드
 */
export type Mode = 'light' | 'dark';
/**
 * 랭킹 타입
 */
export type RankTabType = 'all' | 'my';
/**
 * 달 타입
 */
export type MoonType = 'drawFullMoon' | 'drawLeftCrescentMoon' | 'drawRightCrescentMoon';
/**
 * 고양이 타입
 */
export type CatType = 'basic' |'run' | 'jump' | 'down';
/**
 * 랭킹
 */
export type Rank = {
  name: string;
  score: number;
}
/**
 * 장애물 설정
 */
export type ObstacleConfig = {
  obstacleMin: number;
  obstacleMax: number;
  typeMax: number;
};
/**
 * 장애물 타입
 */
export type ObstacleType = 'Small' | 'Medium' | 'Big';
/**
 * 장애물
 */
export type Obstacle = {
  x: number;
  y: number;
  width: number;
  height: number;
  type: ObstacleType;
  hitboxes?: Array<{x: number, y: number, width: number, height: number}>;
}
/**
 * 구름
 */
export type Cloud = {
  x: number;
  y: number;
  speed: number;
}
/**
 * 별
 */
export type Star = {
  x: number;
  y: number;
  speed: number;
  glitter: boolean;
}
/**
 * 바닥 구조물
 */
export type FloorMaterials = {
  x: number;
  type: string;
}
/**
 * 바닥 모래
 */
export type FloorSand = {
  x: number;
  y: number;
  width: number;
}
/**
 * 색상
 */
export type Color = {
  black100: string;
  black80: string;
  black60: string;
  gray20: string;
  gray40: string;
  gray60: string;
  white100: string;
}
/**
 * 고양이 색상
 */
export type CatColor = {
  body: string;
  eye: string;
  line: string;
}