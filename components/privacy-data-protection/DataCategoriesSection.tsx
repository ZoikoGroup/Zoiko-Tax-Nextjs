import { ArrowRightIcon, Badge, NoticeCard, SectionHeading, SectionShell } from "./shared";

const CATEGORIES = [
  { name: "Account / business contact", context: "Account and business context" },
  { name: "Customer / end-user", context: "Customer-related product context" },
  { name: "Transaction / telecom", context: "Product and service context" },
  { name: "Billing / invoice", context: "Billing context" },
  { name: "Technical / device / log", context: "Technical context; source-defined scope" },
  { name: "Support / communications", context: "Support context; source-defined scope" },
  { name: "Cookie / website", context: "Website context, separate from product data" },
];

const FLOW = ["Approved source", "Source-defined purpose", "In-scope category"];

const PURPOSES = [
  { name: "Service delivery", description: "Source must establish service scope and the categories involved." },
  {
    name: "Security / fraud / abuse",
    description: "Source must establish any security-related purpose and its limits.",
  },
  { name: "Support", description: "Source must establish the support context and information in scope." },
  {
    name: "Analytics / improvement",
    description: "Source must establish any actual analytics use; it is not presumed.",
  },
  {
    name: "Legal / compliance",
    description: "Source must establish the applicable obligation and processing scope.",
  },
];

export default function DataCategoriesSection() {
  return (
    <SectionShell className="bg-white" bgImage="data-categories-bg.webp">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="02 / DATA CATEGORY ARCHITECTURE"
          title="What data is in scope? Start with context."
          description="These are content categories for source review, not an inventory of data ZoikoTax collects. Product, customer and website contexts remain distinct."
        />

        <NoticeCard
          title="Category anatomy — inclusion and scope require an approved processing source."
          description="A category does not establish permission to collect. No real values, sample payloads or field schemas are shown. Approved category scope, purpose and source are not supplied."
        />

        <div className="overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-zinc-300">
          <div className="hidden gap-6 bg-purple-100 px-6 py-4 text-xs font-bold text-violet-950 lg:grid lg:grid-cols-[2fr_2.5fr_3fr]">
            <span>CATEGORY / CONTEXT</span>
            <span>APPROVED SCOPE &amp; PURPOSE</span>
            <span>PROCESSING SOURCE</span>
          </div>
          {CATEGORIES.map((category, i) => (
            <div
              key={category.name}
              className={`grid grid-cols-1 gap-3 p-5 sm:p-6 lg:grid-cols-[2fr_2.5fr_3fr] lg:items-center lg:gap-6 ${
                i < CATEGORIES.length - 1 ? "border-b border-zinc-300" : ""
              }`}
            >
              <div className="flex flex-col gap-1.5">
                <span className="text-base text-zinc-900">{category.name}</span>
                <span className="text-xs leading-5 text-stone-500">{category.context}</span>
              </div>
              <div className="flex flex-col gap-1.5 text-sm text-stone-500">
                <span>Scope: Not supplied</span>
                <span>Purpose: Not supplied</span>
              </div>
              <Badge>Approved source not supplied</Badge>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 pt-8">
          <SectionHeading
            eyebrow="03 / PROCESSING PURPOSES"
            title="A purpose needs a source, not a generic basis."
            description="The following are source-required content domains. They do not establish actual processing uses or legal bases."
          />

          <ol className="flex flex-col gap-4 rounded-2xl bg-violet-950 p-5 sm:p-6 md:flex-row md:items-center md:gap-8">
            {FLOW.map((step, i) => (
              <li key={step} className="flex flex-1 items-center gap-5">
                <span className="flex-1 text-base font-semibold text-white sm:text-lg">{step}</span>
                {i < FLOW.length - 1 ? (
                  <ArrowRightIcon className="size-6 rotate-90 text-orange-300 md:rotate-0" />
                ) : null}
              </li>
            ))}
          </ol>

          <p className="text-sm leading-6 text-stone-500">
            Text equivalent: an approved source establishes a purpose and identifies the categories within its
            scope. This conceptual linkage does not identify an actual ZoikoTax data flow.
          </p>
        </div>

        <div className="flex flex-col">
          {PURPOSES.map((purpose) => (
            <div
              key={purpose.name}
              className="flex flex-col items-start gap-3 border-b border-zinc-300 py-5 lg:flex-row lg:items-center lg:gap-7"
            >
              <span className="text-base font-semibold text-zinc-900 lg:w-72 lg:shrink-0">{purpose.name}</span>
              <p className="flex-1 text-sm leading-6 text-stone-500 sm:text-base">{purpose.description}</p>
              <Badge>Source required</Badge>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
