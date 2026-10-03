import Image from "next/image";
import Link from "next/link";
import { Container } from "./shared";

const cards = [
  {
    icon: "/existing-tax-engines/filter.svg",
    title: "Permitted facts only",
    body: "Minimize copied or mirrored data to approved fields. Never put credentials, private identifiers or secrets in URLs, logs, screenshots or examples.",
  },
  {
    icon: "/existing-tax-engines/lock-keyhole.svg",
    title: "Safe evidence & support",
    body: "Use policy-controlled logging, storage and retention. Reference confidential outputs safely and use approved Support references; no public form should solicit private migration detail.",
  },
  {
    icon: "/existing-tax-engines/shield-check.svg",
    title: "Source-backed Trust",
    body: "Review approved Trust evidence for the actual context. This page makes no certification, isolation or retention-duration guarantee.",
  },
];

export default function SecuritySection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden bg-neutral-950">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/existing-tax-engines/Security privacy and trust.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[rgba(18,3,39,0.20)]" />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            12 · SECURITY / PRIVACY / TRUST
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-white leading-tight tracking-tight">
            Minimize the data. Govern the access.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Comparison data and incumbent outputs may be confidential. A migration evaluation does not relax privacy, logging, storage or access policy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card) => (
            <div
              key={card.title}
              className="self-stretch p-7 bg-[rgba(36,16,57,1)] rounded-2xl border border-[rgba(255,255,255,0.15)] flex flex-col justify-start items-start gap-4 shadow-sm"
            >
              <Image
                src={card.icon}
                alt=""
                width={24}
                height={24}
                className="size-6 shrink-0"
              />
              <div className="self-stretch text-white text-xl font-bold leading-7 font-['Inter',sans-serif]">
                {card.title}
              </div>
              <div className="self-stretch text-zinc-300 text-sm sm:text-base font-normal leading-6 font-['Inter',sans-serif]">
                {card.body}
              </div>
            </div>
          ))}
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(36,16,57,1)] rounded-2xl border border-[rgba(255,255,255,0.15)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2 shadow-sm">
          <div className="text-white text-base font-bold leading-6 font-['Inter',sans-serif]">
            Keep sensitive migration information out of public channels.
          </div>
          <p className="text-zinc-300 text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Do not submit transaction payloads, actual tax/comparison values, customer incumbent configurations, confidential engine outputs or private incident detail through public examples or forms.
          </p>
        </div>

        {/* Action link */}
        <Link
          href="/evidence-auditability"
          className="inline-flex items-center gap-1.5 text-[#D65A2C] text-sm sm:text-base font-semibold font-['Inter',sans-serif] hover:underline"
        >
          <span>Review approved Trust evidence</span>
          <Image
            src="/existing-tax-engines/arrow-up-right.svg"
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
