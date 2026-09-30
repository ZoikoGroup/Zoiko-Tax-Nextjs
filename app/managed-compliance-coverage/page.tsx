import type { Metadata } from "next";
import { ManagedComplianceCoverageContent } from "@/components/managed-compliance-coverage";

export const metadata: Metadata = {
  title: "Managed Compliance Coverage | Telecom Fiscal Compliance Platform | ZoikoTax",
  description:
    "Check current ZoikoTax Managed Compliance readiness by market and scope. Managed Compliance is available only where the required underlying capability is production-ready and approved operations are ready for the stated scope.",
};

export default function ManagedComplianceCoveragePage() {
  return <ManagedComplianceCoverageContent />;
}
