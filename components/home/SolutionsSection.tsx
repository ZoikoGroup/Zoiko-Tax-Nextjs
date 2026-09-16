import { NumberedCard, Reveal, Section, SectionIntro, StaggerGroup, StaggerItem } from "./shared";
import { buyerOutcomes, operatorModels } from "./home-data";

export default function SolutionsSection() {
  return (
    <Section id="solutions">
      <div className="flex flex-col gap-11">
        <Reveal>
          <SectionIntro
            eyebrow="Solutions"
            title="Designed around telecom operators—and the teams accountable for outcomes."
          />
        </Reveal>

        <Reveal className="flex flex-col gap-6">
          <h3 className="text-xs font-bold text-menu-accent">OPERATOR MODELS</h3>
          <ul className="flex flex-wrap gap-3">
            {operatorModels.map((model) => (
              <li
                key={model}
                className="rounded-full bg-white px-4 py-3.5 text-sm font-semibold text-ink outline outline-1 -outline-offset-1 outline-line"
              >
                {model}
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="flex flex-col gap-6">
          <h3 className="text-xs font-bold text-menu-accent">BUYER OUTCOMES</h3>
          <StaggerGroup className="grid gap-4 p-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {buyerOutcomes.map((outcome, i) => (
              <StaggerItem key={outcome.title}>
                <NumberedCard
                  index={i}
                  {...outcome}
                  background="/home/card-outcome-bg.webp"
                  className="opacity-95 shadow-[0_4px_4px_0_rgba(0,0,0,0.09)]"
                  titleClassName={i === 0 ? "font-semibold text-ink" : "font-medium text-black"}
                  descriptionClassName="text-black"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
