import Feature from "./_components/feature/Feature";
import LinkButton from "@/components/link-button/LinkButton";

export default function PublicHome() {
  return (
    <div className="px-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto pt-28 pb-20">
        <h1 className="break-keep text-4xl font-bold text-textStrong leading-tight mb-4">
          기억하고 싶은 영어 표현,
          <br />
          Stack+에 쌓아두세요.
        </h1>

        <p className="break-keep text-textMuted max-w-lg mx-auto">
          실제로 사용하는 영어만 정리하고 복습하세요.
          <br />
          당신의 표현력이 눈에 보이게 성장합니다.
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-12 text-center py-20">
        <Feature
          icon="✍️"
          title="표현 저장"
          desc="내가 직접 만든 예문과 함께 표현을 저장할 수 있어요."
        />
        <Feature
          icon="📊"
          title="학습 시각화"
          desc="누적 학습량을 그래프로 확인하고 성장 흐름을 알 수 있어요."
        />
        <Feature
          icon="🎮"
          title="퀴즈 학습"
          desc="내가 저장한 표현들로 게임처럼 학습할 수 있어요."
        />
      </section>

      {/* Final CTA */}
      <section className="text-center py-20">
        <h2 className="text-2xl font-semibold text-textStrong mb-6">
          오늘 배운 표현부터 저장해볼까요?
        </h2>
        <LinkButton variant="default" href="/login">
          Stack+ 시작하기
        </LinkButton>
      </section>
    </div>
  );
}
