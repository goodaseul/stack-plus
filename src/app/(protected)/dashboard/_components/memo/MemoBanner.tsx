import { Banner } from "../common/banner/Banner";
import { BannerTitle } from "../common/banner/BannerTitle";
import Button from "@/components/button/Button";

export function MemoBanner() {
  return (
    <div className="relative h-full flex-1">
      <Banner className="relative">
        <BannerTitle
          title="메모 안 한 표현이 있어요"
          description="등록만 하고 지나간 표현들 정리해볼까요?"
        />

        <Button
          variant="outline"
          href="/record?filter=noMemo"
          className="self-end"
        >
          메모 하기
        </Button>
      </Banner>
    </div>
  );
}
