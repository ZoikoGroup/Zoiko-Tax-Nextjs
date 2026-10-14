import AskForm from "./AskForm";
import { SectionShell, SectionTitle } from "./shared";

export default function AskSection() {
  return (
    <SectionShell id="ask" narrow className="bg-indigo-950" bgImage="ask-bg.webp">
      <SectionTitle dark>Ask the Community</SectionTitle>
      <p className="pb-10 pt-4 text-base leading-7 text-indigo-200 sm:text-lg">
        Start a new discussion. Ensure you have checked official documentation first.
      </p>
      <AskForm />
    </SectionShell>
  );
}
