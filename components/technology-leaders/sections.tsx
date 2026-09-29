import React from "react";
import CardGridSection from "./CardGridSection";
import {
  BOUNDARIES_DATA,
  CHANGE_DATA,
  DEPLOYMENTS_DATA,
  EXCEPTIONS_DATA,
  HANDOFFS_DATA,
  IMAGES,
  ISOLATION_DATA,
  LIFECYCLE_DATA,
  MIGRATION_DATA,
  OPERATING_MODELS_DATA,
  PLATFORM_FIT_DATA,
  PRINCIPLES_DATA,
  RESIDENCY_DATA,
  RESILIENCE_DATA,
  ROLES_DATA,
  SHADOW_DATA,
} from "./tech-data";

/*
 * Card-row sections. They share one layout and differ only in data, surface
 * and grid configuration.
 */

const FOUR_UP = "sm:grid-cols-2 lg:grid-cols-4";
const THREE_UP = "md:grid-cols-2 lg:grid-cols-3";

export const PrinciplesSection = () => (
  <CardGridSection data={PRINCIPLES_DATA} className="bg-white" bgImage={IMAGES.principles} gridClassName={FOUR_UP} compact />
);

export const LifecycleSection = () => (
  <CardGridSection data={LIFECYCLE_DATA} className="bg-[#F8F3FE]" gridClassName="lg:grid-cols-3" transparent />
);

export const BoundariesSection = () => (
  <CardGridSection data={BOUNDARIES_DATA} className="bg-white" bgImage={IMAGES.boundaries} gridClassName={THREE_UP} compact />
);

export const PlatformFitSection = () => (
  <CardGridSection data={PLATFORM_FIT_DATA} className="bg-[#F8F3FE]" gridClassName="lg:grid-cols-3" />
);

export const IsolationSection = () => (
  <CardGridSection data={ISOLATION_DATA} className="bg-white" bgImage={IMAGES.isolation} gridClassName="lg:grid-cols-3" compact />
);

export const ResidencySection = () => (
  <CardGridSection
    data={RESIDENCY_DATA}
    className="bg-[#F8F3FE]"
    gridClassName="md:grid-cols-2 md:gap-x-6 md:gap-y-5"
    accentTitle
    compact
  />
);

export const DeploymentsSection = () => (
  <CardGridSection data={DEPLOYMENTS_DATA} className="bg-white" bgImage={IMAGES.deployments} gridClassName="lg:grid-cols-3" compact />
);

export const HandoffsSection = () => (
  <CardGridSection data={HANDOFFS_DATA} className="bg-[#1D033B]" bgImage={IMAGES.procurement} gridClassName={THREE_UP} dark compact />
);

export const ResilienceSection = () => (
  <CardGridSection data={RESILIENCE_DATA} className="bg-white" bgImage={IMAGES.resilience} gridClassName="lg:grid-cols-3" compact />
);

export const ChangeSection = () => (
  <CardGridSection data={CHANGE_DATA} className="bg-white" bgImage={IMAGES.change} gridClassName="lg:grid-cols-3" compact />
);

export const MigrationSection = () => (
  <CardGridSection
    data={MIGRATION_DATA}
    className="bg-white"
    bgImage={IMAGES.migration}
    gridClassName="sm:grid-cols-2 lg:grid-cols-5 lg:gap-3"
    compact
  />
);

export const ShadowSection = () => (
  <CardGridSection
    data={SHADOW_DATA}
    className="bg-[#1D033B]"
    bgImage={IMAGES.shadow}
    gridClassName={FOUR_UP}
    note={SHADOW_DATA.note}
    dark
    compact
  />
);

export const OperatingModelsSection = () => (
  <CardGridSection data={OPERATING_MODELS_DATA} className="bg-[#F8F3FE]" gridClassName="lg:grid-cols-3" transparent compact />
);

export const RolesSection = () => (
  <CardGridSection data={ROLES_DATA} className="bg-white" bgImage={IMAGES.roles} gridClassName={FOUR_UP} compact />
);

export const ExceptionsSection = () => (
  <CardGridSection
    data={EXCEPTIONS_DATA}
    className="bg-[#1D033B]"
    bgImage={IMAGES.exceptions}
    gridClassName="lg:grid-cols-3"
    dark
    accentTitle
    compact
  />
);
