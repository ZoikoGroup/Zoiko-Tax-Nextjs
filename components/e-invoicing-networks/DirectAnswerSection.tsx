export default function DirectAnswerSection() {
  return (
    <div className="self-stretch px-20 py-14 bg-purple-50 inline-flex justify-start items-start gap-16 overflow-hidden">
      <div className="w-96 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
        <div className="justify-start text-orange-600 text-xs font-bold font-['Inter'] uppercase">Direct answer</div>
        <div className="self-stretch justify-start text-zinc-900 text-3xl font-bold font-['Inter'] leading-9">What are E-Invoicing Networks?</div>
      </div>
      <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
        <p className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">This is developer-facing architecture and implementation guidance for connecting governed invoice-related workflows to approved external networks and authorities. ZoikoTax adapters apply supported transformation, routing and integration logic within an enterprise workflow.</p>
        <p className="self-stretch justify-start text-violet-950 text-base font-semibold font-['Inter'] leading-6">A pattern alone never confirms production support.</p>
      </div>
    </div>
  );
}
