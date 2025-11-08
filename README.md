# 🎤 판다마켓

> 일상의 모든 물건을 거래하는 마켓 플랫폼

## 🌟 프로젝트 소개

판다마켓(Panda Market)은 누구나 손쉽게 물건을 구매하고 판매할 수 있는 온라인 마켓 플랫폼입니다.
회원가입과 로그인 기능을 통해 개인 맞춤형 서비스를 제공하며, 인기 있는 베스트 상품을 한눈에 볼 수 있습니다.
또한 이용자 간 자유롭게 소통할 수 있는 자유게시판을 운영하여 활발한 커뮤니티 환경을 제공합니다.

## ✨ 주요 기능

- 💰 **후원 시스템**: 크레딧을 충전하여 아이돌 후원
- 🗳️ **투표 시스템**: 이달의 아이돌 인기 투표 참여
- 📊 **실시간 차트**: 투표 순위별 아이돌 차트 확인
- 👤 **마이페이지**: 관심 아이돌 관리 및 개인화

## 🌐 배포 주소

➡️ [Fandom-K](https://fandom-k-19-5.vercel.app/)

## 🛠 기술 스택

| 구분                | 사용 기술                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**        | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=white) |
| **Styling**         | ![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=flat&logo=styled-components&logoColor=white) ![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)                                                                                         |
| **상태 관리**       | ![Zustand](https://img.shields.io/badge/Zustand-443E38?style=flat&logo=react&logoColor=white) ![localStorage](https://img.shields.io/badge/localStorage-✓-green)                                                                                                                                                    |
| **HTTP 클라이언트** | ![axios](https://img.shields.io/badge/axios-API-blue)                                                                                                                                                                                                                                                               |
| **Routing**         | ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)                                                                                                                                                                                               |
| **배포**            | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)                                                                                                                                                                                                                                 |
| **협업**            | ![Discord](https://img.shields.io/badge/Discord-5865F2?style=flat-square&logo=discord&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-000000?style=flat-square&logo=notion)                                                                                                                          |

## 🚀 시작하기

### 필수 조건

- Node.js 18.0 이상
- npm

### 설치 및 실행

```bash
# 저장소 클론
git clone https://github.com/codeit-Five/FandomK.git

# 프로젝트 디렉토리로 이동
cd FandomK

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 백엔드 API

➡️ https://fandom-k-api.vercel.app/19-5/

## 📁 프로젝트 구조

```

├── 📂 .github              # GitHub 설정 파일
├── 📦 src
│   ├── 📂 api                   # API 디렉토리
│   ├── 📂 assets                # 정적 리소스
│   │   ├── 📂 fonts             # 폰트 디렉토리
│   │   ├── 📂 img               # 이미지 디렉토리
│   │   └── 📂 css               # 전역 스타일
│   ├── 📂 components            # 공통 컴포넌트 디렉토리
│   │   ├── 📂 Button            # 버튼 컴포넌트
│   │   ├── 📂 Header            # 헤더 컴포넌트
│   │   ├── 📂 IdolCard          # 아이돌 프로필 컴포넌트
│   │   ├── 📂 Modal             # 모달 컴포넌트
│   │   └── 📂 OptionCard        # 라디오 버튼 컴포넌트
│   ├── 📂 hooks                 # Custom Hook 디렉토리
│   ├── 📂 pages                 # 페이지 디렉토리
│   │   ├── 📂 Landing
│   │   ├── 📂 List              # 목록 페이지
│   │   │   ├── 📂 ChartSection
│   │   │   ├── 📂 CreditSection
│   │   │   ├── 📂 Donate
│   │   │   └── 📂 DonateSection
│   │   │       ├── 📂 carousel  # Carousel 디렉토리
│   │   │       └── 📂 skeleton  # Skeleton UI 디렉토리
│   │   ├── 📂 MyPage
│   │   └── 📂 NotFoundPage
│   ├── 📂 stores                # 상태 관리 디렉토리
│   ├── 📂 util                  # 유틸리티 함수 디렉토리
│   ├── ⚛️ App.jsx
│   └── ⚛️ main.jsx
├── ⚙️ .env                 # 환경변수
├── 📝 .eslintrc.json       # ESLint 설정 파일
├── 📝 .prettierrc.json     # Prettier 설정 파일
├── 🔷 favicon.svg          # favorite icon
├── 📄 index.html           # 진입 HTML
├── 📦 jsconfig.json        # 프로젝트 경로 별칭 설정 파일
├── 📦 package-lock.json    # 의존성 고정 파일
├── 📦 package.json         # 프로젝트 메타 정보
├── ⬆️ vercel.json          # Vercel 배포 설정
└── ⚡ vite.config.js       # Vite 설정
```

## 🔗 API 문서

- **Swagger UI**: https://fandom-k-api.vercel.app/docs/
- **Base URL**: https://fandom-k-api.vercel.app/19-5/

### 주요 API 엔드포인트

```javascript
// 투표하기
// POST /votes
// {
//   "idolId": 1
// }
```

## 🎓 학습 포인트

- **React 컴포넌트 설계**: 재사용 가능한 컴포넌트 개발
- **상태 관리**: Zustand를 활용한 전역 상태 관리
- **API 통신**: RESTful API와의 효율적인 데이터 통신
- **팀 협업**: Git 브랜치 전략 및 코드 리뷰 프로세스

## 📜 라이센스

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 감사의 글

이 프로젝트는 **코드잇 스프린트 Front-End 19기** 교육 과정의 팀 프로젝트로 제작되었습니다.
