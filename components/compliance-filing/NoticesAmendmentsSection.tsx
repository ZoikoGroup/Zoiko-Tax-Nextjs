import React from "react";
import { CONTAINER, Reveal } from "./shared";
import { noticesAmendments, noticesCards } from "./compliance-filing-data";

/** Figma 233:9867 / 233:10860 — white panel on the page background (no image). */
export default function NoticesAmendmentsSection() {
  return (
    <section className="relative w-full py-6 lg:py-10">
      <div className={CONTAINER}>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-4 rounded-[16px] border border-[#d8cedd] bg-white p-5 leading-[normal] lg:gap-5 lg:p-8">
            <h3 className="w-full font-sora text-[18px] font-bold text-[#18141b] lg:text-[20px]">{noticesAmendments.title}</h3>
            <p className="w-full font-manrope text-[13px] font-normal text-[#665f69] lg:text-[14px] xl:whitespace-nowrap">{noticesAmendments.description}</p>
            <div className="grid w-full grid-cols-1 gap-[10px] lg:grid-cols-3 lg:items-start lg:gap-4">
              {noticesCards.map((card) => (
                <div key={card.title} className="flex min-w-px flex-col items-start gap-2 rounded-[10px] bg-[#faf3ff] p-[14px] lg:gap-3 lg:rounded-[12px] lg:p-5">
                  <div className="flex w-full items-center justify-between gap-2 font-bold whitespace-nowrap">
                    <h4 className="font-sora text-[14px] text-[#18141b] lg:text-[16px]">{card.title}</h4>
                    <span className="font-manrope text-[10px] text-[#bf6735] lg:text-[11px]">{card.status}</span>
                  </div>
                  <p className="w-full font-manrope text-[12px] font-normal text-[#665f69] lg:text-[13px]">{card.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
