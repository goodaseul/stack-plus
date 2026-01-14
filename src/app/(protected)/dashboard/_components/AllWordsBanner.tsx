import { BannerTitle } from "./common/banner/BannerTitle";
import Button from "@/components/button/Button";
import { Banner } from "./common/banner/Banner";

export function AllWordsBanner() {
  return (
    <Banner>
      <BannerTitle
        title="단어 모두 보기"
        description="등록한 단어를 한 번에 모아보기"
      />

      <Button href="/record" className="self-end">
        보러 가기
      </Button>
    </Banner>
  );
}
