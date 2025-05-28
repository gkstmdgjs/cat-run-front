import * as U from '@/shared/utils';
import * as T from '@/shared/types';
import * as C from '@/constants';

import { Ranking } from '@/game/components/ranking';
import { Cat } from '@/game/components/cat';
import { Obstacle } from '@/game/components/obstacle';
import { Floor } from '@/game/components/floor';
import { Sky } from '@/game/components/sky';
import { WebSocketClient } from '@/shared/webSocket';

export class Engine {
  private ranking!: Ranking;
  private cat!: Cat;
  private obstacle!: Obstacle;
  private floor!: Floor;
  private sky!: Sky;
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private catInfo!: T.CatData;                                                    // 고양이 정보
  private allRankings!: T.RankData;                                               // 전체 랭킹 데이터     
  private myRankings!: T.RankData;                                                // 내 랭킹 데이터

  private width: number = 0;                                                      // 캔버스 넓이
  private height: number = 0;                                                     // 캔버스 높이
  private rankingWidth: number = 0;                                               // 랭킹 영역 넓이
  private isGameStart: boolean = false;                                           // 게임 시작 여부
  private isShowStartText: boolean = true;                                        // 게임 시작 텍스트 표시 여부  
  private isGameOver: boolean = false;                                            // 게임 오버 여부
  private isInputCreated: boolean = false;                                        // 입력창 생성 여부 플래그
  private isInputError: boolean = false;                                          // 입력창 에러 여부 플래그
  private score: number = 0;                                                      // 점수
  private lightScore: number = 0;                                                 // 라이트 모드 점수 (다크 모드 진입)
  private lastScoreTime: number = 0;                                              // 점수 업데이트 시간
  private isScoreBlinking: boolean = false;                                       // 점수 깜빡임 상태
  private blinkCount: number = 0;                                                 // 깜빡인 횟수
  private lastBlinkTime: number = 0;                                              // 마지막 깜빡임 시간
  private gameSpeed: number = 0;                                                  // 게임 속도  
  private transitionStartTime: number = 0;                                        // 전환 시작 시간
  private changeColor: boolean = false;                                           // 색상 변경 여부
  private mode: T.Mode = 'light';                                                 // 모드 (라이트 / 다크)
  private wsClient!: WebSocketClient;                                             // WebSocket 클라이언트
  private input: HTMLInputElement = document.createElement('input');              // 고양이 이름 입력창
  private inputErrorMessage: string = '';                                         // 고양이 이름 입력창 에러 메시지


  // 색상 초기 설정
  private color: T.Color = {
    black100: C.COLOR.light.black100,
    black80: C.COLOR.light.black80,
    black60: C.COLOR.light.black60,
    gray20: C.COLOR.light.gray20,
    gray40: C.COLOR.light.gray40,
    gray60: C.COLOR.light.gray60,
    white100: C.COLOR.light.white100
  };
  // 고양이 색상 초기 설정
  private catColor: T.CatColor = {
    body: C.CAT_COLOR.light.body,
    eye: C.CAT_COLOR.light.eye,
    line: C.CAT_COLOR.light.line,
  };

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d')!;

    this.width = C.GAME_WIDTH;
    this.height = C.GAME_HEIGHT;
    this.rankingWidth = C.RANKING_WIDTH;
    this.gameSpeed = C.GAME_SPEED;

    // WebSocket 연결
    this.wsClient = new WebSocketClient();
    this.wsClient.connect((data) => {

      switch (data.code) {
        // 게임 시작 시 고양이가 존재하지 않는 경우
        case "NOT_CAT":
          this.allRankings = data.top5GamePlayHistory;
          this.start();
        break;
        // 고양이를 정상적으로 생성
        case "CREATE_CAT":
          document.body.removeChild(this.input);
          this.catInfo = data.cat;
        break;
        // 고양이 이름이 이미 존재
        case "CAT_NAME_EXIST":
          this.inputErrorMessage = data.message;
          this.input.value = '';
          this.isInputError = true;
        break;
        case "BAD_CAT" :
          this.inputErrorMessage = data.message;
          this.input.value = '';
          this.isInputError = true;
        break;
        // 고양이가 존재하여 정상적으로 시작
        case "ALL_DATA":
          this.catInfo = data.cat;
          this.allRankings = data.top5GamePlayHistory;
          this.myRankings = data.byCatTop5GamePlayHistory;
          this.start();
        break;
        // 전체 랭킹 데이터 업데이트
        case "UPDATE_ALL_RANK":
          this.allRankings = data.top5GamePlayHistory;
          this.ranking.updateAllRankings(this.ctx, this.allRankings);
        break;
        // 내 랭킹 데이터 업데이트
        case "UPDATE_MY_RANK":
          this.myRankings = data.byCatTop5GamePlayHistory;
          this.ranking.updateMyRankings(this.ctx, this.myRankings);
        break;
      }
    });

