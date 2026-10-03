import { Container, SectionHeader } from "./shared";

const priorityOne = [
  {
    eyebrow: "P1 · IMPLEMENTATION",
    title: "Integration Guides ↗",
    desc: "Start with the approved integration model.",
    path: "/developers/integration-guides/",
  },
  {
    eyebrow: "P1 · TECHNICAL CONTRACT",
    title: "API Reference ↗",
    desc: "Verify exact API and identity semantics.",
    path: "/developers/api/",
  },
  {
    eyebrow: "P1 · TEST AVAILABILITY",
    title: "Sandbox ↗",
    desc: "Confirm the separately supported test scope.",
    path: "/developers/sandbox/",
  },
];

const priorityTwo = [
  {
    eyebrow: "P2 · CAPABILITY READINESS",
    title: "Coverage ↗",
    desc: "Review capability-specific readiness.",
    path: "/coverage/",
  },
  {
    eyebrow: "P2 · SECURITY SOURCES",
    title: "Trust ↗",
    desc: "Confirm approved security and privacy boundaries.",
    path: "/trust/",
  },
  {
    eyebrow: "P2 · ACCOUNTABILITY",
    title: "Evidence & Replay ↗",
    desc: "Understand the source-backed evidence context.",
    path: "/platform/evidence-replay/",
  },
];

function RouteCard({
  eyebrow,
  title,
  desc,
  path,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  path: string;
}) {
  return (
    <div className="self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4">
      <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
        {eyebrow}
      </span>
      <div className="self-stretch text-zinc-900 text-2xl font-normal font-['Inter',sans-serif]">
        {title}
      </div>
      <div className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
        {desc}
      </div>
      <div className="self-stretch text-violet-950 text-xs font-normal leading-5 font-['Inter',sans-serif]">
        {path}
      </div>
    </div>
  );
}

export default function NextStepsSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="15 / NEXT STEPS"
          title="Start with the sources that govern your integration."
          description="Technical diligence first. Review evidence and readiness next; commercial qualification remains a separate conversation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {priorityOne.map((card) => (
            <RouteCard key={card.eyebrow} {...card} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {priorityTwo.map((card) => (
            <RouteCard key={card.eyebrow} {...card} />
          ))}
        </div>

        <div className="self-stretch p-6 bg-violet-100 rounded-2xl flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-8">
          <p className="flex-1 text-stone-500 text-sm font-normal leading-6 font-['Inter',sans-serif]">
            Developer Overview · /developers/
          </p>
          <p className="flex-1 text-stone-500 text-sm font-normal leading-6 font-['Inter',sans-serif]">
            Webhooks & Events · /developers/webhooks-events/
          </p>
          <p className="flex-1 text-stone-500 text-sm font-normal leading-6 font-['Inter',sans-serif]">
            P3 · Book a Demo · /demo/
          </p>
        </div>
      </Container>
    </section>
  );
}
