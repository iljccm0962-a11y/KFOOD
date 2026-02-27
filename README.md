# kfood

## Cloudflare Pages에서 Google 로그인 설정

이 프로젝트는 Google Client ID를 프론트에 하드코딩하지 않고, Cloudflare Pages Functions의 `/api/config`에서 런타임으로 주입받도록 구성되어 있습니다.

### 1) Cloudflare Pages 환경변수 설정

Cloudflare Dashboard → 해당 Pages 프로젝트 → `Settings` → `Environment variables`

아래 변수를 추가하세요.

- `GOOGLE_CLIENT_ID` = `xxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.apps.googleusercontent.com`

호환을 위해 아래 키도 인식합니다.

- `GOOGLE_OAUTH_CLIENT_ID`

가능하면 `Production`, `Preview` 환경 모두에 동일하게 설정하세요.

### 2) 배포/재배포

환경변수 저장 후 새 배포를 실행합니다.

### 3) 동작 확인

- 배포 URL에서 `/api/config` 접속 시 JSON 응답 확인
- `googleClientId` 값이 비어있지 않은지 확인
- `index.html`에서 Google 로그인 버튼 클릭 시 정상 인증 진행 확인

### 참고

- 런타임 설정 엔드포인트: [functions/api/config.js](functions/api/config.js)
- 클라이언트 로딩 코드: [index.html](index.html)