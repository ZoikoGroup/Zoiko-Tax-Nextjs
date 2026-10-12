"use client";

import React from "react";
import MediaKitIntroSection from "./MediaKitIntroSection";
import BrandOverviewSection from "./BrandOverviewSection";
import AssetFinderSection from "./AssetFinderSection";
import LogoLibrarySection from "./LogoLibrarySection";
import IconSymbolLibrarySection from "./IconSymbolLibrarySection";
import ColorGuidanceSection from "./ColorGuidanceSection";
import TypographyGuidanceSection from "./TypographyGuidanceSection";
import PhotographyMediaSection from "./PhotographyMediaSection";
import BoilerplateDescriptionsSection from "./BoilerplateDescriptionsSection";
import PressPackSection from "./PressPackSection";
import UsagePrinciplesSection from "./UsagePrinciplesSection";
import RightsPermissionsSection from "./RightsPermissionsSection";
import VersionDeprecationSection from "./VersionDeprecationSection";
import AssetDetailSection from "./AssetDetailSection";
import MediaKitFaqSection from "./MediaKitFaqSection";
import RelatedResourcesSection from "./RelatedResourcesSection";

export function MediaKitContent() {
  return (
    <main className="w-full min-h-screen bg-[#FAF3FF]">
      {/* 1. Media Kit Introduction / Hero */}
      <MediaKitIntroSection />

      {/* 2. Brand Overview */}
      <BrandOverviewSection />

      {/* 3. Asset Finder */}
      <AssetFinderSection />

      {/* 4. Logo Library */}
      <LogoLibrarySection />

      {/* 5. Icon / Symbol Library */}
      <IconSymbolLibrarySection />

      {/* 6. Color Guidance */}
      <ColorGuidanceSection />

      {/* 7. Typography Guidance */}
      <TypographyGuidanceSection />

      {/* 8. Photography & Media */}
      <PhotographyMediaSection />

      {/* 9. Boilerplate & Descriptions */}
      <BoilerplateDescriptionsSection />

      {/* 10. Press Pack */}
      <PressPackSection />

      {/* 11. Usage Principles */}
      <UsagePrinciplesSection />

      {/* 12. Rights & Permissions */}
      <RightsPermissionsSection />

      {/* 13. Version & Deprecation Guidance */}
      <VersionDeprecationSection />

      {/* 14. Asset Detail */}
      <AssetDetailSection />

      {/* 15. Media Kit FAQ */}
      <MediaKitFaqSection />

      {/* 16. Related Resources */}
      <RelatedResourcesSection />
    </main>
  );
}

export default MediaKitContent;
