import React from "react";
import { ShieldCheck } from "lucide-react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";

export default function OperatingModelsSection() {
  const modes = [
    {
      mode: "MODE 01",
      title: "Native Full-Stack",
      description:
        "ZoikoTax executes end-to-end tax calculation, exemption management, ledger updates, and files compliance reports natively.",
      highlighted: false,
    },
    {
      mode: "MODE 02",
      title: "Federated",
      description:
        "Coexists with incumbent ERP tax engines. Coordinates non-tax regulatory duties while other platforms resolve general tax logic.",
      highlighted: false,
    },
    {
      mode: "MODE 03",
      title: "Shadow Assurance",
      description:
        "Connects live facts to both tax engines, compares the outcomes side-by-side, and highlights variance before cutting over.",
      highlighted: true,
    },
  ];

  return (
    <SectionContainer className="bg-[#FAF8FA]">
      <Reveal>
        <SectionHeader
          eyebrow="FLEXIBLE DEPLOYMENT"
          title="Operating Models & Shadow Assurance"
          description="Run ZoikoTax to completely replace incumbent calculators, or shadow-test outcomes to safely manage cutover risk."
          className="max-w-3xl"
        />
      </Reveal>

      {/* 3 Mode Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {modes.map((item, idx) => (
          <Reveal key={item.mode} delay={0.1 * idx}>
            <div
              className={`flex h-full flex-col justify-between rounded-2xl bg-white p-7 sm:p-8 transition-all hover:-translate-y-1 ${
                item.highlighted
                  ? "border-2 border-[#D65A2C] shadow-[0_8px_24px_0_rgba(214,90,44,0.12)]"
                  : "border border-[#D8CEDD] shadow-[0_4px_12px_0_rgba(0,0,0,0.02)]"
              }`}
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D65A2C]">
                  {item.mode}
                </span>
                <h3 className="mt-2 text-xl font-bold text-[#18141B]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#535055]">
                  {item.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Shield Notice Banner */}
      <Reveal delay={0.35}>
        <div className="mt-8 flex items-start sm:items-center gap-3 rounded-xl border border-[#D8CEDD] bg-white p-4 sm:p-5 shadow-sm">
          <ShieldCheck className="h-5 w-5 shrink-0 text-[#18141B]" />
          <p className="text-xs sm:text-sm leading-relaxed text-[#535055]">
            <strong className="font-bold text-[#18141B]">Important Notice: </strong>
            Shadow Assurance does not impact active production transactional databases or
            alter historic ERP compliance records before cutover.
          </p>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
