import { BannerTitle } from "./common/banner/BannerTitle";
import Button from "@/components/button/Button";
import { Banner } from "./common/banner/Banner";
import { TiArrowRight } from "react-icons/ti";

export function AllWordsBanner() {
  return (
    <Banner>
      <BannerTitle
        title="단어 모두 보기"
        description="등록한 단어를 한 번에 모아보기"
      />

      <Button
        href="/record"
        variant="text_underline"
        className="self-start text-sm text-gray-600 hover:text-black"
      >
        보러가기 <TiArrowRight />
      </Button>
    </Banner>
  );
}
