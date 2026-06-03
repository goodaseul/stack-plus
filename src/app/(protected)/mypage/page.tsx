"use client";
import { useUserStore } from "@/store/useUserStore";
import { Title } from "../dashboard/_components/common/Title";
import { useWordStats } from "@/hooks/queries/words";

export default function Mypage() {
  const { nickname } = useUserStore();
  const { total, memo, bookmark, publicWords } = useWordStats();

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const initial = nickname?.slice(0, 2) ?? "?";

  const stats = [
    { label: "등록한 표현", value: total, icon: "📚" },
    { label: "북마크한 표현", value: bookmark, icon: "🔖" },
    { label: "메모한 표현", value: memo, icon: "💬" },
    { label: "공유한 표현", value: publicWords, icon: "🌐" },
  ];

  return (
    <div
      className="
        w-full lg:py-10 mx-auto max-w-6xl p-6"
    >
      <div className="flex items-end justify-between mb-8">
        <Title>마이 페이지</Title>
        <span className="text-xs text-foreground/40 bg-foreground/5 px-3 py-1.5 rounded-full border border-foreground/10">
          {year}-{month}-{day}
        </span>
      </div>

      <div className="flex items-center gap-4 p-5 rounded-xl border border-foreground/10 bg-background mb-4">
        <div className="w-12 h-12 rounded-full bg-point/10 flex items-center justify-center shrink-0 text-point font-medium text-lg">
          {initial}
        </div>
        <div>
          <p className="text-base font-medium text-foreground">{nickname} 님</p>
          <p className="text-sm text-foreground/40 mt-0.5">
            안녕하세요, 오늘도 열심히!
          </p>
        </div>
        {/* <button className="ml-auto text-xs text-foreground/40 border border-foreground/10 px-3 py-1.5 rounded-full hover:text-point hover:border-point transition-colors">
          수정하기
        </button> */}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="bg-foreground/5 rounded-lg p-4 flex flex-col gap-2 border border-foreground/10"
          >
            <p className="text-xs text-foreground/40 flex items-center gap-1.5">
              <span>{icon}</span>
              {label}
            </p>
            <p className="text-2xl font-medium text-foreground leading-none">
              {value}
              <span className="text-sm font-normal text-foreground/40 ml-1">
                개
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
