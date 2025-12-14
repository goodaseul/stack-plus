import { List } from "../_components/list/List";
import { Title } from "../dashboard/_components/common/Title";
import { mockWords } from "../dashboard/page";
import { Filter } from "../_components/filter/Filter";
import { FilterCount } from "./_components/FilterCount";

export default function RecordPage() {
  //  /words
  //  /words?filter=hasMemo
  //  /words?filter=noMemo
  //  /words?filter=bookmarked
  const filterMenus = ["전체", "메모 있음", "메모 없음 ", "북마크"];
  return (
    <div className="w-full p-5 md:p-15">
      <Title>모든 단어들</Title>

      <p>지금까지 기록한 단어와 메모를 확인해보세요</p>
      <Filter filterMenus={filterMenus} />
      <FilterCount />

      {/* Todo -  빈 상태 ux */}
      <List words={mockWords} className="h-180 border-green bg-white" />
    </div>
  );
}
