import CTASection from "../layout/cta-section";
import HeroSection from "./hero-section";
import MetodeSection from "./metode-section";
import PartnerSection from "./partner-section";
import ServiceSection from "./service-section";
import WorkSection from "./work-section";

export default function HomeView() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <PartnerSection />
      <ServiceSection />
      <WorkSection />
      <MetodeSection />
      <CTASection />
    </div>
  );
}
