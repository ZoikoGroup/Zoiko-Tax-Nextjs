import React from "react";
import { SectionContainer, SectionHeader, GlassCardGrid, Button, Reveal } from "./shared";
import { IMAGES, INTEGRATIONS_DATA } from "./mvne-mvna-data";

export default function IntegrationsSection() {
  return (
    <SectionContainer className="bg-[#1D033B]" bgImage={IMAGES.integrations}>
      <Reveal>
        <SectionHeader eyebrow={INTEGRATIONS_DATA.eyebrow} title={INTEGRATIONS_DATA.title} dark />
      </Reveal>
      <GlassCardGrid cards={INTEGRATIONS_DATA.cards} bordered className="mt-8 sm:mt-10" />
      <Reveal delay={0.1}>
        <div className="mt-10 flex justify-center">
          <Button action={INTEGRATIONS_DATA.action} className="w-full sm:w-auto" />
        </div>
      </Reveal>
    </SectionContainer>
  );
}
