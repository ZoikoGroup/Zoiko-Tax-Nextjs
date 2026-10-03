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
    <section className="relative w-full flex justify-center items-start bg-white py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            05 · ENTERPRISE SCOPE
          </div>
          <h2 className="w-full max-w-[1050px] text-[#18141B] text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Keep context visible at the decision boundary.
          </h2>
          <p className="w-full max-w-[1060px] text-[#665F69] text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Entity, ledger and period context belong beside consequential handoffs—not hidden behind an inferred default.
          </p>
        </div>

        <div className="self-stretch p-6 sm:p-8 bg-[#181424] rounded-3xl border border-[#2D243F] grid grid-cols-1 lg:grid-cols-[384px_minmax(0,1fr)] justify-start items-start gap-8 shadow-sm">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              ILLUSTRATIVE CONTEXT · NOT A SCHEMA
            </div>
            <div className="self-stretch text-white text-2xl sm:text-3xl font-bold font-['Inter',sans-serif] leading-9">
              Before preparation. Before transfer. Before review.
            </div>
            <p className="self-stretch text-zinc-300 text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
              Placeholders show the kinds of source-controlled context that may be needed. They do not describe a live ledger or imply posting authority, available currencies or period rules.
            </p>
          </div>
          <div className="p-5 sm:p-6 bg-[#241D35] rounded-2xl border border-[#3E3259] flex flex-col justify-start items-start w-full">
            {contextRows.map((row) => (
              <div
                key={row.label}
                className="self-stretch py-3.5 border-b border-[#3E3259] last:border-b-0 flex flex-col sm:flex-row justify-start items-start sm:items-center gap-2 sm:gap-5"
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

        <div className="relative z-10 w-full max-w-[1280px] min-h-[125px] p-5 sm:p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] flex justify-start items-start gap-4 shadow-sm">
          <InfoIcon className="size-5 shrink-0 text-[#D65A2C] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-[#18141B] text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Unknown context requires governed review
            </div>
            <p className="self-stretch text-[#665F69] text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              Do not guess a period, mapping version or approval state. Follow the authoritative interface documentation and the customer’s accounting process when context is absent or currentness cannot be confirmed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
