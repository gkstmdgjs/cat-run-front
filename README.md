# Cat Run Front

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=sass&logoColor=white)](https://sass-lang.com/)
[![WebSocket](https://img.shields.io/badge/WebSocket-000000?style=flat-square&logo=websocket&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
[![Canvas](https://img.shields.io/badge/Canvas-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

> 🌐 **URL**: [cat-run.seunghoney.com](https://cat-run.seunghoney.com/)

## 📖 프로젝트 소개

Cat Run은 웹 기반의 재미있는 고양이 달리기 게임입니다! 🏃‍♂️ Canvas API와 TypeScript로 개발된 브라우저 게임으로, 실시간 소켓 통신을 지원합니다.

## 🛠️ 기술 스택

### Frontend
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Sass/SCSS
- **Canvas**: HTML5 Canvas API

### 통신 & 실시간 처리
- **WebSocket**: STOMP.js + SockJS
- **Protocol**: STOMP (Simple Text Oriented Messaging Protocol)

### 개발 도구
- **Module Bundler**: Vite
- **Type Checking**: TypeScript Compiler

## 📁 프로젝트 구조

```
cat-run-front/
├── 📄 index.html             # 🌐 메인 HTML 파일
├── 📦 package.json           # 📋 프로젝트 설정 및 의존성
├── ⚙️ vite.config.ts         # 🔧 Vite 빌드 설정
├── 🔧 tsconfig.json          # 📘 TypeScript 설정
└── 📂 src/
    ├── 🎮 game/              # 게임 엔진 및 컴포넌트
    │   ├── engine.ts         # 🏗️ 메인 게임 엔진
    │   ├── components/       # 🧩 게임 컴포넌트들
    │   └── draw/             # 🎨 렌더링 관련 모듈
    ├── 🎨 assets/            # 게임 리소스
    │   ├── imgs/             # 🖼️ 이미지 파일
    │   ├── scss/             # 💅 스타일시트
    │   └── fonts/            # ✍️ 폰트 파일
    ├── 📊 constants/         # 🔢 상수 정의
    ├── 🔗 shared/            # 🤝 공유 모듈
    └── 🚀 main.ts            # 🎯 엔트리 포인트
```

## 🎯 주요 기능

- 🐱 **귀여운 고양이 캐릭터**: 다양한 고양이 캐릭터 선택 가능
- 🏃 **부드러운 애니메이션**: 60fps의 매끄러운 게임 플레이
- 🌐 **실시간 멀티플레이어**: WebSocket을 통한 실시간 대전
- 📱 **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- 🎮 **직관적인 조작**: 키보드와 터치 컨트롤 지원
- 🏆 **랭킹 시스템**: 실시간 리더보드

## 🚀 시작하기

```bash
# 의존성 설치
npm install
# 또는
yarn install

# 개발 서버 실행 (http://localhost:7477)
npm run dev
# 또는
yarn dev

# 프로덕션 빌드
npm run build
# 또는
yarn build

# 빌드 미리보기
npm run preview
# 또는
yarn preview

# 프로덕션 환경 실행
npm run prod
# 또는
yarn prod
```

## 👨‍💻 개발자 정보

- **이름**: 한승헌
- **닉네임**: Honey
- **직업**: Full Stack Developer
- **이메일**: sh725473@gmail.com
- **GitHub**: [gkstmdgjs](https://github.com/gkstmdgjs)