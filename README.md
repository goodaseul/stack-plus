# 📌 Data Management & Authentication

이 프로젝트는 **Supabase Auth + Zustand + Next.js App Router** 기반의 인증 시스템과  
**React Query를 활용한 데이터 관리 구조**로 구성되어 있습니다.

---

## 🔐 Authentication System

### ✅ 사용 기술

- **Supabase Auth**

  - 회원가입 / 로그인 처리
  - `supabase.auth.getSession()`을 이용해 새로고침 시에도 로그인 세션 유지

- **Zustand**

  - 사용자 정보 전역 상태 관리
  - 어디서든 `useUserStore()`로 로그인 정보 접근 가능

- **Next.js App Router**
  - `(public)` / `(protected)` 라우트 그룹으로 접근 제어

---

---

### 🔄 인증 흐름

1. **앱 시작**

   - `AuthProvider`가 LocalStorage에 저장된 Supabase 세션 복구

2. **로그인**

   - Supabase Auth 인증 성공
   - `onAuthStateChange` 이벤트 발생
   - Zustand Store에 사용자 정보 저장

3. **페이지 접근**

   - `(protected)/layout.tsx`에서 로그인 여부 검사
   - 인증되지 않은 경우 `/login`으로 자동 리다이렉트

4. **새로고침**
   - 기존 세션 자동 복원 → 로그인 유지

---

### 🔒 구현 기능

- ✅ 로그인 / 회원가입
- ✅ 새로고침 시 로그인 유지
- ✅ 로그인 사용자만 `/dashboard` 접근 가능
- ✅ 비로그인 사용자는 자동으로 `/login` 이동
- ✅ 사용자 nickname 전역 관리 및 화면 표시

---

### ⚠️ 주의사항

- `AuthProvider`는 반드시 **Root Layout**에서 전체 앱을 감싸야 함
- Zustand selector는 개별 선택 방식 사용 (불필요한 리렌더 방지)
- 인증 초기화 상태를 구분하기 위해 `isInitialized` 상태 관리 필수

---

## 📦 Data Management

### 📚 데이터 관리 방식

- 영어 단어 데이터를 **Excel → CSV 변환**
- Supabase 테이블에 업로드하여 **단일 데이터 소스(Single Source of Truth)** 로 관리

---

### ⚙️ 사용 기술

- **Supabase**

  - 단어 데이터 CRUD 처리

- **React Query**
  - 서버 상태 캐싱
  - 비동기 데이터 관리
  - 불필요한 네트워크 요청 최소화

---

## 🔍 Filter (Query String 기반 상태 관리)

필터 상태를 URL 쿼리 스트링으로 관리하여  
**새로고침, 공유, 뒤로가기에도 상태가 유지되도록 구현**했습니다.

### ✅ 구현 방식

- `useSearchParams`로 현재 필터 값 조회
- 필터 변경 시 URL 쿼리 스트링 동기화
- 쿼리 값 기반 데이터 필터링 적용

---

### 🎯 장점

- ✔ 새로고침 시 필터 상태 유지
- ✔ URL 공유 시 동일 화면 재현 가능
- ✔ UI 상태와 URL 상태의 일관성 유지
