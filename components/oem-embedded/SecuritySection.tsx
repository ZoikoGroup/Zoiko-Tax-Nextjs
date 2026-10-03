import Image from "next/image";
import { Container, Notice, SectionHeader, SecondaryButton } from "./shared";

const cards = [
  {
    icon: "/oem-embedded/lock-keyhole.svg",
    title: "Keep credentials out",
    body: "Never put credentials in URLs, screenshots or analytics. Do not expose secrets through diagnostics or unapproved support submissions.",
  },
  {
    icon: "/oem-embedded/building-2.svg",
    title: "Approved organization separation",
    body: "Apply only the supported separation model. Partner context does not imply cross-tenant visibility or access.",
  },
  {
    icon: "/oem-embedded/key-round.svg",
    title: "Least privilege",
    body: "Follow the exact permission contract. Do not invent RBAC, delegation, impersonation or unrestricted operator access.",
  },
  {
    icon: "/oem-embedded/file-lock-2.svg",
    title: "Minimize data and logs",
    body: "Limit data to approved purposes. No sensitive logging; do not expose private organization existence through public states or messages.",
  },
  {
    icon: "/oem-embedded/shield-alert.svg",
    title: "Governed misuse handling",
    body: "Use the approved abuse / misuse policy and security disclosure route. Do not infer suspension triggers or remediation promises.",
  },
  {
    icon: "/oem-embedded/scan-eye.svg",
    title: "Trust is the source",
    body: "Use approved Trust sources for assurances. Unknown security details remain source-controlled; no certification or uptime guarantee is implied.",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="11 / SECURITY & PRIVACY"
          title="Make the boundary explicit. Minimize what crosses it."
          description="Confirm the exact security and privacy contract rather than inferring a universal isolation or permission implementation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
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
          title="Privacy-safe public interactions"
          body="Use categorical page and route context only. Never expose partner, tenant or customer identifiers, entitlement details, secrets, usage values, commercial terms or raw free-text in public analytics."
        />

        <SecondaryButton href="/integration-guides">
          Explore Trust
        </SecondaryButton>
      </Container>
    </section>
  );
}
