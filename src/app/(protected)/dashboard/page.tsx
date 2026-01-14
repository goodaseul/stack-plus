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
        <RecentWords />

        <div className="flex flex-col justify-between gap-4">
          <AllWordsBanner />
          <MemoBanner />
          <RecentMemos />
        </div>
      </section>

      <section>
        <RecordStudy />
      </section>
    </div>
  );
}
