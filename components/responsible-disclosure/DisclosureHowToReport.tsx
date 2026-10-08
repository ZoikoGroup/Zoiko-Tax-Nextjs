import React from 'react';

export default function DisclosureHowToReport() {
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
            04 · HOW TO REPORT
          </div>
          <div className="self-stretch justify-start text-[#18141B] text-5xl font-bold font-['Inter'] leading-[48.30px]">
            A useful report is specific, minimal and redacted.
          </div>
          <div className="w-[1040px] justify-start text-[#665F69] text-lg font-normal font-['Inter'] leading-7">
            Illustrative reporting form anatomy — not an active approved channel. These data categories describe what a safe<br />report should cover; exact requirements and the receiving process need source approval.
          </div>
        </div>

        <div className="self-stretch inline-flex justify-start items-start gap-8 overflow-hidden">
          {/* Left Column */}
          <div className="w-[360px] shrink-0 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">
              PREPARE, DO NOT SUBMIT
            </div>
            <div className="self-stretch justify-start text-[#18141B] text-3xl font-bold font-['Inter'] leading-8">
              Keep the finding. Leave<br />out the secrets.
            </div>
            <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Never include a password, token, private<br />key or full dataset. Use a safe category<br />instead of unverified targets or real<br />customer identifiers.
            </div>

            {/* Orange Info Box */}
            <div className="self-stretch p-6 bg-[#FFF0E6] rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
              <div className="size-5 relative shrink-0 overflow-hidden">
                <img
                  src="/responsible-disclosure/info%20(3).svg"
                  alt="info"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-lg font-bold font-['Inter'] leading-5">
                  No report can be sent<br />from this static design
                </div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                  No approved destination,<br />account requirement,<br />attachment handling or<br />encryption method is supplied.
                </div>
              </div>
            </div>

            <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
              Contact is policy-dependent
            </div>
            <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Reporter contact is requested only if<br />required by the approved policy.<br />Anonymous reporting is not assumed.<br />Without a response contact, no update<br />delivery is promised.
            </div>

            <div className="self-stretch justify-start text-[#18141B] text-xl font-bold font-['Inter'] leading-6">
              Privacy-conscious reporting
            </div>
            <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
              Share only what is needed to understand<br />the issue. Do not include unrelated<br />personal information or confidential<br />screenshots.
            </div>
          </div>

          {/* Right Column: Specimen Form */}
          <div className="flex-1 p-8 bg-[#FAF3FF] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
            <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="justify-start text-[#D65A2C] text-xs font-bold font-['Inter']">
                FORM SPECIMEN · SOURCE REQUIRED
              </div>
              <div className="self-stretch justify-start text-[#18141B] text-3xl font-bold font-['Inter'] leading-8">
                Security vulnerability report
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                No live fields or submission. Required and optional designations must come from the approved policy.
              </div>
            </div>

            {/* Row 1 */}
            <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                  Reporter contact
                </div>
                <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                  Only when policy-required; do not assume an account is needed.
                </div>
                <div className="self-stretch h-11 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                    Not entered · illustrative only
                  </div>
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                  Affected surface
                </div>
                <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                  Use a safe category; confirm exact assets against approved scope.
                </div>
                <div className="self-stretch h-11 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                    Not entered · illustrative only
                  </div>
                </div>
              </div>
            </div>

            {/* Issue summary */}
            <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                Issue summary
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                Briefly describe the suspected security behavior. Exclude secrets and identifiers.
              </div>
              <div className="self-stretch h-11 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                  Not entered · illustrative only
                </div>
              </div>
            </div>

            {/* Observed impact */}
            <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                Observed impact
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                Describe what was actually observed, not an assumed severity or speculative outcome.
              </div>
              <div className="self-stretch h-20 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                  Not entered · illustrative only
                </div>
              </div>
            </div>

            {/* Minimal safe reproduction steps */}
            <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                Minimal safe reproduction steps
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                Only necessary, redacted steps within approved policy. No live payloads or expanded testing.
              </div>
              <div className="self-stretch h-20 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                  Not entered · illustrative only
                </div>
              </div>
            </div>

            {/* Row 2 */}
            <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                  Environment or version
                </div>
                <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                  Include only details needed to understand the finding.
                </div>
                <div className="self-stretch h-11 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                    Not entered · illustrative only
                  </div>
                </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                  Prior disclosure
                </div>
                <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                  Include only if approved; omit private identities and unrelated reports.
                </div>
                <div className="self-stretch h-11 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                    Not entered · illustrative only
                  </div>
                </div>
              </div>
            </div>

            {/* Orange Info Box */}
            <div className="self-stretch p-6 bg-[#FFF0E6] rounded-2xl inline-flex justify-start items-start gap-4 overflow-hidden">
              <div className="size-5 relative shrink-0 overflow-hidden">
                <img
                  src="/responsible-disclosure/info%20(3).svg"
                  alt="info"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-lg font-bold font-['Inter'] leading-5">
                  More sensitive data is not stronger evidence.
                </div>
                <div className="self-stretch justify-start text-[#665F69] text-base font-normal font-['Inter'] leading-6">
                  Redact secrets and customer, taxpayer and payment identifiers. Trim logs to necessary evidence.<br />Do not bulk-extract data. Share exploit evidence only through an approved protected process,<br />never a public post.
                </div>
              </div>
            </div>

            {/* Redacted evidence */}
            <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
              <div className="self-stretch justify-start text-[#18141B] text-base font-semibold font-['Inter']">
                Redacted evidence
              </div>
              <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                A minimal description is preferable to unnecessary data. Do not include confidential screenshots.
              </div>
              <div className="self-stretch h-20 p-3 bg-neutral-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start overflow-hidden">
                <div className="justify-start text-[#665F69] text-xs font-normal font-['Inter']">
                  Not entered · illustrative only
                </div>
              </div>
            </div>

            {/* Attachments */}
            <div className="self-stretch p-5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] inline-flex justify-start items-start gap-4 overflow-hidden">
              <div className="size-5 relative shrink-0 overflow-hidden flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#18141B"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                <div className="self-stretch justify-start text-[#18141B] text-base font-bold font-['Inter'] leading-5">
                  Attachments · unavailable
                </div>
                <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
                  Only if permitted by the approved receiving process. File safety, formats, size limits and protected transfer<br />requirements are not supplied; no scanner or encryption implementation is claimed.
                </div>
              </div>
            </div>

            {/* Submit Button (Disabled specimen) */}
            <div className="px-6 py-4 bg-[#E5DFE8] rounded-[999px] inline-flex justify-start items-center gap-3 overflow-hidden">
              <div className="justify-start text-[#665F69] text-sm font-semibold font-['Inter']">
                Submit unavailable · source required
              </div>
              <div className="size-4 relative shrink-0 overflow-hidden flex items-center justify-center">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#665F69"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>

            <div className="self-stretch justify-start text-[#665F69] text-sm font-normal font-['Inter'] leading-6">
              Channel unresolved. Nothing has been sent, stored or acknowledged. An approved current channel is required before launch.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
