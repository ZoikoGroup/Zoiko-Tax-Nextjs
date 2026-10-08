const fields = [
  { field: "request_id", purpose: "Request correlation", desc: "Links an enterprise request to its supported integration trace." },
  { field: "document_id", purpose: "Fiscal document correlation", desc: "Connects the conceptual fiscal document to its source context." },
  { field: "external_reference", purpose: "External response linkage", desc: "Links an approved external reference where available and visible." },
  { field: "submission_state", purpose: "Submission context", desc: "Describes the supported state of the submission path." },
  { field: "acknowledgement", purpose: "Receipt / processing context", desc: "Preserves the approved acknowledgement and its meaning." },
  { field: "final_state", purpose: "Conditional outcome", desc: "Carries an outcome only when defined by the approved adapter." },
  { field: "updated_at", purpose: "Source-controlled currentness", desc: "Uses an exact-source timestamp only where supplied and approved." },
  { field: "evidence_link", purpose: "Investigation linkage", desc: "Connects to evidence within approved display and access rights." },
];

export default function IdentifiersSection() {
  return (
    <div className="w-full flex justify-center py-20 bg-[#FAF3FF] overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">05 / Identifiers &amp; correlation</div>
        <h2 className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[48.40px]">Link the context. Keep the payload private.</h2>
        <p className="w-full max-w-[1120px] justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">
          Correlate enterprise source, request, fiscal document, external response and evidence without exposing invoice<br />content or private identifiers.
        </p>
      </div>
      <div className="self-stretch p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
          <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Conceptual fields · not a production schema</div>
          <div className="justify-start text-stone-500 text-xs font-normal font-['Inter']">All values: not supplied</div>
        </div>
        <div className="self-stretch py-3 bg-violet-100 inline-flex justify-start items-start gap-6 overflow-hidden">
          <div className="w-60 justify-start text-violet-950 text-xs font-semibold font-['Inter']">Conceptual field</div>
          <div className="w-64 justify-start text-violet-950 text-xs font-semibold font-['Inter']">Purpose</div>
          <div className="flex-1 justify-start text-violet-950 text-xs font-semibold font-['Inter']">Description / boundary</div>
        </div>
        {fields.map((row) => (
          <div key={row.field} className="self-stretch py-3.5 border-b border-zinc-300 inline-flex justify-start items-start gap-6 overflow-hidden">
            <div className="w-60 justify-start text-violet-950 text-sm font-normal font-['JetBrains_Mono']">{row.field}</div>
            <div className="w-64 justify-start text-zinc-900 text-base font-medium font-['Inter'] leading-5">{row.purpose}</div>
            <div className="flex-1 justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">{row.desc}</div>
          </div>
        ))}
        <p className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Neutral placeholders do not assert an identifier format, required field, actual value or API schema. Exact mappings and display rights are controlled by the adapter documentation.</p>
      </div>
      </div>
    </div>
  );
}
