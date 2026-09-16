import Link from "next/link";
import { Reveal, Section, SectionIntro, StaggerGroup, StaggerItem, bgImage } from "./shared";
import { insights } from "./home-data";

export default function InsightsSection() {
  return (
    <Section id="resources">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro
            eyebrow="Insights"
            title="Clarity for the teams modernizing telecom fiscal operations."
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((insight) => (
            <StaggerItem key={insight.title}>
              <Link
                href="#"
                className="group flex aspect-[310/258] flex-col justify-between rounded-2xl bg-[length:100%_100%] bg-no-repeat px-6 py-6 transition-transform hover:-translate-y-1"
                style={bgImage("/home/card-editorial-bg.webp")}
              >
                <span className="text-xs font-semibold text-menu-accent">{insight.category}</span>
                <span className="text-xl leading-6 text-ink sm:text-2xl sm:leading-7">
                  {insight.title}
                </span>
                <span className="text-[10px] text-ink-muted">
                  Editorial overview • Reading time varies
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}
