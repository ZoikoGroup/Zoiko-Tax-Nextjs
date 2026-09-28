import React from "react";
import clsx from "clsx";
import { CONTAINER, Reveal } from "./shared";
import { workpaperModel, workpaperSteps } from "./compliance-filing-data";

/** Figma 233:9809 / 233:10802 — dark #1d033b panel on the page background (no image). */
export default function PrepWorkpaperSection() {
  return (
    <section className="relative w-full py-6 lg:py-10">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4 rounded-[16px] bg-[#1d033b] p-5 leading-[normal] lg:gap-5 lg:p-8">
            <h3 className="w-full font-sora text-[18px] font-bold text-white lg:text-[20px]">{workpaperModel.title}</h3>
            <p className="w-full font-manrope text-[13px] font-normal text-[#d8cedd] lg:text-[14px]">{workpaperModel.description}</p>
            <div className="grid w-full grid-cols-1 gap-[10px] lg:grid-cols-4 lg:items-start lg:gap-4">
              {workpaperSteps.map((s, idx) => (
                <div
                  key={s.step}
                  className={clsx(
                    "flex min-w-px flex-col items-start gap-[6px] rounded-[8px] p-[14px] lg:gap-2 lg:rounded-[12px] lg:p-5",
                    idx === workpaperSteps.length - 1 ? "bg-[#5b2a86]" : "bg-[#260047]"
                  )}
                >
                  <span className="font-jetbrains text-[10px] font-normal whitespace-nowrap text-[#d97637] lg:text-[11px]">{s.step}</span>
                  <h4 className="font-sora text-[14px] font-bold whitespace-nowrap text-white lg:text-[16px]">{s.title}</h4>
                  <p className="font-manrope text-[12px] font-normal text-[#d8cedd]">{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
