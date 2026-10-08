import Image from "next/image";
import { Container, Notice } from "./shared";

const states = [
  {
    title: "Pending / setup",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Context is being prepared;</span>
        <span className="block xl:whitespace-nowrap">permission is not implied.</span>
      </>
    ),
  },
  {
    title: "Validation",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Readiness is under review against</span>
        <span className="block xl:whitespace-nowrap">approved gates.</span>
      </>
    ),
  },
  {
    title: "Active",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Only the exact approved scope is</span>
        <span className="block xl:whitespace-nowrap">active.</span>
      </>
    ),
  },
  {
    title: "Restricted",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">A limitation applies only as</span>
        <span className="block xl:whitespace-nowrap">defined by its source.</span>
      </>
    ),
  },
  {
    title: "Suspended",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">The approved policy defines</span>
        <span className="block xl:whitespace-nowrap">suspension semantics.</span>
      </>
    ),
  },
  {
    title: "Migrating · optional",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Only applicable where a governed</span>
        <span className="block xl:whitespace-nowrap">migration model exists.</span>
      </>
    ),
  },
  {
    title: "Offboarded /\ndeprovisioned",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Lifecycle handling follows the</span>
        <span className="block xl:whitespace-nowrap">approved contract.</span>
      </>
    ),
  },
  {
    title: "Historical · per policy",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Review and availability are policy-</span>
        <span className="block xl:whitespace-nowrap">defined, not indefinite.</span>
      </>
    ),
  },
];

export default function LifecycleSection() {
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
            08 / GOVERNED LIFECYCLE
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            State changes need authority, not assumptions.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Illustrative state meanings — production taxonomy source-controlled
          </p>
        </div>

        <div className="self-stretch p-8 bg-[rgba(48,17,83,1)] rounded-3xl flex flex-col justify-start items-start gap-5">
          <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            CONCEPTUAL TRANSITION BOUNDARY
          </span>
          <div className="self-stretch text-white text-[28px] font-normal leading-[1.2] font-['Inter',sans-serif]">
            Current source-defined state → Approved decision + evidence → Permitted next state
          </div>
          <p className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Every transition depends on the actual policy, contract and operating model. The states below are explanatory categories, not a fixed progression, event</span>
            <span className="block xl:whitespace-nowrap">contract or live organization status.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {states.map((state) => (
            <div
              key={state.title}
              className="self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-4"
            >
              <div className="self-stretch text-[rgba(48,17,83,1)] text-xl font-normal leading-[1.4] font-['Inter',sans-serif] whitespace-pre-line">
                {state.title}
              </div>
              <div className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                {state.body}
              </div>
            </div>
          ))}
        </div>

        <Notice
          title={<span className="text-[rgba(24,20,27,1)]">Unknown / needs source is a safe boundary</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">If the governing state or procedure is missing, do not infer activation, restoration or offboarding behavior. Confirm the approved source. No trigger, notice</span>
              <span className="block xl:whitespace-nowrap">period, retention duration, restoration promise or right to service is established here; there are no live suspend or deprovision controls.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
