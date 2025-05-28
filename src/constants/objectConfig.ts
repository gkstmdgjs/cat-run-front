import { IS_PC } from '@/constants/gameConfig';

/**
 * 고양이 넓이 - 40(PC) | 27(Mobile)
 */
export const CAT_WIDTH = IS_PC ? 40 : 27;
/**
 * 고양이 오프셋 X - 0(PC) | 35(Mobile)
 */
export const CAT_OFFSET_X: number = IS_PC ? 0 : 35;
/**
 * 고양이 중력 - 0.6(PC) | 0.45(Mobile)
 */
export const CAT_VELOCITY: number = IS_PC ? 0.6 : 0.45;
/**
 * 고양이 그리기 오프셋 Y - 30(PC) | -17(Mobile)
 */
export const CAT_DRAW_OFFSET_Y: number = IS_PC ? 30 : -17;
/**
 * 고양이 판정 넓이 - 12(PC) | 7(Mobile)
 */
export const CAT_JUDGMENT: number = IS_PC ? 12 : 7;
/**
 * 고양이 점프 속도 - -12(PC) | -7(Mobile)
 */
export const CAT_JUMP_VELOCITY: number = IS_PC ? -10.5 : -7;
/**
 * 바닥 높이 - 60(PC) | 20(Mobile)
 */
export const FLOOR_HEIGHT: number = IS_PC ? 60 : 20;
/**
 * 구조물 넓이 - 38(PC) | 21(Mobile)
 */
export const MATERIAL_WIDTH: number = IS_PC ? 38 : 21;
/**
 * 모래 갯수 - 30(PC) | 18(Mobile)
 */
export const SAND_COUNT: number = IS_PC ? 30 : 18;
/**
 * 모래 오프셋 MIN - 5(PC) | 3(Mobile)
 */
export const SAND_OFFSET_MIN: number = IS_PC ? 5 : 3;
/**
 * 모래 오프셋 MAX - 10(PC) | 6(Mobile)
 */
export const SAND_OFFSET_MAX: number = IS_PC ? 10 : 6;
/**
 * 모래 너비 MIN - 2(PC) | 1(Mobile)
 */
export const SAND_WIDTH_MIN: number = IS_PC ? 2 : 1;
/**
 * 모래 너비 MAX - 7(PC) | 4(Mobile)
 */
export const SAND_WIDTH_MAX: number = IS_PC ? 7 : 4;
/**
 * 바닥 선 너비 - 0.7(PC) | 0.6(Mobile)
 */
export const FLOOR_LINE_WIDTH: number = IS_PC ? 0.7 : 0.6;
/**
 * 장애물 오프셋 Y - 0(PC) | 35(Mobile)
 */
export const OBSTACLE_OFFSET_Y: number = IS_PC ? 0 : 35;
/**
 * 장애물 간격 - 10(PC) | 6(Mobile)
 */
export const OBSTACLE_SPACING: number = IS_PC ? 10 : 6;
/**
 * 랭킹 탭 Y - 60(PC) | 30(Mobile)
 */
export const RANKING_TAB_Y: number = IS_PC ? 60 : 30;
/**
 * 랭킹 탭 높이 - 40(PC) | 18(Mobile)
 */
export const RANKING_TAB_HEIGHT: number = IS_PC ? 40 : 18;
/**
 * 달 오프셋 Y - 50(PC) | 20(Mobile)
 */
export const SKY_MOON_OFFSET_Y: number = IS_PC ? 50 : 20;
/**
 * 구름 및 별 속도 - 1(PC) | 0.6(Mobile)
 */
export const SKY_SPEED: number = IS_PC ? 1 : 0.6;
/**
 * 구름 최소 Y - 40(PC) | 25(Mobile)
 */
export const SKY_CLOUD_MIN: number = IS_PC ? 40 : 25;
/**
 * 구름 최대 Y - 115(PC) | 70(Mobile)
 */
export const SKY_CLOUD_MAX: number = IS_PC ? 115 : 70;
/**
 * 구름 너비 - -60(PC) | -36(Mobile)
 */
export const SKY_CLOUD_WIDTH: number = IS_PC ? -60 : -36;
/**
 * 별 최소 Y - 40(PC) | 20(Mobile)
 */
export const SKY_STAR_MIN_Y: number = IS_PC ? 40 : 20;
/**
 * 별 최대 Y - 115(PC) | 50(Mobile)
 */
export const SKY_STAR_MAX_Y: number = IS_PC ? 115 : 50;
/**
 * 별 최소 X - 120(PC) | 70(Mobile)
 */
export const SKY_STAR_MIN_X: number = IS_PC ? 120 : 70;
/**
 * 별 최대 X - 150(PC) | 90(Mobile)
 */
export const SKY_STAR_MAX_X: number = IS_PC ? 150 : 90;
/**
 * 별 속도 - 0.1(PC) | 0.3(Mobile)
 */
export const SKY_STAR_MIN_SPEED: number = IS_PC ? 0.1 : 0.05;
/**
 * 별 최대 속도 - 0.3(PC) | 0.15(Mobile)
 */
export const SKY_STAR_MAX_SPEED: number = IS_PC ? 0.3 : 0.15;
/**
 * 별 갯수 - 5(PC) | 3(Mobile)
 */
export const START_COUNT: number = IS_PC ? 5 : 3;
/**
 * 별 속도 - 0.1(PC) | 0.3(Mobile)
 */
export const SKY_STAR_SPEED: number = IS_PC ? 0.1 : 0.3;
/**
 * 달 속도 - 0.5(PC) | 0.3(Mobile)
 */
export const SKY_MOON_SPEED: number = IS_PC ? 0.5 : 0.3;
/**
 * 고양이 높이 - 50
 */
export const CAT_HEIGHT: number = 50;
/**
 * 구름 생성 간격 - 1500
 */
export const CLOUD_INTERVAL: number = 1500;
/**
 * 구조물 생성 간격 - 1000
 */
export const MATERIAL_INTERVAL: number = 1000;
/**
 * 고양이 뛰는 간격 - 250
 */
export const CAT_RUN_INTERVAL: number = 250;
/**
 * 장애물 생성 간격 - 1000
 */
export const OBSTACLE_INTERVAL: number = 1000;
/**
 * 장애물 타입
 */
export const OBSTACLE_TYPE = ['Small', 'Medium', 'Big'];
/**
 * 장애물 크기
 */
export const OBSTACLE_SIZES = {
  PC: {
    Small: { width: 12, height: 51 },
    Medium: { width: 12, height: 58 },
    Big: { width: 12, height: 65 }
  },
  Mobile: {
    Small: { width: 7, height: 30 },
    Medium: { width: 7, height: 37 },
    Big: { width: 7, height: 41 }
  }
};
