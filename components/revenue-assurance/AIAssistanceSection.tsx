import { Check, X } from "lucide-react";
import { SectionHeading, SectionShell } from "./shared";

const MAY_ASSIST = [
  "Anomaly investigation",
  "Classification proposals",
  "Variance clustering",
  "Explanation",
  "Evidence extraction",
  "Forecasting / pattern analysis",
  "Research and summarization",
];

const NEVER_AUTHORIZES = [
  "Declare a difference to be error, leakage or recoverable",
  "Authorize a fiscal correction",
  "Replace governed review",
];

export default function AIAssistanceSection() {
  return (
    <SectionShell className="bg-[#1f0a3a]" bgImage="ai-bg.webp">
      <SectionHeading
        dark
        eyebrow="Controlled AI assistance"
        title="AI assists. Approved rules decide. Evidence proves."
        description="AI can help teams explore patterns and assemble context. It remains advisory and bounded by governed rules, review and evidence."
      />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-3xl bg-white/5 p-6 outline -outline-offset-1 outline-white/20 backdrop-blur-[2px] sm:p-7">
          <h3 className="text-sm font-bold uppercase text-orange-300">AI may assist</h3>
          <ul className="flex flex-col gap-4">
            {MAY_ASSIST.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-white">
                <Check aria-hidden="true" className="size-3.5 shrink-0 text-orange-300" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 rounded-3xl bg-orange-900/15 p-6 outline -outline-offset-1 outline-orange-300/40 backdrop-blur-[2px] sm:p-7">
          <h3 className="text-sm font-bold uppercase text-orange-300">AI never authorizes</h3>
          <ul className="flex flex-col gap-5">
            {NEVER_AUTHORIZES.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-semibold text-white sm:text-base">
                <X aria-hidden="true" className="mt-1 size-3.5 shrink-0 text-orange-300" strokeWidth={2} />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-xs leading-5 text-zinc-300">
            No model output independently establishes error, leakage, recoverability, a fiscal correction or legal
            correctness.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
