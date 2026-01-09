const FEATURES = [
  {
    id: "01",
    title: "표현 저장",
    desc: "내가 직접 만든 예문과 함께 표현을 저장할 수 있어요.",
  },
  {
    id: "02",
    title: "학습 시각화",
    desc: "누적 학습량을 그래프로 확인하고 성장 흐름을 알 수 있어요.",
  },
  {
    id: "03",
    title: "퀴즈 학습",
    desc: "내가 저장한 표현들로 게임처럼 학습할 수 있어요.",
  },
];

export default function FeaturePage() {
  return (
    <section className="px-6 py-32 md:px-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-24 md:grid-cols-2">
        {/* Left */}
        <div className="md:sticky md:top-40 self-start">
          <h2 className="text-4xl text-gray-900">
            Stack
            <br />
            Your Language
            <br />
            Journey
          </h2>
        </div>

        {/* Right */}
        <ul className="space-y-24">
          {FEATURES.map((feature) => (
            <li key={feature.id} className="group">
              {/* 번호 */}
              <div className="mb-4 flex items-center gap-6">
                <span
                  className="text-5xl  text-gray-300
                    transition-all duration-300
                    group-hover:text-gray-900
                  "
                >
                  {feature.id}
                </span>

                <div className="h-px w-12 bg-gray-300 transition-all group-hover:w-24" />
              </div>

              {/* 텍스트 */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="max-w-md break-keep text-sm leading-relaxed text-gray-600">
                {feature.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
