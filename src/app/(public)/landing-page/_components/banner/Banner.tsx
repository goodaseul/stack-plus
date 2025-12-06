import LinkButton from "@/components/link-button/LinkButton";

export default function BannerPage() {
  return (
    <section className="text-center py-20 bg-blue/80">
      <h2 className="text-2xl text-white font-semibold text-textStrong mb-6">
        오늘 배운 표현부터 저장해볼까요?
      </h2>
      <LinkButton variant="outline" href="/login">
        Stack+ 시작하기
      </LinkButton>
    </section>
  );
}
