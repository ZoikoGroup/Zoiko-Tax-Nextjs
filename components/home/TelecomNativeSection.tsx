import {
  NumberedCard,
  Reveal,
  Section,
  SectionIntro,
  StaggerGroup,
  StaggerItem,
  bgImage,
} from "./shared";
import { lifecycleSteps, telecomProblems } from "./home-data";

export default function TelecomNativeSection() {
  return (
    <Section background="/home/pattern-telecom-native.webp" className="bg-white">
      <div className="flex flex-col gap-11">
        <Reveal>
          <SectionIntro
            eyebrow="Telecom-native by design"
            title="Fiscal complexity is structural—not an edge case."
          />
        </Reveal>

        <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {telecomProblems.map((problem, i) => (
            <StaggerItem key={problem.title}>
              <NumberedCard
                index={i}
                {...problem}
                background="/home/card-problem-bg.webp"
                className="shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] outline outline-1 -outline-offset-1 outline-line"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal>
          <div
            className="flex flex-col gap-6 rounded-3xl bg-purple-800 bg-cover bg-center p-6 sm:p-8"
            style={bgImage("/home/lifecycle-panel-bg.webp")}
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <h3 className="text-2xl text-white">One governed fiscal lifecycle</h3>
              <p className="text-base font-semibold text-white">Evidence spans every stage</p>
            </div>
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
              {lifecycleSteps.map(({ label, icon: Icon }) => (
                <li key={label} className="flex flex-col gap-2 rounded-lg bg-white/30 p-3.5">
                  <Icon aria-hidden className="size-6 text-blush-light" strokeWidth={2} />
                  <span className="text-sm font-semibold text-white">{label}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm font-medium text-mist">
              ZoikoTax Intelligence Fabric™ assists operators; it is not fiscal authority.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
