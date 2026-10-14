import type { Metadata } from "next";
import {
  HeroSection,
  WhatIsSection,
  SupportNeedsSection,
  SearchSection,
  StartHereSection,
  FormSection,
  FAQSection,
  ClosingSection,
} from "@/components/customer-support";

export const metadata: Metadata = {
  title: "Customer Support | ZoikoTax",
  description:
    "Find approved product guidance, check current service status, and move to the appropriate support path when self-service information is not enough.",
};

export default function CustomerSupportPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <WhatIsSection />
      <SupportNeedsSection />
      <SearchSection />
      <StartHereSection />
      <FormSection />
      <FAQSection />
      <ClosingSection />
    </div>
  );
}
