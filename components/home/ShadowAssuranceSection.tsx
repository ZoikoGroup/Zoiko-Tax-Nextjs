import clsx from "clsx";
import { Container, Reveal, StaggerGroup, StaggerItem, bgImage } from "./shared";
import { shadowAssuranceSteps } from "./home-data";

export default function ShadowAssuranceSection() {
  return (
    <section className="relative isolate overflow-hidden bg-deep py-16 lg:py-14">
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 -z-10 hidden w-80 bg-cover bg-left opacity-30 xl:block"
        style={bgImage("/home/shadow-stripes-left.webp")}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 -z-10 hidden w-80 bg-cover bg-right opacity-30 xl:block"
        style={bgImage("/home/shadow-stripes-right.webp")}
      />

      <Container className="flex flex-col items-start gap-10 xl:flex-row xl:items-center xl:gap-16">
        <Reveal className="flex max-w-2xl flex-col gap-6 xl:w-96 xl:shrink-0">
          <p className="text-sm font-bold uppercase text-menu-accent">Shadow Assurance</p>
          <h2 className="text-3xl font-bold leading-tight text-cream sm:text-4xl lg:text-5xl lg:leading-[1.0]">
            Compare with confidence before you change production.
          </h2>
          <p className="text-base font-semibold leading-6 text-blush">
            Production paths remain non-impacting until governed cutover. Comparator agreement is
            not proof of legal correctness.
          </p>
        </Reveal>

        <StaggerGroup className="grid w-full flex-1 gap-3.5 sm:grid-cols-3">
          {shadowAssuranceSteps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div
                className={clsx(
                  "flex h-full min-h-40 flex-col gap-5 rounded-2xl p-6 sm:min-h-56 outline outline-1 -outline-offset-1 outline-white/10",
                  i === 1 ? "bg-plum-700" : "bg-plum-950",
                )}
              >
                <span className="font-mono text-xs text-apricot">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl text-white">{step.title}</h3>
                <p className="text-sm leading-5 text-mist">{step.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
