import { AllWordsBanner } from "./_components/AllWordsBanner";
import { MemoBanner } from "./_components/memo/MemoBanner";
import { RecentMemos } from "./_components/RecentMemos";
import { RecentWords } from "./_components/RecentWords";
import { RecordStudy } from "./_components/record/RecordStudy";

export const mockWords = [
  {
    id: 1,
    expression: "book bookbookbookbook",
    meaning: "책",
    usage: "일상생활",
    bookmarked: false,
    memo: "어렸을 때 공부한 책!",
  },
  {
    id: 2,
    expression: "yesterday",
    meaning: "어제",
    usage: "일상생활",
    bookmarked: false,
    memo: "어렸을 때 공부한 어제!",
  },
  {
    id: 3,
    expression: "tomorrowtomorrowtomorrowtomorrow",
    meaning: "내일",
    usage: "일상생활",
    bookmarked: true,
    memo: "",
  },
  {
    id: 4,
    expression: "tomorrow",
    meaning: "내일",
    usage: "일상생활",
    bookmarked: false,
    memo: "",
  },
  {
    id: 5,
    expression: "tomorrow",
    meaning: "내일",
    usage: "일상생활",
    bookmarked: true,
    memo: "",
  },
];

export default function DashboardPage() {
  return (
    <div
      className="
        w-full
        px-4 py-6
        sm:px-6 sm:py-8
        lg:px-12 lg:py-10
      "
    >
      {/* Section 1 : 최근 단어 + 전체 보기 */}
      <section className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <RecentWords mockWords={mockWords} />
          <AllWordsBanner />
        </div>
      </section>

      {/* Section 2 : 메모 관련 배너 */}
      <section className="mb-14 sm:mb-12 lg:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <MemoBanner />
          <RecentMemos />
        </div>
      </section>

      {/* Section 3 : 공부 기록 */}
      <section>
        <RecordStudy />
      </section>
    </div>
  );
}
