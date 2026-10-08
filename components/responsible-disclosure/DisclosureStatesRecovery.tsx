import React from 'react';

export default function DisclosureStatesRecovery() {
  return (
    <div className="w-full bg-[#FAF3FF] flex flex-col">
      <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter']">
            10 · STATES &amp; RECOVERY
          </div>
          <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">
            An unavailable channel must look unavailable.
          </div>
          <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">
            Conceptual UI and communication states — not runtime behavior. An approved receiving process must define error<br />handling, privacy, attachment constraints and any receipt message.
          </div>
        </div>

        {/* Top specimen container */}
        <div className="self-stretch p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex justify-start items-start gap-8 overflow-hidden">
          <div className="w-80 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
            <div className="justify-start text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter']">
              DEFAULT · CHANNEL UNRESOLVED
            </div>
            <div className="self-stretch justify-start text-[#18141B] text-2xl font-bold font-['Inter'] leading-7">
              Reporting is unavailable.
            </div>
            <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              The approved current reporting channel is missing. No report has been sent.
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            {/* Illustrative Error */}
            <div
              style={{ backgroundColor: 'rgba(255, 240, 230, 1)' }}
              className="self-stretch p-5 rounded-lg flex flex-col justify-start items-start gap-2 overflow-hidden"
            >
              <div className="justify-start text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter']">
                ILLUSTRATIVE ERROR
              </div>
              <div className="self-stretch justify-start text-[#18141B] text-lg font-bold font-['Inter'] leading-5">
                Submission could not be confirmed.
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                Do not assume receipt. Consult the approved recovery guidance; no alternate destination is supplied.
              </div>
            </div>

            {/* Illustrative Receipt */}
            <div
              style={{ backgroundColor: 'rgba(241, 232, 247, 1)' }}
              className="self-stretch p-5 rounded-lg flex flex-col justify-start items-start gap-2 overflow-hidden"
            >
              <div className="justify-start text-[rgba(214,90,44,1)] text-xs font-bold font-['Inter']">
                ILLUSTRATIVE RECEIPT · NOT A LIVE REPORT
              </div>
              <div className="self-stretch justify-start text-[#18141B] text-lg font-bold font-['Inter'] leading-5">
                Receipt would not mean validation.
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                A future approved receipt confirms receipt only, not validity, severity or remediation. No report ID or delivery is<br />established here.
              </div>
            </div>
          </div>
        </div>

        {/* 6 Cards Grid */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-[rgba(255,255,255,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Channel available
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Show a usable destination only after it is approved and current. A compromised channel requires an approved alternate; none is supplied.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-[rgba(255,255,255,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Submission failure
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Identify the issue clearly and guide focus to it. Any safe field-preservation behavior needs approval; no autosave or storage is claimed.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-[rgba(255,255,255,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Attachment rejected
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Explain rejection using only source-defined constraints. Do not invent allowed formats, size limits or a receiving-file scanner.
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-[rgba(255,255,255,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Anonymous or no response contact
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Anonymous reports are possible only if policy permits them. Without a response contact, do not promise updates.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-[rgba(255,255,255,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Policy unavailable
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Do not replace missing policy with industry-normal terms. The approved policy source and actual route are required before launch.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-[rgba(255,255,255,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                No JavaScript or assistive technology
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                Core policy and actual approved navigation must remain useful. Persistent labels, visible focus, clear errors and readable text meanings are design requirements, not implemented guarantees.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
