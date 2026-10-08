import React from 'react';

export default function DisclosureCoordinated() {
  return (
    <div className="w-full bg-[#FAF3FF] flex flex-col">
      <div className="mx-auto w-full max-w-[1440px] px-20 py-20 flex flex-col justify-start items-start gap-8 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">
            07 · COORDINATED DISCLOSURE
          </div>
          <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px] xl:whitespace-nowrap">
            Disclosure needs an approved communication process.
          </div>
          <div className="w-[1040px] justify-start text-[rgba(102,95,105,1)] text-lg font-normal font-['Inter'] leading-7">
            Confidentiality expectations and public disclosure conditions must come from approved sources. Do not assume a<br />default deadline, an embargo or indefinite silence.
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="size-6 relative overflow-hidden">
                <img
                  src="/responsible-disclosure/icons/messages-square.svg"
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Reporter communication
              </div>
              <div className="self-stretch justify-start text-[rgba(102,95,105,1)] text-base font-normal font-['Inter'] leading-6">
                Use the approved channel and confidentiality terms when established. Do not force public vulnerability details or imply a guaranteed update cadence.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="size-6 relative overflow-hidden">
                <img
                  src="/responsible-disclosure/icons/git-merge.svg"
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Vendor &amp; customer coordination
              </div>
              <div className="self-stretch justify-start text-[rgba(102,95,105,1)] text-base font-normal font-['Inter'] leading-6">
                Vendor coordination is conditional on the approved process. Customer notification is separate from reporter communication and must follow its own approved requirements.
              </div>
            </div>
            <div className="flex-1 self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="size-6 relative overflow-hidden">
                <img
                  src="/responsible-disclosure/icons/file-text.svg"
                  alt="icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
                Advisories &amp; acknowledgement
              </div>
              <div className="self-stretch justify-start text-[rgba(102,95,105,1)] text-base font-normal font-['Inter'] leading-6">
                Use only an approved advisory source. Researcher acknowledgement requires approved terms and consent. No CVE/CNA terms, incident archive or researcher credits are supplied here.
              </div>
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
              Before publishing vulnerability details
            </div>
            <div className="self-stretch justify-start text-[rgba(102,95,105,1)] text-base font-normal font-['Inter'] leading-6">
              Consult the exact approved disclosure policy. No public-disclosure permission, deadline or credit terms can be established from this design.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
