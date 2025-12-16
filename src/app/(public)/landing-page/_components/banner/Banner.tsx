export default function BannerPage() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="mb-6 break-keep text-2xl font-semibold leading-snug text-white sm:text-3xl">
          오늘 배운 영어 표현부터
          <br />
          Stack+에 차곡차곡 쌓아보세요
        </h2>

        {/* CTA */}
        {/*
        <LinkButton
          href="/login"
          className="mx-auto inline-flex items-center gap-2 rounded-full
                     border border-white/30 px-6 py-3
                     text-sm font-medium text-white
                     hover:bg-white hover:text-gray-900
                     transition-colors"
        >
          지금 시작하기
          <span aria-hidden>→</span>
        </LinkButton>
        */}
      </div>
    </section>
  );
}
