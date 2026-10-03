import type { Metadata } from "next";
import {
  HeroSection,
  DirectAnswerSection,
  OperatingModelSection,
  PartnerProvisioningSection,
  OrganizationIdentitySection,
  CapabilityGatesSection,
  EmbeddedExperienceSection,
  BrandCommercialSection,
  UsageAttributionSection,
  LifecycleSection,
  SupportSection,
  EvidenceSection,
  SecuritySection,
  SandboxSection,
  JourneySection,
  FaqSection,
  NextStepsSection,
  ConversionSection,
} from "@/components/oem-embedded";

export const metadata: Metadata = {
  title: "OEM / Embedded | Partner Provisioning & Embedded Capabilities | ZoikoTax",
  description:
    "Embed governed ZoikoTax capabilities without losing tenant accountability. Use approved partner provisioning and embedded integration patterns with clear attribution, isolation and evidence.",
};

export default function OemEmbeddedPage() {
  return (
    <div className="w-full bg-purple-50 flex flex-col justify-start items-start overflow-x-clip">
      {/* Hero + architecture notice */}
      <HeroSection />

      {/* Direct Answer */}
      <DirectAnswerSection />

      {/* 01 · Operating Model */}
      <OperatingModelSection />

      {/* 02 · Partner Provisioning */}
      <PartnerProvisioningSection />

      {/* 03 · Organization Identity */}
      <OrganizationIdentitySection />

      {/* 04 · Capability Gates */}
      <CapabilityGatesSection />

      {/* 05 · Embedded Experience */}
      <EmbeddedExperienceSection />

      {/* 06 · Brand & Commercial Authority */}
      <BrandCommercialSection />

      {/* 07 · Usage & Attribution */}
      <UsageAttributionSection />

      {/* 08 · Governed Lifecycle */}
      <LifecycleSection />

      {/* 09 · Support & Escalation */}
      <SupportSection />

      {/* 10 · Evidence & Accountability */}
      <EvidenceSection />

      {/* 11 · Security & Privacy */}
      <SecuritySection />

      {/* 12 · Sandbox & Readiness */}
      <SandboxSection />

      {/* 13 · Implementation Journey */}
      <JourneySection />

      {/* 14 · FAQ */}
      <FaqSection />

      {/* 15 · Next Steps */}
      <NextStepsSection />

      {/* Conversion CTA */}
      <ConversionSection />
    </div>
  );
}
