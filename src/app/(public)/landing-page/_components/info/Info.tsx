import Marquee from "./marquee";

export default function InfoPage() {
  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 z-0 flex flex-col justify-center opacity-[0.15]">
        <Marquee
          text="Start small · Grow steadily · Keep English alive · Stack your expressions"
          direction="left"
          speed={40}
          color="text-gray-950"
          className="text-7xl"
        />
        <Marquee
          text="Start small · Grow steadily · Keep English alive · Stack your expressions"
          direction="right"
          speed={50}
          color="text-gray-950"
          className="mt-12 text-7xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6">
        <h2 className="mb-8 break-keep text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
          기억하고 싶은 영어 표현을
          <br />
          <span className="inline-block mt-2">Stack+에 쌓아두세요</span>
        </h2>

        <p className="max-w-xl break-keep text-base leading-relaxed text-gray-600 sm:text-lg">
          실제로 사용하는 영어만 정리하고 복습하세요.
          <br />
          쌓일수록, 당신의 표현력은 분명해집니다.
        </p>
      </div>
    </section>
  );
}
