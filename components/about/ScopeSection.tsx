import clsx from "clsx";
import { Check, X } from "lucide-react";
import { Reveal, Section, SectionIntro } from "./shared";
import { scope } from "./about-data";

const lists = [
  { title: "ZoikoTax Is", items: scope.is, icon: Check, color: "text-success" },
  { title: "ZoikoTax Is Not", items: scope.isNot, icon: X, color: "text-danger" },
];

export default function ScopeSection() {
  return (
    <Section className="bg-mauve">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro eyebrow="Scope & positioning" title="What ZoikoTax is - and is not." />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {lists.map(({ title, items, icon: Icon, color }, i) => (
            <Reveal key={title} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-[20px] bg-white p-6 shadow-[0_8px_24px_0_rgba(0,0,0,0.08)] outline outline-1 -outline-offset-1 outline-zinc-200 sm:p-10">
                <h3 className={clsx("flex items-center gap-1.5 text-xl font-bold", color)}>
                  <Icon aria-hidden className="size-5" strokeWidth={3} />
                  {title}
                </h3>
                <ul className="pt-7">
                  {items.map((entry, j) => (
                    <li
                      key={entry}
                      className={clsx(
                        "flex items-start gap-3 py-3.5 text-base text-ink",
                        j < items.length - 1 && "border-b border-gray-100",
                      )}
                    >
                      <Icon aria-hidden className={clsx("mt-1.5 size-3 shrink-0", color)} strokeWidth={2.5} />
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
