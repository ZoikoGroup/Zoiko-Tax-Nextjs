import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const DEFINITIONS = [
  {
    title: "Data residency",
    description: <>A claim that specified data remains within an<br />approved scope. It is not a synonym for<br />hosting, market coverage or a globally<br />available platform.</>
  },
  {
    title: "Storage",
    description: <span className="whitespace-nowrap sm:whitespace-normal lg:whitespace-nowrap block w-[105%] -ml-[2.5%] text-center lg:text-left lg:ml-0 lg:w-auto">Where a specified data domain is held at rest.<br />This does not establish where it is processed,<br />copied or accessed.</span>
  },
  {
    title: "Processing",
    description: <>Where computation or other processing<br />occurs for a stated service and environment.<br />It may differ from storage location.</>
  },
  {
    title: "Backup / replication",
    description: <span className="whitespace-nowrap sm:whitespace-normal lg:whitespace-nowrap block w-[105%] -ml-[2.5%] text-center lg:text-left lg:ml-0 lg:w-auto">Where recovery copies or replicas are held or<br />processed. These need separate evidence;<br />colocation is not assumed.</span>
  },
  {
    title: "Operational access",
    description: <>Where support, operations or privileged<br />access may originate, and any approved<br />restrictions. Storage location does not<br />answer this.</>
  },
  {
    title: "Subprocessor processing",
    description: <>Processing by a third party acting in the<br />relevant role, with approved identity, purpose<br />and location evidence.</>
  }
];

export default function DirectAnswerSection() {
  return (
    <SectionShell id="direct-answer" className="bg-white" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="DIRECT ANSWER"
          title="What does a residency claim actually establish?"
          description={<span className="block w-full max-w-full lg:whitespace-nowrap">Only what a current, approved source establishes for the exact deployment and data domain — never universal regional support.</span>}
        />

        <div className="rounded-2xl bg-[rgba(48,17,83,1)] p-8 flex flex-col md:flex-row gap-10">
          <h3 className="text-[28px] font-normal leading-tight text-white md:w-[350px] shrink-0">
            Global architecture ≠<br />local residency<br />everywhere.
          </h3>
          <p className="text-[17px] font-normal leading-relaxed text-[rgba(217,208,223,1)] flex-1 whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
            Supported deployment and residency controls must be evidence-bound to the service, capability,<br />environment and data domain. The supplied sources do not establish concrete location options or<br />controls. Availability does not, by itself, establish customer choice, switching or pinning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DEFINITIONS.map((def, i) => (
            <div key={i} className="flex flex-col gap-3.5 rounded-2xl bg-white border border-[rgba(216,206,221,1)] p-6">
              <h4 className="text-[22px] font-normal text-[rgba(24,20,27,1)]">{def.title}</h4>
              <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
                {def.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-7 rounded-2xl p-6 bg-white border border-[rgba(216,206,221,1)]">
          <h4 className="text-[22px] font-normal text-[rgba(24,20,27,1)] shrink-0 md:w-[280px]">Cross-border transfer</h4>
          <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)]">
            A jurisdiction-specific legal assessment, not a conclusion inferred from a technical location. Privacy / Legal<br />controls the approved interpretation and relevant contractual authority. See Privacy & Data Protection.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
