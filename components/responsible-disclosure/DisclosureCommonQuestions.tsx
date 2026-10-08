import React from 'react';

export default function DisclosureCommonQuestions() {
  return (
    <div
      style={{
        backgroundImage: "url('/existing-tax-engines/0.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full flex flex-col"
    >
      <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">
            11 · COMMON QUESTIONS
          </div>
          <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">
            Direct answers. No inferred terms.
          </div>
          <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">
            The approved current policy is the authority. Where its facts are missing, the answer is source required — not an<br />industry assumption.
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch py-7 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-12 overflow-hidden">
            <div className="w-96 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                How do I report a vulnerability?
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Use the current approved reporting policy and its verified channel. Prepare minimal, redacted details first.<br />Approved channel details are not supplied in this design; no report can be sent here.
              </div>
            </div>
          </div>
          <div className="self-stretch py-7 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-12 overflow-hidden">
            <div className="w-96 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Is there a bug bounty program?
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Approved bounty terms are not established by the supplied sources. Do not infer eligibility, payment or<br />recognition from a public reporting channel. Consult formal approved program terms if published.
              </div>
            </div>
          </div>
          <div className="self-stretch py-7 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-12 overflow-hidden">
            <div className="w-96 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Which systems are in scope?
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                No approved asset scope is supplied. Only the exact current published inventory and conditions can establish<br />scope. A reachable asset, customer environment or sandbox is not automatically included or authorized for<br />testing.
              </div>
            </div>
          </div>
          <div className="self-stretch py-7 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-12 overflow-hidden">
            <div className="w-96 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                What should I include in a report?
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                An issue summary, safe affected-surface category, observed impact, minimal safe reproduction and redacted<br />evidence. Include environment or version details only as needed, contact only as policy-required and prior<br />disclosure only if approved. Never send secrets or full datasets.
              </div>
            </div>
          </div>
          <div className="self-stretch py-7 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-12 overflow-hidden">
            <div className="w-96 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Can I publicly disclose a finding?
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Public disclosure must follow approved communication and confidentiality terms. No deadline, embargo or<br />permission is established here. Do not publicly post sensitive data or exploit evidence.
              </div>
            </div>
          </div>
          <div className="self-stretch py-7 inline-flex justify-start items-start gap-12 overflow-hidden">
            <div className="w-96 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Does ZoikoTax provide safe harbor?
              </div>
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start overflow-hidden">
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Approved safe-harbor terms are not established by supplied sources. Only exact approved Legal terms can<br />establish authorization or protection. Reporting is not permission to test, and no law-enforcement promise is<br />made.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
