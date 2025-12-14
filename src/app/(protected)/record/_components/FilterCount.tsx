export function FilterCount() {
  return (
    <p className="text-right mb-5">
      {/* Todo - filter 클릭시 ex. 메모 있음일 시 => · 메모  <span className="text-lg">5개</span>   */}
      · 단어<span className="text-lg">12개</span>· 메모
      <span className="text-lg">5개</span>· 북마크
      <span className="text-lg">3개</span>
    </p>
  );
}
