import { Banner } from "../common/banner/Banner";
import { BannerTitle } from "../common/banner/BannerTitle";
import Button from "@/components/button/Button";
import { MemoBannerPattern } from "./MemoBannerPattern";

export function MemoBanner() {
  return (
    <div className="relative mb-10 overflow-x-clip">
      <MemoBannerPattern />
      <Banner className="border border-green/30 bg-green/10  hover:bg-green/15">
        <BannerTitle
          title="오늘 메모 안 한 단어가 있어요"
          description={<>등록만 하고 지나간 단어들 정리해볼까요?</>}
        />
        <Button href="/record?filter=noMemo">
          메모 하러 가기 <span aria-hidden>→</span>
        </Button>
      </Banner>
    </div>
  );
}
