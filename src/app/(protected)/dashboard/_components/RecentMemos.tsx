import Button from "@/components/button/Button";
import { Banner } from "./common/banner/Banner";
import { BannerTitle } from "./common/banner/BannerTitle";

export function RecentMemos() {
  return (
    <Banner>
      <BannerTitle
        title="최근 수정한 메모가 있어요"
        description="최근에 무엇을 수정했는지 보러갈까요?"
      />

      <Button
        variant="text"
        href="/record?filter=noMemo"
        className="self-start text-sm text-gray-600 hover:text-black"
      >
        메모 전체 보기 →
      </Button>
    </Banner>
  );
}
