"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SEARCH_DATA as S } from "./customer-support-data";
import { Reveal } from "./shared";

export default function SearchSection() {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#220847]">
      {/* Background office photo with rich purple overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/customer-support/search-bg-tech.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#220847]/80 backdrop-brightness-95" />
      </div>

      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 py-20 md:py-24 lg:py-28 flex flex-col items-center text-center">
        <Reveal className="w-full flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold leading-[1.25] text-white tracking-tight">
            {S.title}
          </h2>
        </Reveal>

        <Reveal delay={0.04} className="w-full flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="mt-6 sm:mt-7 w-full max-w-[740px] rounded-2xl bg-white/98 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-2 sm:p-2.5 pl-6 sm:pl-7 flex items-center gap-3 transition-all focus-within:ring-2 focus-within:ring-[#BF6735]/40"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={S.placeholder}
              aria-label={S.placeholder}
              className="w-full bg-transparent text-base sm:text-[17px] text-[#18141B] placeholder:text-[#9CA3AF] outline-none"
            />
            <button
              type="submit"
              className="shrink-0 inline-flex items-center justify-center rounded-full bg-[#BF6735] px-7 sm:px-9 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,0.8),inset_0px_-2px_4px_0px_rgba(253,207,190,0.8)] border border-[#DD7235] hover:bg-[#a9572b] transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              {S.action}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.08} className="w-full flex justify-center">
          <p className="mt-4 text-xs sm:text-sm text-white/80 font-normal tracking-wide">
            {S.footnote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
