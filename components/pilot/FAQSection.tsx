import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "What does Pilot mean?",
    answer:
      "Pilot means “Controlled, limited deployment”. It identifies a restricted stage for a specifically defined capability, not general availability. The label is meaningful only alongside an approved current source that states the exact scope, conditions, restrictions and effective period. This page explains that meaning; it does not confirm an active deployment.",
  },
  {
    question: "How is Pilot different from the other Coverage Doctrine categories?",
    answer:
      "Production means an approved capability for stated scope; Managed adds an approved managed service. Validation means under formal validation, while Research is a research stage not marketed as production. Pilot means controlled, limited deployment. These are independent classifications, not an automatic sequence, and none establishes availability outside its approved scope.",
  },
  {
    question: "Does Pilot mean I can enroll or get access?",
    answer:
      "No. A Pilot label does not establish customer eligibility, enrollment or onboarding permission. Any permitted participation must be stated in the relevant approved record and governed authorization. No cohort or tenant eligibility is published here. A demo discussion does not change that boundary or grant deployment access.",
  },
  {
    question: "Does Pilot imply tax or regulatory approval?",
    answer:
      "No. Coverage status is different from regulatory validity, filing authority and permission to use outputs for a particular purpose. A Pilot classification does not provide tax or legal advice, regulator signoff or approval for production transactions. Your enterprise must obtain qualified review and confirm the applicable authority separately.",
  },
  {
    question: "When will a Pilot become Production?",
    answer:
      "There is no ETA or guarantee on this page. Any change to Production requires a source-approved decision for the exact capability and scope, with current restrictions and effective dates. A Pilot may instead move to Validation, become restricted or withdrawn, or lose confirmed current status. Promotion is never automatic.",
  },
  {
    question: "Which jurisdiction does a Pilot support?",
    answer:
      "Jurisdiction is capability-specific and must come from the approved current coverage source, where relevant. The word Pilot does not establish support for a country, market or regulatory regime. Confirm the relevant jurisdiction together with the service scenario, deployment conditions, restrictions and effective period before planning any reliance.",
  },
  {
    question: "How do I verify the current scope?",
    answer:
      "Use an approved Coverage Overview or capability-specific destination to check the current record, including capability, relevant jurisdiction, service, environment, restrictions and effective period. No approved lookup source or destination is supplied here, so coverage status is not confirmed on this page. The fixed doctrine remains readable while verification is unavailable.",
  },
  {
    question: "What if a record is stale, unknown or private?",
    answer:
      "Do not treat stale, incomplete, conflicting or expired information as positive current availability. Historical evidence does not establish current scope, and unknown information is not Pilot by default. Access-restricted records must remain non-disclosing. Reconfirm through an authorized current source; do not infer private customer or deployment details from an unavailable lookup.",
  },
  {
    question: "What is the purpose of Book a Demo?",
    answer:
      "Book a Demo is a qualified inquiry for discussing fit, architecture and operating responsibilities for an exact capability and coverage scope. It does not purchase access, enroll a customer or authorize a Pilot deployment. The action remains unavailable here until its existing destination is approved; no contact or access commitment is made.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="faq-bg.webp">
      <SectionHeading
        eyebrow="FAQ"
        title="Direct answers. No implied access."
        description="The doctrine stays visible, even when current coverage cannot be verified."
      />

      <dl className="flex flex-col">
        {FAQS.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-3.5 border-t border-zinc-300 py-7">
            <dt className="text-lg font-semibold leading-7 text-zinc-900 sm:text-xl">{faq.question}</dt>
            <dd className="text-sm leading-6 text-stone-500 sm:text-base sm:leading-7">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
