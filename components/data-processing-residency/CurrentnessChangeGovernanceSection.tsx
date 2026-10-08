import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const TABLE_ROWS = [
  {
    metadata: "Reviewed / effective date",
    meaning: "Currentness for the specific claim and effective scope",
    value: "Not supplied"
  },
  {
    metadata: "Source / version / evidence reference",
    meaning: "Governed reference for the claimed dimension",
    value: "Not supplied"
  },
  {
    metadata: "Accountable source owner",
    meaning: "Owner authorized to resolve the exact claim",
    value: "Not supplied"
  },
  {
    metadata: "Scope / conditions / approval",
    meaning: "Service, capability, environment and data domain; approved conditions",
    value: "Not supplied"
  },
  {
    metadata: "Visibility / disclosure state",
    meaning: "Public, controlled, customer-specific or unavailable",
    value: "Exact evidence visibility not supplied"
  }
];

const CARDS = [
  {
    title: "Stale or conflicted",
    desc: "Withhold a positive claim when evidence is\nstale. Conflicting sources require accountable\nowner review, not a geographic guess or a\nsilently current label."
  },
  {
    title: "New or changing scope",
    desc: "New regions remain validation scope until\napproved. A region or data-domain change\nrequires technical, Privacy / Legal and Trust\napproval with synchronized public content."
  },
  {
    title: "Retired scope",
    desc: "Retired claims are historical only under\ngoverned disclosure. They must not appear\nas current availability or a selectable\ncustomer option."
  }
];

export default function CurrentnessChangeGovernanceSection() {
  return (
    <SectionShell id="currentness-change-governance" className="bg-transparent" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="CURRENTNESS & CHANGE GOVERNANCE"
          title="An undated source is not silently current."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Reviewed date, source owner and effective scope must come from the approved source. This metadata anatomy contains no invented<br/>review dates or versions.</span>}
        />

        <div className="rounded-2xl overflow-hidden border border-[rgba(216,206,221,1)] bg-white w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[rgba(242,234,248,1)] border-b border-[rgba(216,206,221,1)]">
                <th className="py-4 px-6 text-xs font-normal text-[rgba(24,20,27,1)] md:w-72">Source metadata</th>
                <th className="py-4 px-6 text-xs font-normal text-[rgba(24,20,27,1)] md:w-[550px]">Required meaning</th>
                <th className="py-4 px-6 text-xs font-normal text-[rgba(24,20,27,1)]">Value in this view</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map((row, i) => (
                <tr key={i} className="border-b border-[rgba(216,206,221,1)] last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 px-6 text-base font-normal text-[rgba(24,20,27,1)] align-top whitespace-nowrap">{row.metadata}</td>
                  <td className="py-5 px-6 text-base font-normal text-[rgba(102,95,105,1)] align-top">{row.meaning}</td>
                  <td className="py-5 px-6 text-base font-normal text-[rgba(102,95,105,1)] align-top">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col xl:flex-row gap-4">
          {CARDS.map((card, i) => (
            <div key={i} className="flex-1 p-6 bg-white rounded-2xl border border-[rgba(216,206,221,1)] flex flex-col gap-3.5">
              <h4 className="text-xl font-normal text-[rgba(24,20,27,1)] leading-7">{card.title}</h4>
              <p className="text-base font-normal text-[rgba(102,95,105,1)] leading-7 whitespace-pre-line">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3.5 p-7 bg-[rgba(242,234,248,1)] rounded-2xl border border-[rgba(242,234,248,1)]">
          <h4 className="text-xl font-normal text-[rgba(48,17,83,1)]">
            Publication must follow approved facts, not originate them.
          </h4>
          <p className="text-base font-normal leading-7 text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
            Platform source owners establish actual location and access facts; Privacy / Legal governs transfers and contracts; Security / Trust governs boundaries;<br/>Data Governance governs metadata; Product / Commercial confirms actual customer choice. Accountable identities are not supplied here.
          </p>
          <p className="text-sm font-normal leading-6 text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
            Core disclosures and source-route labels must remain useful without JavaScript or analytics. Location is not inferred from IP or geography, and disclaimers are not removed by<br/>personalization or experiments. This static page illustrates the content contract; it does not claim runtime implementation.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
