import React from "react";
import { CONTAINER, Reveal } from "./shared";
import { reviewDuties, reviewRoles } from "./compliance-filing-data";

/** Figma 233:9830 / 233:10823 — white panel on the page background (no image). */
export default function ReviewDutiesSection() {
  return (
    <section className="relative w-full py-6 lg:py-10">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4 rounded-[16px] border border-[#d8cedd] bg-white p-5 leading-[normal] lg:gap-5 lg:p-8">
            <h3 className="w-full font-sora text-[18px] font-bold text-[#18141b] lg:text-[20px]">{reviewDuties.title}</h3>
            <p className="w-full font-manrope text-[13px] font-normal text-[#665f69] lg:text-[14px]">{reviewDuties.description}</p>
            <div className="grid w-full grid-cols-1 gap-[10px] lg:grid-cols-4 lg:items-start lg:gap-4">
              {reviewRoles.map((r) => (
                <div key={r.role} className="flex min-w-px flex-col items-start gap-1 rounded-[8px] border border-[#d8cedd] p-[14px] lg:gap-2 lg:rounded-[12px] lg:p-5">
                  <h4 className="font-sora text-[14px] font-bold whitespace-nowrap text-[#bf6735] lg:text-[15px]">{r.role}</h4>
                  <p className="font-manrope text-[12px] font-normal text-[#665f69]">{r.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
