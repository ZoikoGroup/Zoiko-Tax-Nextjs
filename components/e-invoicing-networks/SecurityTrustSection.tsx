import Image from "next/image";
import { ArrowRightIcon, DatabaseIcon, KeyRoundIcon, ShieldCheckIcon } from "./icons";

const cards = [
  {
    icon: <KeyRoundIcon className="size-5 text-orange-300" />,
    title: "Controlled credentials",
    desc: "Credentials are never public. Certificates and signatures are conditional on the exact approved adapter requirements—not universal prerequisites.",
  },
  {
    icon: <DatabaseIcon className="size-5 text-orange-300" />,
    title: "Minimum required data",
    desc: "Use approved transport and the minimum required data. Do not expose sensitive payloads or private environment details in logging or examples.",
  },
  {
    icon: <ShieldCheckIcon className="size-5 text-orange-300" />,
    title: "Safe diagnostics",
    desc: "Keep diagnostics sanitized and detail access-controlled. No secret, token, certificate, invoice identifier or authority reference belongs in public content.",
  },
];

export default function SecurityTrustSection() {
  return (
    <div className="relative self-stretch px-20 py-20 bg-slate-900/75 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Section background image */}
      <Image
        src="/e-invoicing-networks/Security credentials and trust.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-900/75" />
      <div className="relative self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase">11 / Security, credentials &amp; trust</div>
        <h2 className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">Sensitive configuration stays out of public content.</h2>
        <p className="w-full max-w-[1120px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Use only approved transport and adapter-specific trust requirements. This architecture page publishes no credentials, assurance badge or invented security protocol.</p>
      </div>
      <div className="relative self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {cards.map((card) => (
          <div key={card.title} className="flex-1 self-stretch p-6 bg-violet-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-600 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-6">{card.title}</div>
            <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="relative self-stretch p-7 bg-violet-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-600 inline-flex justify-start items-center gap-8 overflow-hidden">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="self-stretch justify-start text-white text-2xl font-semibold font-['Inter']">Trust is the source for assurance.</div>
          <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Use the approved Trust source for security, privacy and assurance context. No certification, compliance or uptime claim is inferred here.</p>
        </div>
        <div className="h-12 px-5 bg-violet-950 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-slate-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-violet-900 transition-colors cursor-pointer">
          <div className="justify-start text-white text-sm font-semibold font-['Inter']">Explore Trust</div>
          <ArrowRightIcon className="size-4 text-white" />
        </div>
      </div>
    </div>
  );
}
