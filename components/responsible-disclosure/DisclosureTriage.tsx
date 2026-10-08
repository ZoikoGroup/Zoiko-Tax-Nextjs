import React from 'react';

export default function DisclosureTriage() {
  return (
    <div className="w-full bg-[#FAF3FF] flex flex-col">
      <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">
            05 · TRIAGE &amp; REMEDIATION
          </div>
          <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">
            Receipt is not validation. Review is not a deadline.
          </div>
          <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">
            Conceptual, externally governed status taxonomy — not live report status. These text meanings are illustrative and<br />require approved policy before use in reporter communications.
          </div>
        </div>

        <div className="self-stretch p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-center gap-8 overflow-hidden">
            <div className="w-64 px-4 py-2.5 bg-[#EFE9F4] rounded-lg flex justify-start items-start overflow-hidden">
              <div className="justify-start text-[#301153] text-xs font-bold font-['Inter']">
                RECEIVED
              </div>
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Receipt only; the finding has not been validated.
            </div>
          </div>

          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-center gap-8 overflow-hidden">
            <div className="w-64 px-4 py-2.5 bg-[#EFE9F4] rounded-lg flex justify-start items-start overflow-hidden">
              <div className="justify-start text-[#301153] text-xs font-bold font-['Inter']">
                UNDER REVIEW
              </div>
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              The report is being assessed under the approved process. No outcome or severity is implied.
            </div>
          </div>

          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-center gap-8 overflow-hidden">
            <div className="w-64 px-4 py-2.5 bg-[#EFE9F4] rounded-lg flex justify-start items-start overflow-hidden">
              <div className="justify-start text-[#301153] text-xs font-bold font-['Inter']">
                NEEDS INFO
              </div>
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Only minimal, safe additional details should be requested through the approved channel.
            </div>
          </div>

          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-center gap-8 overflow-hidden">
            <div className="w-64 px-4 py-2.5 bg-[#EFE9F4] rounded-lg flex justify-start items-start overflow-hidden">
              <div className="justify-start text-[#301153] text-xs font-bold font-['Inter']">
                VALIDATED
              </div>
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Use externally only when approved. Validation does not establish a guaranteed severity.
            </div>
          </div>

          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-center gap-8 overflow-hidden">
            <div className="w-64 px-4 py-2.5 bg-[#EFE9F4] rounded-lg flex justify-start items-start overflow-hidden">
              <div className="justify-start text-[#301153] text-xs font-bold font-['Inter']">
                REMEDIATION
              </div>
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Work is governed by the actual policy and engineering process; no date is implied.
            </div>
          </div>

          <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-center gap-8 overflow-hidden">
            <div className="w-64 px-4 py-2.5 bg-[#EFE9F4] rounded-lg flex justify-start items-start overflow-hidden">
              <div className="justify-start text-[#301153] text-xs font-bold font-['Inter']">
                RESOLVED / CLOSED
              </div>
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              The reason for resolution or closure must follow approved communication policy.
            </div>
          </div>

          <div className="self-stretch py-5 inline-flex justify-start items-center gap-8 overflow-hidden">
            <div className="w-64 px-4 py-2.5 bg-[#EFE9F4] rounded-lg flex justify-start items-start overflow-hidden">
              <div className="justify-start text-[#301153] text-xs font-bold font-['Inter']">
                DISCLOSED / ADVISORY
              </div>
            </div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Public communication occurs only through an approved disclosure or advisory process.
            </div>
          </div>
        </div>

        {/* Notice box */}
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
              No acknowledgement, update or remediation timeline is established
            </div>
            <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Timing and externally visible status language must come from the current approved policy. This specimen does not guarantee a response or an outcome.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
