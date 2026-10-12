import Image from "next/image";
import { IMAGE_BASE } from "./shared";

const STEPS = [
  { title: "Current", description: "Agreed production observation" },
  { title: "Compare", description: "Governed shadow position" },
  { title: "Decide", description: "Review, document or plan cutover" },
];

export default function ShadowAssuranceSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#2a0b4d]">
      <Image
        src={`${IMAGE_BASE}/shadow-bg.webp`}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-16 sm:px-8 lg:min-h-[520px] lg:flex-row lg:items-center lg:gap-16 lg:px-20 lg:py-20">
        <div className="flex flex-col gap-5 lg:w-[470px] lg:shrink-0">
          <span className="text-sm font-bold uppercase text-orange-300">Shadow Assurance</span>
          <h2 className="text-[28px] font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-[47.52px]">
            Compare without changing production.
          </h2>
          <p className="text-base leading-7 text-zinc-300 sm:text-lg">
            Run governed, non-impact comparison of agreed source or incumbent outcomes without changing production
            billing or filing. Findings remain non-authoritative until governed review or cutover.
          </p>
          <p className="text-sm font-semibold leading-5 text-orange-300">
            Agreement or disagreement is not independent legal proof.
          </p>
        </div>

        <ol className="grid flex-1 grid-cols-1 gap-3.5 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className={`flex flex-col gap-3.5 rounded-2xl p-5 outline -outline-offset-1 outline-white/10 sm:min-h-52 ${
                i === 1 ? "bg-purple-800/80" : "bg-white/5 backdrop-blur-[2px]"
              }`}
            >
              <span className="flex size-9 items-center justify-center rounded-[10px] bg-white/10 text-xs font-bold text-orange-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="text-xs leading-5 text-zinc-300">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
