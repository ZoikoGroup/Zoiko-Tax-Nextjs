import {
  Integration,
  IntegrationGuidesSection,
  GovernedGuideRegistry,
  BillingGuideDetail,
  HandoffArchitectureSection,
  AuthorityTableSection,
  FailureBehaviorSection,
  EvidenceTraceabilitySection,
  AnatomySection,
  NextRouteSection,
  GovernedJourneySection,
  FaqSection,
  NextEngineeringStepSection,
} from "@/components/intigration-guides";

export default function IntegrationGuidesPage() {
  return (
    <main>
      <Integration />
      <IntegrationGuidesSection />
      <GovernedGuideRegistry />
      <BillingGuideDetail />
      <HandoffArchitectureSection />
      <AuthorityTableSection />
      <FailureBehaviorSection />
      <EvidenceTraceabilitySection />
      <AnatomySection />
      <NextRouteSection />
      <GovernedJourneySection />
      <FaqSection />
      <NextEngineeringStepSection />
    </main>
  );
}
