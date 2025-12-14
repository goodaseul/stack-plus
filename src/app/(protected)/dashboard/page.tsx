import { AllWordsBanner } from "./_components/AllWordsBanner";
import { MemoBanner } from "./_components/memo/MemoBanner";
import { RecentMemos } from "./_components/RecentMemos";
import { RecentWords } from "./_components/RecentWords";
import { RecordStudy } from "./_components/record/RecordStudy";

export const mockWords = [
  {
    id: 1,
    word: "book bookbookbookbook",
    meaning: "책",
    memo: "어렸을 때 공부한 책!",
  },
  {
    id: 2,
    word: "yesterday",
    meaning: "어제",
    memo: "어렸을 때 공부한 어제!",
  },
  {
    id: 3,
    word: "tomorrowtomorrowtomorrowtomorrow",
    meaning: "내일",
    memo: "",
  },
  {
    id: 4,
    word: "tomorrow",
    meaning: "내일",
    memo: "",
  },
  {
    id: 5,
    word: "tomorrow",
    meaning: "내일",
    memo: "",
  },
];

export default function DashboardPage() {
  return (
    <div className="w-full p-5 md:p-15">
      <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-4 mb-10">
        <RecentWords mockWords={mockWords} />
        <AllWordsBanner />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-4 mb-10">
        <MemoBanner />
        <RecentMemos />
      </div>
      <RecordStudy />
    </div>
  );
}
