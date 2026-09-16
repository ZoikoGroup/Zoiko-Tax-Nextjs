import { Check } from "lucide-react";
import { Reveal, Section } from "./shared";
import { aiPolicy, evidenceChecklist } from "./home-data";

export default function EvidenceSection() {
  return (
    <Section background="/home/pattern-evidence.webp" className="bg-white">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <div className="flex h-full flex-col gap-6 rounded-3xl bg-white p-7 shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] outline outline-1 -outline-offset-1 outline-mist sm:p-9">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase text-menu-accent">Evidence by design</p>
              <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl lg:leading-[1.0]">
                A result you can reconstruct.
              </h2>
            </div>
            <ul className="flex flex-col gap-6">
              {evidenceChecklist.map((entry) => (
                <li key={entry} className="flex items-center gap-2 text-base text-ink">
                  <Check aria-hidden className="size-4 shrink-0" strokeWidth={2} />
                  {entry}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col gap-6 rounded-3xl bg-plum-900 p-7 shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] sm:p-9">
            <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Advisory, never authoritative.
            </h2>
            <p className="text-xs font-bold text-apricot">AI MAY</p>
            <p className="text-base leading-6 text-white">{aiPolicy.may}</p>
            <p className="text-xs font-bold text-apricot">AI MAY NOT</p>
            <p className="text-base leading-6 text-white">{aiPolicy.mayNot}</p>
            <p className="text-xs text-mist">{aiPolicy.disclosure}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
