import { Reveal, Section } from "./shared";
import { directAnswer } from "./about-data";

export default function DirectAnswerSection() {
  return (
    <Section className="bg-mauve">
      <Reveal className="flex flex-col gap-4">
        <p className="text-xs font-bold uppercase text-menu-accent">Direct Answer</p>
        <h2 className="text-2xl font-bold leading-8 text-ink sm:text-3xl">What is ZoikoTax?</h2>
        <p className="text-base leading-7 text-neutral-600">{directAnswer}</p>
      </Reveal>
    </Section>
  );
}
