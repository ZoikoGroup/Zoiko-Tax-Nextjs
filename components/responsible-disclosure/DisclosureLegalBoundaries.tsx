import React from 'react';

export default function DisclosureLegalBoundaries() {
  return (
    <div
      style={{
        backgroundImage: "url('/responsible-disclosure/Legal%20safe%20harbor%20and%20bounty%20boundary%20(1).png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="w-full flex flex-col"
    >
      <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter']">
            08 · LEGAL &amp; PROGRAM BOUNDARIES
          </div>
          <div className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.30px]">
            Legal protection and rewards cannot be inferred.
          </div>
          <div className="w-[1040px] justify-start text-[rgba(217,208,223,1)] text-lg font-normal font-['Inter'] leading-7">
            Approved safe-harbor and bounty terms are not established by supplied sources. This is a source limitation, not a<br />statement that ZoikoTax does or does not operate a program.
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#624573] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter']">
                EXACT LEGAL SOURCE REQUIRED
              </div>
              <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-6">
                Safe harbor &amp; authorization
              </div>
              <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">
                Only approved Legal terms can establish permission, protection or liability boundaries. Reporting alone supplies none. No law-enforcement guarantee is made.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#624573] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter']">
                FORMAL PROGRAM SOURCE REQUIRED
              </div>
              <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-6">
                Bounty &amp; recognition
              </div>
              <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">
                A monetary or recognition program requires approved published terms. No eligibility, payment, reward tier, payout or hall-of-fame terms are established here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
