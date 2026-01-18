import Button from "@/components/button/Button";

export default function BannerPage() {
  return (
    <section className="bg-point text-black py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="break-keep text-2xl font-bold tracking-tight">
          오늘 배운 영어 표현부터
          <br />
          Stack+에 차곡차곡 쌓아보세요
        </h2>
        <Button
          href="./login"
          variant="outline"
          type="button"
          className="mt-10 w-40 mx-auto hover:bg-white hover:text-black"
        >
          지금 시작하기
        </Button>
      </div>
    </section>
  );
}
