import type { Metadata } from "next";
import {
  DocumentationHero,
  DocumentationWhatIs,
  DocumentationQuickPaths,
  DocumentationBrowseTopics,
  DocumentationRecentlyUpdated,
  DocumentationSpecialistSources,
  DocumentationFAQ,
} from "@/components/documentation";

export const metadata: Metadata = {
  title: "Documentation | ZoikoTax",
  description:
    "Find the right ZoikoTax documentation — with scope and next step clear. Browse source-governed product and implementation documentation, then move to specialist sources when they own the answer.",
};

export default function DocumentationPage() {
  return (
    <div className="w-full bg-white overflow-x-clip">
      <DocumentationHero />
      <DocumentationWhatIs />
      <DocumentationQuickPaths />
      <DocumentationBrowseTopics />
      <DocumentationRecentlyUpdated />
      <DocumentationSpecialistSources />
      <DocumentationFAQ />
    </div>
  );
}
