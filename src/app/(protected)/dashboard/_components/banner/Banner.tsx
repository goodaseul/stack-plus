import { AllWordsBanner } from "../AllWordsBanner";
import { MemoBanner } from "../memo/MemoBanner";

export default function Banner() {
  return (
    <section className="flex gap-5 flex-wrap mb-14 sm:mb-12 lg:mb-16">
      <AllWordsBanner />
      <MemoBanner />
    </section>
  );
}
