# STACK PLUS

STACK PLUS는 영어 학습 과정에서 정리한 단어와 표현을  
개인 계정 기반으로 관리하고 한눈에 확인할 수 있도록 만든 서브 프로젝트입니다.

---

## 🛠 Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Supabase (PostgreSQL, Auth, Row Level Security)**
- **TanStack Query (React Query)**

---

### ⚡ 서버 상태 관리 (React Query)

- 서버 데이터를 전역 상태와 분리하여 관리
- 캐싱을 통해 불필요한 네트워크 요청 최소화
- 자동 리페칭으로 데이터 최신 상태 유지

---

### 🔍 Filter (Query String 기반 상태 관리)

필터 상태를 URL 쿼리 스트링으로 관리하여:

- 새로고침 시에도 필터 유지
- URL 공유 시 동일한 상태 재현 가능
- 브라우저 뒤로가기/앞으로가기 자연스럽게 동작

UX 일관성을 확보했습니다.

---

### 🎓 What I Learned

- Supabase를 활용한 BaaS 기반 서비스 설계 경험
- PostgreSQL Row Level Security를 이용한 데이터 접근 제어
- React Query를 활용한 서버 상태 캐싱 전략
- URL 상태 관리 패턴을 통한 UX 개선
