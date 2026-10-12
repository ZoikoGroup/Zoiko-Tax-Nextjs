import { ArrowLeftRight } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const MODELS = [
  { title: "Native", description: "Use ZoikoTax capabilities directly where supported and activated." },
  {
    title: "Federated",
    description: "Coordinate governed fiscal context across multiple systems of record.",
  },
  {
    title: "Shadow Assurance",
    description: "Compare agreed outcomes before any production impact or cutover.",
    featured: true,
  },
  {
    title: "OEM / Embedded",
    description: "Embed bounded fiscal controls within a provider or product experience.",
  },
  {
    title: "Managed Compliance",
    description: "Operate with defined service, review and evidence boundaries.",
  },
];

const BOUNDARIES = [
  {
    title: "Billing & BSS",
    description: "Source and downstream operational positions; not replaced by ZoikoTax.",
  },
  {
    title: "Existing Tax Engines",
    description: "Incumbent outcomes can be compared; engines are not automatically displaced.",
  },
  {
    title: "ERP / General Ledger",
    description: "Accounting-control positions remain in the enterprise finance stack.",
  },
  {
    title: "Filing / Remittance context",
    description: "Downstream filing and payment context is linked where available.",
  },
  {
    title: "Data / Batch / Enterprise systems",
    description: "Governed integration preserves source identity and timing.",
  },
  {
    title: "Evidence / Trust",
    description: "Evidence supports review but does not replace audit, legal or tax judgment.",
  },
];

export default function OperatingModelsSection() {
  return (
    <SectionShell className="bg-white" bgImage="operating-bg.webp">
      <SectionHeading
        eyebrow="Operating models and modernization paths"
        title="Fit the telecom fiscal architecture already in place."
        description="Deploy ZoikoTax as a telecom fiscal-control layer through native, federated, shadow, embedded or managed paths—without presenting it as a replacement for every surrounding system."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {MODELS.map((model, i) => (
          <div
            key={model.title}
            className={`flex flex-col gap-3 rounded-2xl p-5 outline -outline-offset-1 xl:min-h-48 ${i === MODELS.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""} ${
              model.featured ? "bg-purple-100 outline-orange-600" : "bg-white outline-zinc-300"
            }`}
          >
            <h3 className="text-lg font-bold leading-6 text-zinc-900">{model.title}</h3>
            <p className="text-xs leading-5 text-stone-500">{model.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-5 sm:p-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-white sm:text-[28px]">System boundaries stay visible.</h3>
          <p className="text-sm leading-6 text-zinc-300">
            ZoikoTax connects control context; it does not replace billing, tax engines, ERP / GL, audit, or legal /
            tax review.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BOUNDARIES.map((boundary) => (
            <div
              key={boundary.title}
              className="flex flex-col items-start gap-3.5 rounded-2xl bg-white/5 p-5 outline -outline-offset-1 outline-white/15 sm:p-6"
            >
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-white/10">
                <ArrowLeftRight aria-hidden="true" className="size-4 text-orange-300" strokeWidth={1.5} />
              </span>
              <h4 className="text-lg font-bold text-white sm:text-xl">{boundary.title}</h4>
              <p className="text-sm leading-6 text-zinc-300">{boundary.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
