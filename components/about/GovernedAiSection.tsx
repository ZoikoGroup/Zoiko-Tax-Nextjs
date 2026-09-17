import clsx from "clsx";
import { Check, X, type LucideIcon } from "lucide-react";
import { Container, Reveal } from "./shared";
import { governedAi } from "./about-data";

type PolicyListProps = {
  title: string;
  items: string[];
  icon: LucideIcon;
  className: string;
  markerClassName: string;
};

function PolicyList({ title, items, icon: Icon, className, markerClassName }: PolicyListProps) {
  return (
    <div
      className={clsx(
        "h-full rounded-[20px] p-7 outline outline-1 -outline-offset-1 outline-white/10 sm:p-9",
        className,
      )}
    >
      <h3 className="text-sm font-bold uppercase text-apricot">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((entry) => (
          <li key={entry} className="flex items-start gap-3 text-[15px] leading-6 text-white">
            <span
              aria-hidden
              className={clsx("mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full", markerClassName)}
            >
              <Icon className="size-3" strokeWidth={2.5} />
            </span>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GovernedAiSection() {
  return (
    <section className="relative isolate overflow-hidden bg-deep py-16 lg:py-24">
      {/* eslint-disable-next-line @next/next/no-img-element -- decorative, sized by CSS */}
      <img
        src="/about-us/ai-wave.webp"
        alt=""
        aria-hidden
        className="absolute inset-x-0 top-1/2 -z-10 w-full -translate-y-1/2 opacity-90"
      />

      <Container className="flex flex-col gap-10">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <p className="text-sm font-bold uppercase text-apricot">Governed AI</p>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.0]">
            AI should strengthen fiscal judgment - not obscure authority.
          </h2>
          <p className="rounded-full bg-white/10 px-6 py-3 text-sm font-bold text-apricot outline outline-1 -outline-offset-1 outline-white/20 backdrop-blur sm:px-8 sm:text-base">
            AI assists. Approved rules decide. Evidence proves.
          </p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <PolicyList
              title="AI may assist with"
              items={governedAi.may}
              icon={Check}
              className="bg-plum-950"
              markerClassName="bg-white/10 text-emerald-300"
            />
          </Reveal>
          <Reveal delay={0.1} className="h-full">
            <PolicyList
              title="AI must not be presented as"
              items={governedAi.mustNot}
              icon={X}
              className="bg-plum-700"
              markerClassName="bg-danger/20 text-red-400"
            />
          </Reveal>
        </div>

        <Reveal>
          <p className="rounded-xl bg-white/10 px-6 py-4 text-sm leading-6 text-mist backdrop-blur">
            Persistent disclosure: AI output is advisory and requires governed human or
            deterministic-system action. ZoikoTax Intelligence Fabric™ assists operators; it is not
            fiscal authority.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
