import React from 'react';

export default function DisclosurePolicyAuthority() {
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
            09 · POLICY AUTHORITY
          </div>
          <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">
            Use the current registered source, not a specimen.
          </div>
          <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">
            Reporting policy, scope and channel details must be owned, approved and source-controlled. This design does not<br />publish a policy version or substitute for the authoritative policy.
          </div>
        </div>
        <div className="self-stretch px-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">
              Policy source &amp; version
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Not published · Source required
            </div>
          </div>
          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">
              Effective date &amp; review date
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Not published · Source required
            </div>
          </div>
          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">
              Policy owner &amp; approval
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Source required · No approved public owner or contact supplied
            </div>
          </div>
          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">
              Channel ownership &amp; currentness
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Source required · No verified reporting destination supplied
            </div>
          </div>
          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">
              Asset scope &amp; exclusions
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Source required · No approved inventory supplied
            </div>
          </div>
          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">
              Protected transfer &amp; encryption
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Not published · No approved key or method supplied
            </div>
          </div>
          <div className="self-stretch py-5 inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">
              Approved historical archive
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Not published · Superseded specimens must be labeled historical
            </div>
          </div>
        </div>
        <div
          style={{ backgroundColor: 'rgba(255, 240, 230, 1)' }}
          className="self-stretch p-6 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden"
        >
          <div className="size-5 relative shrink-0 overflow-hidden">
            <img
              src="/responsible-disclosure/info%20(3).svg"
              alt="info"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-[#18141B] text-lg font-bold font-['Inter'] leading-5">
              Public launch is blocked until the policy and channel are approved
            </div>
            <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              A missing, dead or stale channel, scope reference or encryption key must not be presented as usable. Publish only the current registered source; CMS content cannot originate security or legal facts.
            </div>
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-6 overflow-hidden">
          <div className="size- px-6 py-4 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex justify-start items-center gap-3 overflow-hidden">
            <div className="justify-start text-[#18141B] text-sm font-semibold font-['Inter']">
              Security evidence
            </div>
            <div className="size-4 relative overflow-hidden">
              <img
                src="/responsible-disclosure/icons/arrow-right.svg"
                alt="arrow"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex-1 justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
            Security evidence belongs in Security and the Trust Center. It is separate from vulnerability reporting.
          </div>
        </div>
      </div>
    </div>
  );
}
