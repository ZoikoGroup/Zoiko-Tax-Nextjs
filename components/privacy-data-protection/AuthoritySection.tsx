import { NoticeCard, SectionHeading, SectionShell } from "./shared";

const LAYERS = [
  {
    eyebrow: "01 · CONTROLLING SOURCE",
    title: "Operative approved source",
    description: "Privacy notice, DPA or other operative legal source. Approval and scope must be established.",
    dark: true,
  },
  {
    eyebrow: "02 · EXPLANATION",
    title: "Source-grounded summary",
    description: "Plain-language explanation stays within the approved source and its applicable context.",
    dark: false,
  },
  {
    eyebrow: "03 · WAYFINDING",
    title: "Navigation aids",
    description: "Topic headings and Trust routes help you find the right source; they do not create obligations.",
    dark: false,
  },
];

export default function AuthoritySection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="01 / AUTHORITY & PRIVACY POSTURE"
          title="What can this page establish?"
          description="This is a dedicated public Trust route for approved privacy disclosures. Exact terms belong to legal sources. This view provides the reading structure, not replacement legal terms."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {LAYERS.map((layer) => (
            <div
              key={layer.title}
              className={`flex flex-col gap-3.5 rounded-2xl p-5 outline sm:p-6 outline-1 outline-offset-[-1px] outline-zinc-300 ${
                layer.dark ? "bg-violet-950" : "bg-white"
              }`}
            >
              <span className={`text-xs font-bold ${layer.dark ? "text-orange-300" : "text-amber-700"}`}>
                {layer.eyebrow}
              </span>
              <h3 className={`text-xl sm:text-2xl ${layer.dark ? "text-white" : "text-zinc-900"}`}>{layer.title}</h3>
              <p className={`text-base leading-6 ${layer.dark ? "text-zinc-300" : "text-stone-500"}`}>
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        <NoticeCard
          title="No approved policy details supplied in this design"
          description="The topics below are questions to verify against approved sources. They are not assertions that ZoikoTax implements these principles or particular privacy practices."
        />
      </div>
    </SectionShell>
  );
}
