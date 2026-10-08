import Image from "next/image";
import Link from "next/link";
import { Container, Notice } from "./shared";

const cards = [
  {
    icon: "/oem-embedded/key-round.svg",
    title: "Keep credentials out",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Never put credentials in URLs, screenshots or</span>
        <span className="block xl:whitespace-nowrap">analytics. Do not expose secrets through</span>
        <span className="block xl:whitespace-nowrap">diagnostics or unapproved support</span>
        <span className="block xl:whitespace-nowrap">submissions.</span>
      </>
    ),
  },
  {
    icon: "/oem-embedded/building-2.svg",
    title: "Approved organization separation",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Apply only the supported separation model.</span>
        <span className="block xl:whitespace-nowrap">Partner context does not imply cross-tenant</span>
        <span className="block xl:whitespace-nowrap">visibility or access.</span>
      </>
    ),
  },
  {
    icon: "/oem-embedded/lock-keyhole.svg",
    title: "Least privilege",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Follow the exact permission contract. Do not</span>
        <span className="block xl:whitespace-nowrap">invent RBAC, delegation, impersonation or</span>
        <span className="block xl:whitespace-nowrap">unrestricted operator access.</span>
      </>
    ),
  },
  {
    icon: "/oem-embedded/scan-eye.svg",
    title: "Minimize data and logs",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Limit data to approved purposes. No sensitive</span>
        <span className="block xl:whitespace-nowrap">logging; do not expose private organization</span>
        <span className="block xl:whitespace-nowrap">existence through public states or messages.</span>
      </>
    ),
  },
  {
    icon: "/oem-embedded/shield-alert.svg",
    title: "Governed misuse handling",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Use the approved abuse / misuse policy and</span>
        <span className="block xl:whitespace-nowrap">security disclosure route. Do not infer</span>
        <span className="block xl:whitespace-nowrap">suspension triggers or remediation promises.</span>
      </>
    ),
  },
  {
    icon: "/oem-embedded/file-lock-2.svg",
    title: "Trust is the source",
    body: (
      <>
        <span className="block xl:whitespace-nowrap">Use approved Trust sources for assurances.</span>
        <span className="block xl:whitespace-nowrap">Unknown security details remain source-</span>
        <span className="block xl:whitespace-nowrap">controlled; no certification or uptime guarantee</span>
        <span className="block xl:whitespace-nowrap">is implied.</span>
      </>
    ),
  },
];

export default function SecuritySection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-white overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-50">
        <Image
          src="/existing-tax-engines/0.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            11 / SECURITY & PRIVACY
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Make the boundary explicit. Minimize what crosses it.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Confirm the exact security and privacy contract rather than inferring a universal isolation or permission implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="self-stretch p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-4"
            >
              <Image
                src={card.icon}
                alt=""
                width={28}
                height={28}
                className="size-7"
              />
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="self-stretch text-[rgba(24,20,27,1)] text-xl font-semibold leading-7 font-['Inter',sans-serif]">
                  {card.title}
                </div>
                <div className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                  {card.body}
                </div>
              </div>
            </div>
          ))}
        </div>

        <Notice
          title={<span className="text-[rgba(24,20,27,1)]">Privacy-safe public interactions</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">Use categorical page and route context only. Never expose partner, tenant or customer identifiers, entitlement details, secrets, usage values, commercial</span>
              <span className="block xl:whitespace-nowrap">terms or raw free-text in public analytics.</span>
            </span>
          }
        />

        <Link
          href="/integration-guides"
          className="w-[162px] h-[47px] bg-white hover:bg-neutral-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer"
        >
          <span className="text-[rgba(24,20,27,1)] text-sm font-semibold font-['Inter',sans-serif]">
            Explore Trust
          </span>
          <Image
            src="/oem-embedded/arrow-right.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </Link>
      </Container>
    </section>
  );
}
