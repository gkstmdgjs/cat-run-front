/**
 * 고양이 데이터
 */
export type CatData = {
  no: number;
  name: string;
  ip: string;
  highestScore: number;
  highestScoreAt: null | string;
  createAt: string;
}
/**
 * 랭킹 데이터
 */
export type RankData = Array<{
  no: number;
  catName: string;
  score: number;
  createAt: string;
}>
/**
 * 웹소켓 고양이 데이터
 */
export type WSCatData = {
  code: string;
  message: string;
  cat: CatData;
  top5GamePlayHistory: RankData;
  byCatTop5GamePlayHistory: RankData;
}