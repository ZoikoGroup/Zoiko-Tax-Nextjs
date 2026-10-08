import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const FAQS = [
  {
    question: "Where is data stored?",
    answer: "The supplied sources do not establish concrete storage locations. Verify a current approved claim for the exact service, capability, environment and data\ndomain. Primary storage, evidence, support and recovery data must be assessed separately; see the location-dimension matrix above."
  },
  {
    question: "Is residency available in every country or region?",
    answer: "No universal residency support is established. Global architecture and market Coverage do not prove local residency. Approved public location scope is not\nsupplied in this view; Unknown / Not published must not be treated as support or a selectable option."
  },
  {
    question: "What is the difference between residency and processing location?",
    answer: "Residency concerns specified data remaining within an approved scope. Processing location concerns where scoped processing occurs, which may differ from\nstorage. Neither proves backup, operational access or subprocessor location; each requires independent source evidence."
  },
  {
    question: "Can I choose a deployment region?",
    answer: "No customer-selectable region, default, pinning or migration capability is established by the supplied sources. Existing deployment location and customer\nchoice are separate. Confirm actual support, eligibility, applicable terms and environment; sandbox and production may differ."
  },
  {
    question: "Can support access data from another region?",
    answer: "The supplied sources do not establish actual support-access geography or restrictions. Local storage does not prove local human or system access. Review\napproved support, operations, privileged and emergency access scope through Security and Evidence & Auditability."
  },
  {
    question: "Where can I find subprocessor and transfer information?",
    answer: "Transfer interpretation and approved privacy disclosures belong in Privacy & Data Protection (/trust/privacy/). The current approved subprocessor source is a\nnamed governed-source placeholder here: its exact URL, identity list, locations and review version were not supplied. Do not infer them from integrations or\narchitecture."
  }
];

export default function FAQSection() {
  return (
    <SectionShell id="faq" className="bg-transparent" imageSrc="/existing-tax-engines/0.png">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Direct answers. No inferred locations."
          description={<span className="block whitespace-nowrap">All answers retain their source boundary. No concrete region or control is established where approved evidence is absent.</span>}
        />

        <div className="flex flex-col border-t border-[rgba(216,206,221,1)]">
          {FAQS.map((faq, i) => (
            <div key={i} className="py-8 flex flex-col gap-3.5 border-b border-[rgba(216,206,221,1)]">
              <h4 className="text-xl font-normal text-[rgba(24,20,27,1)] leading-7">
                {faq.question}
              </h4>
              <p className="text-base font-normal text-[rgba(102,95,105,1)] leading-7 whitespace-pre-line">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
