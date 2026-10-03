import Image from "next/image";
import { Container, Notice, SectionHeader } from "./shared";

const patterns = [
  {
    icon: "/oem-embedded/code.svg",
    title: "API-led own UI",
    body: "Build against approved API contracts. Partner-owned workflows do not expand the permitted capability scope.",
  },
  {
    icon: "/oem-embedded/external-link.svg",
    title: "Hosted or deep-linked",
    body: "Use a hosted surface or deep link only if it exists in an approved source. No hosted experience is promised here.",
  },
  {
    icon: "/oem-embedded/unplug.svg",
    title: "Component / SDK / theme",
    body: "An embedded component, SDK or theme option is available only where explicitly approved. No full-customization claim.",
  },
];

export default function EmbeddedExperienceSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="05 / EMBEDDED EXPERIENCE"
          title="Connect the experience. Preserve the boundary."
          description="API-led embedding can place an approved integration within a partner’s own UI. It does not imply a white-labeled ZoikoTax application."
        />

        {/* Layer diagram */}
        <div className="self-stretch p-6 sm:p-8 bg-purple-50 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col lg:flex-row justify-start lg:items-center gap-6 lg:gap-7">
          <div className="flex-1 flex flex-col justify-start items-start gap-4">
            <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              PARTNER-OWNED LAYER
            </span>
            <div className="self-stretch text-zinc-900 text-3xl font-normal font-['Inter',sans-serif]">
              Proposition · UI · workflows
            </div>
            <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Own experience, approved API use, explicit organization context.
            </p>
          </div>

          <div className="w-full lg:w-72 shrink-0 p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-orange-600 flex flex-col justify-start items-start gap-3">
            <Image
              src="/oem-embedded/blocks.svg"
              alt=""
              width={28}
              height={28}
              className="size-7"
            />
            <div className="self-stretch text-zinc-900 text-xl font-normal font-['Inter',sans-serif]">
              Approved interface ↔
            </div>
            <div className="self-stretch text-stone-500 text-sm font-normal leading-6 font-['Inter',sans-serif]">
              Identity, capability and evidence remain governed.
            </div>
          </div>

          <div className="flex-1 p-6 sm:p-7 bg-violet-950 rounded-2xl flex flex-col justify-start items-start gap-4">
            <span className="text-orange-300 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              ZOIKOTAX LAYER
            </span>
            <div className="self-stretch text-white text-3xl font-normal font-['Inter',sans-serif]">
              Supported fiscal capabilities
            </div>
            <p className="self-stretch text-zinc-300 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Only the approved scope and environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {patterns.map((card) => (
            <div
              key={card.title}
              className="self-stretch p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-3.5"
            >
              <Image
                src={card.icon}
                alt=""
                width={28}
                height={28}
                className="size-7"
              />
              <div className="flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch text-zinc-900 text-xl font-semibold leading-7 font-['Inter',sans-serif]">
                  {card.title}
                </div>
                <div className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {card.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Notice
          title="Conceptual illustration, not a product availability promise"
          body="Text equivalent: the partner-owned experience connects through an approved interface to supported ZoikoTax capabilities. Organization, permission and evidence boundaries remain explicit on both sides."
        />
      </Container>
    </section>
  );
}
