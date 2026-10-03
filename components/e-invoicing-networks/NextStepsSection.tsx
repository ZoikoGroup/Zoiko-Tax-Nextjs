import Image from "next/image";
import { ArrowRightIcon, ArrowUpRightIcon, BookIcon, FlaskIcon, MapIcon, WebhookIcon } from "./icons";

const cards = [
  {
    icon: <BookIcon className="size-5 text-orange-300" />,
    title: "API Reference",
    desc: "The governed API contract and supported integration surface.",
    path: "/developers/api/",
    link: "Open API Reference",
  },
  {
    icon: <MapIcon className="size-5 text-orange-300" />,
    title: "Integration Guides",
    desc: "Implementation guidance and approved adapter boundaries.",
    path: "/developers/integration-guides/",
    link: "Open Integration Guides",
  },
  {
    icon: <WebhookIcon className="size-5 text-orange-300" />,
    title: "Webhooks & Events",
    desc: "Exact async schema and delivery semantics.",
    path: "/developers/webhooks-events/",
    link: "Open Webhooks & Events",
  },
  {
    icon: <FlaskIcon className="size-5 text-orange-300" />,
    title: "Sandbox",
    desc: "Non-production testing where separately available.",
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
    <div className="relative self-stretch px-20 py-20 bg-slate-900/75 flex flex-col justify-start items-start gap-10 overflow-hidden">
      {/* Section background image */}
      <Image
        src="/e-invoicing-networks/Next steps.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-900/75" />
      <div className="relative self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
        <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase">15 / Next steps</div>
        <h2 className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[48.40px]">Start with the contract. Verify the path.</h2>
        <p className="w-full max-w-[1120px] justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Technical documentation first. Availability, assurance and evidence remain separate source-bound checks.</p>
      </div>
      <div className="relative self-stretch grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-start items-stretch gap-4 overflow-hidden">
        {cards.map((card) => (
          <div key={card.title} className="self-stretch p-6 bg-violet-950 rounded-2xl outline outline-1 outline-offset-[-1px] outline-slate-600 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
            {card.icon}
            <div className="self-stretch justify-start text-white text-xl font-semibold font-['Inter']">{card.title}</div>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">{card.desc}</p>
            <div className="self-stretch justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4">{card.path}</div>
            <div className="min-h-11 inline-flex justify-start items-center gap-2 overflow-hidden cursor-pointer hover:underline">
              <div className="justify-start text-orange-300 text-sm font-semibold font-['Inter']">{card.link}</div>
              <ArrowUpRightIcon className="size-2.5 text-orange-300" />
            </div>
          </div>
        ))}
      </div>
      <div className="relative self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
        {linkRows.map((row) => (
          <div key={row.title} className="flex-1 py-4 border-b border-slate-600 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
            <div className="min-h-11 inline-flex justify-start items-center gap-2 overflow-hidden cursor-pointer hover:underline">
              <div className="justify-start text-orange-300 text-sm font-semibold font-['Inter']">{row.title}</div>
              <ArrowUpRightIcon className="size-2.5 text-orange-300" />
            </div>
            <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">{row.desc}</p>
          </div>
        ))}
      </div>
      <div className="relative self-stretch p-7 bg-indigo-950 rounded-3xl inline-flex justify-start items-center gap-12 overflow-hidden">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
          <div className="justify-start text-orange-300 text-xs font-bold font-['Inter'] uppercase">Enterprise planning · secondary route</div>
          <div className="self-stretch justify-start text-white text-2xl font-semibold font-['Inter']">Discuss your integration scope.</div>
          <p className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">Book a Demo for contextual enterprise qualification—not self-service activation, live testing or a promise of network support. /demo/</p>
        </div>
        <div className="h-12 px-5 bg-violet-950 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-slate-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-violet-900 transition-colors cursor-pointer">
          <div className="justify-start text-white text-sm font-semibold font-['Inter']">Book a Demo</div>
          <ArrowRightIcon className="size-4 text-white" />
        </div>
      </div>
    </div>
  );
}
