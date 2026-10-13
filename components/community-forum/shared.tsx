import Image from "next/image";
import type { ReactNode } from "react";

export const IMAGE_BASE = "/community-forum";

/** Routes for official sources referenced across the page. */
export const ROUTES = {
  documentation: "/documentation",
  support: "/customer-support",
  status: "/system-status",
  developers: "/developer-overview",
  disclosure: "/responsible-disclosure",
};

export const SENSITIVE_DATA_WARNING =
  "Do not post passwords, API keys, taxpayer/customer identifiers, personal financial information, filings, private account details, support-case data or vulnerability details.";

/** Governed topic registry: categories are fixed, not user-created. */
export const TOPICS = [
  {
    id: "integration-apis",
    title: "Integration & APIs",
    description: "Peer discussions on webhooks, authentication, and technical implementation.",
    count: 428,
  },
  {
    id: "workflow-configurations",
    title: "Workflow Configurations",
    description: "How peers handle specific reporting and data ingestion setups.",
    count: 315,
  },
  {
    id: "general-product-use",
    title: "General Product Use",
    description: "Dashboard navigation, reporting exports, and user management.",
    count: 892,
  },
];

export function SectionShell({
  children,
  className = "",
  id,
  bgImage,
  narrow = false,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`relative w-full scroll-mt-20 overflow-hidden ${className}`}>
      {bgImage ? (
        <Image
          src={`${IMAGE_BASE}/${bgImage}`}
          alt=""
          aria-hidden="true"
          fill
          // Served as-is: re-compression washes out the faint pattern backgrounds.
          unoptimized
          sizes="100vw"
          // On white sections the image is a near-white pattern: double its line strength (white stays white).
          className={`object-cover object-center ${
            className.includes("bg-white") ? "[filter:invert(1)_brightness(2)_invert(1)]" : ""
          }`}
        />
      ) : null}
      <div
        className={`relative mx-auto w-full px-5 py-16 sm:px-8 lg:py-24 ${narrow ? "max-w-[896px]" : "max-w-[1280px]"}`}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <h2 className={`text-2xl font-bold leading-9 sm:text-3xl ${dark ? "text-white" : "text-indigo-950"}`}>{children}</h2>
  );
}
