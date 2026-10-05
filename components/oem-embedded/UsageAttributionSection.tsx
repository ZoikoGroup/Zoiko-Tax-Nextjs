import Image from "next/image";
import { Container, Notice } from "./shared";

const trail = [
  {
    num: "01 ➔",
    title: "Approved activity",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Only supported, permitted</span>
        <span className="block xl:whitespace-nowrap">activity.</span>
      </>
    ),
  },
  {
    num: "02 ➔",
    title: "Correct organization",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">The authorized business</span>
        <span className="block xl:whitespace-nowrap">context.</span>
      </>
    ),
  },
  {
    num: "03 ➔",
    title: "Capability",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">The exact approved</span>
        <span className="block xl:whitespace-nowrap">capability scope.</span>
      </>
    ),
  },
  {
    num: "04 ➔",
    title: "Source-defined period",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">The governed</span>
        <span className="block xl:whitespace-nowrap">measurement context.</span>
      </>
    ),
  },
  {
    num: "05 •",
    title: "Evidence / operations",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">A reference where</span>
        <span className="block xl:whitespace-nowrap">approved.</span>
      </>
    ),
  },
];

export default function UsageAttributionSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(240,231,247,1)] overflow-hidden">

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            07 / USAGE & ATTRIBUTION
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Attribute activity. Do not infer economics.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Usage can support operational accountability when its organization, capability and evidence context are preserved.
          </p>
        </div>

        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            ILLUSTRATIVE TRAIL · NO ACTUAL USAGE VALUES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {trail.map((step) => (
              <div
                key={step.num}
                className="self-stretch p-6 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-3.5"
              >
                <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 font-['Inter',sans-serif]">
                  {step.num}
                </span>
                <div className="self-stretch text-[rgba(24,20,27,1)] text-lg font-semibold leading-[1.4] font-['Inter',sans-serif]">
                  {step.title}
                </div>
                <div className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                  {step.body}
                </div>
              </div>
            ))}
          </div>
          <p className="self-stretch text-[rgba(102,95,105,1)] text-sm font-normal leading-[1.6] font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Text equivalent: approved activity ➔ correct organization ➔ capability ➔ source-defined period ➔ evidence / operations. These categories are not a usage schema, report, billing cycle</span>
            <span className="block xl:whitespace-nowrap">or dashboard.</span>
          </p>
        </div>

        <Notice
          title={<span className="text-[rgba(24,20,27,1)]">Attribution is not charging or pricing</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">Usage does not establish allowances, revenue share, charges, invoice frequency or commercial economics. Authenticated reporting is separate from this</span>
              <span className="block xl:whitespace-nowrap">public architecture page; no actual counts, periods or usage records are shown.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
