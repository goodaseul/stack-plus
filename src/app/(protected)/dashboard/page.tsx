import { AllWordsBanner } from "./_components/AllWordsBanner";
import { MemoBanner } from "./_components/memo/MemoBanner";
import { RecentMemos } from "./_components/RecentMemos";
import { RecentWords } from "./_components/RecentWords";
import { RecordStudy } from "./_components/record/RecordStudy";

export default function DashboardPage() {
  return (
    <div
      className="
        w-full lg:py-10 mx-auto max-w-6xl p-6"
    >
      <section className="mb-14 sm:mb-12 lg:mb-16 grid grid-cols-1 xl:grid-cols-[65%_30%] gap-5 xl:gap-[5%]">
        {/* Section 1 : 최근 단어  */}
        <RecentWords />

        {/* Section 2 : 메모 관련 배너 */}
        <div className="flex flex-col justify-around gap-5 xl:gap-0">
          <AllWordsBanner />
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
