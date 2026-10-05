import Image from "next/image";
import { InfoIcon } from "./icons";

const contextRows = [
  { label: "Legal entity", value: "[source-controlled entity context]" },
  { label: "Ledger / book", value: "[approved enterprise ledger context]" },
  { label: "Accounting period", value: "[source-controlled period context]" },
  { label: "Currency", value: "[defined currency context]" },
  { label: "Mapping version", value: "[approved mapping reference]" },
  { label: "Approval / currentness", value: "[source-confirmed control context]" },
];

export default function EnterpriseScopeSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            05 · ENTERPRISE SCOPE
          </div>
          <h2 className="text-[#18141B] text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] leading-tight tracking-tight lg:whitespace-nowrap">
            Keep context visible at the decision boundary.
          </h2>
          <p className="text-[#665F69] text-base sm:text-lg font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Entity, ledger and period context belong beside consequential handoffs—not hidden behind an inferred default.
          </p>
        </div>

        {/* Outer dark container */}
        <div className="self-stretch p-6 sm:p-8 bg-[rgba(18,3,39,1)] rounded-3xl grid grid-cols-1 lg:grid-cols-[384px_minmax(0,1fr)] justify-start items-start gap-8 shadow-sm">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              ILLUSTRATIVE CONTEXT · NOT A SCHEMA
            </div>
            <div className="self-stretch text-white text-2xl sm:text-3xl font-bold font-['Inter',sans-serif] leading-tight">
              <span className="block whitespace-nowrap">Before preparation.</span>
              <span className="block whitespace-nowrap">Before transfer. Before</span>
              <span className="block whitespace-nowrap">review.</span>
            </div>
            <p className="self-stretch text-[rgba(217,208,223,1)] text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block sm:whitespace-nowrap">Placeholders show the kinds of source-</span>
              <span className="block sm:whitespace-nowrap">controlled context that may be needed. They</span>
              <span className="block sm:whitespace-nowrap">do not describe a live ledger or imply posting</span>
              <span className="block sm:whitespace-nowrap">authority, available currencies or period rules.</span>
            </p>
          </div>

          {/* Inner table container */}
          <div className="p-5 sm:p-6 bg-[rgba(36,16,61,1)] rounded-2xl border border-[rgba(90,61,113,1)] flex flex-col justify-start items-start w-full">
            {contextRows.map((row, idx) => (
              <div
                key={row.label}
                className={`self-stretch py-3.5 ${
                  idx === contextRows.length - 1 ? "" : "border-b border-[rgba(90,61,113,1)]"
                } flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-5`}
              >
                <div className="w-44 shrink-0 text-white text-sm font-semibold font-['Inter',sans-serif] leading-5">
                  {row.label}
                </div>
                <div className="flex-1 text-zinc-300 text-xs font-normal font-mono leading-4">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notice callout */}
        <div className="relative z-10 w-full p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex justify-start items-start gap-3.5 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-base font-bold font-['Inter',sans-serif]">
              Unknown context requires governed review
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              <span className="block lg:whitespace-nowrap">
                Do not guess a period, mapping version or approval state. Follow the authoritative interface documentation and the customer’s accounting process when
              </span>
              <span className="block lg:whitespace-nowrap">
                context is absent or currentness cannot be confirmed.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
