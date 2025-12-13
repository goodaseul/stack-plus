import { AllWordsBanner } from "./_components/AllWordsBanner";
import { QuizBanner } from "./_components/quiz/QuizBanner";
import { RecentWords } from "./_components/RecentWords";
import { RecordStudy } from "./_components/record/RecordStudy";

const mockWords = [
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
    <div className="w-full p-15">
      <div className="grid grid-cols-2 items-end gap-4 mb-10">
        <RecentWords mockWords={mockWords} />
        <AllWordsBanner />
      </div>
      <QuizBanner />
      <RecordStudy />
    </div>
  );
}
