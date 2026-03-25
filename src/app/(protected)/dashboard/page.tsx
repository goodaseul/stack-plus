"use client";
import { AllWordsBanner } from "./_components/AllWordsBanner";
import { MemoBanner } from "./_components/memo/MemoBanner";
import { RecentWords } from "./_components/RecentWords";
import { RecordStudy } from "./_components/record/RecordStudy";
import { useUserStore } from "@/store/useUserStore";

export default function DashboardPage() {
  const { isInitialized } = useUserStore();
  if (!isInitialized) return <div>로딩 중..</div>;

  return (
    <div
      className="
        w-full lg:py-10 mx-auto max-w-6xl p-6"
    >
      <section
        className="mb-14 sm:mb-12 lg:mb-16 
        grid grid-cols-1 xl:grid-cols-[65%_30%] 
        gap-5 xl:gap-[5%] items-stretch"
      >
        <RecentWords />

        <div className="flex flex-col h-full gap-4">
          <AllWordsBanner />
          <MemoBanner />
        </div>
      </section>

      <section>
        <RecordStudy />
      </section>
    </div>
  );
}
