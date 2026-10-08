import Image from "next/image";
import {
  Database,
  Layers,
  ShieldCheck,
  GitCommit,
  FileText,
  ArrowRight,
  Info,
} from "lucide-react";

export default function HandoffArchitectureSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#110B1E] font-sans text-white px-6 py-20 lg:px-12">
      {/* Background Image */}
      <Image
        src="/integration/3.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover object-center opacity-25"
      />

      <div className="mx-auto max-w-7xl">
        {/* Header Content */}
        <div className="flex flex-col gap-3 mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            ARCHITECTURE BEFORE FEATURES
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-[40px] leading-tight">
            Make every handoff—and every boundary—explicit.
          </h1>
          <p className="text-sm font-normal text-[#D6D3D1] max-w-4xl">
            Illustrative example. Arrows describe conceptual actions, never HTTP
            paths, private protocols or production topology.
          </p>
        </div>

        {/* 5 Cards Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 bg-[#301153] rounded-[26px] mb-12">
          {/* Card 01 */}
          <div className="relative rounded-2xl bg-[#190C2A] border border-white/10 p-5 flex flex-col justify-between shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#A8A29E]">
                <span className="text-xs font-bold font-mono">01</span>
                <Database className="h-4 w-4 text-[#D06236]" />
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                Source / customer system
              </h3>
              <p className="text-xs text-[#D6D3D1]">
                Supply trigger &amp; context
              </p>
              <p className="text-[11px] text-[#A8A29E]">Source owns facts</p>
            </div>
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#D06236] font-bold text-sm w-6 h-6">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Card 02 */}
          <div className="relative rounded-2xl bg-[#190C2A] border border-white/10 p-5 flex flex-col justify-between shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#A8A29E]">
                <span className="text-xs font-bold font-mono">02</span>
                <Layers className="h-4 w-4 text-[#D06236]" />
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                ZoikoTax integration
              </h3>
              <p className="text-xs text-[#D6D3D1]">
                Interpret supported context
              </p>
              <p className="text-[11px] text-[#A8A29E]">
                Surface: Contract-defined
              </p>
            </div>
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#D06236] font-bold text-sm w-6 h-6">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Card 03 */}
          <div className="relative rounded-2xl bg-[#190C2A] border border-white/10 p-5 flex flex-col justify-between shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#A8A29E]">
                <span className="text-xs font-bold font-mono">03</span>
                <ShieldCheck className="h-4 w-4 text-[#D06236]" />
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                Authority boundary
              </h3>
              <p className="text-xs text-[#D6D3D1]">
                Validate within supported scope
              </p>
              <p className="text-[11px] text-[#A8A29E]">
                Authority: Contract-defined
              </p>
            </div>
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#D06236] font-bold text-sm w-6 h-6">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Card 04 */}
          <div className="relative rounded-2xl bg-[#190C2A] border border-white/10 p-5 flex flex-col justify-between shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#A8A29E]">
                <span className="text-xs font-bold font-mono">04</span>
                <GitCommit className="h-4 w-4 text-[#D06236]" />
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                Conditional handoff
              </h3>
              <p className="text-xs text-[#D6D3D1]">
                Hand off asynchronously, if applicable
              </p>
              <p className="text-[11px] text-[#A8A29E]">
                States: Contract-defined
              </p>
            </div>
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#D06236] font-bold text-sm w-6 h-6">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>

          {/* Card 05 */}
          <div className="rounded-2xl bg-[#190C2A] border border-white/10 p-5 flex flex-col justify-between shadow-lg">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between text-[#A8A29E]">
                <span className="text-xs font-bold font-mono">05</span>
                <FileText className="h-4 w-4 text-[#D06236]" />
              </div>
              <h3 className="text-sm font-bold text-white leading-snug">
                Result &amp; evidence
              </h3>
              <p className="text-xs text-[#D6D3D1]">
                Return result / status / evidence
              </p>
              <p className="text-[11px] text-[#A8A29E]">
                Shapes: Contract-defined
              </p>
            </div>
          </div>
        </div>

        {/* Numbered Rows List */}
        <div className="flex flex-col gap-4 mb-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border-b border-white/10 px-6 py-4 gap-4">
            <div className="md:col-span-3 flex items-center gap-3">
              <span className="text-xs font-bold font-mono text-[#D06236]">
                01
              </span>
              <span className="text-xs font-bold text-white">
                Source-owned trigger
              </span>
            </div>
            <div className="md:col-span-9 text-xs text-[#D6D3D1]">
              The customer/source system initiates the conceptual handoff and
              retains responsibility for source context and quality.
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border-b border-white/10 px-6 py-4 gap-4">
            <div className="md:col-span-3 flex items-center gap-3">
              <span className="text-xs font-bold font-mono text-[#D06236]">
                02
              </span>
              <span className="text-xs font-bold text-white">
                Relevant integration surface
              </span>
            </div>
            <div className="md:col-span-9 text-xs text-[#D6D3D1]">
              Use only the relevant governed ZoikoTax surface. API, SDK, event
              or bulk details belong to their exact documentation.
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border-b border-white/10 px-6 py-4 gap-4">
            <div className="md:col-span-3 flex items-center gap-3">
              <span className="text-xs font-bold font-mono text-[#D06236]">
                03
              </span>
              <span className="text-xs font-bold text-white">
                Validation and authority
              </span>
            </div>
            <div className="md:col-span-9 text-xs text-[#D6D3D1]">
              Source-supported validation/interpretation respects the configured
              authority boundary. It does not grant universal fiscal or
              accounting control.
            </div>
          </div>

          {/* Row 4 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border-b border-white/10 px-6 py-4 gap-4">
            <div className="md:col-span-3 flex items-center gap-3">
              <span className="text-xs font-bold font-mono text-[#D06236]">
                04
              </span>
              <span className="text-xs font-bold text-white">
                Conditional async/event handoff
              </span>
            </div>
            <div className="md:col-span-9 text-xs text-[#D6D3D1]">
              Where conceptually applicable, a handoff may continue outside the
              immediate decision path. Missing states, order and delivery
              mechanics are Contract-defined.
            </div>
          </div>

          {/* Row 5 */}
          <div className="grid grid-cols-1 md:grid-cols-12 items-center rounded-xl border-b border-white/10 px-6 py-4 gap-4">
            <div className="md:col-span-3 flex items-center gap-3">
              <span className="text-xs font-bold font-mono text-[#D06236]">
                05
              </span>
              <span className="text-xs font-bold text-white">
                Return and downstream use
              </span>
            </div>
            <div className="md:col-span-9 text-xs text-[#D6D3D1]">
              Return result, status and evidence context to the
              source/downstream workflow. The receiver acts only within its own
              authority.
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[#301153] p-5 shadow-sm text-white">
          <Info className="h-5 w-5 shrink-0 mt-0.5 text-[#D06236]" />
          <div className="text-xs">
            <p className="font-semibold">
              Recommended architecture pattern, not a production sequence
            </p>
            <p className="mt-1 text-[#D6D3D1] leading-relaxed">
              All unspecified states are Contract-defined. If the diagram is
              unavailable, the numbered text above remains the complete
              conceptual equivalent. No vendor endpoint, customer setting,
              secret or private topology is shown.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
