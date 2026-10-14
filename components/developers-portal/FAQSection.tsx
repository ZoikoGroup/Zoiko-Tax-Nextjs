import { SectionHeading, SectionShell } from "./shared";

const FAQS = [
  {
    question: "What is Developer Portal?",
    answer:
      "Developer Portal is the public entry point for source-governed developer resources and implementation orientation. It is not a runtime console and does not issue credentials or establish entitlements.",
  },
  {
    question: "Where is the API Reference?",
    answer:
      "Open API Reference at /developers/api/ for versioned endpoints, schemas, errors and exact contract details. Those contracts remain governed by the owning reference.",
  },
  {
    question: "Which SDKs are supported?",
    answer:
      "The SDK registry at /developers/sdks/ owns supported client libraries and versions. This portal does not invent a language, package or supported-version inventory.",
  },
  {
    question: "Can I get API keys here?",
    answer:
      "No credential-issuance flow is established on this public portal. Review governed authentication guidance through /developers/ and the owning technical sources; never enter secrets into public search.",
  },
  {
    question: "Does Sandbox mean Production?",
    answer:
      "No. Sandbox is non-production. Access, capabilities and parity depend on approved environment and entitlement sources. Current product capability and jurisdiction availability belong to Coverage.",
  },
  {
    question: "How do I get started with an integration?",
    answer:
      "Choose an integration path, review its contracts, understand governed authentication and distinguish the environment before testing safely. This is conceptual orientation—not an approved provisioning workflow.",
  },
  {
    question: "Where do I check changes and incidents?",
    answer:
      "API Changelog at /developers/changelog/ is the authority for version and compatibility changes. Use System Status for live incidents and the approved Technical Support route for account-specific technical issues.",
  },
  {
    question: "Where should I report a vulnerability?",
    answer:
      "Use the approved Responsible Disclosure route, not generic documentation feedback. Its specialist URL has not been supplied on this page; do not place vulnerability details in search or public feedback.",
  },
];

export default function FAQSection() {
  return (
    <SectionShell className="bg-white" bgImage="faq-bg.webp">
      <SectionHeading
        eyebrow="FAQ"
        title="Direct answers. Clear source boundaries."
        description="The essentials are visible here—not hidden behind an account, a form or a collapsed answer."
      />

      <dl className="flex flex-col">
        {FAQS.map((faq) => (
          <div key={faq.question} className="flex flex-col gap-3 border-b border-zinc-300 py-7">
            <dt className="text-lg font-bold leading-7 text-zinc-900 sm:text-xl">{faq.question}</dt>
            <dd className="text-sm leading-6 text-stone-500 sm:text-base">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </SectionShell>
  );
}
