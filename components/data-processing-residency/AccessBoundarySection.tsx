import { ArrowRight } from "lucide-react";
import { SectionShell, SectionHeading } from "@/components/ai-governance/shared";

const DIMENSIONS = [
  {
    dimension: "Support / operations",
    required: "Access purpose, eligible service, environment and data domain",
    state: "Not published / Source required"
  },
  {
    dimension: "Privileged / emergency",
    required: "Approved scope, conditions and governing authority",
    state: "Not published / Source required"
  },
  {
    dimension: "Geographic restriction",
    required: "Actual restriction and its exact scope, if supported",
    state: "Unknown / Source required"
  },
  {
    dimension: "Customer access gate",
    required: "Actual customer-gating capability and conditions, if supported",
    state: "Not published / Source required"
  },
  {
    dimension: "Auditability",
    required: "Approved evidence of access and its visibility",
    state: "Not published / Source required"
  }
];

export default function AccessBoundarySection() {
  return (
    <SectionShell id="access-boundary" className="bg-[rgba(250,243,255,1)]">
      <div className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="OPERATIONAL / SUPPORT / ADMIN ACCESS"
          title="At-rest location does not locate every access."
          description={<span className="block whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">Human and system access require separate approved scope. Neither local storage nor a conceptual boundary proves geographically<br/>restricted access.</span>}
        />

        <div className="flex flex-col xl:flex-row gap-8 rounded-2xl bg-[rgba(48,17,83,1)] p-8 items-center">
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-normal text-white whitespace-pre-line">
              Support ·<br/>Operations\nPrivileged ·<br/>Emergency
            </h4>
            <span className="text-[13px] font-normal text-[rgba(217,208,223,1)]">
              Conceptual categories only
            </span>
          </div>
          
          <ArrowRight className="w-7 h-7 text-[rgba(244,162,97,1)] shrink-0 hidden xl:block" />

          <div className="flex flex-col gap-3 rounded-xl bg-[rgba(29,3,59,1)] border border-[rgba(118,89,137,1)] p-6 flex-1">
            <h4 className="text-[21px] font-normal text-white">
              Approved access scope required
            </h4>
            <p className="text-[15px] font-normal leading-relaxed text-[rgba(217,208,223,1)] whitespace-pre-line">
              Geography · Customer access gate · Auditability\nNo implemented<br/>approval workflow or tool is asserted.
            </p>
          </div>
          
          <ArrowRight className="w-7 h-7 text-[rgba(244,162,97,1)] shrink-0 hidden xl:block" />

          <div className="flex flex-col">
            <h4 className="text-[21px] font-normal text-white xl:w-[230px]">
              Stated service,<br/>environment &amp; data<br/>domain
            </h4>
          </div>
        </div>

        <p className="text-[17px] font-normal leading-relaxed text-[rgba(102,95,105,1)] whitespace-nowrap sm:whitespace-normal xl:whitespace-nowrap">
          Text equivalent: support, operational, privileged and emergency access must each be assessed against the approved source for the stated service,<br/>environment and data domain. Geographic restrictions, customer gates and auditability are separate dimensions. This model does not establish actual cross-<br/>border access, implemented controls or zero remote access.
        </p>

        <div className="rounded-2xl overflow-hidden border border-[rgba(216,206,221,1)] bg-white w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-[rgba(242,234,248,1)] border-b border-[rgba(216,206,221,1)]">
                <th className="py-4.5 px-6 text-[13px] font-normal text-[rgba(24,20,27,1)]">Access dimension</th>
                <th className="py-4.5 px-6 text-[13px] font-normal text-[rgba(24,20,27,1)]">Approved information required</th>
                <th className="py-4.5 px-6 text-[13px] font-normal text-[rgba(24,20,27,1)]">State in supplied sources</th>
              </tr>
            </thead>
            <tbody>
              {DIMENSIONS.map((item, i) => (
                <tr key={i} className="border-b border-[rgba(216,206,221,1)] last:border-b-0 hover:bg-gray-50/50 transition-colors">
                  <td className="py-5 px-6 text-[15px] font-normal text-[rgba(24,20,27,1)] align-top">{item.dimension}</td>
                  <td className="py-5 px-6 text-[15px] font-normal text-[rgba(102,95,105,1)] align-top">{item.required}</td>
                  <td className="py-5 px-6 text-[15px] font-normal text-[rgba(102,95,105,1)] align-top">{item.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </SectionShell>
  );
}
