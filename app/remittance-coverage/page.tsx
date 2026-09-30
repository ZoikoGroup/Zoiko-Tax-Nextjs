import type { Metadata } from "next";
import { RemittanceCoverageContent } from "@/components/remittance-coverage";

export const metadata: Metadata = {
  title: "Remittance Coverage | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "Check current ZoikoTax Remittance readiness by market and capability scope. Availability is governed by current country/regulatory pack and Coverage state; global architecture does not mean universal live support.",
};

export default function RemittanceCoveragePage() {
  return <RemittanceCoverageContent />;
}
