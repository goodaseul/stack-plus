import InfoPage from "./_components/info/Info";
import BannerPage from "./_components/banner/Banner";
import { FeaturePage } from "./_components/feature/Feature";

export default function LandingPage() {
  return (
    <>
      <InfoPage />
      <FeaturePage />
      <BannerPage />
    </>
  );
}
