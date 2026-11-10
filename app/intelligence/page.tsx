import type { Metadata } from "next";

import IntelligenceAssistant from "@/components/taxxon/IntelligenceAssistant";

export const metadata: Metadata = {
  title: "ZoikoTax Intelligence | Public Assistant | ZoikoTax",
  description:
    "Ask ZoikoTax Intelligence about telecom taxes, regulatory fees, e-invoicing and country coverage. General product information from published ZoikoTax sources.",
};

export default function IntelligencePage() {
  return <IntelligenceAssistant />;
}
