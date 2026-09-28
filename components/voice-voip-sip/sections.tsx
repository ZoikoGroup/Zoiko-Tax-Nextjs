import React from "react";
import CardGridSection, { pad } from "./CardGridSection";
import {
  ARCHITECTURE_DATA,
  COMPLEXITY_DATA,
  DETERMINATION_DATA,
  EVIDENCE_DATA,
  GEOGRAPHY_DATA,
  IMAGES,
  LIFECYCLE_DATA,
  OBLIGATIONS_DATA,
  RECONCILIATION_DATA,
  RESPONSIBILITY_DATA,
  SHADOW_DATA,
  TEAMS_DATA,
} from "./voice-data";

/*
 * Card-row sections. Each is the same header + grid shape, so they live
 * together here and differ only in data, surface and grid configuration.
 */

export function ComplexitySection() {
  return (
    <CardGridSection
      data={COMPLEXITY_DATA}
      className="bg-white"
      bgImage={IMAGES.complexity}
      gridClassName="md:grid-cols-2 lg:grid-cols-3"
      indexLabel={pad}
    />
  );
}

export function LifecycleSection() {
  return (
    <CardGridSection
      data={LIFECYCLE_DATA}
      className="bg-[#2E1A4F]"
      bgImage={IMAGES.lifecycle}
      dark
      variant="glass"
      gridClassName="sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-14"
      indexLabel={pad}
      compact
    />
  );
}

export function GeographySection() {
  return (
    <CardGridSection
      data={GEOGRAPHY_DATA}
      className="bg-[#F8F3FE]"
      gridClassName="sm:grid-cols-2 lg:grid-cols-4"
      indexLabel={(i) => `FACTOR ${pad(i)}`}
      compact
    />
  );
}

export function ResponsibilitySection() {
  return (
    <CardGridSection
      data={RESPONSIBILITY_DATA}
      className="bg-white"
      bgImage={IMAGES.responsibility}
      gridClassName="md:grid-cols-2 md:gap-6"
    />
  );
}

export function DeterminationSection() {
  return <CardGridSection data={DETERMINATION_DATA} className="bg-[#F8F3FE]" gridClassName="lg:grid-cols-3" />;
}

export function ObligationsSection() {
  return (
    <CardGridSection
      data={OBLIGATIONS_DATA}
      className="bg-white"
      bgImage={IMAGES.obligations}
      variant="shadow"
      gridClassName="lg:grid-cols-3 lg:gap-6"
    />
  );
}

export function ReconciliationSection() {
  return (
    <CardGridSection
      data={RECONCILIATION_DATA}
      className="bg-[#2A1A3D]"
      bgImage={IMAGES.reconciliation}
      dark
      variant="glass"
      gridClassName="lg:grid-cols-3"
    />
  );
}

export function EvidenceSection() {
  return (
    <CardGridSection data={EVIDENCE_DATA} className="bg-[#F8F3FE]" variant="shadow" gridClassName="lg:grid-cols-3" />
  );
}

export function ShadowSection() {
  return (
    <CardGridSection
      data={SHADOW_DATA}
      className="bg-[#18141B]"
      bgImage={IMAGES.shadow}
      dark
      variant="solid"
      gridClassName="lg:grid-cols-3"
    />
  );
}

export function ArchitectureSection() {
  return (
    <CardGridSection
      data={ARCHITECTURE_DATA}
      className="bg-white"
      bgImage={IMAGES.integrations}
      gridClassName="md:grid-cols-2 lg:grid-cols-3"
      indexLabel={(i) => `MODEL ${pad(i)}`}
    />
  );
}

export function TeamsSection() {
  return (
    <CardGridSection
      data={TEAMS_DATA}
      className="bg-[#F8F3FE]"
      variant="shadow"
      gridClassName="sm:grid-cols-2 lg:grid-cols-4"
    />
  );
}
