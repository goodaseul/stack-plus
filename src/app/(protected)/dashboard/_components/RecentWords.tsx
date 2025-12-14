import Button from "@/components/button/Button";
import { CiCirclePlus } from "react-icons/ci";
import { WordType } from "../../_components/list/type";
import { List } from "../../_components/list/List";
import { Title } from "./common/Title";

export function RecentWords({ mockWords }: { mockWords: WordType[] }) {
  return (
    <div>
      <Title>
        최근 등록한 단어
        <Button
          type="button"
          variant="text"
          className="text-sm text-gray-strong"
        >
          단어 추가하기 <CiCirclePlus className="text-lg ml-1" />
        </Button>
      </Title>
      <List words={mockWords} className="border-green bg-cream h-48" />
    </div>
  );
}
