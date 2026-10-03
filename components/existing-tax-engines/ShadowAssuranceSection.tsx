import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared";

const steps = [
  {
    title: "Ingest / mirror",
    body: "Receive only permitted source facts.",
  },
  {
    title: "Evaluate in Shadow",
    body: "Produce non-authoritative comparative output.",
  },
  {
    title: "Compare",
    body: "Use approved comparison dimensions.",
  },
  {
    title: "Investigate",
    body: "Trace source, mapping, rule and version context.",
  },
  {
    title: "Resolve through owners",
    body: "Use the governed resolution workflow.",
  },
  {
    title: "Readiness decision",
    body: "Review evidence; approval remains explicit.",
  },
];

export default function ShadowAssuranceSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden bg-[#120327]">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/2a8aa427c111a86ba1d2f93e973f57fe5c7a7d82.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.8)]" />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            03 · SHADOW ASSURANCE
          </div>
          <h2 className="w-full max-w-[1100px] text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight lg:whitespace-nowrap">
            Compare with confidence before you change production.
          </h2>
          <p className="w-full max-w-[1060px] text-zinc-300 text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            <span className="lg:whitespace-nowrap">A non-impacting comparison pattern, where supported. Shadow receives permitted facts for evaluation; it does not alter production</span>
            <br className="hidden lg:inline" />
            <span>billing or filing.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="p-6 bg-[rgba(36,16,57,1)] rounded-2xl border border-white/10 flex flex-col justify-start items-start gap-3 hover:border-white/20 transition-colors"
            >
              <div className="self-stretch text-white text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7 flex items-center gap-2">
                <span>{step.title}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 shrink-0"
                >
                  <path
                    d="M5 12.0008H19.0016M12.0008 19.0016L19.0016 12.0008L12.0008 5"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="self-stretch text-zinc-300 text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
                {step.body}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full p-6 bg-[rgba(18,3,39,0.9)] rounded-2xl border-l-[3px] border-l-[rgba(191,103,53,1)] border border-white/10 flex flex-col justify-start items-start gap-2 shadow-sm">
          <div className="text-white text-base font-bold font-['Inter',sans-serif]">
            Shadow does not change production outcomes. Comparison does not grant authority.
          </div>
          <p className="text-zinc-300 text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Ingest/mirror → Evaluate in Shadow → Compare → Investigate → Resolve through owner workflow → Governed readiness decision. No autonomous promotion, including after zero observed discrepancies.
          </p>
        </div>

        <Link
          href="/shadow-assurance"
          className="inline-flex items-center gap-1.5 text-[#D65A2C] text-sm sm:text-base font-semibold font-['Inter',sans-serif] hover:underline"
        >
          <span>Explore Shadow Assurance</span>
          <Image
            src="/existing-tax-engines/arrow-up-right.svg"
            alt="↗"
            width={14}
            height={14}
            className="w-3.5 h-3.5 shrink-0"
          />
        </Link>
      </Container>
    </section>
  );
}
