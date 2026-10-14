import { Check, Copy, Send } from "lucide-react";
import { IconTile, SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    icon: Copy,
    title: "Filed and fiscal-invoice positions",
    items: [
      "Prepare a supported position from governed source facts",
      "Route capability-specific review and approval",
      "Exchange with supported authority or network endpoints",
      "Preserve submission, acknowledgement and exception evidence",
    ],
    note: "Availability is capability- and jurisdiction-specific. No universal clearance-network implication.",
  },
  {
    icon: Send,
    title: "Governed remittance instructions",
    items: [
      "Assemble supported obligation and destination context",
      "Apply maker-checker approval and release controls",
      "Track instruction, acknowledgement and exception states",
      "Reconcile instructed, reported and surrounding payment evidence",
    ],
    note: "ZoikoTax does not imply fund custody, treasury services, payment processing or universal bank connectivity.",
  },
];

export default function FilingSection() {
  return (
    <SectionShell className="bg-white" bgImage="filing-bg.webp">
      <SectionHeading
        eyebrow="Filing, e-invoicing and remittance"
        title="Preserve supported positions. Govern the instruction."
        description="Supported filed and fiscal-invoice positions connect to approvals, acknowledgements and evidence. Remittance orchestration keeps instruction state visible without overstating treasury scope."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-5 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8"
          >
            <div className="flex items-center gap-3.5">
              <span className="[&>span]:size-10 [&>span]:rounded-xl [&_svg]:size-5">
                <IconTile icon={card.icon} />
              </span>
              <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">{card.title}</h3>
            </div>
            <ul className="flex flex-col gap-5">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-5 text-stone-500">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-green-700" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs font-semibold leading-4 text-orange-600">{card.note}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
