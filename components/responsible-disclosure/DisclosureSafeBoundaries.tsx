import React from 'react';

export default function DisclosureSafeBoundaries() {
  return (
<div style={{ backgroundImage: "url('/responsible-disclosure/Good-faith reporting boundaries.png')", backgroundSize: "cover", backgroundPosition: "center" }} className="w-full flex flex-col">
    <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
    <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter']">03 · SAFE REPORTING BOUNDARIES</div>
        <div className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.30px]">Reporting is not authorization to test.</div>
        <div className="w-[1040px] justify-start text-[rgba(217,208,223,1)] text-lg font-normal font-['Inter'] leading-7">Any permitted testing must be defined in the exact approved policy. Good intent alone does not establish <br/> permission, legal protection or access to customer data.</div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#624573] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter']">MINIMUM NECESSARY</div>
                <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-6">Stop at minimal proof</div>
                <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">Avoid disruption and stop when the concern can be described safely. Do not pursue unrelated access or collect customer data to make a report more convincing.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#624573] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter']">NO IMPLIED PERMISSION</div>
                <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-6">Do not infer allowed methods</div>
                <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">DoS, social or physical testing, scanning, persistence and lateral movement require exact policy treatment. None is authorized by this design.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#624573] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter']">PROTECT THE EVIDENCE</div>
                <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-6">Keep sensitive details private</div>
                <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">Use only an approved protected reporting process for exploit evidence. Do not post payloads, secrets or sensitive reproduction details publicly.</div>
            </div>
        </div>
    </div>
    <div className="self-stretch p-6 bg-[#301153] rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
        <div className="size-5 relative overflow-hidden">
            <img src="/responsible-disclosure/info%20(3).svg" alt="info" className="w-full h-full object-contain" />
        </div>
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="self-stretch justify-start text-white text-lg font-bold font-['Inter'] leading-5">No test instructions or rates are established here</div>
            <div className="self-stretch justify-start text-[rgba(217,208,223,1)] text-base font-normal font-['Inter'] leading-6">Non-disruptive testing is permitted only when approved. This page supplies no scanning permission, test rate, safe-harbor promise or conformance claim.</div>
        </div>
    </div>
</div>
</div>
  );
}
