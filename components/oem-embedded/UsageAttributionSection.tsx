import { Container, Notice, SectionHeader } from "./shared";

const trail = [
  {
    num: "01 →",
    title: "Approved activity",
    body: "Only supported, permitted activity.",
  },
  {
    num: "02 →",
    title: "Correct organization",
    body: "The authorized business context.",
  },
  {
    num: "03 →",
    title: "Capability",
    body: "The exact approved capability scope.",
  },
  {
    num: "04 →",
    title: "Source-defined period",
    body: "The governed measurement context.",
  },
  {
    num: "05 •",
    title: "Evidence / operations",
    body: "A reference where approved.",
  },
];

export default function UsageAttributionSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="07 / USAGE & ATTRIBUTION"
          title="Attribute activity. Do not infer economics."
          description="Usage can support operational accountability when its organization, capability and evidence context are preserved."
        />

        <div className="self-stretch p-6 sm:p-8 bg-purple-50 rounded-3xl flex flex-col justify-start items-start gap-6">
          <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
            ILLUSTRATIVE TRAIL · NO ACTUAL USAGE VALUES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
            {trail.map((step) => (
              <div
                key={step.num}
                className="self-stretch p-5 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5"
              >
                <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
                  {step.num}
                </span>
                <div className="self-stretch text-zinc-900 text-lg font-semibold leading-6 font-['Inter',sans-serif]">
                  {step.title}
                </div>
                <div className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {step.body}
                </div>
              </div>
            ))}
          </div>
          <p className="self-stretch text-stone-500 text-sm font-normal leading-6 font-['Inter',sans-serif]">
            Text equivalent: approved activity → correct organization →
            capability → source-defined period → evidence / operations. These
            categories are not a usage schema, report, billing cycle or
            dashboard.
          </p>
        </div>

        <Notice
          title="Attribution is not charging or pricing"
          body="Usage does not establish allowances, revenue share, charges, invoice frequency or commercial economics. Authenticated reporting is separate from this public architecture page; no actual counts, periods or usage records are shown."
        />
      </Container>
    </section>
  );
}
