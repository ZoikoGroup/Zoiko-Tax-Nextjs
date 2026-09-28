import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import type { TextBlock } from "./ucaas-data";

/**
 * Header-only section. Shared by Direct Answer, Classification, Jurisdiction,
 * Determination and Reconciliation, which differ only in copy and surface.
 */
export default function TextSection({
  data,
  className,
  bgImage,
}: {
  data: TextBlock;
  className: string;
  bgImage?: string;
}) {
  return (
    <SectionContainer className={`border-b border-[#D8CEDD] ${className}`} bgImage={bgImage}>
      <Reveal>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      </Reveal>
    </SectionContainer>
  );
}
