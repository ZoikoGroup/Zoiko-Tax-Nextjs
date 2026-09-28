import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

/** Lavender section with only a header block. Used by Direct Answer and Governed AI. */
export default function TextSection({ data }: { data: { eyebrow: string; title: string; description: string } }) {
  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader eyebrow={data.eyebrow} title={data.title} description={data.description} />
      </Reveal>
    </SectionContainer>
  );
}
