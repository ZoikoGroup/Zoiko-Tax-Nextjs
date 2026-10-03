import Image from "next/image";
import { Container, Notice } from "./shared";

const concerns = [
  {
    icon: "/existing-tax-engines/shield.svg",
    title: "Production disruption",
    body: "Evaluate without affecting production outcomes where the approved pattern supports non-impacting comparison.",
  },
  {
    icon: "/existing-tax-engines/workflow.svg",
    title: "Mapping gaps",
    body: "Inspect source translation and unmapped facts before a production authority change is considered.",
  },
  {
    icon: "/existing-tax-engines/globe.svg",
    title: "Coverage uncertainty",
    body: "Verify the exact scope and capability needed. Coexistence does not establish production Coverage.",
  },
  {
    icon: "/existing-tax-engines/users.svg",
    title: "Operational ownership",
    body: "Identify who owns comparison, discrepancy review, monitoring, support and the readiness decision.",
  },
  {
    icon: "/existing-tax-engines/files.svg",
    title: "Auditability",
    body: "Retain the source, mapping, rule and resolution context that explains each observed comparison.",
  },
  {
    icon: "/existing-tax-engines/corner-up-left.svg",
    title: "Recovery planning",
    body: "Define approved recovery intent and authority with operations—not an assumed automatic reversal.",
  },
];

export default function WhyCoexistenceSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/existing-tax-engines/Why coexistence before cutover.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            01 · WHY COEXISTENCE BEFORE CUTOVER
          </div>
          <h2 className="w-full max-w-[1200px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight lg:whitespace-nowrap">
            Understand the change before changing authority.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            <span className="lg:whitespace-nowrap">Enterprise migration is a controlled evaluation path, not a replace-now narrative. Start with the concerns your operating model must</span>
            <br className="hidden lg:inline" />
            <span>answer.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {concerns.map((item) => (
            <div
              key={item.title}
              className="p-6 sm:p-7 bg-white rounded-2xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-3.5 hover:shadow-sm transition-shadow"
            >
              <Image
                src={item.icon}
                alt=""
                width={24}
                height={24}
                className="size-6 text-[#D65A2C]"
              />
              <div className="self-stretch text-[#18141B] text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {item.title}
              </div>
              <div className="self-stretch text-[#665F69] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {item.body}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title="Coexistence is an outcome, not just a waiting room."
          body="Retaining the incumbent or extending coexistence can be valid evaluation outcomes. Any next stage depends on approved sources, evidence and accountable owners."
        />
      </Container>
    </section>
  );
}
