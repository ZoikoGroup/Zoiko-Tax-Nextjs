import { Container } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-16 lg:py-24 bg-[rgba(243,234,249,1)] overflow-hidden">
      <Container className="relative z-10 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col justify-start items-start gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            DIRECT ANSWER
          </span>
          <h2 className="self-stretch text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.15] tracking-tight font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">What does OEM /</span>
            <span className="block xl:whitespace-nowrap">Embedded mean?</span>
          </h2>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-5 mt-2 lg:mt-0">
          <p className="self-stretch text-[rgba(102,95,105,1)] text-lg sm:text-xl lg:text-[20px] font-normal leading-[1.6] font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Approved partners may connect ZoikoTax capabilities to a wider platform or service while</span>
            <span className="block xl:whitespace-nowrap">each organization’s business context, capability scope and evidence remain explicit.</span>
          </p>
          <p className="self-stretch text-[rgba(102,95,105,1)] text-base font-normal leading-[1.5] font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Technical embedding, partner identity approval, capability entitlement and production activation are separate</span>
            <span className="block xl:whitespace-nowrap">decisions. Commercial rights are separately governed; navigation or test access grants none of them.</span>
          </p>
        </div>
      </Container>
    </section>
  );
}
