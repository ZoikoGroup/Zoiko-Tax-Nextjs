import type { Metadata } from "next";
import {
  HeroSection,
  ResourcesSection,
  HelpFormSection,
  FAQSection,
} from "@/components/technical-support";

export const metadata: Metadata = {
  title: "Technical Support | Offices & Connect | ZoikoTax",
  description:
    "Diagnose ZoikoTax implementation and integration issues using approved technical resources, then use the support path available to your organization when additional help is needed.",
};

export default function TechnicalSupportPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <ResourcesSection />
      <HelpFormSection />
      <FAQSection />
    </div>
  );
}
