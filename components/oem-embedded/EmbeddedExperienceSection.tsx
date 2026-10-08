import Image from "next/image";
import { Container, Notice } from "./shared";

const patterns = [
  {
    icon: "/oem-embedded/code.svg",
    title: "API-led own UI",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Build against approved API contracts. Partner-</span>
        <span className="block xl:whitespace-nowrap">owned workflows do not expand the permitted</span>
        <span className="block xl:whitespace-nowrap">capability scope.</span>
      </>
    ),
  },
  {
    icon: "/oem-embedded/external-link.svg",
    title: "Hosted or deep-linked",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Use a hosted surface or deep link only if it</span>
        <span className="block xl:whitespace-nowrap">exists in an approved source. No hosted</span>
        <span className="block xl:whitespace-nowrap">experience is promised here.</span>
      </>
    ),
  },
  {
    icon: "/oem-embedded/blocks.svg",
    title: "Component / SDK / theme",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">An embedded component, SDK or theme</span>
        <span className="block xl:whitespace-nowrap">option is available only where explicitly</span>
        <span className="block xl:whitespace-nowrap">approved. No full-customization claim.</span>
      </>
    ),
  },
];

export default function EmbeddedExperienceSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(250,243,255,1)] overflow-hidden">

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            05 / EMBEDDED EXPERIENCE
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Connect the experience. Preserve the boundary.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-8 font-['Inter',sans-serif]">
            API-led embedding can place an approved integration within a partner&apos;s own UI. It does not imply a white-labeled ZoikoTax application.
          </p>
        </div>

        {/* Layer diagram */}
        <div className="self-stretch p-6 sm:p-8 bg-[rgba(250,243,255,1)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col lg:flex-row justify-start lg:items-center gap-6 lg:gap-7">
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
              PARTNER-OWNED LAYER
            </span>
            <div className="self-stretch text-[rgba(24,20,27,1)] text-[32px] leading-[1.2] font-normal font-['Inter',sans-serif]">
              Proposition · UI · workflows
            </div>
            <p className="self-stretch text-[rgba(102,95,105,1)] text-base font-normal leading-[1.6] font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Own experience, approved API use, explicit</span>
              <span className="block xl:whitespace-nowrap">organization context.</span>
            </p>
          </div>

          <div className="w-full lg:w-72 shrink-0 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(214,90,44,1)] flex flex-col justify-start items-start gap-3">
            <Image
              src="/oem-embedded/unplug.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="self-stretch text-[rgba(24,20,27,1)] text-[20px] font-normal leading-[1.4] font-['Inter',sans-serif]">
              Approved interface ↔
            </div>
            <div className="self-stretch text-[rgba(102,95,105,1)] text-[13px] font-normal leading-[1.6] font-['Inter',sans-serif]">
              Identity, capability and evidence remain governed.
            </div>
          </div>

          <div className="flex-1 p-6 sm:p-7 bg-[rgba(48,17,83,1)] rounded-2xl flex flex-col justify-start items-start gap-4">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
              ZOIKOTAX LAYER
            </span>
            <div className="self-stretch text-white text-[28px] leading-[1.2] font-normal font-['Inter',sans-serif]">
              Supported fiscal capabilities
            </div>
            <p className="self-stretch text-[#D9D0DF] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
              Only the approved scope and environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {patterns.map((card) => (
            <div
              key={card.title}
              className="self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#D8CEDD] flex flex-col justify-start items-start gap-4"
            >
              <Image
                src={card.icon}
                alt=""
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="self-stretch text-[rgba(24,20,27,1)] text-[20px] font-semibold leading-[1.4] font-['Inter',sans-serif]">
                  {card.title}
                </div>
                <div className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                  {card.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Notice
          className="!bg-[rgba(255,240,231,1)]"
          title={<span className="text-[rgba(24,20,27,1)]">Conceptual illustration, not a product availability promise</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">Text equivalent: the partner-owned experience connects through an approved interface to supported ZoikoTax capabilities. Organization, permission and</span>
              <span className="block xl:whitespace-nowrap">evidence boundaries remain explicit on both sides.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
