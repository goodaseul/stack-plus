import { List } from "../_components/list/List";
import { Title } from "../dashboard/_components/common/Title";
import { mockWords } from "../dashboard/page";

export default function RecordPage() {
  //  /words
  //  /words?filter=hasMemo
  //  /words?filter=noMemo
  //  /words?filter=bookmarked
  return (
    <div className="w-full p-5 md:p-15">
      <Title>모든 단어들</Title>
      <List words={mockWords} className="h-180 border-green bg-white" />
    </div>
  );
}
