// CTA destination registry (Doc 04 §11, Doc 03 §5 resolveApprovedCta). The
// model and the client never construct a URL: they hold a destination ID, and
// only an approved, HTTPS or first-party entry resolves to one.
//
// The candidate paths are this site's own pages. Doc 04 records every
// destination as "not supplied here", so each ships pending approval and is
// hidden in production until Commercial/Support/Legal record it as approved.

import { previewContentEnabled } from "./config";
import type { ApprovedCta, CtaDestinationId } from "./types";

interface CtaRecord {
  destination_id: CtaDestinationId;
  label: string;
  status: "unconfigured" | "pending_approval" | "approved" | "withdrawn";
  /** First-party path ("/...") or absolute HTTPS URL on an allowed host. */
  candidate_url: string | null;
  locale: "en-US";
  reviewer_id: string | null;
  approved_at: string | null;
  /** Doc 01 §4: the lead form notice is shown before it opens. */
  requires_review_notice: boolean;
}

const REGISTRY: Record<CtaDestinationId, CtaRecord> = {
  product_overview: { destination_id: "product_overview", label: "Explore the platform", status: "pending_approval", candidate_url: "/platform-overview", locale: "en-US", reviewer_id: null, approved_at: null, requires_review_notice: false },
  demo_request: { destination_id: "demo_request", label: "Request a demo", status: "pending_approval", candidate_url: "/sales-inquiry", locale: "en-US", reviewer_id: null, approved_at: null, requires_review_notice: true },
  developer_docs: { destination_id: "developer_docs", label: "Explore integration", status: "pending_approval", candidate_url: "/developer-overview", locale: "en-US", reviewer_id: null, approved_at: null, requires_review_notice: false },
  support: { destination_id: "support", label: "Go to customer support", status: "pending_approval", candidate_url: "/customer-support", locale: "en-US", reviewer_id: null, approved_at: null, requires_review_notice: false },
  privacy_notice: { destination_id: "privacy_notice", label: "Privacy notice", status: "pending_approval", candidate_url: "/privacy-data-protection", locale: "en-US", reviewer_id: null, approved_at: null, requires_review_notice: false },
};

/** Hosts an absolute CTA may point at. Empty: only first-party paths resolve. */
const ALLOWED_HOSTS: string[] = [];

function safeUrl(url: string): { url: string; external: boolean } | null {
  if (url.startsWith("/") && !url.startsWith("//")) return { url, external: false };
  try {
    const u = new URL(url);
    if (u.protocol !== "https:" || !ALLOWED_HOSTS.includes(u.hostname)) return null;
    return { url: u.toString(), external: true };
  } catch {
    return null;
  }
}

/** Resolve an ID to an approved destination, or nothing (never a dead link). */
export function resolveApprovedCta(id: CtaDestinationId): ApprovedCta | undefined {
  const rec = REGISTRY[id];
  if (!rec || rec.candidate_url === null) return undefined;
  const approved = rec.status === "approved" && rec.reviewer_id !== null && rec.approved_at !== null;
  const preview = previewContentEnabled() && rec.status === "pending_approval";
  if (!approved && !preview) return undefined;
  const safe = safeUrl(rec.candidate_url);
  if (!safe) return undefined;
  return {
    destination_id: rec.destination_id,
    label: rec.label,
    url: safe.url,
    requires_review_notice: rec.requires_review_notice,
    external: safe.external,
  };
}

export function utilityCtas(): ApprovedCta[] {
  return (["support", "privacy_notice"] as const)
    .map(resolveApprovedCta)
    .filter((c): c is ApprovedCta => c !== undefined);
}
