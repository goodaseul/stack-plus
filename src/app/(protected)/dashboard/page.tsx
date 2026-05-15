"use client";
import Banner from "./_components/banner/Banner";
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
      <RecentWords />
      <Banner />
      <RecordStudy />
    </div>
  );
}
