import { SectionShell } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionShell className="bg-[rgba(242,234,248,1)] [&>div]:!py-[49px] [&>div]:!lg:py-[89px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="inline-flex w-full flex-col items-start gap-4 lg:w-96 lg:shrink-0">
          <span className="text-xs font-bold text-orange-600">DIRECT ANSWER</span>
          <h2 className="self-stretch text-3xl font-bold leading-9 text-zinc-900">
            What does this <br className="hidden lg:block" />
            Security page <br className="hidden lg:block" />
            establish?
          </h2>
        </div>
        <div className="inline-flex w-full flex-1 flex-col items-start gap-4">
          <p className="self-stretch text-lg leading-7 text-stone-500 sm:text-xl lg:leading-8">
            An evidence-bound overview of verified posture and controls—not a promise of threat elimination.
            Public summaries explain approved scope; sensitive reports require a separately governed access
            decision.
          </p>
          <p className="self-stretch text-base leading-6 text-violet-950">
            No verified security control inventory is supplied here. The domains below explain what
            publication would require; they do not establish implemented controls.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
