import type { Metadata } from "next";
import { ResourcesAboutContent } from "@/components/resources-about";

export const metadata: Metadata = {
  title: "About ZoikoTax | Telecom Fiscal Infrastructure | ZoikoTax",
  description:
    "Telecom fiscal control, built around accountability. ZoikoTax is telecom-specific fiscal infrastructure connecting facts, classification, jurisdiction, responsibility and determination with obligations, compliance, reconciliation and evidence.",
};

export default function ResourcesAboutPage() {
  return <ResourcesAboutContent />;
}
