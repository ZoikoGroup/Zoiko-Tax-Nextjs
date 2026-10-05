import Image from "next/image";
import { ArrowUpRightPngIcon } from "./icons";

const cards = [
  {
    icon: <img src="/e-invoicing-networks/icons/key-round.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Controlled credentials",
    desc: (
      <>
        Credentials are never public. Certificates and<br />
        signatures are conditional on the exact<br />
        approved adapter requirements—not universal<br />
        prerequisites.
      </>
    ),
  },
  {
    icon: <img src="/e-invoicing-networks/icons/database.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Minimum required data",
    desc: (
      <>
        Use approved transport and the minimum<br />
        required data. Do not expose sensitive payloads<br />
        or private environment details in logging or<br />
        examples.
      </>
    ),
  },
  {
    icon: <img src="/e-invoicing-networks/icons/file-lock-2.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Safe diagnostics",
    desc: (
      <>
        Keep diagnostics sanitized and detail access-<br />
        controlled. No secret, token, certificate, invoice<br />
        identifier or authority reference belongs in<br />
        public content.
      </>
    ),
  },
];

export default function SecurityTrustSection() {
  return (
    <div className="relative w-full flex justify-center py-20 bg-[rgba(18,3,39,0.76)] overflow-hidden">
      {/* Section background image */}
      <Image
        src="/e-invoicing-networks/Security credentials and trust.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[rgba(18,3,39,0.76)]" />
      <div className="relative w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="relative self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase">11 / Security, credentials &amp; trust</div>
        <h2 className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">Sensitive configuration stays out of public content.</h2>
        <p className="w-full max-w-[1120px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">
          Use only approved transport and adapter-specific trust requirements. This architecture page publishes no credentials,<br />assurance badge or invented security protocol.
        </p>
      </div>
      <div className="relative self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
        {cards.map((card) => (
          <div key={card.title} className="flex-1 self-stretch p-6 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#63477A] inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter'] leading-6">{card.title}</div>
            <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">{card.desc}</p>
          </div>
        ))}
      </div>
      <div className="relative self-stretch p-7 bg-[#301153] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#63477A] inline-flex justify-start items-center gap-8 overflow-hidden">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="self-stretch justify-start text-white text-2xl font-semibold font-['Inter']">Trust is the source for assurance.</div>
          <p className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6 whitespace-nowrap">Use the approved Trust source for security, privacy and assurance context. No certification, compliance or uptime claim is inferred here.</p>
        </div>
        <div className="h-12 px-5 bg-[#301153] rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[#63477A] flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
          <div className="justify-start text-white text-sm font-semibold font-['Inter']">Explore Trust</div>
          <ArrowUpRightPngIcon className="size-4" />
        </div>
      </div>
      </div>
    </div>
  );
}
