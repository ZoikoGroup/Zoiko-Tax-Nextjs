import { FileText, ScanText, Table, type LucideIcon } from "lucide-react";
import { NoticeCard, SectionHeading, SectionShell } from "./shared";

const FORMATS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: FileText,
    title: "PDF & DOCX",
    description:
      "Reading order, headings, table structure and text alternatives must be evaluated for the actual document. No accessible-file inventory is supplied.",
  },
  {
    icon: Table,
    title: "CSV & generated reports",
    description:
      "Data relationships and generated report structure need their own evidence. An export does not inherit the website’s accessibility status.",
  },
  {
    icon: ScanText,
    title: "Scanned documents",
    description:
      "OCR does not establish accessibility. Reading order, meaningful text and structure still require validation.",
  },
];

const ACCESS_STATES = [
  ["Public", "Approved publication"],
  ["Controlled", "Governed access"],
  ["Not published", "No file established"],
];

export default function DocumentsSection() {
  return (
    <SectionShell className="bg-white" bgImage="documents-bg.webp">
      <SectionHeading
        eyebrow="08 / DOCUMENTS & EXPORTS"
        title="A web page is not evidence for a document."
        description="Web accessibility does not establish document accessibility. Each format, generated output and evidence file needs a separate approved evaluation."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {FORMATS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7"
          >
            <Icon aria-hidden="true" className="size-6 text-amber-700" strokeWidth={1.7} />
            <span className="text-xs font-bold text-amber-700">SEPARATE EVIDENCE</span>
            <h3 className="text-xl font-semibold text-zinc-900 sm:text-2xl">{title}</h3>
            <p className="text-base leading-6 text-stone-500">{description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-purple-50 p-6 outline -outline-offset-1 outline-zinc-300 sm:p-7">
        <h3 className="text-xl text-zinc-900">File access and accessibility are different questions.</h3>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ACCESS_STATES.map(([state, detail]) => (
            <div key={state} className="rounded-lg bg-white px-4 py-4 text-sm text-violet-950 sm:text-base">
              {state} · {detail}
            </div>
          ))}
        </div>
        <p className="text-sm leading-5 text-stone-500">
          Conceptual states only. ACR/VPAT files and alternative-format arrangements require approved sources; none
          are supplied. No download or format-support service is claimed here.
        </p>
      </div>

      <NoticeCard title="Alternative formats: route not supplied">
        Publish a request route only when approved. Use the channel in the approved accessibility statement once
        published; do not infer an email address or promise an available format.
      </NoticeCard>
    </SectionShell>
  );
}
