import Image from "next/image";
import { Code2, GitCommit, HelpCircle, Info } from "lucide-react";

interface PersonaCard {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface StateCard {
  title: string;
  subtitle: string;
  description: string;
}

export default function GovernedJourneySection() {
  const personaCards: PersonaCard[] = [
    {
      title: "Integration engineer",
      description:
        "Find family / intent -> read problem & boundary -> inspect sequence & matrix -> resolve exact contract, Sandbox and Changelog -> check independent Coverage / Trust.",
      icon: Code2,
    },
    {
      title: "Enterprise architect",
      description:
        "Validate coexistence, Shadow and federated roles -> review safe failures -> establish authority and customer-specific scope before assessing availability.",
      icon: GitCommit,
    },
    {
      title: "When public detail is missing",
      description:
        "Keep the explanation conceptual or customer-specific. Use governed docs or controlled engagement; do not guess syntax, prerequisites or private topology.",
      icon: HelpCircle,
    },
  ];

  const stateCards: StateCard[] = [
    {
      title: "Loading",
      subtitle: "Loading approved guide metadata...",
      description:
        "Keep static guidance visible while approved registry metadata is loading.",
    },
    {
      title: "No matches / reset",
      subtitle: "No matching public guides. Clear filters.",
      description:
        "Do not invent a result. Offer a clear reset and the unfiltered public browse route.",
    },
    {
      title: "Registry unavailable",
      subtitle: "Registry unavailable. Read developer docs.",
      description:
        "Use authoritative static docs; do not imply a live catalog is available.",
    },
    {
      title: "Missing / controlled-unavailable guide",
      subtitle: "This guide is not publicly available.",
      description:
        "Explain the missing detail; no silent guide substitution or guessed child route.",
    },
    {
      title: "Unknown prerequisite",
      subtitle: "Prerequisite not verified. Confirm with owner.",
      description:
        "Keep the unresolved requirement explicit and route to the contract/source owner.",
    },
    {
      title: "Unknown version",
      subtitle: "Version not established in this view.",
      description:
        'Do not label an unknown contract "latest." Route to API Reference / Changelog.',
    },
    {
      title: "Diagram unavailable",
      subtitle: "Read the conceptual sequence in text.",
      description:
        "Show the complete numbered text equivalent beside the architecture context.",
    },
    {
      title: "Sandbox restricted",
      subtitle: "Non-production access is separately governed.",
      description:
        "Use docs or controlled engagement; never suggest a production bypass.",
    },
    {
      title: "Coverage unknown",
      subtitle: "Market support is not established by this guide.",
      description:
        "Leave scope unconfirmed and route to independently authoritative Coverage.",
    },
    {
      title: "No-JS / print reading",
      subtitle: "Read the guide, textual sequence and route list.",
      description:
        "Keep narrative, sequence and doc destinations in readable public text.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#FAF3FF] font-sans px-6 py-20 lg:px-12 text-[#1C1917]">
      {/* Background Image */}
      <Image
        src="/integration/2.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-top opacity-30"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            A GOVERNED IMPLEMENTATION JOURNEY
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            Move from context to contract—not from guess to code.
          </h1>
        </div>

        {/* Top 3 Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {personaCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="rounded-3xl bg-[#301153] p-8 text-white shadow-lg flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Icon className="h-5 w-5 text-[#D06236]" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-xs text-[#D6D3D1] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Sub-header */}
        <div className="flex flex-col gap-1 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-[#111111]">
            Safe states preserve the engineering answer.
          </h2>
          <p className="text-xs text-[#57534E]">
            Illustrative state patterns—not current service-health claims.
            Missing public information stays missing; the fallback names the
            next authoritative route.
          </p>
        </div>

        {/* 2x5 Grid of State Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {stateCards.map((card, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between gap-3"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-xs font-bold text-[#111111]">
                  {card.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#301153]">
                  {card.subtitle}
                </p>
              </div>
              <p className="text-xs text-[#57534E] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#F3EBF8] p-5 shadow-sm text-[#111111]">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">
              Public-safe publication and handling
            </p>
            <p className="mt-1 text-[#57534E] leading-relaxed">
              Technical and product/engineering owners govern publication; Trust
              and Coverage owners control their claims. AI may summarize
              approved material, not synthesize technical truth. Use only
              controlled public identifiers for navigation or analytics—never
              secrets, raw payloads, private topology, tax or subscriber
              information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
