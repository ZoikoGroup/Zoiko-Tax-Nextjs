import Image from "next/image";

const PILLARS = ["Secure", "Auditable", "Jurisdiction-aware"];

export default function BrandPanel() {
  return (
    <aside className="relative hidden lg:flex lg:w-[42%] xl:w-[605px] shrink-0 min-h-dvh flex-col justify-between overflow-hidden bg-[#260D29] px-10 xl:px-12 pt-16 pb-9">
      {/* Globe sits behind the content, fading into the panel at both edges */}
      <div className="pointer-events-none absolute inset-x-0 top-[44%] h-[469px] select-none" aria-hidden="true">
        <Image src="/sign-in/globe.webp" alt="" fill sizes="605px" className="object-cover object-top" priority />
        <div className="absolute inset-x-0 top-0 h-11 bg-gradient-to-b from-[#260D29] to-[#260D29]/0" />
        <div className="absolute inset-x-0 bottom-0 h-7 bg-gradient-to-b from-[#260D29]/0 to-[#260D29]" />
      </div>

      <div className="relative w-full rounded-3xl bg-white px-6 xl:px-8 py-8 xl:py-10 shadow-[inset_4px_4px_4px_0px_rgba(90,35,136,0.40),inset_-4px_4px_4px_0px_rgba(90,35,136,0.40),inset_0px_-4px_4px_0px_rgba(90,35,136,0.40)] flex flex-col gap-10">
        <Image src="/layout/zoikotax-logo.png" alt="ZoikoTax" width={226} height={37} priority />
        <div className="flex flex-col gap-5">
          <p className="text-[28px] xl:text-4xl font-medium leading-tight xl:leading-10 text-[#211C24]">
            Global tax compliance. One governed workspace.
          </p>
          <p className="text-base leading-6 text-[#5D5A5A]">
            Manage obligations, evidence and compliance across jurisdictions.
          </p>
        </div>
      </div>

      <ul className="relative flex items-center justify-center text-base font-medium text-[#DDD2DD]">
        {PILLARS.map((pillar, idx) => (
          <li key={pillar} className="flex items-center">
            {idx > 0 && <span className="mx-4 xl:mx-7 h-3 w-px bg-[#5D5A5A]" aria-hidden="true" />}
            {pillar}
          </li>
        ))}
      </ul>
    </aside>
  );
}
