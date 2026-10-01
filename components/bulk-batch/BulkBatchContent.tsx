"use client";

import React from "react";
import HeroSection from "./HeroSection";
import DirectAnswerSection from "./DirectAnswerSection";
import IntegrationFitSection from "./IntegrationFitSection";
import PatternFinderSection from "./PatternFinderSection";
import PatternDetailSection from "./PatternDetailSection";
import JobCreationModelSection from "./JobCreationModelSection";
import ValidationProcessingSection from "./ValidationProcessingSection";
import JobStateRecoverySection from "./JobStateRecoverySection";
import ArchitectureSection from "./ArchitectureSection";
import IdempotencySection from "./IdempotencySection";
import TroubleshootingSection from "./TroubleshootingSection";
import SpecimenSection from "./SpecimenSection";
import RelatedRoutesSection from "./RelatedRoutesSection";
import SafeStatesSection from "./SafeStatesSection";
import FAQSection from "./FAQSection";
import ConversionBandSection from "./ConversionBandSection";

export default function BulkBatchContent() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <DirectAnswerSection />
      <IntegrationFitSection />
      <PatternFinderSection />
      <PatternDetailSection />
      <JobCreationModelSection />
      <ValidationProcessingSection />
      <JobStateRecoverySection />
      <ArchitectureSection />
      <IdempotencySection />
      <TroubleshootingSection />
      <SpecimenSection />
      <RelatedRoutesSection />
      <SafeStatesSection />
      <FAQSection />
      <ConversionBandSection />
    </div>
  );
}
