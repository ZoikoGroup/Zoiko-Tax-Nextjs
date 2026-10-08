import React from 'react';

export default function DisclosurePath() {
  return (
<div className="w-full flex flex-col">
    <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
    <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">01 · FIND THE RIGHT PATH</div>
        <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">A security finding needs a security route.</div>
        <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">Use the source-defined vulnerability process once its current channel is approved. The categories below help <br/> distinguish reporting intents; they do not define asset scope or grant permission to test.</div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="size-6 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/file-warning.svg" alt="icon" className="w-full h-full object-contain" />
                </div>
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">Product or platform vulnerability</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Describe the suspected security behavior and observed impact. Confirm the affected surface against the exact approved asset scope before further action.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="size-6 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/key-round.svg" alt="icon" className="w-full h-full object-contain" />
                </div>
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">API or authentication issue</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Include only minimal, safe reproduction details. Do not send live credentials, access tokens or another person’s session data.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="size-6 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/lock-keyhole.svg" alt="icon" className="w-full h-full object-contain" />
                </div>
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">Potential data exposure</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Stop at the minimum necessary proof. Do not extract, retain or share unnecessary customer, taxpayer or payment data.</div>
            </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="size-6 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/settings-2.svg" alt="icon" className="w-full h-full object-contain" />
                </div>
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">Customer configuration or support</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">A customer misconfiguration is not automatically a platform vulnerability. Use an approved support route when appropriate; its destination is not supplied here.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="size-6 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/signpost.svg" alt="icon" className="w-full h-full object-contain" />
                </div>
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">Phishing, social or physical concerns</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Route these concerns only when the approved policy includes them. Their mention here does not authorize social engineering or physical testing.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="size-6 relative overflow-hidden">
    <img src="/responsible-disclosure/icons/file-text.svg" alt="icon" className="w-full h-full object-contain" />
                </div>
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">Fraud, abuse or other concerns</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Use a separate route only if it is registered and approved. Procurement, privacy and general support requests are not vulnerability reports.</div>
            </div>
        </div>
    </div>
    <div style={{ backgroundColor: "rgba(255, 240, 230, 1)" }} className="self-stretch p-6 rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <div className="size-5 relative overflow-hidden">
    <img src="/responsible-disclosure/info%20(3).svg" alt="info" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-[#18141B] text-lg font-bold font-['Inter'] leading-5">Where and how can I report?</div>
            <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">First consult the current approved reporting policy, confirm scope and prepare minimal redacted evidence. Then use its verified reporting channel. That channel is unresolved in this design, so no report can be sent here.</div>
        </div>
    </div>
</div>
</div>
  );
}
