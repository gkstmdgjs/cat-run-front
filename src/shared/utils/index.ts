/**
 * 최소값과 최대값 사이의 랜덤 숫자 반환
 * @param min - 최소값
 * @param max - 최대값
 * @returns 랜덤 숫자
 */
export function randomNumber(min: number, max: number): number {
  const minDecimals = (min.toString().split('.')[1] || '').length;
  const maxDecimals = (max.toString().split('.')[1] || '').length;
  const decimals = Math.max(minDecimals, maxDecimals);
  
  if (decimals === 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const multiplier = Math.pow(10, decimals);
  return Math.round((Math.random() * (max - min) + min) * multiplier) / multiplier;
}
/**
 * 색상 전환
 * @param startColor - 시작 색상
 * @param endColor - 끝 색상
 * @param progress - 전환 진행도 (0~1)
 * @returns 보간된 색상
 */
export function colorTransition(startColor: string, endColor: string, progress: number): string {
  const startRGB = hexToRGB(startColor);
  const endRGB = hexToRGB(endColor);
  
  return `rgb(${
    Math.round(startRGB.r * (1 - progress) + endRGB.r * progress)
  }, ${
    Math.round(startRGB.g * (1 - progress) + endRGB.g * progress)
  }, ${
    Math.round(startRGB.b * (1 - progress) + endRGB.b * progress)
  })`;
}
/**
 * 16진수 색상을 RGB로 변환
 * @param hex - 16진수 색상
 * @returns RGB 객체
 */
export function hexToRGB(hex: string): { r: number; g: number; b: number } {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}
/**
 * 접속 기기 타입 감지
 * @returns 감지된 기기 타입
 */
export function deviceType() {

  const userAgent = navigator.userAgent || (window as any).opera;
  const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i;
  const isMobileSize = window.innerWidth < 768;
  const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  
  if (mobileRegex.test(userAgent) || isMobileSize || hasTouch) return 'Mobile';
  return 'PC';
}