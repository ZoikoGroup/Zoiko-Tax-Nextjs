import type { Metadata } from "next";
import {
  HeroSection,
  StatementSection,
  ConformanceScopeSection,
  KeyboardSection,
  FormsSection,
  VisualClaritySection,
  AssistiveTechSection,
  ZoomReflowSection,
  DocumentsSection,
  LimitationsSection,
  ReportingSection,
  TestingEvidenceSection,
  CurrentnessSection,
  StatesSection,
  FAQSection,
  NextStepsSection,
} from "@/components/accessibility";

export const metadata: Metadata = {
  title: "Accessibility | ZoikoTax Trust",
  description:
    "Start with the statement, check its scope, and understand limitations and the evidence behind each ZoikoTax accessibility claim.",
};

export default function AccessibilityPage() {
  return (
    <div className="w-full overflow-x-clip bg-purple-50">
      <HeroSection />
      <StatementSection />
      <ConformanceScopeSection />
      <KeyboardSection />
      <FormsSection />
      <VisualClaritySection />
      <AssistiveTechSection />
      <ZoomReflowSection />
      <DocumentsSection />
      <LimitationsSection />
      <ReportingSection />
      <TestingEvidenceSection />
      <CurrentnessSection />
      <StatesSection />
      <FAQSection />
      <NextStepsSection />
    </div>
  );
}
