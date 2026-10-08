import Image from "next/image";
import { ArrowRightIcon, ArrowUpRightIcon, BookIcon, FlaskIcon, MapIcon, WebhookIcon } from "./icons";

const cards = [
  {
    icon: <img src="/e-invoicing-networks/icons/API code reference.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "API Reference",
    desc: <>The governed API contract and<br />supported integration surface.</>,
    path: "/developers/api/",
    link: "Open API Reference",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/Integration workflow guide.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Integration Guides",
    desc: <>Implementation guidance and<br />approved adapter boundaries.</>,
    path: "/developers/integration-guides/",
    link: "Open Integration Guides",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/Webhooks and event connections.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Webhooks & Events",
    desc: <>Exact async schema and delivery<br />semantics.</>,
    path: "/developers/webhooks-events/",
    link: "Open Webhooks & Events",
  },
  {
    icon: <img src="/e-invoicing-networks/icons/Sandbox testing flask.svg" alt="" width={20} height={20} className="shrink-0" />,
    title: "Sandbox",
    desc: <>Non-production testing where<br />separately available.</>,
    path: "/developers/sandbox/",
    link: "Open Sandbox",
  },
];

const linkRows = [
  { title: "Coverage", desc: "Verify exact availability · /coverage/" },
  { title: "Trust", desc: "Review approved assurance · /trust/" },
  { title: "Evidence & Replay", desc: "Investigate historical context · Approved platform context" },
];

export default function NextStepsSection() {
  return (
    <div className="relative w-full flex justify-center py-20 bg-transparent overflow-hidden">
      {/* Section background image */}
      <Image
        src="/e-invoicing-networks/Next steps.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="relative w-full max-w-[1440px] px-4 sm:px-8 lg:px-20 flex flex-col justify-start items-start gap-10">
      <div className="relative self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter'] uppercase">15 / Next steps</div>
        <h2 className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">Start with the contract. Verify the path.</h2>
        <p className="w-full max-w-[1120px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Technical documentation first. Availability, assurance and evidence remain separate source-bound checks.</p>
      </div>
      <div className="relative self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4 overflow-hidden">
        {cards.map((card) => (
          <div key={card.title} className="self-stretch p-6 bg-[#24103B] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[#63477A] inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter']">{card.title}</div>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">{card.desc}</p>
            <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4">{card.path}</div>
            <div className="min-h-11 inline-flex justify-start items-center gap-2 overflow-hidden cursor-pointer hover:underline">
              <div className="justify-start text-[#F4A261] text-sm font-semibold font-['Inter']">{card.link}</div>
              <img src="/e-invoicing-networks/icons/arrow-right.svg" alt="" width={10} height={10} />
            </div>
          </div>
        ))}
      </div>
      <div className="relative self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
        {linkRows.map((row) => (
          <div key={row.title} className="flex-1 py-4 border-b border-slate-600 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="min-h-11 inline-flex justify-start items-center gap-2 overflow-hidden cursor-pointer hover:underline">
              <div className="justify-start text-[#F4A261] text-sm font-semibold font-['Inter']">{row.title}</div>
              <img src="/e-invoicing-networks/icons/arrow-right.svg" alt="" width={10} height={10} />
            </div>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">{row.desc}</p>
          </div>
        ))}
      </div>
      <div className="relative self-stretch p-7 bg-[#24103B] rounded-3xl inline-flex justify-start items-center gap-12 overflow-hidden">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="justify-start text-[#F4A261] text-xs font-bold font-['Inter'] uppercase">Enterprise planning · secondary route</div>
          <div className="self-stretch justify-start text-white text-2xl font-semibold font-['Inter']">Discuss your integration scope.</div>
          <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">Book a Demo for contextual enterprise qualification—not self-service activation, live testing or a promise of network support. /demo/</p>
        </div>
        <div className="h-12 px-5 bg-[#24103B] rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[#63477A] flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-violet-900 transition-colors">
          <div className="justify-start text-white text-sm font-semibold font-['Inter']">Book a Demo</div>
          <img src="/e-invoicing-networks/icons/arrow-up-right.svg" alt="" width={16} height={16} />
        </div>
      </div>
      </div>
    </div>
  );
}
