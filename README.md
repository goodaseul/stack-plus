## 📌 Data Management

### Docs

- 영어 단어 데이터를 엑셀 파일에서 CSV 형식으로 변환
- 변환된 CSV 파일을 Supabase 테이블에 업로드하여 데이터 관리
- Supabase를 단어 데이터의 단일 소스로 사용

### Data

- React Query를 사용한 서버 상태 관리
- Supabase API와 연동하여 데이터 CRUD(Create, Read, Update, Delete) 처리
- 캐싱 및 비동기 상태 관리를 통해 성능 및 사용자 경험 개선

## 🔍 Filter (Query String)

- 필터 상태를 **쿼리 스트링(query string)** 으로 관리
- 필터 변경 시 URL에 상태를 반영하여 페이지 새로고침 및 공유 시에도 동일한 상태 유지
- `useSearchParams`를 활용해 현재 필터 값을 조회
- 쿼리 스트링 값을 기준으로 데이터 필터링 로직 적용

### Benefits

- 새로고침 시 필터 상태 유지
- URL 공유를 통한 동일한 화면 재현 가능
- UI 상태와 URL 상태 간의 일관성 확보

<!--
export type FilterKey = keyof typeof FILTERS; // key 값
export type FilterValue = (typeof FILTERS)[FilterKey]; // 해당 키로 접근했을 때의 결과
-->
