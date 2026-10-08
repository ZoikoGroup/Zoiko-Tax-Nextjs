import React from 'react';

export default function DisclosureReviewPrinciples() {
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
            06 · REVIEW PRINCIPLES
          </div>
          <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">
            Assess the finding, not the reporter’s reputation.
          </div>
          <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">
            Severity, duplicate handling and abuse safeguards are source-governed. No severity scheme, scoring method or<br />public program terms are supplied.
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Severity &amp; duplicates
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Use only an approved assessment method. Do not assume CVSS, a priority level or a reward. Duplicate acknowledgement, if offered, follows approved communication terms.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Noise &amp; non-security issues
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Keep communication respectful and informative. Route non-security issues to an approved support destination when registered; no support URL is established here.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Abuse &amp; reporter privacy
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Any abuse protection must remain accessible; no rate limits are specified. Threats are handled internally without public operational details. Do not expose other reporters’ data or build leaderboards.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
