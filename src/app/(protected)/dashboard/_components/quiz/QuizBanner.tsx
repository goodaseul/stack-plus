import { Banner } from "../common/banner/Banner";
import { BannerTitle } from "../common/banner/BannerTitle";
import Button from "@/components/button/Button";
import { QuizBannerPattern } from "./QuizBannerPattern";

export function QuizBanner() {
  return (
    <div className="relative mb-10 overflow-x-clip">
      <QuizBannerPattern />
      <Banner className="border border-gray/30 bg-white hover:bg-cream/20">
        <BannerTitle
          title="오늘의 퀴즈"
          description={
            <>
              지금까지 등록한 단어로
              <span className="font-semibold">10문제</span>를 풀어보세요
            </>
          }
        />
        <Button variant="outline" href="/quiz">
          퀴즈 하러 가기 <span aria-hidden>→</span>
        </Button>
      </Banner>
    </div>
  );
}
