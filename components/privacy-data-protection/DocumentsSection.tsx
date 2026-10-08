import { Badge, DocumentIcon, NoticeCard, RouteLink, SectionHeading, SectionShell, TRUST_ROUTES } from "./shared";

const DOCUMENTS = [
  {
    name: "Privacy notice",
    authority: "Authoritative legal source",
    requirement: "Applicable privacy terms and approved request route.",
  },
  {
    name: "Data processing agreement (DPA)",
    authority: "Authoritative legal source",
    requirement: "Operative processing terms, relationship and scope.",
  },
  {
    name: "Subprocessor list",
    authority: "Source-controlled disclosure",
    requirement: "Approved identity, purpose, location and currentness.",
  },
  {
    name: "Security evidence",
    authority: "Supporting evidence",
    requirement: "Approved evidence access and control scope.",
  },
  {
    name: "Residency / processing document",
    authority: "Scope-specific source",
    requirement: "Source-controlled processing, residency and transfer terms.",
  },
  {
    name: "Questionnaire",
    authority: "Controlled process",
    requirement: "Only an approved process can establish access and response scope.",
  },
  {
    name: "Archived legal versions",
    authority: "Historical source",
    requirement: "Superseded versions must remain distinct from operative terms.",
  },
];

const DOCUMENT_STATES = ["Public", "Controlled", "Not published", "Historical"];

export default function DocumentsSection() {
  return (
    <SectionShell id="documents" className="scroll-mt-20 bg-purple-50">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="10 / EVIDENCE, DPA & DOCUMENTS"
          title="Inspect the source. Check its standing."
          description="This index describes the document categories needed for disclosure. It is not a published inventory of legal artifacts, current contracts or downloadable files."
        />

        <NoticeCard
          title="Approved legal documents are not supplied in this view"
          description="No approved document titles, versions, effective dates or legal download destinations are supplied. Source-required categories are shown below without document links."
        />

        <div className="overflow-hidden rounded-2xl bg-white outline outline-1 outline-offset-[-1px] outline-zinc-300">
          <div className="hidden gap-6 bg-purple-100 px-6 py-6 text-xs font-bold text-violet-950 lg:grid lg:grid-cols-[3fr_4.5fr_2.5fr]">
            <span>DOCUMENT CATEGORY / AUTHORITY</span>
            <span>SOURCE REQUIREMENT</span>
            <span>AVAILABILITY IN THIS VIEW</span>
          </div>
          {DOCUMENTS.map((doc, i) => (
            <div
              key={doc.name}
              className={`grid grid-cols-1 gap-3 p-5 sm:p-6 lg:grid-cols-[3fr_4.5fr_2.5fr] lg:items-center lg:gap-6 ${
                i < DOCUMENTS.length - 1 ? "border-b border-zinc-300" : ""
              }`}
            >
              <div className="flex items-center gap-3.5">
                <DocumentIcon />
                <div className="flex flex-col gap-1.5">
                  <span className="text-base text-zinc-900">{doc.name}</span>
                  <span className="text-xs text-stone-500">{doc.authority}</span>
                </div>
              </div>
              <p className="text-sm leading-6 text-stone-500">{doc.requirement}</p>
              <div className="flex flex-col items-start gap-2">
                <Badge>Approved source not supplied</Badge>
                <span className="text-xs text-stone-500">No document link shown</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl bg-purple-100 p-6 sm:p-7">
            <h3 className="text-xl text-zinc-900 sm:text-2xl">What an approved entry must show</h3>
            <p className="text-base leading-7 text-stone-500">
              Operative source, applicable scope, approval, version, effective date, owner, review state and access
              conditions. Explanatory summaries remain visibly separate.
            </p>
            <p className="text-sm font-semibold text-violet-950">Document metadata: Not supplied</p>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 outline sm:p-7 outline-1 outline-offset-[-1px] outline-zinc-300">
            <h3 className="text-xl text-zinc-900 sm:text-2xl">Document states, clearly distinguished</h3>
            <div className="flex flex-wrap gap-2">
              {DOCUMENT_STATES.map((state) => (
                <Badge key={state}>{state}</Badge>
              ))}
            </div>
            <p className="text-sm leading-6 text-stone-500">
              Illustrative labels only, not assigned document statuses. Controlled access requires an approved
              process; no portal, NDA, response time or availability is promised.
            </p>
          </div>
        </div>

        <RouteLink accent {...TRUST_ROUTES.evidence} />
      </div>
    </SectionShell>
  );
}
