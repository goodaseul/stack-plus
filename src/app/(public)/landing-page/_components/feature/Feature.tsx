import SectionWrapper from "@/app/(public)/landing-page/_components/SectionWrapper";
import { GoBook } from "react-icons/go";
import { LuPencil } from "react-icons/lu";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiTag } from "react-icons/fi";

const features = [
  {
    icon: GoBook,
    title: "단어 등록",
    description:
      "영어 단어와 한국어 뜻을 간편하게 등록하세요. 예문까지 함께 저장할 수 있어요.",
  },
  {
    icon: LuPencil,
    title: "메모 기능",
    description:
      "단어마다 메모를 추가해 헷갈리는 포인트나 사용법을 기록하세요.",
  },
  {
    icon: LuChartNoAxesCombined,
    title: "학습 기록",
    description:
      "일간, 월간, 연간 학습 기록을 차트로 확인하고 꾸준히 성장하세요.",
  },
  {
    icon: FaRegBookmark,
    title: "북마크",
    description: "중요한 단어는 북마크해서 따로 모아보고 집중 학습하세요.",
  },
  {
    icon: IoSearchOutline,
    title: "검색 기능",
    description: "등록한 모든 단어를 빠르게 검색하고 찾아볼 수 있어요.",
  },
  {
    icon: FiTag,
    title: "카테고리 분류",
    description: "일상생활, 비즈니스 등 사용 장소별로 단어를 분류하세요.",
  },
];

export function FeaturePage() {
  return (
    <SectionWrapper
      title="영어 학습을 위한 모든 기능"
      desc="Stack Plus가 제공하는 강력한 기능들을 만나보세요"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left mt-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group rounded-2xl border border-border p-6 border-gray-200"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-point/10">
              <feature.icon className="h-6 w-6 text-point" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="break-keep text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
