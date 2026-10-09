import type { Metadata } from "next";
import {
  HeroSection,
  ArchiveSection,
  TaxonomySection,
  PublicationAnatomySection,
  PublishingControlsSection,
  RecordIntegritySection,
  MediaProfessionalsSection,
  DirectAnswersSection,
  ExploreContextSection,
  FinalCtaSection,
} from "@/components/newsroom";

export const metadata: Metadata = {
  title: "Newsroom | ZoikoTax",
  description:
    "Official ZoikoTax announcements. Approved corporate announcements, with clear publication dates and canonical sources for the deeper detail.",
};

export default function NewsroomPage() {
  return (
    <div className="w-full bg-[#FAF3FF] overflow-x-clip">
      <HeroSection />
      <ArchiveSection />
      <TaxonomySection />
      <PublicationAnatomySection />
      <PublishingControlsSection />
      <RecordIntegritySection />
      <MediaProfessionalsSection />
      <DirectAnswersSection />
      <ExploreContextSection />
      <FinalCtaSection />
    </div>
  );
}

