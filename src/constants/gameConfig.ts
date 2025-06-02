import { deviceType } from '@/shared/utils';

/**
 * 디바이스 타입
 */
export const DEVICE_TYPE = deviceType();
/**
 * 디바이스 타입 PC 체크
 */
export const IS_PC = DEVICE_TYPE === 'PC';
/**
 * 게임 넓이 - 800(PC) | 270(Mobile)
 */
export const GAME_WIDTH: number = IS_PC ? 800 : 270;
/**
 * 게임 높이 - 300(PC) | 130(Mobile)
 */
export const GAME_HEIGHT: number = IS_PC ? 300 : 130;
/**
 * 랭킹 영역 넓이 - 220 (PC) | 85(Mobile)
 */
export const RANKING_WIDTH: number = IS_PC ? 220 : 85;
/**
 * 게임 속도 - 1(PC) | 0.6(Mobile)
 */
export const GAME_SPEED: number = IS_PC ? 1 : 0.6;
/**
 * GAME START 폰트 크기 - 27(PC) | 12(Mobile)
 */
export const GAME_START_FONT_SIZE: number = IS_PC ? 27 : 12;
/**
 * PRESS ANY KEY 폰트 크기 - 20(PC) | 9(Mobile)
 */
export const PRESS_ANY_KEY_FONT_SIZE: number = IS_PC ? 20 : 9;
/**
 * PRESS ANY KEY 폰트 오프셋 Y - 40(PC) | 22(Mobile)
 */
export const PRESS_ANY_KEY_OFFSET_Y: number = IS_PC ? 40 : 22;
/**
 * ENTER YOUR NAME 폰트 크기 - 32(PC) | 13(Mobile)
 */
export const ENTER_YOUR_NAME_FONT_SIZE: number = IS_PC ? 32 : 13;
/**
 * ENTER YOUR NAME 폰트 오프셋 Y - 40(PC) | 18(Mobile)
 */
export const ENTER_YOUR_NAME_OFFSET_Y: number = IS_PC ? 40 : 18;
/**
 * 입력창 넓이 - 250(PC) | 120(Mobile)
 */
export const INPUT_WIDTH: number = IS_PC ? 250 : 120;
/**
 * 입력창 높이 - 45(PC) | 22(Mobile)
 */
export const INPUT_HEIGHT: number = IS_PC ? 45 : 22;
/**
 * 입력창 폰트 크기 - 18(PC) | 8.5(Mobile)
 */
export const INPUT_FONT_SIZE: number = IS_PC ? 18 : 8.5;
/**
 * 입력창 오프셋 X - 125(PC) | 62(Mobile)
 */
export const INPUT_OFFSET_X: number = IS_PC ? 125 : 62;
/**
 * 입력창 오프셋 Y - 15(PC) | 7(Mobile)
 */
export const INPUT_OFFSET_Y: number = IS_PC ? 15 : 7;
/**
 * 입력창 에러 폰트 크기 - 19(PC) | 9(Mobile)
 */
export const INPUT_ERROR_FONT_SIZE: number = IS_PC ? 19 : 9;
/**
 * 입력창 에러 오프셋 Y - 70(PC) | 35(Mobile)
 */
export const INPUT_ERROR_OFFSET_Y: number = IS_PC ? 70 : 35;
/**
 * 게임 오버 폰트 크기 - 27(PC) | 13(Mobile)
 */
export const GAME_OVER_FONT_SIZE: number = IS_PC ? 27 : 10;
/**
 * 게임 오버 점수 폰트 크기 - 24(PC) | 9(Mobile)
 */
export const GAME_OVER_SCORE_FONT_SIZE: number = IS_PC ? 24 : 9;
/**
 * 게임 오버 점수 오프셋 Y - 40(PC) | 17(Mobile)
 */
export const GAME_OVER_SCORE_OFFSET_Y: number = IS_PC ? 40 : 17;
/**
 * 게임 오버 판정 오프셋 Y - 0(PC) | 30(Mobile)
 */
export const GAME_OVER_JUDGMENT_OFFSET_Y: number = IS_PC ? 0 : 30;
/**
 * 스코어 폰트 크기 - 17(PC) | 8(Mobile)
 */
export const SCORE_FONT_SIZE: number = IS_PC ? 17 : 8;
/**
 * 스코어 오프셋 X - 21(PC) | 10(Mobile)
 */
export const SCORE_OFFSET_X: number = IS_PC ? 21 : 10;
/**
 * 스코어 오프셋 Y - 37(PC) | 17(Mobile)
 */
export const SCORE_OFFSET_Y: number = IS_PC ? 37 : 17;
/**
 * 게임 시작 문구 깜빡임 간격 - 350
 */
export const GAME_START_TEXT_INTERVAL: number = 350;
/**
 * 게임 상태 업데이트 간격
 */
export const GAME_STATE_INTERVAL: number = 100;
/**
 * 게임 속도 - 0.005
 */
export const SPEED_INTERVAL: number = 0.005;
/**
 * 게임속도 증가 한계 점수 - 600
 */
export const SPEED_LIMIT_SCORE: number = 600;
/**
 * Score 깜빡임 기준 점수 - 100
 */
export const BLINKING_SCORE: number = 100;
/**
 * Score 깜빡임 간격 - 200
 */
export const SCORE_BLINK_INTERVAL: number = 200;
/**
 * 다크모드 진입 기준 점수 - 150
 */
export const DARK_MODE_ENTRY_SCORE: number = 150;
/**
 * 색상 전환 시간 - 700
 */
export const TRANSITION_DURATION: number = 700;
/**
 * 색상
 */
export const COLOR = {
  dark: {
    black100: '#212225',
    black80: '#434549',
    black60: '#6d6f73',
    gray20: '#9b9b9b',
    gray40: '#bbbbbb',
    gray60: '#d7d7d7',
    white100: '#FFFFFF',
  },
  light: {
    black100: '#f7f7f7',
    black80: '#ebebeb',
    black60: '#dddddd',
    gray20: '#535353',
    gray40: '#434343',
    gray60: '#232323',
    white100: '#000000'
  },
}
/**
 * 고양이 색상
 */
export const CAT_COLOR = {
  dark: {
    body: '#434549',
    eye: '#d7d7d7',
    line: '#9b9b9b',
  },
  light: {
    body: '#434343',
    eye: '#f7f7f7',
    line: '#000000',
  }
}