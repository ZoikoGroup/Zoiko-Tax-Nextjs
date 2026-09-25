import React from "react";
import { CONTAINER, Reveal } from "./shared";
import { submissionTracking, submissionStates } from "./compliance-filing-data";

/** Figma 233:9847 / 233:10840 — white panel on the page background (no image). */
export default function SubmissionTrackingSection() {
  return (
    <section className="relative w-full py-6 lg:py-10">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4 rounded-[16px] border border-[#d8cedd] bg-white p-5 leading-[normal] lg:gap-5 lg:p-8">
            <h3 className="w-full font-sora text-[18px] font-bold text-[#18141b] lg:text-[20px]">{submissionTracking.title}</h3>
            <p className="w-full font-manrope text-[13px] font-normal text-[#665f69] lg:text-[14px]">{submissionTracking.description}</p>
            <ol className="grid w-full grid-cols-1 gap-2 lg:grid-cols-5 lg:gap-3">
              {submissionStates.map((s) => (
                <li key={s.label} className="flex min-w-px items-center gap-[10px] rounded-[8px] bg-[#faf3ff] p-3 lg:gap-2">
                  <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: s.dot }} />
                  <span className="font-manrope text-[13px] font-semibold whitespace-nowrap text-[#18141b]">{s.label}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
