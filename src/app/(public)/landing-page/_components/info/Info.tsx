import StrongTitle from "@/components/strong-title/StrongTitle";
import LinkButton from "@/components/link-button/LinkButton";
import Marquee from "./marquee";

export default function InfoPage() {
  return (
    <section className="mx-auto pt-28 pb-20 h-screen text-center flex flex-col justify-center relative w-full">
      <Marquee
        direction="left"
        speed={45}
        color="text-blue"
        className="items-start text-9xl"
      />
      <Marquee
        text="Start small
        Then grow steadily,
        Applying what you learn,
        Connecting every expression,
        Keeping English in your life."
        direction="right"
        speed={80}
        color="text-blue"
        className="text-9xl"
      />

      <Marquee
        direction="left"
        speed={60}
        color="text-blue"
        className="items-end text-9xl"
      />

      <h2 className="break-keep text-4xl font-bold text-textStrong leading-tight mb-8">
        기억하고 싶은 영어 표현,
        <br />
        <StrongTitle>Stack+</StrongTitle>에 쌓아두세요.
      </h2>

      <p className="break-keep mx-auto text-xl mb-10">
        실제로 사용하는 영어만 정리하고 복습하세요.
        <br />
        당신의 표현력이 눈에 보이게 성장합니다.
      </p>

      <LinkButton className="w-35 mx-auto" href="/login">
        지금 시작하기
      </LinkButton>
    </section>
  );
}
