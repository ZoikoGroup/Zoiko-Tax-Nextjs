import { SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    title: "Regulatory validity",
    description:
      "Pilot does not establish regulatory approval, filing authority or permission to transact. Confirm the applicable authority for the exact jurisdiction and purpose.",
  },
  {
    title: "Tax & legal judgment",
    description:
      "This page is not tax or legal advice. Enterprise teams remain responsible for qualified review, permitted reliance and approval of their own decisions.",
  },
  {
    title: "Privacy & source access",
    description:
      "Use only permission-bound evidence. Do not expose private deployment details, tenant records or customer fiscal information in public verification.",
  },
];

export default function ResponsibilitySection() {
  return (
    <SectionShell className="bg-[#1f0a3a]" bgImage="responsibility-bg.webp">
      <SectionHeading
        dark
        eyebrow="Enterprise responsibility"
        title="Coverage status is not fiscal authority."
        description="A deployment classification does not replace the legal, regulatory or privacy decisions your enterprise must make."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-4 rounded-2xl bg-[#301153] p-6 outline -outline-offset-1 outline-zinc-600"
          >
            <h3 className="text-xl font-bold leading-7 text-white sm:text-2xl">{card.title}</h3>
            <p className="text-base leading-7 text-zinc-300">{card.description}</p>
          </div>
        ))}
      </div>

      <p className="text-sm leading-5 text-zinc-300">
        Trust Center · Privacy &amp; Data Protection · Legal policies — destinations unavailable until approved.
      </p>
    </SectionShell>
  );
}
