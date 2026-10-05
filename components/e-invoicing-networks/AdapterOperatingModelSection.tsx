import Image from "next/image";
import { InfoDarkIcon } from "./icons";

const steps = [
  { num: "01", mark: "→", title: "Prepare", sub: "Establish source context", desc: "Use the governed source schema; do not infer a public production payload." },
  { num: "02", mark: "→", title: "Transform", sub: "Apply supported mapping", desc: "Document formats and field mappings come only from exact adapter documentation." },
  { num: "03", mark: "→", title: "Validate", sub: "Check defined constraints", desc: "Supported validation is not an assertion of legal correctness." },
  { num: "04", mark: "→", title: "Route", sub: "Select an approved path", desc: "Country, network, capability and environment routing are Coverage-controlled." },
  { num: "05", mark: "→", title: "Submit", sub: "Use approved transport", desc: "Submission behavior and requirements are defined by the adapter’s technical contract." },
  { num: "06", mark: "→", title: "Receive", sub: "Preserve response context", desc: "External codes and timing remain source-defined; absence of a response is unresolved." },
  { num: "07", mark: "→", title: "Normalize", sub: "Apply approved mapping", desc: "Normalized meaning must retain its original adapter context and mapping source." },
  { num: "08", mark: "•", title: "Evidence", sub: "Preserve supported trace", desc: "Keep versioned context and sanitized diagnostics within approved visibility boundaries." },
];

export default function AdapterOperatingModelSection() {
  return (
    <div className="relative w-full flex justify-center py-20 bg-[#120327] overflow-hidden">
      {/* Section background image */}
      <Image
        src="/e-invoicing-networks/Adapter operating model.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[#120327]/[0.76]" />
      <div className="relative w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="relative self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase">02 / Adapter operating model</div>
        <h2 className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">A governed path, not a universal protocol.</h2>
        <p className="w-full max-w-[1120px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Prepare → Transform → Validate → Route → Submit → Receive → Normalize → Evidence. A normalized pattern does not mean every external authority follows identical steps.</p>
      </div>
      <div className="relative self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4 overflow-hidden">
        {steps.map((step) => (
          <div key={step.num} className="self-stretch p-6 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#63477A] inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">{step.num}</div>
              <div className="flex justify-center items-center h-5 w-5">
                {step.num === "08" ? (
                  <div className="w-1 h-1 bg-orange-300 rounded-full" />
                ) : (
                  <img src="/e-invoicing-networks/icons/arrow-right.svg" alt="" width={16} height={16} className="shrink-0" />
                )}
              </div>
            </div>
            <div className="self-stretch justify-start text-white text-2xl font-semibold font-['Inter']">{step.title}</div>
            <div className="self-stretch justify-start text-white text-base font-semibold font-['Inter'] leading-5">{step.sub}</div>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">{step.desc}</p>
          </div>
        ))}
      </div>
      <div className="relative self-stretch p-6 bg-[#301153] rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <InfoDarkIcon className="size-5 shrink-0" />
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
          <div className="self-stretch justify-start text-white text-base font-semibold font-['Inter']">Implementation follows the exact adapter contract.</div>
          <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">The numbered text above is the diagram’s ordered equivalent. It describes conceptual purposes and boundaries, not a mandatory sequence, a legal timing rule or a published network protocol.</p>
        </div>
      </div>
      </div>
    </div>
  );
}
