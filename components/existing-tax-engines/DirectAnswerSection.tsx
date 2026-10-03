import { Container } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#FAF3FF] py-16 lg:py-20 overflow-hidden">
      <Container className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col justify-start items-start gap-3">
          <span className="text-[#D65A2C] text-xs font-bold uppercase tracking-[0.08em] leading-5 font-['Inter',sans-serif]">
            DIRECT ANSWER
          </span>
          <h2 className="self-stretch text-[#18141B] text-3xl sm:text-4xl font-bold leading-tight tracking-tight font-['Inter',sans-serif]">
            What is Existing Tax<br />Engine integration?
          </h2>
        </div>
        <div className="flex-1 max-w-[780px] text-[#665F69] text-base font-normal leading-relaxed font-['Inter',sans-serif] lg:-translate-x-[55px]">
          <span className="lg:whitespace-nowrap">A source-safe public architecture for federated coexistence, non-impacting comparison and staged, evidence-led</span>
          <br className="hidden lg:inline" />
          <span className="lg:whitespace-nowrap">migration. It lets teams evaluate ZoikoTax alongside an incumbent before an explicitly approved production</span>
          <br className="hidden lg:inline" />
          <span className="lg:whitespace-nowrap">transition. It is an engine-agnostic pattern—not a connector catalog, universal compatibility claim or immediate</span>
          <br className="hidden lg:inline" />
          <span>replacement promise.</span>
        </div>
      </Container>
    </section>
  );
}
