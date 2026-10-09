import type { Metadata } from "next";
import {
  HeroSection,
  IntentSection,
  DedicatedDestinationsSection,
  DataRestraintSection,
  UnavailableRouteSection,
  DirectAnswersSection,
  ExploreNextSection,
  FinalCtaSection,
} from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | Resources | ZoikoTax",
  description:
    "Reach the right ZoikoTax team. Different needs call for different channels. Start with your reason, then follow the approved route for that purpose.",
};

export default function ContactPage() {
  return (
    <div className="w-full bg-[#FAF3FF] overflow-x-clip">
      <HeroSection />
      <IntentSection />
      <DedicatedDestinationsSection />
      <DataRestraintSection />
      <UnavailableRouteSection />
      <DirectAnswersSection />
      <ExploreNextSection />
      <FinalCtaSection />
    </div>
  );
}
