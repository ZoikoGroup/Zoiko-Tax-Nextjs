import { Reveal, Section, SectionIntro, StaggerGroup, StaggerItem, bgImage } from "./shared";
import { directAnswer, operatingModels } from "./home-data";

export default function DirectAnswerSection() {
  return (
    <Section id="platform">
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionIntro {...directAnswer} />
        </Reveal>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold leading-9 text-ink sm:text-3xl">Operating Models</h3>
          <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {operatingModels.map((model) => (
              <StaggerItem key={model.title}>
                <div
                  className="flex h-full min-h-44 flex-col gap-3.5 rounded-2xl bg-[length:100%_100%] bg-no-repeat p-6 outline outline-1 -outline-offset-1 outline-line"
                  style={bgImage("/home/card-operating-model-bg.webp")}
                >
                  <h4 className="text-2xl font-medium leading-7 text-ink">{model.title}</h4>
                  <p className="text-sm leading-5 text-body-strong">{model.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
