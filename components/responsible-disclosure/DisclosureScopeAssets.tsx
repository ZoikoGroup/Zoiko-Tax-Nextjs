import React from 'react';

export default function DisclosureScopeAssets() {
  return (
<div style={{ backgroundImage: "url('/existing-tax-engines/0.png')", backgroundSize: "cover", backgroundPosition: "center" }} className="w-full flex flex-col">
    <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
    <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">02 · SCOPE &amp; ASSETS</div>
        <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">Scope must be exact. Authorization must be explicit.</div>
        <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">No approved asset scope supplied. Do not infer ownership, currentness or testing permission from a product name, a <br/> public route or a reachable environment.</div>
    </div>
    <div className="self-stretch px-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">Current owned assets &amp; conditions</div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Source required · Exact assets, ownership and allowed conditions are not published.</div>
        </div>
        <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">Excluded assets &amp; activities</div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Source required · Exclusions must be stated by the approved policy, not inferred.</div>
        </div>
        <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">Sandbox or test environments</div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Not published · A sandbox is included only when expressly approved.</div>
        </div>
        <div className="self-stretch py-5 border-b border-[#D8CEDD] inline-flex justify-start items-start gap-8 overflow-hidden">
            <div className="w-80 justify-start text-[#18141B] text-base font-semibold font-['Inter']">Retired or superseded assets</div>
            <div className="flex-1 justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Source required · Historical references do not establish current scope.</div>
        </div>
    </div>
    <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">Third-party systems</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Third-party ownership is separate. ZoikoTax reporting guidance does not authorize testing another organization’s systems.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">Customer environments</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Customer systems and data require their own authorization. A reporting channel does not grant access to them.</div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">An unknown asset</div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">Seek scope clarification through an approved route when one is supplied. An unanswered scope question is not authorization to test.</div>
            </div>
        </div>
    </div>
</div>
</div>
  );
}
