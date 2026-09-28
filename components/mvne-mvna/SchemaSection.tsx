import React from "react";
import { SectionContainer, SectionHeader, Reveal } from "./shared";
import { SCHEMA_DATA } from "./mvne-mvna-data";

const ROW_GRID = "lg:grid lg:grid-cols-[16rem_18rem_minmax(0,1fr)] lg:items-center lg:gap-0";

export default function SchemaSection() {
  const [levelLabel, elementLabel, scopeLabel] = SCHEMA_DATA.columns;

  return (
    <SectionContainer className="bg-[#F8F3FE]">
      <Reveal>
        <SectionHeader eyebrow={SCHEMA_DATA.eyebrow} title={SCHEMA_DATA.title} description={SCHEMA_DATA.description} />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 overflow-hidden rounded-xl border border-[#D8CEDD] bg-white">
          <div className={`hidden border-b border-[#D8CEDD] bg-[#F5F3EF] p-4 text-xs font-bold uppercase text-[#18141B] ${ROW_GRID}`}>
            <span>{levelLabel}</span>
            <span>{elementLabel}</span>
            <span>{scopeLabel}</span>
          </div>
          <ul>
            {SCHEMA_DATA.rows.map((row) => (
              <li
                key={row.level}
                className={`flex flex-col gap-1 border-b border-[#D8CEDD] p-4 transition-colors last:border-b-0 hover:bg-[#FAF3FF]/60 ${ROW_GRID}`}
              >
                <span className="text-sm font-semibold text-[#18141B]">{row.level}</span>
                <span className="text-xs text-[#665F69]">
                  <span className="font-semibold lg:hidden">{elementLabel}: </span>
                  {row.element}
                </span>
                <span className="text-sm text-[#665F69]">{row.scope}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
