import * as T from '@/shared/types';
import * as C from '@/constants';

/**
 * 랭킹 그리기
 * @param ctx - 캔버스 컨텍스트
 * @param x - x 좌표
 * @param y - y 좌표
 * @param width - 너비
 * @param height - 높이
 * @param color - 색상
 * @param activeTab - 활성화된 탭
 * @param rankings - 랭킹 목록
 */
export function drawRanking(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  color: T.Color,
  activeTab: T.RankTabType,
  rankings: T.RankData,
) {
  // 랭킹 배경
  ctx.fillStyle = color.black100;
  ctx.fillRect(x, y, width, height);
  // 랭킹 제목
  ctx.font = `${C.RANKING_TITLE_FONT_SIZE}px "Press Start 2P"`;
  ctx.textAlign = 'center';
  ctx.fillStyle = color.gray40;
  ctx.fillText('RANKING', x + width / 2, y + C.RANKING_TITLE_Y);
  // 탭 그리기
  drawTab(ctx, x, width, color, activeTab, C.RANKING_TAB_Y, C.RANKING_TAB_HEIGHT);
  ctx.font = `${C.RANKING_LIST_FONT_SIZE}px "Press Start 2P"`;
  ctx.textAlign = 'left';

  if (rankings && rankings.length > 0) {
    rankings.forEach((ranking, index) => {
      // 5개만 표시하도록 제한
      if (index >= 5) return;
      
      const rowY = y + C.RANKING_LIST_START_Y + index * C.RANKING_LIST_ROW_HEIGHT;
      
      // 짝수 행에 배경색 적용 (1-based 인덱스 기준)
      if ((index + 1) % 2 === 0) {
        ctx.fillStyle = color.black60;
        ctx.fillRect(x, rowY - C.RANKING_LIST_ROW_Y, width, C.RANKING_LIST_ROW_HEIGHT);
      }
      
      // 랭킹
      ctx.fillStyle = color.gray40;
      ctx.textAlign = 'left';
      ctx.fillText(`${index + 1}.${activeTab === 'all' ? ranking.catName : ranking.score}`, x + C.RANKING_LIST_PADDING, rowY);
      if (activeTab === 'all') {
        ctx.textAlign = 'right';
        ctx.fillText(`${ranking.score}`, x + width - C.RANKING_LIST_PADDING, rowY);
      }
    });
  } else {
    ctx.textAlign = 'center';
    ctx.font = `${C.RANKING_LIST_FONT_SIZE}px "Press Start 2P"`;
    ctx.fillStyle = color.gray40;
    ctx.fillText('NOT HISTORY', x + width / 2, y + C.RANKING_NOT_HISTORY_Y);
  }
  // 게임과 랭킹 경계선
  ctx.strokeStyle = color.black60;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, height);
  ctx.stroke();
}

/**
 * 탭 그리기
 * @param ctx - 캔버스 컨텍스트
 * @param x - x 좌표
 * @param y - y 좌표
 * @param width - 탭의 너비
 * @param color - 색상
 * @param activeTab - 활성화된 탭
 * @param tabY - 탭 Y 위치
 * @param tabHeight - 탭 높이
 */
export function drawTab(
  ctx: CanvasRenderingContext2D, 
  x: number, 
  width: number, 
  color: T.Color, 
  activeTab: T.RankTabType,
  tabY: number,
  tabHeight: number
) {
  const tabWidth = width / 2;
  
  // 탭 경계선
  ctx.strokeStyle = color.gray40;
  ctx.beginPath();
  ctx.moveTo(x, tabY);
  ctx.lineTo(x + width, tabY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, tabY + tabHeight);
  ctx.lineTo(x + width, tabY + tabHeight);
  ctx.stroke();
  // 탭 색상
  ctx.fillStyle = color.gray40;
  ctx.fillRect(x + (activeTab === 'my' ? tabWidth : 0), tabY, tabWidth, tabHeight);
  // 탭 텍스트
  ctx.font = `${C.RANKING_TAB_FONT_SIZE}px "Press Start 2P"`;
  ctx.textAlign = 'center';
  // ALL 텍스트
  ctx.fillStyle = activeTab === 'all' ? color.black100 : color.gray40;
  ctx.fillText('ALL', x + tabWidth / 2, tabY + C.RANKING_TAB_TEXT_Y);
  // MY 텍스트
  ctx.fillStyle = activeTab === 'my' ? color.black100 : color.gray40;
  ctx.fillText('MY', (x + tabWidth + tabWidth / 2) + 2, tabY +C.RANKING_TAB_TEXT_Y);
}