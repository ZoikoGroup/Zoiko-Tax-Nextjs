import Image from "next/image";
import { Container } from "./shared";

const authorityStates = [
  {
    icon: "/existing-tax-engines/Incumbent system authority.svg",
    title: "Incumbent-authoritative",
    body: "Production outcomes remain with the incumbent in the approved stage.",
  },
  {
    icon: "/existing-tax-engines/Shadow comparison.svg",
    title: "ZoikoTax Shadow / non-authoritative",
    body: "Comparative evaluation only; no production outcome change.",
  },
  {
    icon: "/existing-tax-engines/Readiness review.svg",
    title: "Readiness under review",
    body: "Evidence and owner decisions are not yet an authority grant.",
  },
  {
    icon: "/existing-tax-engines/Approved cutover path.svg",
    title: "Governed cutover approved",
    body: "Approval exists through the governed process, not a public-page control.",
  },
  {
    icon: "/existing-tax-engines/Approved production authority.svg",
    title: "Production-authoritative only when approved",
    body: "ZoikoTax authority applies only in an explicitly approved state.",
  },
  {
    icon: "/existing-tax-engines/Extended parallel coexistence.svg",
    title: "Extended coexistence",
    body: "Continue the supported pattern with authority kept explicit.",
  },
];

const evidenceStates = [
  {
    icon: "/existing-tax-engines/Missing source document.svg",
    title: "Missing source",
    body: "Required source context is absent. Do not infer an outcome.",
  },
  {
    icon: "/existing-tax-engines/Unavailable broken link.svg",
    title: "Unavailable route",
    body: "The approved route is unavailable; use the governed process.",
  },
  {
    icon: "/existing-tax-engines/Restricted output lock.svg",
    title: "Restricted output",
    body: "Policy limits access. A withheld output is not a match.",
  },
  {
    icon: "/existing-tax-engines/Unresolved comparison search.svg",
    title: "Unknown comparison",
    body: "Compatible evidence is insufficient. Keep uncertainty explicit.",
  },
];

export default function SafeStatesSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
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
          <div className="text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            13 · SAFE STATE PATTERNS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
            Name the state. Do not make the reader infer it.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px] lg:whitespace-nowrap">
            Illustrative authority and exception-state specimens—not current deployments, actual incidents or evidence that any gate has passed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Authority & evaluation states */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col justify-start items-start shadow-sm">
            <div className="self-stretch text-[#18141B] text-2xl font-bold font-['Inter',sans-serif] mb-2">
              Authority &amp; evaluation states
            </div>
            {authorityStates.map((state, idx) => (
              <div
                key={state.title}
                className={`self-stretch py-4 ${
                  idx === authorityStates.length - 1 ? "" : "border-b border-[#E5DFE8]"
                } flex justify-start items-start gap-3.5`}
              >
                <Image
                  src={state.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0 mt-0.5"
                />
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch text-[#18141B] text-sm sm:text-base font-normal font-['Inter',sans-serif]">
                    {state.title}
                  </div>
                  <div className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
                    {state.body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Missing or limited evidence */}
          <div className="p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col justify-start items-start shadow-sm">
            <div className="self-stretch text-[#18141B] text-2xl font-bold font-['Inter',sans-serif] mb-2">
              Missing or limited evidence
            </div>
            {evidenceStates.map((state, idx) => (
              <div
                key={state.title}
                className={`self-stretch py-4 ${
                  idx === evidenceStates.length - 1 ? "" : "border-b border-[#E5DFE8]"
                } flex justify-start items-start gap-3.5`}
              >
                <Image
                  src={state.icon}
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0 mt-0.5"
                />
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch text-[#18141B] text-sm sm:text-base font-normal font-['Inter',sans-serif]">
                    {state.title}
                  </div>
                  <div className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal leading-5 font-['Inter',sans-serif]">
                    {state.body}
                  </div>
                </div>
              </div>
            ))}
            <div className="self-stretch pt-6 flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch text-[#241039] text-lg sm:text-xl font-bold font-['Inter',sans-serif]">
                Do not fill the gap with a verdict.
              </div>
              <p className="self-stretch text-[#665F69] text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
                <span className="block sm:whitespace-nowrap">Conflict, missing evidence or restricted access belong in a governed</span>
                <span className="block sm:whitespace-nowrap">investigation. They never imply agreement, legal correctness or readiness.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2">
          <div className="text-[#18141B] text-base font-bold leading-6 font-['Inter',sans-serif]">
            The meaning is in the text, not the color.
          </div>
          <p className="text-[#665F69] text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Core architecture and documentation guidance are provided as ordered text as well as diagrams. No hover, motion, private configuration or customer-specific incident detail is needed to understand the public pattern.
          </p>
        </div>
      </Container>
    </section>
  );
}
