import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Container } from "./shared";

const resources = [
  {
    icon: "/existing-tax-engines/API code reference.svg",
    title: "API Reference",
    desc: "Read the exact approved API definitions and constraints.",
    path: "/developers/api/",
  },
  {
    icon: "/existing-tax-engines/Integration workflow guide.svg",
    title: "Integration Guides",
    desc: "Inspect contract-defined mapping and integration guidance.",
    path: "/developers/integration-guides/",
  },
  {
    icon: "/existing-tax-engines/Sandbox testing flask.svg",
    title: "Sandbox",
    desc: "Use non-production validation where separately available.",
    path: "/developers/sandbox/",
  },
  {
    icon: "/existing-tax-engines/Bulk and batch stack.svg",
    title: "Bulk & Batch",
    desc: "Consult approved guidance for high-volume comparison.",
    path: "/developers/bulk-batch/",
  },
  {
    icon: "/existing-tax-engines/Webhook event connections.svg",
    title: "Webhooks & Events",
    desc: "Use continuation patterns only where approved.",
    path: "/developers/webhooks-events/",
  },
  {
    icon: "/existing-tax-engines/Evidence and replay history.svg",
    title: "Evidence & Replay",
    desc: "Review source, version and historical evidence context.",
    path: "/platform/evidence-replay/",
  },
  {
    icon: "/existing-tax-engines/Coverage scope globe.svg",
    title: "Coverage",
    desc: "Verify the exact scope and required capability separately.",
    path: "/coverage/",
  },
];

const checklist = [
  "Migration owner",
  "Incumbent production authority",
  "Mapping / correlation strategy",
  "Approved comparison dimensions",
  "Discrepancy owner",
  "Recovery authority",
  "Exact-scope Coverage approval",
  "Explicit cutover approvals",
];

export default function SandboxSection() {
  return (
    <section className="relative w-full flex justify-center items-start bg-white py-20 lg:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/erp-general-ledger/tech-pattern.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-3.5">
          <div className="text-[#D65A2C] text-xs font-bold font-['Inter',sans-serif] uppercase tracking-[0.08em] leading-5">
            11 · SANDBOX, VALIDATION &amp; READINESS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold font-['Inter',sans-serif] text-[#18141B] leading-tight tracking-tight">
            Begin with the technical sources.
          </h2>
          <p className="text-base sm:text-lg text-[#665F69] font-normal font-['Inter',sans-serif] leading-relaxed max-w-[1100px]">
            Use documentation to establish the supported integration contract. Non-production testing is not an entitlement, Coverage approval or go-live readiness decision.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-start gap-8 lg:gap-12">
          {/* Resource list */}
          <div className="flex-1 w-full flex flex-col justify-start items-stretch">
            {resources.map((row, idx) => (
              <div
                key={row.title}
                className={`self-stretch py-4.5 ${
                  idx === resources.length - 1 ? "" : "border-b border-[#E5DFE8]"
                } flex justify-start items-start gap-4`}
              >
                <Image
                  src={row.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="size-5.5 shrink-0 mt-0.5"
                />
                <div className="flex-1 flex flex-col justify-start items-start gap-1">
                  <div className="text-[#18141B] text-base sm:text-lg font-bold font-['Inter',sans-serif]">
                    {row.title}
                  </div>
                  <div className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
                    {row.desc}
                  </div>
                  <div className="self-stretch text-[#8C8295] text-xs font-normal font-mono">
                    {row.path}
                  </div>
                </div>
                <Image
                  src="/existing-tax-engines/arrow-up-right.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="size-4.5 shrink-0 mt-1"
                />
              </div>
            ))}
          </div>

          {/* Planning checklist */}
          <div className="w-full lg:w-[380px] shrink-0 p-6 sm:p-8 bg-white rounded-3xl border border-[#D8CEDD] flex flex-col justify-start items-start gap-5 shadow-sm">
            <div className="self-stretch text-[#18141B] text-2xl font-bold leading-7 font-['Inter',sans-serif]">
              Define before you evaluate.
            </div>
            <p className="self-stretch text-[#665F69] text-sm font-normal leading-5 font-['Inter',sans-serif]">
              Planning checklist, not passed conditions. Confirm each item
              through the appropriate approved sources and owners.
            </p>
            <div className="self-stretch flex flex-col gap-3 my-1">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="self-stretch flex justify-start items-center gap-3"
                >
                  <Image
                    src="/existing-tax-engines/square.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 shrink-0 text-[#665F69]"
                  />
                  <div className="flex-1 text-[#18141B] text-sm font-normal font-['Inter',sans-serif]">
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/integration-guides"
              className="h-12 px-6 bg-amber-700 hover:bg-[#9a4708] text-white rounded-full shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 inline-flex justify-start items-center gap-2.5 transition-all text-sm font-semibold font-['Inter',sans-serif]"
            >
              <span>Explore Integration Guides</span>
              <ArrowUpRight className="size-4 text-white" />
            </Link>
          </div>
        </div>

        {/* Notice callout */}
        <div className="w-full p-6 bg-[rgba(255,240,231,1)] rounded-2xl border border-[rgba(235,200,181,1)] border-l-[3px] border-l-[#D65A2C] flex flex-col justify-start items-start gap-2">
          <div className="text-[#18141B] text-base font-bold leading-6 font-['Inter',sans-serif]">
            Validation does not grant production authority.
          </div>
          <p className="text-[#665F69] text-sm font-normal leading-relaxed font-['Inter',sans-serif]">
            Sandbox availability is separate. Bulk &amp; Batch and Webhooks &amp; Events apply only to approved patterns. Testing results do not establish legal correctness, Coverage, entitlement or an approved cutover.
          </p>
        </div>
      </Container>
    </section>
  );
}
