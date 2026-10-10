import type { Metadata } from "next";
import { MediaKitContent } from "@/components/media-kit";

export const metadata: Metadata = {
  title: "Media Kit | Brand Assets & Guidance | ZoikoTax",
  description:
    "A governed public brand-asset and media-resource destination for journalists, analysts, event organizers, partners, agencies and internal communications teams.",
};

export default function MediaKitPage() {
  return <MediaKitContent />;
}
