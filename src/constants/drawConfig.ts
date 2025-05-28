import { IS_PC } from '@/constants/gameConfig';

/**
 * 스케일 - 1(PC) | 0.6(Mobile)
 */
export const SCALE: number = IS_PC ? 1 : 0.6;
/**
 * 랭킹 타이틀 폰트 크기 - 20(PC) : 9(Mobile)
 */
export const RANKING_TITLE_FONT_SIZE: number = IS_PC ? 20 : 9;
/**
 * 랭킹 타이틀 위치 - 40(PC) : 20(Mobile)
 */
export const RANKING_TITLE_Y: number = IS_PC ? 40 : 20;
/**
 * 랭킹 탭 폰트 크기 - 15(PC) : 7(Mobile)
 */
export const RANKING_TAB_FONT_SIZE: number = IS_PC ? 15 : 7;
/**
 * 랭킹 탭 텍스트 위치 - 27(PC) : 13(Mobile)
 */
export const RANKING_TAB_TEXT_Y: number = IS_PC ? 28 : 13;
/**
 * 랭킹 리스트 폰트 크기 - 15(PC) : 7(Mobile)
 */
export const RANKING_LIST_FONT_SIZE: number = IS_PC ? 15 : 7;
/**
 * 랭킹 리스트 시작 위치 - 130(PC) : 62(Mobile)
 */
export const RANKING_LIST_START_Y: number = IS_PC ? 130 : 62;
/**
 * 랭킹 리스트 행 높이 - 40(PC) : 16(Mobile)
 */
export const RANKING_LIST_ROW_HEIGHT: number = IS_PC ? 40 : 16;
/**
 * 랭킹 리스트 행 위치 - 28(PC) : 12(Mobile)
 */
export const RANKING_LIST_ROW_Y: number = IS_PC ? 28 : 12;
/**
 * 랭킹 리스트 패딩 - 20(PC) : 3(Mobile)
 */
export const RANKING_LIST_PADDING: number = IS_PC ? 20 : 3;
/**
 * NOT HISTORY 텍스트 위치 - 210(PC) : 93(Mobile)
 */
export const RANKING_NOT_HISTORY_Y: number = IS_PC ? 200 : 93;