import type { ReactNode } from "react";
import { Reveal, Section } from "./shared";
import { mission, vision } from "./about-data";

function StatementCard({
  eyebrow,
  title,
  label,
  children,
}: {
  eyebrow: string;
  title: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-[20px] bg-gradient-to-r from-[#2b1a4f] to-[#4b3d8f] p-7 sm:p-11">
      <p className="text-xs font-bold uppercase text-menu-accent">{eyebrow}</p>
      <h2 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-[32px] sm:leading-[37px]">
        {title}
      </h2>
      <p className="mt-6 text-xs font-bold uppercase text-white/70">{label}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function MissionVisionSection() {
  return (
    <Section className="bg-mauve">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal className="h-full">
          <StatementCard eyebrow="Our Mission" title={mission.title} label="Mission principles">
            <ul className="flex flex-col gap-3">
              {mission.principles.map(([name, detail]) => (
                <li key={name} className="text-sm leading-6 text-white/80">
                  <strong className="font-semibold text-white/90">{name}</strong> - {detail}
                </li>
              ))}
            </ul>
          </StatementCard>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <StatementCard eyebrow="Our Vision" title={vision.title} label="What we're working toward">
            <p className="text-sm leading-[26px] text-white/80">{vision.body}</p>
          </StatementCard>
        </Reveal>
      </div>
    </Section>
  );
}
