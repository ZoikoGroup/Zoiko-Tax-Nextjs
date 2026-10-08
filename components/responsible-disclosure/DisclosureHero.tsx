import React from 'react';

export default function DisclosureHero() {
  return (
<div className="w-full flex flex-col justify-start items-start overflow-hidden">
    <div style={{ backgroundImage: "url('/responsible-disclosure/Hero (2).png')", backgroundSize: "cover", backgroundPosition: "center" }}
      className="w-full h-[770px] bg-gradient-to-r from-stone-100/95 via-gray-200/90 to-gray-200/10 flex flex-col justify-center items-start gap-12 overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-20 pt-8 pb-14 h-full flex flex-col justify-center">
        <div className="self-stretch inline-flex justify-start items-center gap-16">
            <div className="w-[760px] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">TRUST · RESPONSIBLE DISCLOSURE</div>
                <div className="self-stretch justify-start text-[#18141B] text-6xl font-bold font-['Inter'] leading-[60.90px]">Report security <br/> vulnerabilities through a <br/> governed channel.</div>
                <div className="self-stretch justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">Use the approved ZoikoTax vulnerability-reporting process to share potential <br/> security findings while minimizing sensitive data and avoiding unsupported <br/> assumptions about scope, bounty, testing authorization or response timing.</div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
                    <div className="size- inline-flex justify-start items-start gap-3 overflow-hidden">
                        <div className="size- px-6 py-4 bg-[#BF6735] rounded-[999px] outline outline-1 outline-offset-[-1px] outline-black/0 flex justify-start items-center gap-3 overflow-hidden">
                            <div className="justify-start text-white text-sm font-semibold font-['Inter']">Report a security vulnerability</div>
                            <div className="size-4 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/arrow-right-1.svg" alt="arrow" className="w-full h-full object-contain" />
                            </div>
                        </div>
                        <div className="size- px-6 py-4 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex justify-start items-center gap-3 overflow-hidden">
                            <div className="justify-start text-[#18141B] text-sm font-semibold font-['Inter']">View reporting policy</div>
                            <div className="size-4 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/arrow-right.svg" alt="arrow" className="w-full h-full object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-1 inline-flex text-[#D65A2C] text-base font-semibold font-['Inter']">
                        <span>Security</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33594 7.99923H12.6703M8.00314 12.6664L12.6703 7.99923L8.00314 3.33203" stroke="#D65A2C" strokeWidth="1.7" strokeLinecap="round"/>
                        </svg>
                    </div>
                    <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">The report action leads to the guidance below. It is not a submission endpoint.</div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}
