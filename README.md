# StackPlus

영어 단어 학습 및 관리 애플리케이션

## 주요 기능

### 📚 단어 관리

- **단어 추가/수정/삭제**: 단어, 의미, 예문, 용도, 메모 등을 관리
- **중복 체크**: 대소문자 및 공백 정규화를 통한 중복 단어 방지
- **북마크**: 중요한 단어를 북마크하여 빠르게 접근

### 🔍 검색 및 필터링

- **실시간 검색**: 디바운싱이 적용된 검색 기능
- **필터링**: 전체/북마크/메모있음/메모없음으로 분류
- **페이지네이션**: 효율적인 대량 데이터 처리 (20개씩)

### 📊 학습 기록

- **일일/월간/연간 차트**: 학습 진행 상황을 시각적으로 확인
- **대시보드**: 최근 학습한 단어 및 통계 확인

## 기술 스택

### Frontend

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Query (TanStack Query)** - 서버 상태 관리
- **Zustand** -

### Backend & Database

- **Supabase** - PostgreSQL 기반 백엔드
- **Supabase Auth** - 사용자 인증

### 라이브러리

- **Recharts** - 차트 시각화
- **Sonner** - Toast 알림

## 핵심 구현 사항

### 1. 효율적인 상태 관리

#### ⚡ 서버 상태 관리 (React Query)

#### 낙관적 업데이트 (Optimistic Update)

- 북마크 토글 시 즉각적인 UI 반응
- 에러 발생 시 자동 롤백

### 2. 검색 최적화

#### 디바운싱 (Debouncing)

타이핑 중 불필요한 API 요청 방지 (300ms 지연)

### 3. 서버 사이드 페이지네이션

대량의 데이터를 효율적으로 처리

### 4. 중복 단어 방지

- 대소문자 무시 (`ilike`)
- 중복 발견 시 기존 단어로 이동

## 시작하기

### 설치

```bash
npm install
```

### 환경 변수 설정

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 개발 서버 실행

```bash
npm run dev
```

### 배운 점

1. **React Query의 강력함**: 낙관적 업데이트, 캐싱, 자동 리페칭
2. **디바운싱의 중요성**: 검색 기능에서 불필요한 API 요청 방지
3. **타입 안전성**: TypeScript로 런타임 에러 사전 방지
4. **서버 사이드 페이지네이션**: 대량 데이터 처리 시 필수
