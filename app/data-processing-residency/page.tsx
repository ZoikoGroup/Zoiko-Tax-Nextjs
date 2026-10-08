
import HeroSection from "@/components/data-processing-residency/HeroSection";
import DirectAnswerSection from "@/components/data-processing-residency/DirectAnswerSection";
import DataDomainModelSection from "@/components/data-processing-residency/DataDomainModelSection";
import AvailabilityStateModelSection from "@/components/data-processing-residency/AvailabilityStateModelSection";
import CustomerConfigurationSection from "@/components/data-processing-residency/CustomerConfigurationSection";
import ProcessingLocationsSection from "@/components/data-processing-residency/ProcessingLocationsSection";
import StorageBackupReplicationSection from "@/components/data-processing-residency/StorageBackupReplicationSection";
import AccessBoundarySection from "@/components/data-processing-residency/AccessBoundarySection";
import ThirdPartyInterfacesSection from "@/components/data-processing-residency/ThirdPartyInterfacesSection";
import CrossBorderTransfersSection from "@/components/data-processing-residency/CrossBorderTransfersSection";
import SecurityInterfaceSection from "@/components/data-processing-residency/SecurityInterfaceSection";
import EvidenceProcurementSection from "@/components/data-processing-residency/EvidenceProcurementSection";
import CurrentnessChangeGovernanceSection from "@/components/data-processing-residency/CurrentnessChangeGovernanceSection";
import SafeReviewJourneysSection from "@/components/data-processing-residency/SafeReviewJourneysSection";
import FAQSection from "@/components/data-processing-residency/FAQSection";
import ContinueYourDiligenceSection from "@/components/data-processing-residency/ContinueYourDiligenceSection";

export default function DataProcessingResidencyPage() {
  return (
    <div className="w-full overflow-x-clip bg-[rgba(250,243,255,1)]">
      <main className="flex-1 w-full overflow-hidden">
        <HeroSection />
        <DirectAnswerSection />
        <DataDomainModelSection />
        <AvailabilityStateModelSection />
        <CustomerConfigurationSection />
        <ProcessingLocationsSection />
        <StorageBackupReplicationSection />
        <AccessBoundarySection />
        <ThirdPartyInterfacesSection />
        <CrossBorderTransfersSection />
        <SecurityInterfaceSection />
        <EvidenceProcurementSection />
        <CurrentnessChangeGovernanceSection />
        <SafeReviewJourneysSection />
        <FAQSection />
        <ContinueYourDiligenceSection />
      </main>
    </div>
  );
}
