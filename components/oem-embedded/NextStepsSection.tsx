import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared";

const priorityOne = [
  {
    href: "/integration-guides",
    eyebrow: "P1 · IMPLEMENTATION",
    title: "Integration Guides",
    desc: "Start with the approved integration model.",
    path: "/developers/integration-guides/",
  },
  {
    href: "/sdks",
    eyebrow: "P1 · TECHNICAL CONTRACT",
    title: "API Reference",
    desc: "Verify exact API and identity semantics.",
    path: "/developers/api/",
  },
  {
    href: "/sandbox",
    eyebrow: "P1 · TEST AVAILABILITY",
    title: "Sandbox",
    desc: "Confirm the separately supported test scope.",
    path: "/developers/sandbox/",
  },
];

const priorityTwo = [
  {
    href: "/coverage-overview",
    eyebrow: "P2 · CAPABILITY READINESS",
    title: "Coverage",
    desc: "Review capability-specific readiness.",
    path: "/coverage/",
  },
  {
    href: "/about-us",
    eyebrow: "P2 · SECURITY SOURCES",
    title: "Trust",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Confirm approved security and privacy</span>
        <span className="block xl:whitespace-nowrap">boundaries.</span>
      </>
    ),
    path: "/trust/",
  },
  {
    href: "/evidence-auditability",
    eyebrow: "P2 · ACCOUNTABILITY",
    title: "Evidence & Replay",
    desc: (
      <>
        <span className="block xl:whitespace-nowrap">Understand the source-backed evidence</span>
        <span className="block xl:whitespace-nowrap">context.</span>
      </>
    ),
    path: "/platform/evidence-replay/",
  },
];

function RouteCard({
  href,
  eyebrow,
  title,
  desc,
  path,
}: {
  href: string;
  eyebrow: string;
  title: string;
  desc: React.ReactNode;
  path: string;
}) {
  return (
    <Link
      href={href}
      className="self-stretch p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-4 hover:shadow-md transition-all cursor-pointer"
    >
      <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
        {eyebrow}
      </span>
      <div className="self-stretch text-[rgba(24,20,27,1)] text-2xl font-normal font-['Inter',sans-serif] flex items-center gap-1.5">
        <span>{title}</span>
        <span className="text-lg leading-none select-none text-[rgba(24,20,27,1)]">↗</span>
      </div>
      <div className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
        {desc}
      </div>
      <div className="self-stretch text-[rgba(48,17,83,1)] text-xs font-normal leading-5 font-['Inter',sans-serif] mt-auto pt-2">
        {path}
      </div>
    </Link>
  );
}

export default function NextStepsSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-white overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-50">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            15 / NEXT STEPS
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Start with the sources that govern your integration.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Technical diligence first. Review evidence and readiness next; commercial qualification remains a separate conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityOne.map((card) => (
            <RouteCard key={card.eyebrow} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {priorityTwo.map((card) => (
            <RouteCard key={card.eyebrow} {...card} />
          ))}
        </div>

        <div className="self-stretch p-6 bg-[rgba(238,229,245,1)] rounded-3xl flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-8">
          <p className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
            Developer Overview · /developers/
          </p>
          <p className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
            Webhooks & Events · /developers/webhooks-events/
          </p>
          <p className="flex-1 text-[rgba(102,95,105,1)] text-sm font-normal leading-6 font-['Inter',sans-serif]">
            P3 · Book a Demo · /demo/
          </p>
        </div>
      </Container>
    </section>
  );
}
