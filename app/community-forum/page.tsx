import type { Metadata } from "next";
import {
  HeroSection,
  NoticesSection,
  TopicsSection,
  DiscussionsSection,
  AskSection,
  FAQSection,
} from "@/components/community-forum";

export const metadata: Metadata = {
  title: "Community Forum | ZoikoTax",
  description:
    "Explore peer discussions about using ZoikoTax. Community contributions are not official ZoikoTax support, tax or legal advice.",
};

export default function CommunityForumPage() {
  return (
    <div className="w-full overflow-x-clip bg-white">
      <HeroSection />
      <NoticesSection />
      <TopicsSection />
      <DiscussionsSection />
      <AskSection />
      <FAQSection />
    </div>
  );
}
