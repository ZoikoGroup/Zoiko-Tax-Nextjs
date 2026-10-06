import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  DataDomainModelSection,
  ResidencyAvailabilitySection,
  CustomerConfigurationSection,
  ProcessingLocationsSection,
  StorageDimensionsSection,
  OperationalAccessSection,
  ThirdPartyInterfacesSection,
  CrossBorderTransfersSection,
  SecurityInterfaceSection,
  EvidenceProcurementSection,
} from "@/components/data-processing-residency";

export const metadata: Metadata = {
  title: "Data Processing & Residency | Trust Center | ZoikoTax",
  description: "Review approved ZoikoTax deployment, processing-location and residency controls without assuming every service, capability or customer has the same regional options.",
};

export default function DataProcessingResidencyPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <DirectAnswerSection />
      <DataDomainModelSection />
      <ResidencyAvailabilitySection />
      <CustomerConfigurationSection />
      <ProcessingLocationsSection />
      <StorageDimensionsSection />
      <OperationalAccessSection />
      <ThirdPartyInterfacesSection />
      <CrossBorderTransfersSection />
      <SecurityInterfaceSection />
      <EvidenceProcurementSection />
    </div>
  );
}
