import { BannerTitle } from "./common/banner/BannerTitle";
import Button from "@/components/button/Button";
import { Banner } from "./common/banner/Banner";

export function AllWordsBanner() {
  return (
    <Banner className="border border-green/30 bg-green/10  hover:bg-green/15">
      <BannerTitle
        title="단어 모두 보기"
        description="등록한 단어를 한 번에 모아보기"
      />
      <Button href="/record">
        보러가기
        <span aria-hidden>→</span>
      </Button>
    </Banner>
  );
}
