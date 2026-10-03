import { DefinedRelationshipIcon, LinkIcon } from "./icons";

const relationships = [
  {
    label: "SOURCE ↔ FISCAL ↔ INVOICE",
    nodes: ["Transaction", "Fiscal outcome", "Invoice"],
    desc: "Text equivalent: link the transaction, fiscal outcome and invoice through scoped identities and reference relationships only where the approved contracts define them.",
  },
  {
    label: "FISCAL ↔ BRIDGE ↔ FINANCE",
    nodes: ["Fiscal outcome", "Accounting bridge", "Ledger outcome"],
    desc: "Text equivalent: connect the fiscal outcome to its accounting bridge handoff and defined ledger outcome references. Keep enterprise accounting authority separate from the fiscal result.",
  },
];

const cards = [
  {
    title: "Match within defined scope",
    desc: "Use only approved identity and reference relationships. A match is not legal or accounting proof, and does not imply posting success.",
    tag: "Scope and meaning are contract-defined",
  },
  {
    title: "Investigate governed variance",
    desc: "Use source-controlled variance categories and investigation routes. Ambiguity remains unresolved until governed review—not an invented accuracy score.",
    tag: "No correctness inference",
  },
  {
    title: "Retain historical evidence",
    desc: "Keep source lineage, relevant versions and prior evidence references for investigation. Preserve context across correction and reconciliation paths.",
    tag: "Evidence & Replay · where supported",
  },
];

export default function ReconciliationSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-[#181424] py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1440px] px-6 sm:px-12 lg:px-20 flex flex-col justify-start items-start gap-10">
        <div className="relative z-10 self-stretch flex flex-col justify-start items-start gap-3.5">
          <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            07 · RECONCILIATION INTERFACES
          </div>
          <h2 className="w-full max-w-[1050px] text-white text-3xl sm:text-4xl lg:text-[48px] font-bold font-['Inter',sans-serif] leading-[1.1] tracking-tight">
            Close the loop without inventing certainty.
          </h2>
          <p className="w-full max-w-[1060px] text-zinc-300 text-base sm:text-lg lg:text-[18px] font-normal font-['Inter',sans-serif] leading-relaxed">
            Reconciliation is a first-class finance-control workflow: connect defined relationships, investigate governed variances and retain historical evidence.
          </p>
        </div>

        <div className="self-stretch p-6 sm:p-8 bg-[#241D35] rounded-3xl border border-[#3E3259] flex flex-col justify-start items-start gap-7 shadow-sm">
          <div className="self-stretch flex flex-wrap justify-between items-center gap-2">
            <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
              CONCEPTUAL RELATIONSHIPS · NOT LIVE RECORDS
            </div>
            <div className="text-zinc-300 text-xs font-normal font-['Inter',sans-serif]">
              Defined identities only • historical context retained
            </div>
          </div>
          {relationships.map((relationship) => (
            <div key={relationship.label} className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="text-[#FFA776] text-xs font-bold font-['Inter',sans-serif]">
                {relationship.label}
              </div>
              <div className="self-stretch flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-3 sm:gap-5">
                {relationship.nodes.map((node, index) => (
                  <div key={node} className="flex-1 flex justify-start items-center gap-3 sm:gap-5">
                    <div className={`flex-1 h-20 p-4 rounded-2xl border flex flex-col justify-center items-center ${index === 1 ? "bg-[#352750] border-[#5E4788]" : "bg-[#1C172A] border-[#3E3259]"}`}>
                      <div className="text-center text-white text-lg sm:text-xl font-semibold font-['Inter',sans-serif]">
                        {node}
                      </div>
                    </div>
                    {index < relationship.nodes.length - 1 && <DefinedRelationshipIcon className="shrink-0 text-[#FFA776]" />}
                  </div>
                ))}
              </div>
              <div className="self-stretch text-zinc-300 text-sm font-normal font-['Inter',sans-serif] leading-5">
                {relationship.desc}
              </div>
            </div>
          ))}
          <div className="self-stretch p-5 bg-[#352750] rounded-2xl border border-[#5E4788] flex justify-start items-center gap-4">
            <LinkIcon className="size-5 shrink-0 text-[#FFA776]" />
            <div className="flex-1 text-white text-sm sm:text-base font-semibold font-['Inter',sans-serif] leading-6">
              Defined relationship → governed variance → investigation route → historical evidence → scoped reconciliation review
            </div>
          </div>
          <div className="self-stretch text-[#FFA776] text-sm font-medium font-['Inter',sans-serif] leading-5">
            ↶ Return to the defined relationships with retained evidence for scoped review. No automatic closure or correctness is implied.
          </div>
        </div>

        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-4">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 sm:p-7 bg-[#241D35] rounded-2xl border border-[#3E3259] flex flex-col justify-start items-start gap-3.5 shadow-sm"
            >
              <div className="self-stretch text-white text-lg sm:text-xl font-bold font-['Inter',sans-serif] leading-7">
                {card.title}
              </div>
              <div className="self-stretch text-zinc-300 text-sm sm:text-base font-normal font-['Inter',sans-serif] leading-6">
                {card.desc}
              </div>
              <div className="self-stretch text-[#FFA776] text-xs font-semibold font-['Inter',sans-serif] leading-5">
                {card.tag}
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10 w-full max-w-[1280px] p-5 sm:p-6 bg-[#241D35] rounded-2xl border border-[#3E3259] flex justify-start items-start gap-4 shadow-sm">
          <LinkIcon className="size-5 shrink-0 text-[#FFA776] mt-0.5" />
          <div className="flex-1 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch text-white text-sm sm:text-base font-bold font-['Inter',sans-serif]">
              Status words are not universal finance states
            </div>
            <p className="self-stretch text-zinc-300 text-xs sm:text-sm font-normal font-['Inter',sans-serif] leading-relaxed">
              “Accepted”, “posted” and “rejected” have contract-specific meanings where defined. They are not live states on this page and must not be interpreted as equivalent across fiscal, transfer and ledger workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
