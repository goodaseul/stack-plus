# StackPlus

> 영어 표현을 장기적으로 관리하고 학습하기 위해 만든 개인 프로젝트

기존에 구글 스프레드시트로 관리하던 영어 단어 학습의 불편함을 해결하기 위해 만들었습니다.
단순한 표현 암기가 아닌, 누적 학습 · 복습 · 기록 관리를 목표로 설계한 영어 표현 학습 프로젝트입니다.

페이지 링크 : https://stack-plus.vercel.app/

## 미리보기

### 랜딩페이지 / 로그인

![랜딩페이지](./public/readme/landing.png?v=2)

- Next.js SSR로 초기 로딩 성능과 SEO를 개선하고, 서비스 소개와 앱 영역의 역할을 명확히 구분

![로그인](./public/readme/login.png?v=2)

- Supabase Auth를 활용한 이메일 기반 로그인
- 앱 최초 진입 시 세션을 확인한 후 인증 상태를 초기화하여 인증 플리커링 방지

### 학습 대시보드

![대시보드](./public/readme/dashboard.png?v=2)
![대시보드](./public/readme/dashboard-2.png?v=2)

- 최근 등록한 표현 / record / filter 페이지로 이동
- 일간 / 월간 / 연간 학습 기록 시각화
- 누적 학습 현황을 한눈에 확인 가능

### 표현 관리

![표현 목록](./public/readme/words.png?v=2)

- 표현 CRUD · 검색 + 필터링 · 북마크 기능

### 표현 추가

![표현 추가](./public/readme/add-word.png?v=2)

- 표현, 의미, 예문, 메모 등 학습 정보 관리
- 중복 표현 입력 방지 로직 구현

---

## 기술 스택

### Frontend

- **Next.js 14 (App Router)** · **TypeScript** · **Tailwind CSS**
- **TanStack Query** - 서버 상태 캐싱 및 관리, mutation 후 `invalidateQueries`로 상태 재동기화
- **Zustand** - 로그인 사용자 정보 및 인증 초기화 상태 전역 관리
- **React Hook Form** - 비제어 컴포넌트 방식으로 불필요한 리렌더링 최소화
- **Next Themes** · **Recharts** · **Sonner**

### Backend & Database

- **Supabase (PostgreSQL)** · **Supabase Auth**

---

## 주요 기능

### 표현 관리

- 표현 추가 / 수정 / 삭제 (표현, 의미, 예문, 용도, 메모)
- `ilike` 기반 대소문자 무관 중복 검사 → 중복 발견 시 기존 표현 상세 페이지로 이동
- 메모 공백 입력 시 `null` 처리로 불필요한 데이터 저장 방지
- 북마크 기능으로 자주 복습할 표현 빠르게 접근

### 검색 및 필터링

- 디바운싱(300ms) 적용으로 불필요한 API 요청 최소화
- 전체 / 북마크 / 메모 있음 / 메모 없음 필터링
- Supabase `range` 기반 서버 사이드 페이지네이션 (페이지당 20개)

### 학습 기록

- 일간 / 월간 / 연간 차트로 학습 진행 상황 시각화
- 대시보드에서 최근 학습 표현 및 누적 통계 확인

---

## 트러블슈팅

### 인증 플리커링 문제

**문제**
로그인 후 대시보드로 이동했을 때, 헤더 닉네임이 바로 표시되지 않고 잠깐 빈 상태로 보이다가 나타나는 플리커링이 발생했습니다.

**원인**
로그인 시 `setUser`로 닉네임을 Zustand에 저장했지만, 대시보드로 이동하면서 `AuthProvider`가 새롭게 마운트되고 `onAuthStateChange`가 등록됩니다.
Supabase는 `onAuthStateChange`가 등록되는 순간 현재 세션 상태를 즉시 콜백으로 실행하는데, 이때 `getMyProfile()` API를 호출하는 동안 닉네임이 잠깐 없는 상태가 되면서 플리커링이 발생했습니다.

**해결**
`handleSession`에서 세션의 `user_metadata`에 닉네임이 이미 있으면 API 호출 없이 바로 `setUser`하고 return하도록 분기를 추가했습니다.

```ts
const nickname = session.user.user_metadata?.nickname;
if (nickname) {
  setUser({ id: session.user.id, nickname });
  return;
}
```

현재는 이메일 회원가입 시 닉네임을 필수로 입력받기 때문에 `user_metadata`에 항상 닉네임이 있어 `getMyProfile()`이 호출되지 않습니다.
추후 소셜 로그인 확장이나 예외 케이스를 대비해 fallback으로 남겨뒀습니다.

**결과**
로그인 직후 API 호출 없이 즉시 닉네임이 채워져 플리커링이 사라졌습니다.

---