    this.canvas.addEventListener('mousedown', this.canvasClick);
  }
  /**
   * 캔버스 클릭 이벤트 처리
   */
  private canvasClick = (e: MouseEvent): void => {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 랭킹 영역 클릭 처리
    if (x >= this.width) return this.ranking.tabClick(this.ctx, x, y);
    // 게임 시작
    if (this.catInfo && !this.isGameStart) this.isGameStart = true;
    // 게임 오버
    if (this.isGameOver) this.restart();
    // 고양이 점프
    else this.cat.jump();
  }
  /**
   * 게임 시작
   */
  private async start(): Promise<void> {
    // 캔버스 크기 설정 (게임 영역 + 랭킹 영역)
    this.canvas.width = this.width + this.rankingWidth;
    this.canvas.height = this.height;

    this.ranking = new Ranking(this.width, this.rankingWidth, this.height, this.color, this.allRankings, this.myRankings);
    this.cat = new Cat(50,  this.height - 20, this.catColor, this.canvas);
    this.obstacle = new Obstacle(this.width,  this.height - 50, this.gameSpeed, this.color);
    this.floor = new Floor(this.width,  this.height, this.gameSpeed, this.color);
    this.sky = new Sky(this.width, this.color, () => {
      this.lightScore = 0;
      this.changeColor = true;
    });

    this.update();
  }
  
  /**
   * 게임 재시작
   */
  private restart = (): void => {
    window.removeEventListener('keyup', this.restart);

    this.isGameOver = false;
    this.isScoreBlinking = false;
    this.score = 0;
    this.lightScore = 0;
    this.blinkCount = 0;
    this.lastBlinkTime = 0;
    this.gameSpeed = C.GAME_SPEED;
    this.mode = 'light';
    this.changeColor = false;
    this.transitionStartTime = 0;
    this.obstacle.obstacles = [];
    this.sky.clouds = [];

    (Object.keys(this.color) as Array<keyof T.Color>).forEach((key) => {
      this.color[key] = C.COLOR.light[key];
    });
    (Object.keys(this.catColor) as Array<keyof T.CatColor>).forEach((key) => {
      this.catColor[key] = C.CAT_COLOR.light[key];
    });

    this.start();
  }
  
  /**
   * 게임 업데이트
   */
  private update(): void {
    const currentTime = Date.now();

    if (this.isGameOver) return this.drawGameOver();
    if (this.changeColor) this.updateColor(currentTime);
    
    this.ctx.fillStyle = this.color.black100;
    this.ctx.fillRect(0, 0, this.width, this.height);
    // 하늘
    this.sky.update(currentTime);
    this.sky.draw(this.ctx);
    // 바닥
    this.floor.setSpeed(5 * this.gameSpeed);
    this.floor.update(currentTime);
    this.floor.draw(this.ctx);
    // 고양이
    this.cat.update(currentTime);
    this.cat.draw(this.ctx);
    
    if (this.isGameStart) {
      // 장애물
      this.obstacle.setSpeed(5 * this.gameSpeed);
      this.obstacle.setScore(this.score);
      this.obstacle.update(currentTime);
      this.obstacle.draw(this.ctx);
      // 게임 상태 업데이트
      this.updateGameState(currentTime);
      // 게임 오버 체크
      this.checkGameOver();
    } else {
      // 게임 시작 화면 표시
      this.drawGameStart(currentTime);
    }

    // 랭킹
    this.ranking.draw(this.ctx);

    requestAnimationFrame(() => this.update());
  }
  /**
   * 게임 시작 화면 표시
   */
  private async drawGameStart(currentTime: number): Promise<void> {
    if (this.catInfo) {
      this.ctx.font = `${C.GAME_START_FONT_SIZE}px "Press Start 2P"`;
      this.ctx.fillStyle = this.color.gray40;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(`${this.catInfo.name} GAME START`, this.width / 2, this.height / 2);
      
      if (currentTime - this.lastBlinkTime > C.GAME_START_TEXT_INTERVAL) {
        this.lastBlinkTime = currentTime;
        this.isShowStartText = !this.isShowStartText;
      }
      // 문구 깜빡임 효과
      if (this.isShowStartText) {
        this.ctx.font = `${C.PRESS_ANY_KEY_FONT_SIZE}px "Press Start 2P"`;
        this.ctx.fillText('PRESS ANY KEY', this.width / 2, this.height / 2 + (C.PRESS_ANY_KEY_OFFSET_Y));
      }
      
      window.addEventListener('keydown', () => this.isGameStart = true, { once: true });
    } else if (!this.catInfo) {
      // 입력 안내 메시지 표시
      this.ctx.font = `${C.ENTER_YOUR_NAME_FONT_SIZE}px "Press Start 2P"`;
      this.ctx.fillStyle = this.color.gray40;
      this.ctx.textAlign = 'center';
      this.ctx.fillText('ENTER YOUR NAME', this.width / 2, this.height / 2 - (C.ENTER_YOUR_NAME_OFFSET_Y));
      
      // 입력창이 아직 생성되지 않았을 때만 생성
      if (!this.isInputCreated) {
        this.input.id = 'cat-name-input';
        this.input.type = 'text';
        this.input.maxLength = 5;
        this.input.placeholder = 'EN Cat Name';
        
        // 입력창 스타일 설정
        this.input.style.left = `${this.canvas.offsetLeft + (this.width / 2) - C.INPUT_OFFSET_X}px`;
        this.input.style.top = `${this.canvas.offsetTop + (this.height / 2) - C.INPUT_OFFSET_Y}px`;
        this.input.style.position = 'absolute';
        this.input.style.width = `${C.INPUT_WIDTH}px`;
        this.input.style.height = `${C.INPUT_HEIGHT}px`;
        this.input.style.fontSize = `${C.INPUT_FONT_SIZE}px`;
        this.input.style.borderRadius = '4px';
        this.input.style.border = `1px solid ${this.color.black60}`;
        this.input.style.textAlign = 'center';
        this.input.style.fontFamily = '"Press Start 2P"';
        
        // 영문 및 숫자만 입력
        let lastValidValue = '';
        this.input.addEventListener('input', () => {
          const filteredValue = this.input.value.replace(/[^a-zA-Z0-9]/g, '');
          
          if (filteredValue.length < lastValidValue.length) {
            this.input.value = lastValidValue;
          } else {
            this.input.value = filteredValue;
            lastValidValue = filteredValue;
          }
        });
        
        // 엔터 키 이벤트 처리
        this.input.addEventListener('keydown', async (e) => {
          if (e.key === 'Enter' && this.input.value.trim() !== '') {
            this.wsClient.sendMessage({catName: this.input.value.trim()});
          }
        });
        
        document.body.appendChild(this.input);
        this.input.focus();
        this.isInputCreated = true;
      }

      if (this.isInputError) {
        this.ctx.font = `${C.INPUT_ERROR_FONT_SIZE}px "Press Start 2P"`;
        this.ctx.fillStyle = this.color.gray20;
        this.ctx.fillText(this.inputErrorMessage, this.width / 2, this.height / 2 + (C.INPUT_ERROR_OFFSET_Y));
      }
    }
  }
  /**
   * 게임 오버 화면 표시
   */
  private drawGameOver(): void {
    this.ctx.font = `${C.GAME_OVER_FONT_SIZE}px "Press Start 2P"`;
    this.ctx.fillStyle = this.color.gray40;
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`${this.catInfo.name} GAME OVER`, this.width / 2, this.height / 2);
    
    this.ctx.font = `${C.GAME_OVER_SCORE_FONT_SIZE}px "Press Start 2P"`;
    this.ctx.fillText(`Score: ${this.score}`, this.width / 2, this.height / 2 + C.GAME_OVER_SCORE_OFFSET_Y);

    window.addEventListener('keyup', this.restart);
  }
  /**
   * 게임 오버 체크
   */
  private checkGameOver(): void {
    const catLocation = this.cat.getLocation();

    for (const obstacle of this.obstacle.obstacles) {
      if (
        catLocation.x + catLocation.width > obstacle.x &&
        catLocation.x < obstacle.x + obstacle.width &&
        catLocation.y + obstacle.height + C.GAME_OVER_JUDGMENT_OFFSET_Y > obstacle.y
      ) {
        this.wsClient.sendMessage({catNo: this.catInfo.no, score: this.score});
        this.isGameOver = true;
        return;
      }
    }
  }
  /**
   * 색상 업데이트
   * @param currentTime - 현재 시간
   */
  private updateColor(currentTime: number): void {
    if (!this.transitionStartTime) {
      this.transitionStartTime = currentTime;
    }

    const elapsed = currentTime - this.transitionStartTime;
    const progress = Math.min(elapsed / C.TRANSITION_DURATION, 1);
    const startColor = this.mode === 'light' ? C.COLOR.light : C.COLOR.dark;
    const endColor = this.mode === 'dark' ? C.COLOR.light : C.COLOR.dark;
    const startCatColor = this.mode === 'light' ? C.CAT_COLOR.light : C.CAT_COLOR.dark;
    const endCatColor = this.mode === 'dark' ? C.CAT_COLOR.light : C.CAT_COLOR.dark;

    (Object.keys(this.color) as Array<keyof T.Color>).forEach((key) => {
      this.color[key] = U.colorTransition(startColor[key], endColor[key], progress);
    });
    (Object.keys(this.catColor) as Array<keyof T.CatColor>).forEach((key) => {
      this.catColor[key] = U.colorTransition(startCatColor[key], endCatColor[key], progress);
    });

    if (progress === 1) {
      this.changeColor = false;
      this.lightScore = 0;
      this.transitionStartTime = 0;
      this.mode = this.mode === 'light' ? 'dark' : 'light';
      this.sky.mode = this.mode;
      this.sky.setMoonX(this.width + 50);
    }
  }
  /**
   * 게임 상태 업데이트
   * @param currentTime - 현재 시간
   */
  private updateGameState(currentTime: number): void {
    if (currentTime - this.lastScoreTime > C.GAME_STATE_INTERVAL && !this.isScoreBlinking) {
      this.score++;
      this.lastScoreTime = currentTime;
      // 스피드 증가 한계
      if(this.score < C.SPEED_LIMIT_SCORE) this.gameSpeed += C.SPEED_INTERVAL;
      // 라이트 모드 점수 (다크 모드 진입)
      if (this.mode === 'light') this.lightScore++;
      // 100점 단위로 score 깜빡임 효과
      if (this.score % C.BLINKING_SCORE === 0) this.isScoreBlinking = true;
      // 라이트 모드에서 150점 달성 시 색상 변경
      if (this.lightScore === C.DARK_MODE_ENTRY_SCORE && this.mode === 'light') this.changeColor = true;
    }

    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = this.color.gray40;
    
    this.ctx.font = `${C.SCORE_FONT_SIZE}px "Press Start 2P"`;
    const scoreText = this.score.toString().padStart(5, '0');
    
    // score 깜빡임 효과
    if (this.isScoreBlinking && !this.isGameOver) {
      if (currentTime - this.lastBlinkTime > C.SCORE_BLINK_INTERVAL) {
        this.blinkCount++;
        this.lastBlinkTime = currentTime;
        
        if (this.blinkCount >= 10) {
          this.isScoreBlinking = false;
          this.blinkCount = 0;
        }
      }
      
      if (this.blinkCount % 2 === 0) this.ctx.fillText(`${scoreText}`, this.width - scoreText.length * C.SCORE_OFFSET_X, C.SCORE_OFFSET_Y);
    } else {
      this.ctx.fillText(`${scoreText}`, this.width - scoreText.length * C.SCORE_OFFSET_X, C.SCORE_OFFSET_Y);
    }
  }
} 