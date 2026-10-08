import React from 'react';

export default function DisclosureRightIntent() {
  return (
    <div
      style={{
        backgroundImage: "url('/responsible-disclosure/Next%20Trust%20routes%20(1).png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
      className="w-full flex flex-col"
    >
      <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-[rgba(244,162,97,1)] text-xs font-bold font-['Inter']">
            12 · CONTINUE WITH THE RIGHT INTENT
          </div>
          <div className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.30px]">
            Reporting guidance first. Trust evidence separately.
          </div>
          <div className="w-[1040px] justify-start text-[rgba(217,208,223,1)] text-lg font-normal font-['Inter'] leading-7">
            Vulnerability reporting, security evidence, privacy and support are distinct intents. Do not send a vulnerability<br />report through a sales or procurement path.
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
          <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch justify-start text-white text-2xl font-bold font-['Inter'] leading-7">
              Reporting policy &amp; channel guidance
            </div>
            <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">
              Return to the reporting anatomy and source requirements. The actual approved reporting route remains unresolved.
            </div>
            <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-xs font-normal font-['Inter'] leading-5">
              /trust/responsible-disclosure/
            </div>
            <div className="h-12 px-5 bg-[#BF6735] rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 inline-flex justify-start items-center gap-2 overflow-hidden">
              <div className="justify-start text-white text-sm font-semibold font-['Inter']">
                Review reporting guidance
              </div>
              <div className="size-4 relative overflow-hidden">
                <img
                  src="/responsible-disclosure/icons/arrow-right-1.svg"
                  alt="arrow"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch justify-start text-white text-2xl font-bold font-['Inter'] leading-7">
              Security
            </div>
            <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">
              Explore security evidence and context. This is not a vulnerability submission endpoint.
            </div>
            <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-xs font-normal font-['Inter'] leading-5">
              /trust/security/
            </div>
            <div className="size- px-6 py-4 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-center gap-3 overflow-hidden">
              <div className="justify-start text-[#18141B] text-sm font-semibold font-['Inter']">
                View Security
              </div>
              <div className="size-4 relative overflow-hidden">
                <img
                  src="/responsible-disclosure/icons/arrow-right.svg"
                  alt="arrow"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
            <div className="self-stretch justify-start text-white text-2xl font-bold font-['Inter'] leading-7">
              Trust Center
            </div>
            <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">
              Find the broader Trust hierarchy. Privacy and procurement requests remain separate from reporting.
            </div>
            <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-xs font-normal font-['Inter'] leading-5">
              /trust/
            </div>
            <div className="size- px-6 py-4 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-center gap-3 overflow-hidden">
              <div className="justify-start text-[#18141B] text-sm font-semibold font-['Inter']">
                View Trust Center
              </div>
              <div className="size-4 relative overflow-hidden">
                <img
                  src="/responsible-disclosure/icons/arrow-right.svg"
                  alt="arrow"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
