import SectionWrapper from "@/app/(public)/landing-page/_components/SectionWrapper";
import { GoBook } from "react-icons/go";
import { LuPencil, LuChartNoAxesCombined } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { FiTag } from "react-icons/fi";
import Button from "@/components/button/Button";

const features = [
  {
    icon: GoBook,
    title: "표현 등록",
    description: "표현과 뜻을 간편하게 등록하세요.",
  },
  {
    icon: LuPencil,
    title: "메모 기능",
    description: "메모를 추가해 헷갈리는 포인트나 사용법을 기록하세요.",
  },
  {
    icon: LuChartNoAxesCombined,
    title: "학습 기록",
    description: "일간, 월간, 연간 학습 기록을 차트로 확인하세요.",
  },
  {
    icon: FaRegBookmark,
    title: "북마크",
    description: "중요한 표현는 북마크해서 따로 모아보고 집중 학습하세요.",
  },
  {
    icon: IoSearchOutline,
    title: "검색 기능",
    description: "등록한 모든 표현를 빠르게 검색하고 찾아볼 수 있어요.",
  },
  {
    icon: FiTag,
    title: "카테고리 분류",
    description: "일상생활, 비즈니스 등 사용 장소별로 표현를 분류하세요.",
  },
];

export function FeaturePage() {
  return (
    <SectionWrapper
      title="학습을 위한 모든 기능"
      desc={
        <>
          <span className="font-sekuya text-point">StackPlus</span>가 제공하는
          강력한 기능들을 소개합니다.
        </>
      }
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-border  p-5 md:px-2 md:py-7 md:text-center text-left"
          >
            <div className="flex items-center md:block gap-5">
              <div
                className="shrink-0 inline-flex h-10 w-10 md:h-12 md:w-12
                            items-center justify-center rounded-xl bg-point/10"
              >
                <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-point" />
              </div>
              <h3 className="text-sm md:text-lg mt-0 md:mt-2 font-semibold text-foreground">
                {feature.title}
              </h3>
            </div>

            <p className="hidden md:block mt-2 text-sm leading-relaxed text-muted-foreground break-keep">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <Button href="./dashboard" type="button" className="mt-10 w-40 mx-auto">
        시작하기
      </Button>
    </SectionWrapper>
  );
}
