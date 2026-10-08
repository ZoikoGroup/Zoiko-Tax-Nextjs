import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  SurfaceSection,
  EventContractsSection,
  ContractAnatomySection,
  SubscriptionSection,
  VerificationSection,
  DeliverySection,
  EnvelopeSection,
  ObservabilitySection,
  ReadingAidSection,
  RelatedDocsSection,
  JourneysSection,
  FAQSection,
  CtaSection,
} from "@/components/webhooks-events";

export const metadata: Metadata = {
  title: "Webhooks & Events | Developers | ZoikoTax",
  description:
    "Integrate with ZoikoTax through governed events and webhook contracts. Understand notification contracts, verification, delivery semantics and change boundaries.",
};

export default function WebhooksEventsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <SurfaceSection />
      <EventContractsSection />
      <ContractAnatomySection />
      <SubscriptionSection />
      <VerificationSection />
      <DeliverySection />
      <EnvelopeSection />
      <ObservabilitySection />
      <ReadingAidSection />
      <RelatedDocsSection />
      <JourneysSection />
      <FAQSection />
      <CtaSection />
    </div>
  );
}
