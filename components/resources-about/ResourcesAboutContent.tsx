"use client";

import React from "react";
import HeroSection from "./HeroSection";
import ProblemContextSection from "./ProblemContextSection";
import ProductBoundariesSection from "./ProductBoundariesSection";
import FiscalOperatingModelSection from "./FiscalOperatingModelSection";
import PlatformEcosystemSection from "./PlatformEcosystemSection";
import IntegrationCoexistenceSection from "./IntegrationCoexistenceSection";
import OperatingPrinciplesSection from "./OperatingPrinciplesSection";
import AiAuthoritySection from "./AiAuthoritySection";
import EvidenceSection from "./EvidenceSection";
import CompanyContextSection from "./CompanyContextSection";
import VerificationPathsSection from "./VerificationPathsSection";
import DirectAnswerSection from "./DirectAnswerSection";
import EvaluationNextStepsSection from "./EvaluationNextStepsSection";

export function ResourcesAboutContent() {
  return (
    <main className="w-full min-h-screen bg-[#FAF3FF]">
      {/* 1. Header and introduction / Hero */}
      <HeroSection />

      {/* 2. Problem context */}
      <ProblemContextSection />

      {/* 3. Product definition and boundaries */}
      <ProductBoundariesSection />

      {/* 4. Fiscal operating model */}
      <FiscalOperatingModelSection />

      {/* 5. Platform ecosystem */}
      <PlatformEcosystemSection />

      {/* 6. Integration and coexistence */}
      <IntegrationCoexistenceSection />

      {/* 7. Operating principles */}
      <OperatingPrinciplesSection />

      {/* 8. AI and decision authority */}
      <AiAuthoritySection />

      {/* 9. Evidence replay and accountability */}
      <EvidenceSection />

      {/* 10. Company context */}
      <CompanyContextSection />

      {/* 11. Verification paths */}
      <VerificationPathsSection />

      {/* 12. Direct answer FAQs */}
      <DirectAnswerSection />

      {/* 13. Evaluation and next steps */}
      <EvaluationNextStepsSection />
    </main>
  );
}

export default ResourcesAboutContent;
