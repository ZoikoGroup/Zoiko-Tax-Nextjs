import { CircleAlert } from "lucide-react";
import { PendingNote, ROUTES, RouteLink, SectionHeading, SectionShell } from "./shared";

const HELPS = [
  {
    title: "Your business goal",
    description: "A concise description of what you are evaluating or the commercial decision you need to make.",
  },
  {
    title: "The question to coordinate",
    description:
      "The non-sensitive commercial topic you want to discuss—not a tax calculation, support case or vulnerability report.",
  },
  {
    title: "Relevant evaluation scope",
    description:
      "High-level context only. Evaluation scope is not a statement that a market or capability is production-supported.",
  },
];

const FIELDS = [
  {
    id: "name",
    label: "Name",
    hint: "Identification purpose and required-field rule are not yet approved.",
  },
  {
    id: "email",
    label: "Work email",
    hint: "Only if an approved process needs a contact address. Contact need and validation rules remain pending.",
  },
];

const FIELD = "w-full cursor-not-allowed rounded-lg bg-neutral-100 p-4 text-sm text-stone-500 outline -outline-offset-1 outline-zinc-300";

export default function IntakeSection() {
  return (
    <SectionShell id="commercial-inquiry" className="bg-white" bgImage="intake-bg.webp">
      <SectionHeading
        eyebrow="Commercial inquiry"
        title="A governed handoff. Only when approved."
        description="The page remains useful without a form. No approved public Sales Inquiry intake is configured in this design."
      />

      <div className="flex items-start gap-4 rounded-2xl bg-orange-50 p-5 outline -outline-offset-1 outline-red-300 sm:gap-5 sm:p-6">
        <CircleAlert aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-amber-800" strokeWidth={2} />
        <div className="flex flex-1 flex-col gap-2">
          <p className="text-base font-bold text-zinc-900">Not activated · approved intake required</p>
          <p className="text-base leading-6 text-yellow-900">
            The public Sales Inquiry workflow is temporarily unavailable. Use the approved alternative routes shown on
            this page; do not rely on unverified contact details.
          </p>
          <p className="text-sm leading-5 text-stone-500">
            Here, unavailable means the approved workflow has not been configured—not a reported provider outage.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex flex-col gap-7 lg:w-[480px] lg:shrink-0">
          <h3 className="text-2xl font-bold leading-9 text-zinc-900 sm:text-3xl">What information helps?</h3>
          <p className="text-base leading-7 text-stone-500">
            If an approved intake becomes available, share only the context necessary to explain the commercial
            question.
          </p>
          {HELPS.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 border-t border-zinc-300 pt-5">
              <h4 className="text-lg font-bold text-zinc-900">{item.title}</h4>
              <p className="text-base leading-7 text-stone-500">{item.description}</p>
            </div>
          ))}
          <div className="flex flex-col items-start gap-2.5 rounded-2xl bg-[#301153] p-6">
            <h4 className="text-lg font-bold text-white">No documents or sensitive records</h4>
            <p className="text-sm leading-5 text-zinc-300">
              Do not upload RFPs, contracts, bank, customer or tax documents here. Support logs belong with Customer
              Support; vulnerability details belong with Responsible Disclosure.
            </p>
            <RouteLink dark label="Customer Support" href={ROUTES.support} />
            <PendingNote dark>Responsible Disclosure · route pending</PendingNote>
          </div>
        </div>

        {/* Static, disabled preview: fields cannot be edited and nothing is submitted. */}
        <div className="flex flex-1 flex-col gap-6 rounded-3xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-8">
          <p className="text-sm font-bold text-orange-600">Intake preview · approval required</p>
          <h3 className="text-2xl font-bold text-zinc-900 sm:text-3xl">Commercial question</h3>
          <p className="text-sm leading-5 text-stone-500">
            Static, disabled example. No information can be entered or sent. Fields, required rules and contact purpose
            await approval.
          </p>
          <fieldset disabled className="flex flex-col gap-6">
            {FIELDS.map((field) => (
              <div key={field.id} className="flex flex-col gap-2">
                <label htmlFor={`preview-${field.id}`} className="text-base font-semibold text-zinc-900">
                  {field.label}
                </label>
                <input
                  id={`preview-${field.id}`}
                  type="text"
                  placeholder="Not available in this preview"
                  className={`${FIELD} h-12 placeholder:text-stone-500`}
                />
                <p className="text-sm leading-5 text-stone-500">{field.hint}</p>
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <label htmlFor="preview-question" className="text-base font-semibold text-zinc-900">
                Commercial question · optional draft field
              </label>
              <textarea
                id="preview-question"
                rows={4}
                placeholder="Brief, non-sensitive business context only"
                className={`${FIELD} resize-none placeholder:text-stone-500`}
              />
              <p className="text-sm leading-5 text-stone-500">
                Keep it concise and limited to necessary business context. No backend character limit is established.
              </p>
            </div>
          </fieldset>
          <div className="flex flex-col gap-2 rounded-lg bg-orange-50 p-4">
            <p className="text-sm font-bold text-amber-900">Do not submit sensitive information</p>
            <p className="text-sm leading-5 text-yellow-900">
              Do not include passwords, API keys, taxpayer/customer records, payment data, support logs, or
              vulnerability details in a sales inquiry.
            </p>
          </div>
          <p className="text-sm leading-5 text-stone-500">
            Privacy notice, policy destination and any acknowledgment copy await Legal and privacy approval. Marketing
            permission, if offered, must be separate, optional and unchecked.
          </p>
          <button
            type="button"
            disabled
            className="h-12 self-start rounded-[999px] bg-[#EEE5F4] px-5 text-sm font-semibold text-stone-500 outline -outline-offset-1 outline-zinc-300"
          >
            Start a sales inquiry
          </button>
          <p className="text-sm font-semibold text-stone-500">Preview only · no data sent</p>
        </div>
      </div>
    </SectionShell>
  );
}
