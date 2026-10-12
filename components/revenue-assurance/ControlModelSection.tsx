import { SectionHeading, SectionShell, StepCard } from "./shared";

const DOMAINS = [
  {
    title: "Missing tax/fees",
    description: "Compare agreed fiscal positions and surface absent or divergent tax/fee observations.",
  },
  {
    title: "Classification",
    description: "Keep source classification and governed classification proposals explicitly distinct.",
  },
  {
    title: "Taxation",
    description: "Trace determined tax/fee positions without asserting independent legal correctness.",
  },
  {
    title: "Recovery",
    description: "Relate billed, collected and recovered positions without promising recoverability.",
  },
  {
    title: "Reconciliation",
    description: "Connect stage-to-stage breaks to review, documentation and evidence.",
  },
];

const ANSWERS = [
  {
    question: "What Revenue Assurance means here",
    answer:
      "A governed control practice for finding and explaining discrepancies across telecom fiscal workflows—not a claim that every difference is leakage.",
  },
  {
    question: "Does a variance prove error?",
    answer:
      "No. A variance is an investigation signal. Agreement or disagreement does not independently prove error, blame or legal correctness.",
  },
  {
    question: "How Shadow Assurance helps",
    answer: "It compares agreed source or incumbent outcomes in a non-impact path before any governed cutover.",
  },
  {
    question: "How Reconciliation helps",
    answer: "It ties calculated, billed, recovered, reported, paid and accounting-control positions across stages.",
  },
  {
    question: "Can teams reproduce why?",
    answer:
      "Yes, where evidence is available: source provenance, versions, review context and historical replay preserve the explanation over time.",
  },
];

export default function ControlModelSection() {
  return (
    <SectionShell className="bg-white" bgImage="control-model-bg.webp">
      <SectionHeading
        eyebrow="Assurance control model"
        title="Five discrepancy domains. One governed investigation path."
        description="The model keeps missing tax/fees, classification, taxation, recovery and reconciliation discrepancies separate while giving teams a shared route from observation to documented evidence."
      />

      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {DOMAINS.map((domain, i) => (
          <StepCard
            key={domain.title}
            label={String(i + 1).padStart(2, "0")}
            title={domain.title}
            description={domain.description}
            variant={i === 0 ? "solid" : "light"}
            className={`xl:min-h-48 ${i === DOMAINS.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}
          />
        ))}
      </ol>

      <dl className="overflow-hidden rounded-3xl bg-white outline -outline-offset-1 outline-zinc-300">
        {ANSWERS.map((item, i) => (
          <div
            key={item.question}
            className={`flex flex-col gap-2 px-5 py-5 sm:px-6 md:flex-row md:gap-7 ${
              i < ANSWERS.length - 1 ? "border-b border-zinc-300" : ""
            }`}
          >
            <dt className="text-base font-bold leading-5 text-zinc-900 md:w-80 md:shrink-0">{item.question}</dt>
            <dd className="flex-1 text-sm leading-6 text-stone-500 sm:text-base">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
