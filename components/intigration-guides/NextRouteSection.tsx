import Image from "next/image";
import {
  Compass,
  Code,
  Boxes,
  Radio,
  ListFilter,
  FlaskConical,
  History,
  Globe,
  ShieldCheck,
  Calendar,
  ArrowUpRight,
  Info,
} from "lucide-react";

interface RouteCard {
  title: string;
  description: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function NextRouteSection() {
  const orientationCards: RouteCard[] = [
    {
      title: "Developer Overview",
      description:
        "Orient your implementation journey and find the governed documentation owner.",
      path: "/developers/",
      icon: Compass,
    },
    {
      title: "API Reference",
      description:
        "Find exact contracts, syntax, authorization requirements and error shapes.",
      path: "/developers/api/",
      icon: Code,
    },
    {
      title: "SDKs",
      description:
        "Use governed SDK documentation for exact package and implementation details.",
      path: "/developers/sdks/",
      icon: Boxes,
    },
    {
      title: "Webhooks & Events",
      description:
        "Confirm exact delivery, retry and ordering contracts; do not infer mechanics here.",
      path: "/developers/webhooks-events/",
      icon: Radio,
    },
    {
      title: "Bulk & Batch",
      description:
        "Resolve exact ingestion/export behavior and partial item outcomes.",
      path: "/developers/bulk-batch/",
      icon: ListFilter,
    },
    {
      title: "Sandbox",
      description:
        "Explore safe non-production testing. Access is separately governed, not entitlement proof.",
      path: "/developers/sandbox/",
      icon: FlaskConical,
    },
    {
      title: "API Changelog",
      description:
        "Review governed change/currentness context. No compatibility window is asserted here.",
      path: "/developers/changelog/",
      icon: History,
    },
  ];

  const independentCards: RouteCard[] = [
    {
      title: "Coverage",
      description:
        "Verify independently governed market and capability scope; guide existence does not prove support.",
      path: "/coverage/",
      icon: Globe,
    },
    {
      title: "Trust",
      description:
        "Find authoritative security/privacy evidence. A guide is not a certification.",
      path: "/trust/",
      icon: ShieldCheck,
    },
    {
      title: "Book a Demo",
      description:
        "Discuss customer-specific architecture, scope or entitlement through controlled engagement.",
      path: "/demo/",
      icon: Calendar,
    },
  ];

  return (
    <section className="relative isolate overflow-hidden font-sans px-6 py-20 lg:px-12 text-[#1C1917]">
      {/* Background Image */}
      <Image
        src="/integration/2.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-top opacity-100"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col gap-2 mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            CONTINUE WITH AUTHORITATIVE DOCUMENTATION
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-[40px] leading-tight">
            The next route depends on the question.
          </h1>
          <p className="text-sm font-normal text-[#57534E] max-w-4xl">
            Architecture guidance frames the problem. Exact developer docs,
            independent assurance sources and controlled engagement resolve the
            details.
          </p>
        </div>

        {/* Section 1: Orientation & exact implementation */}
        <div className="mb-12">
          <h2 className="text-xl font-bold tracking-tight text-[#111111] mb-6">
            Orientation &amp; exact implementation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {orientationCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between hover:border-[#D06236]/40 transition-colors"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[#111111]">
                      <Icon className="h-5 w-5 text-[#D06236]" />
                      <ArrowUpRight className="h-4 w-4 text-[#A8A29E]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#111111]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-mono font-semibold text-[#301153]">
                    {card.path}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Middle Banner */}
        <div className="flex items-start gap-3 rounded-2xl border border-[#E7E5E4] bg-[#F3EBF8] p-5 shadow-sm text-[#111111] mb-12">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">Family-specific integration context</p>
            <p className="mt-1 text-[#57534E] leading-relaxed">
              Follow a family route only where governed public metadata supplies
              it. No family-specific child route is asserted here; use Developer
              Overview or controlled engagement when public detail is missing.
            </p>
          </div>
        </div>

        {/* Section 2: Independent scope, assurance & customer-specific questions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold tracking-tight text-[#111111] mb-6">
            Independent scope, assurance &amp; customer-specific questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {independentCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E7E5E4] bg-white p-6 shadow-sm flex flex-col justify-between hover:border-[#D06236]/40 transition-colors"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between text-[#111111]">
                      <Icon className="h-5 w-5 text-[#D06236]" />
                      <ArrowUpRight className="h-4 w-4 text-[#A8A29E]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#111111]">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#57534E] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-[#F5F5F4] text-[11px] font-mono font-semibold text-[#301153]">
                    {card.path}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
