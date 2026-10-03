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
    <div className="self-stretch px-20 py-24 bg-slate-900/75 flex flex-col justify-start items-start gap-10 overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">07 · RECONCILIATION INTERFACES</div>
        <h2 className="w-full max-w-[1050px] justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">Close the loop without inventing certainty.</h2>
        <p className="w-full max-w-[1060px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Reconciliation is a first-class finance-control workflow: connect defined relationships, investigate governed variances and retain historical evidence.</p>
      </div>
      <div className="self-stretch p-8 bg-indigo-950 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-600 flex flex-col justify-start items-start gap-7 overflow-hidden">
        <div className="self-stretch flex justify-between items-center overflow-hidden">
          <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] leading-5">CONCEPTUAL RELATIONSHIPS · NOT LIVE RECORDS</div>
          <div className="justify-start text-zinc-300 text-xs font-normal font-['Inter']">Defined identities only • historical context retained</div>
        </div>
        {relationships.map((relationship) => (
          <div key={relationship.label} className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
            <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">{relationship.label}</div>
            <div className="self-stretch flex justify-start items-center gap-5 overflow-hidden">
              {relationship.nodes.map((node, index) => (
                <div key={node} className="flex-1 flex justify-start items-center gap-5 overflow-hidden">
                  <div className={`flex-1 h-20 p-5 rounded-2xl outline outline-1 outline-offset-[-1px] inline-flex flex-col justify-center items-center overflow-hidden ${index === 1 ? "bg-violet-950 outline-zinc-400" : "bg-indigo-950 outline-zinc-600"}`}>
                    <div className="self-stretch text-center justify-start text-white text-xl font-semibold font-['Inter']">{node}</div>
                  </div>
                  {index < relationship.nodes.length - 1 && <DefinedRelationshipIcon className="shrink-0" />}
                </div>
              ))}
            </div>
            <div className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">{relationship.desc}</div>
          </div>
        ))}
        <div className="self-stretch p-5 bg-violet-950 rounded-2xl flex justify-start items-center gap-5 overflow-hidden">
          <LinkIcon className="size-5 shrink-0" />
          <div className="flex-1 justify-start text-white text-base font-semibold font-['Inter'] leading-6">Defined relationship → governed variance → investigation route → historical evidence → scoped reconciliation review</div>
        </div>
        <div className="self-stretch justify-start text-orange-300 text-sm font-medium font-['Inter'] leading-5">↶ Return to the defined relationships with retained evidence for scoped review. No automatic closure or correctness is implied.</div>
      </div>
      <div className="self-stretch grid grid-cols-1 lg:grid-cols-3 justify-start items-stretch gap-4 overflow-hidden">
        {cards.map((card) => (
          <div key={card.title} className="p-7 bg-indigo-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-600 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-7">{card.title}</div>
            <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">{card.desc}</div>
            <div className="self-stretch justify-start text-orange-300 text-xs font-semibold font-['Inter'] leading-5">{card.tag}</div>
          </div>
        ))}
      </div>
      <div className="self-stretch p-6 bg-indigo-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-600 flex justify-start items-start gap-4 overflow-hidden">
        <LinkIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-white text-base font-bold font-['Inter']">Status words are not universal finance states</div>
          <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">“Accepted”, “posted” and “rejected” have contract-specific meanings where defined. They are not live states on this page and must not be interpreted as equivalent across fiscal, transfer and ledger workflows.</p>
        </div>
      </div>
    </div>
  );
}
