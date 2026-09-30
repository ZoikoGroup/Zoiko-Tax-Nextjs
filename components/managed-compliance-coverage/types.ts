export type GovernedState =
  | "Research"
  | "Validation"
  | "Pilot"
  | "Production"
  | "Managed"
  | "Suspended"
  | "Withdrawn"
  | "Status unavailable";

export interface SpecimenRecord {
  id: string;
  market: string;
  qualifier: string;
  capability: string;
  underlyingState: string;
  operationalState: string;
  publicState: string;
  currentness: "Current" | "Stale source" | "Source unavailable" | "Conflicting records";
  scopeLabel: string;
  scopeText: string;
  packLink: string;
  statusLink: string;
  explanation: string;
}

export const SPECIMEN_RECORDS: SpecimenRecord[] = [
  {
    id: "specimen-a",
    market: "Specimen Market A",
    qualifier: "Synthetic jurisdiction record",
    capability: "Managed Compliance",
    underlyingState: "Production",
    operationalState: "Managed",
    publicState: "Managed",
    currentness: "Current",
    scopeLabel: "Approved scope / qualifier",
    scopeText: "Controlled specimen scope A — illustrative label only.",
    packLink: "/coverage/packs",
    statusLink: "/status-and-releases",
    explanation: "Underlying capability and approved operations are shown as ready for controlled specimen scope A only.",
  },
  {
    id: "specimen-b",
    market: "Specimen Jurisdiction B",
    qualifier: "Synthetic jurisdiction record",
    capability: "Managed Compliance",
    underlyingState: "Production",
    operationalState: "Validation",
    publicState: "Production only",
    currentness: "Current",
    scopeLabel: "Approved scope / qualifier",
    scopeText: "No managed scope is published; omitted rather than inferred.",
    packLink: "/coverage/packs",
    statusLink: "/status-and-releases",
    explanation: "Underlying software capability is in Production, but operational readiness remains in Validation. Managed operations are not available.",
  },
  {
    id: "specimen-c",
    market: "Specimen Market C",
    qualifier: "Synthetic jurisdiction record",
    capability: "Managed Compliance",
    underlyingState: "Unavailable",
    operationalState: "Unavailable",
    publicState: "Status unavailable",
    currentness: "Source unavailable",
    scopeLabel: "Approved scope / qualifier",
    scopeText: "Scope unavailable. No support conclusion may be drawn.",
    packLink: "/coverage/packs",
    statusLink: "/status-and-releases",
    explanation: "Current governed truth cannot be reliably presented. No positive or negative readiness claim is published.",
  },
];
