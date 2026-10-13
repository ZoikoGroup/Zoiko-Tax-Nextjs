import { SectionHeading, SectionShell } from "./shared";

export default function DirectAnswerSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading eyebrow="Direct answer" title="What does Research mean in ZoikoTax Coverage Doctrine?" />
      <p className="text-base leading-7 text-stone-500 sm:text-lg lg:text-xl lg:leading-8">
        Research identifies a capability or scope under exploration. It is not marketed as production, does not
        constitute supported tax/regulatory functionality, and must not be relied on for live decisions. Verify any
        current availability in the capability-specific Coverage record.
      </p>
    </SectionShell>
  );
}
