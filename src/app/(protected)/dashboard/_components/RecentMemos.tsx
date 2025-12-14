import Button from "@/components/button/Button";
import { Banner } from "./common/banner/Banner";
import { BannerTitle } from "./common/banner/BannerTitle";

export function RecentMemos() {
  return (
    <div className="relative mb-10 overflow-x-clip">
      <Banner className="border border-gray/30 bg-white hover:bg-cream/20">
        <BannerTitle
          title="최근 수정한 메모가 있어요"
          description={<>최근에 무엇을 수정했는지 보러갈까요?</>}
        />
        <Button variant="outline" href="/record?filter=noMemo">
          메모 전체 보기 <span aria-hidden>→</span>
        </Button>
      </Banner>
    </div>
  );
}
