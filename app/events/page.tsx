import type { Metadata } from "next";
import {
  HeroSection,
  EventFormatsSection,
  UpcomingEventsSection,
  EventDetailsSection,
  LiveRecordingsSection,
  SpeakersSection,
  AccessibilityLogisticsSection,
  EventsFAQSection,
  RelatedResourcesSection,
} from "@/components/events";

export const metadata: Metadata = {
  title: "Events | ZoikoTax",
  description:
    "Approved ZoikoTax webinars, conferences and workshops, with source-governed discovery, registration routing and currentness review.",
};

export default function EventsPage() {
  return (
    <div className="bg-white w-full overflow-x-clip">
      <HeroSection />
      <EventFormatsSection />
      <UpcomingEventsSection />
      <EventDetailsSection />
      <LiveRecordingsSection />
      <SpeakersSection />
      <AccessibilityLogisticsSection />
      <EventsFAQSection />
      <RelatedResourcesSection />
    </div>
  );
}
