"use client";

import React from "react";
import { LIFECYCLE_DATA } from "./sdks-data";
import { SectionContainer, SectionHeader, Reveal, IllustrativeBanner } from "./shared";

export default function LifecycleSection() {
  const [stateHeader, boundaryHeader] = LIFECYCLE_DATA.headers;

  return (
    <SectionContainer className="bg-[#FAF3FF]">
      <div className="flex flex-col gap-8">
        <Reveal>
          <SectionHeader
            eyebrow={LIFECYCLE_DATA.eyebrow}
            title={LIFECYCLE_DATA.title}
            description={LIFECYCLE_DATA.description}
          />
        </Reveal>

        <Reveal delay={0.04}>
          <div className="rounded-3xl border border-[#D8CEDD] bg-white p-5 sm:p-7 flex flex-col gap-5">
            <IllustrativeBanner />
            <p className="text-sm text-[#665F69]">{LIFECYCLE_DATA.caption}</p>

            <table className="w-full text-left border-collapse">
              <thead className="hidden md:table-header-group">
                <tr>
                  <th scope="col" className="w-64 pb-2 pr-8 text-xs font-bold text-[#301153]">
                    {stateHeader}
                  </th>
                  <th scope="col" className="pb-2 text-xs font-bold text-[#301153]">
                    {boundaryHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {LIFECYCLE_DATA.rows.map((row) => (
                  <tr key={row.state} className="flex flex-col gap-1.5 md:table-row border-b border-[#D8CEDD] py-4">
                    <th scope="row" className="md:py-4 md:pr-8 align-top text-base font-semibold leading-6 text-[#18141B]">
                      {row.state}
                    </th>
                    <td className="md:py-4 align-top text-base leading-6 text-[#665F69]">{row.boundary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
