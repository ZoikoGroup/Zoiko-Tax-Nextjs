import { Container } from "./shared";

export default function DirectAnswerSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-16 overflow-hidden">
      <Container className="relative z-10 flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-16">
        <div className="w-full lg:w-80 shrink-0 flex flex-col justify-start items-start gap-4">
          <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
            DIRECT ANSWER
          </span>
          <h2 className="self-stretch text-zinc-900 text-3xl font-bold leading-9 tracking-tight font-['Inter',sans-serif]">
            What does OEM / Embedded mean?
          </h2>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4">
          <p className="self-stretch text-stone-500 text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]">
            Approved partners may connect ZoikoTax capabilities to a wider
            platform or service while each organization’s business context,
            capability scope and evidence remain explicit.
          </p>
          <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
            Technical embedding, partner identity approval, capability
            entitlement and production activation are separate decisions.
            Commercial rights are separately governed; navigation or test access
            grants none of them.
          </p>
        </div>
      </Container>
    </section>
  );
}
