const FEATURES = [
  {
    id: 1,
    title: "표현 저장",
    desc: "내가 직접 만든 예문과 함께 표현을 저장할 수 있어요.",
  },
  {
    id: 2,
    title: "학습 시각화",
    desc: "누적 학습량을 그래프로 확인하고 성장 흐름을 알 수 있어요.",
  },
  {
    id: 3,
    title: "퀴즈 학습",
    desc: "내가 저장한 표현들로 게임처럼 학습할 수 있어요.",
  },
];

export default function FeaturePage() {
  return (
    <section className="p-10 ">
      <div className="relative grid-cols-1 grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div className="static md:sticky top-50 self-start">
          <h2 className="text-6xl font-permanent-marker text-blue">
            Speak <br />
            what you save.
          </h2>
        </div>

        {/* Right */}
        <ul className="space-y-10">
          {FEATURES.map((feature) => (
            <li key={feature.id} className="bg-blue/ rounded-xl py-20">
              <h3 className="text-2xl font-semibold flex items-center">
                <strong className="font-permanent-marker text-6xl block mb-4 text-blue pr-5">
                  {feature.id}.
                </strong>
                {feature.title}
              </h3>
              <p className="text-xl break-keep mt-2 leading-relaxed">
                {feature.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
