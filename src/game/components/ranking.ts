import * as T from '@/shared/types';
import * as D from '@/game/draw';
import * as C from '@/constants';

export class Ranking implements T.IGameConfig {
  x: number;
  y: number = 0;
  width: number;
  height: number;
  color: T.Color;

  
  private activeTab: T.RankTabType = 'all';
  private allRankings: T.RankData;
  private myRankings: T.RankData;

  constructor(x: number, width: number, height: number, color: T.Color, allRankings: T.RankData, myRankings: T.RankData) {
    this.x = x;
    this.width = width;
    this.height = height;
    this.color = color;
    this.allRankings = allRankings;
    this.myRankings = myRankings;
  }
  /**
   * 랭킹 그리기
   * @param ctx - 캔버스 컨텍스트
   */
  draw(ctx: CanvasRenderingContext2D): void {
    const rankings = this.activeTab === 'all' ? this.allRankings : this.myRankings;
    D.drawRanking(ctx, this.x, this.y, this.width, this.height, this.color, this.activeTab, rankings);
  }
  /**
   * 탭 클릭 이벤트
   * @param ctx - 캔버스 컨텍스트
   * @param x - 클릭한 X 좌표
   * @param y - 클릭한 Y 좌표
   */
  tabClick(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    // 디바이스 타입에 따른 탭 위치 조정
    const tabY = this.y + C.RANKING_TAB_Y;
    
    if (y >= tabY && y <= tabY + C.RANKING_TAB_HEIGHT) {
      const tabWidth = this.width / 2;
      
      // ALL 탭 클릭
      if (x >= this.x && x < this.x + tabWidth) this.activeTab = 'all';
      // MY 탭 클릭
      if (x >= this.x + tabWidth && x < this.x + this.width) this.activeTab = 'my';
    }
    
    this.draw(ctx);
  }
  /**
   * 전체 랭킹 데이터 업데이트
   * @param ctx - 캔버스 컨텍스트
   * @param allRankings - 전체 랭킹 데이터
   */
    updateAllRankings(ctx: CanvasRenderingContext2D, allRankings: T.RankData): void {
      this.allRankings = allRankings;
      this.draw(ctx);
  }
  /**
   * 내 랭킹 데이터 업데이트
   * @param ctx - 캔버스 컨텍스트
   * @param myRankings - 내 랭킹 데이터
   */
  updateMyRankings(ctx: CanvasRenderingContext2D, myRankings: T.RankData): void {
    this.myRankings = myRankings;
    this.draw(ctx);
  }
} 