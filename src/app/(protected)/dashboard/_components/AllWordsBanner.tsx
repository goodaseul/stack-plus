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

      <Button
        href="/record"
        variant="text"
        className="self-start text-sm text-gray-600 hover:text-gray-900"
      >
        보러가기 →
      </Button>
    </Banner>
  );
}
