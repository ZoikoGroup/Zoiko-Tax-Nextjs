import Image from "next/image";
import { Blocks, Columns3, FileSearch } from "lucide-react";
import { IMAGE_BASE, OUTBOUND_NOTE, SectionHeading, SectionShell, UnavailableButton } from "./shared";

const CARDS = [
  {
    audience: "Engineering",
    icon: Blocks,
    title: "Explore integration architecture",
    description: "Understand architectural fit and the boundaries of the intended integration.",
  },
  {
    audience: "Buyer & operations",
    icon: Columns3,
    title: "Compare operating models",
    description: "Evaluate responsibilities and the operating approach for your exact scenario.",
  },
  {
    audience: "Compliance",
    icon: FileSearch,
    title: "Check coverage status",
    description: "Confirm the capability-specific classification, current scope and restrictions.",
  },
];

export default function EvaluationSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Qualified evaluation"
        title="Start with the right questions."
        description="Architecture, operating responsibility and coverage each need their own source-qualified assessment."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {CARDS.map(({ audience, icon: Icon, title, description }) => (
          <div
            key={audience}
            className="relative flex flex-col gap-5 overflow-hidden rounded-2xl bg-white/60 p-6 outline-[2.5px] -outline-offset-[2.5px] outline-white sm:p-7"
          >
            <Image
              src={`${IMAGE_BASE}/decision-card.webp`}
              alt=""
              aria-hidden="true"
              fill
              unoptimized
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
            <div className="relative flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase text-orange-600">{audience}</span>
              <Icon aria-hidden="true" className="size-6 text-orange-600" strokeWidth={1.5} />
            </div>
            <h3 className="relative text-xl font-bold leading-8 text-zinc-900 sm:text-2xl">{title}</h3>
            <p className="relative text-base leading-6 text-stone-500">{description}</p>
            <p className="relative text-sm text-stone-500">Destination unavailable · approval required</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 rounded-3xl bg-[#301153] p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex flex-1 flex-col gap-2.5">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Then discuss fit—not access.</h3>
          <p className="text-base leading-6 text-zinc-300">
            Book a Demo is a qualified fit inquiry only. It does not purchase, authorize or grant Pilot access.
          </p>
        </div>
        <div className="flex flex-col items-start gap-3 lg:w-72 lg:shrink-0">
          <UnavailableButton dark label="Book a Demo" />
          <p className="text-sm leading-5 text-zinc-300">{OUTBOUND_NOTE}</p>
        </div>
      </div>
    </SectionShell>
  );
}
