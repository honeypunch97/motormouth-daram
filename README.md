# 수다쟁이다람씨 (Discord 자동 TTS Bot + Express + Django 설정)

디스코드 서버(길드)에서 **특정 텍스트 채널에 메시지를 쓰면**, 봇이 **메시지 작성자가 현재 접속 중인 보이스 채널**에 들어가 내용을 TTS로 읽어주는 봇을 목표로 합니다. 운영/모니터링을 위해 **Express API**, 설정/유저 보이스 선택/플랜 관리를 위해 **Django(REST) 설정 서비스**를 두는 구성을 우선으로 잡았습니다(예정). TTS는 **Google Cloud Text-to-Speech(Neural2)** 를 사용할 계획입니다.

> 참고: 현재 리포지토리는 문서 중심이며, 구현은 진행 중(예정)입니다.

## 핵심 시나리오(멀티 서버)

1. 디스코드 서버 관리자가 봇을 서버에 추가
2. 관리자가 `/setup`으로 **TTS 텍스트 채널**을 지정(길드 설정 저장)
3. 사용자가 지정된 텍스트 채널에 메시지 작성
4. 봇이 **작성자가 접속 중인 보이스 채널**에 참가해 TTS 재생
5. 사용자는 `/voice`로 **본인 보이스(음색) 선택**(유저 설정 저장)
6. (추후) 사용량/플랜(스탠다드/프리미엄) 관리

## 주요 기능(예정)

- **채널 기반 자동 TTS**: 지정 텍스트 채널의 메시지를 자동으로 읽기
- **유저 위치 기반 재생**: 메시지 작성자가 있는 보이스 채널로 자동 참가해 재생
- **유저별 보이스 선택**: 사용자마다 다른 언어/보이스(예: Neural2)를 선택 가능
- **설정/정책 중앙 관리**: Django(REST)에서 길드 설정/유저 설정/플랜 정책 관리
- **운영 API(Express)**: 상태/헬스체크 및 운영 지표 노출(예정)

## 온보딩(관리자): `/setup` (예정)

- **목적**: 이 길드에서 “어떤 텍스트 채널”의 메시지를 읽을지 지정
- **흐름(예시)**:
  - `/setup` 실행
  - 봇이 채널 선택 UI로 **TTS 텍스트 채널**을 받음
  - Django 설정 서비스에 길드 설정 저장

## 사용자 설정: `/voice` (예정)

- **목적**: 본인이 작성한 메시지가 읽힐 때 사용할 **보이스(음색)** 를 선택
- **흐름(예시)**:
  - `/voice` 실행
  - 보이스 프리셋/목록에서 선택
  - Django 설정 서비스에 **유저별 보이스 설정** 저장
  - 적용 범위: **길드-사용자별 설정**(각 서버에서 별도로 저장/적용)

## 아키텍처(문서 수준)

- **Discord Bot (Node.js)**: 메시지 수신, 보이스 채널 참가/재생
- **Google Cloud TTS**: 텍스트 → 오디오 합성(Neural2)
- **Express API**: 상태/헬스체크(운영용)
- **Django(REST) 설정 서비스 + DB**:
  - 길드 설정: TTS 텍스트 채널, 정책(예정)
  - 유저 설정: 보이스 선택, 언어 등
  - (추후) 플랜/사용량/과금 정책

## 권한(예정)

- **텍스트 채널**: 메시지 보기/읽기
- **보이스 채널**: 연결(Connect), 말하기(Speak)

## 동작 정책(예정)

- 작성자가 보이스 채널에 **접속 중이 아닐 때**: **무시**
- **봇/웹훅 메시지** 처리: 기본 무시 여부
- 메시지 길이 제한/분할, 멘션/링크 처리 방식
- 동시성/레이트리밋: 길드/유저 단위 큐, 최대 길이 등

## 기술 스택

- **런타임**: Node.js (LTS 권장)
- **Discord**: `discord.js`, `@discordjs/voice`
- **Bot API(운영)**: Express.js
- **설정/플랜 서비스**: Django (REST)
- **TTS**: `@google-cloud/text-to-speech` (Google Cloud Neural2)
- **오디오 변환/스트리밍**: FFmpeg (시스템 설치 필요)
- **프로세스 관리**: PM2

## 요구사항

- Node.js (LTS)
- FFmpeg (OS에 설치 필요)
- Google Cloud 서비스 계정 키(JSON)
- Discord Bot Token
- Django 설정 서비스(REST) 및 DB(예: Postgres 등, 미정이면 Uncertain)

## 환경 변수(예정)

프로젝트 루트에 `.env`를 만들고, “시크릿/외부 서비스 접속 정보” 위주로 설정합니다. 길드/유저별 설정은 Django에 저장됩니다.

```env
# Discord
DISCORD_TOKEN="YOUR_DISCORD_BOT_TOKEN"
# 선택(예정): 초대 URL 생성/커맨드 등록 등에 필요할 수 있음 - Uncertain
DISCORD_CLIENT_ID=""

# Express (운영/헬스체크)
PORT=3000

# Google Cloud Text-to-Speech
GOOGLE_APPLICATION_CREDENTIALS="./google-key.json"

# Django 설정 서비스(REST)
DJANGO_API_BASE_URL="http://localhost:8000"
# 인증 방식은 구현에 따라 달라질 수 있음(예: API Key/JWT/OAuth2) - Uncertain
DJANGO_API_TOKEN=""
```

## Discord Intents(예정 / Uncertain)

구현 방식에 따라 아래 인텐트/권한이 필요할 수 있습니다.

- 메시지 수신: `GuildMessages`, (필요 시) `MessageContent`
- 보이스 상태 추적: `GuildVoiceStates`

## 로컬 실행(예정)

```bash
npm install
npm run start
```

## 배포/운영(PM2 예시, 예정)

```bash
cd /path/to/project
npm install

# 엔트리 파일명은 실제 구현에 따라 달라질 수 있습니다.
pm2 start index.js --name "수다쟁이다람씨"

pm2 list
pm2 save
pm2 startup
```

## 보안 메모

- `DISCORD_TOKEN`, `google-key.json`, `DJANGO_API_TOKEN` 같은 비밀 정보는 커밋하지 않습니다.
- `.env`, `google-key.json`은 `.gitignore` 처리하는 구성을 권장합니다.

## 로드맵(예정)

- 길드별 설정 저장/조회(Django REST)
- 유저별 보이스 선택 저장/조회(Django REST)
- 사용량 수집(길드/유저 단위: 문자 수/오디오 초/요청 수 등, 과금 단위는 Uncertain)
- 레이트리밋/쿼터(길드/유저/플랜 단위)
- 플랜(스탠다드/프리미엄): 동시 재생 수, 월간 한도, 보이스 프리셋 확장, 우선 처리(큐) 등
- 관리 UI: Django Admin 또는 별도 대시보드(예정 / Uncertain)
- 결제/구독 및 플랜 연동
