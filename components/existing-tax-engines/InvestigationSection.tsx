import Image from "next/image";
import { Container } from "./shared";

const steps = [
  {
    num: "01",
    title: "Detect",
    body: "Record an observed difference or unknown comparison without deciding legal correctness.",
  },
  {
    num: "02",
    title: "Classify",
    body: "Use an approved diagnostic category; keep unclassified or conflicting evidence visible.",
  },
  {
    num: "03",
    title: "Trace",
    body: "Follow permitted source references, mapping/adapter context and rule/content versions.",
  },
  {
    num: "04",
    title: "Explain",
    body: "Use source-grounded explanations. AI may assist, but remains bounded and advisory.",
  },
  {
    num: "05",
    title: "Resolve through owners",
    body: "Route the issue to governed owners for an approved resolution state.",
  },
  {
    num: "06",
    title: "Re-run if supported",
    body: "Re-evaluate through the approved route while retaining the earlier context.",
  },
  {
    num: "07",
    title: "Close approved state",
    body: "Retain discrepancy, owner, resolution and prior evidence history.",
  },
];

export default function InvestigationSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Section Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/Why coexistence before cutover.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            06 · INVESTIGATION &amp; RESOLUTION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
            Trace the difference. Preserve the decision.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Investigation is a diagnostic workflow with accountable owners. A discrepancy is not an automatic verdict against either engine.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8 lg:gap-12">
          {/* Steps */}
          <div className="flex-1 flex flex-col justify-start items-stretch">
            {steps.map((step) => (
              <div
                key={step.num}
                className="self-stretch py-4 border-b border-[#D8CEDD] flex justify-start items-start gap-4 sm:gap-5"
              >
                <div className="shrink-0 size-9 bg-[#FAF3FF] border border-[#E7D6F0] rounded-full flex justify-center items-center">
                  <span className="text-[#241039] text-xs font-normal font-['Inter',sans-serif]">
                    {step.num}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="text-[#18141B] text-lg font-normal font-['Inter',sans-serif]">
                    {step.title}
                  </div>
                  <div className="self-stretch text-[#665F69] text-base font-normal leading-6 font-['Inter',sans-serif]">
                    {step.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bounded AI assistance */}
          <div className="w-full lg:w-[410px] shrink-0 p-6 sm:p-7 bg-[#241039] rounded-3xl flex flex-col justify-start items-start gap-6 shadow-sm">
            <Image
              src="/existing-tax-engines/scan-text.svg"
              alt=""
              width={36}
              height={36}
              className="size-9"
            />
            <div className="self-stretch text-white text-3xl font-bold leading-tight font-['Inter',sans-serif]">
              <span className="block whitespace-nowrap">Explain, never</span>
              <span className="block whitespace-nowrap">authorize.</span>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-wider">
                BOUNDED AI ASSISTANCE
              </span>
              <p className="self-stretch text-zinc-300 text-sm font-normal leading-6 font-['Inter',sans-serif]">
                <span className="block sm:whitespace-nowrap">Summarize source-backed differences,</span>
                <span className="block sm:whitespace-nowrap">surface missing context and assist owner</span>
                <span className="block sm:whitespace-nowrap">review. Explanations are advisory—not fiscal</span>
                <span className="block sm:whitespace-nowrap">authority or a free-form legal verdict.</span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-wider">
                WHEN EVIDENCE IS INCOMPLETE
              </span>
              <p className="self-stretch text-zinc-300 text-sm font-normal leading-6 font-['Inter',sans-serif]">
                <span className="block sm:whitespace-nowrap">Keep conflict, missing-source and unknown</span>
                <span className="block sm:whitespace-nowrap">states explicit. Seek approved evidence; do</span>
                <span className="block sm:whitespace-nowrap">not fabricate a conclusion or infer</span>
                <span className="block sm:whitespace-nowrap">correctness.</span>
              </p>
            </div>

            <p className="self-stretch text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
              <span className="block sm:whitespace-nowrap">Text equivalent: Detect → Classify → Trace →</span>
              <span className="block sm:whitespace-nowrap">Explain → Resolve through governed owners →</span>
              <span className="block sm:whitespace-nowrap">Re-run if supported → Close approved state</span>
              <span className="block sm:whitespace-nowrap">with history retained.</span>
            </p>
          </div>
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2">
          <div className="text-[#18141B] text-base font-bold leading-6 font-['Inter',sans-serif]">
            A closed discrepancy is not automatic cutover approval.
          </div>
          <p className="text-[#665F69] text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Zero observed discrepancies do not auto-promote Shadow. Re-runs and resolutions append governed history; earlier source, version and resolution evidence is not overwritten.
          </p>
        </div>
      </Container>
    </section>
  );
}
