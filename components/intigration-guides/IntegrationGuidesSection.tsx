export default function IntegrationGuidesSection() {
  return (
    <section className="bg-[#FAF3FF] px-6 py-20 lg:px-16 font-sans">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[#D06236]">
            DIRECT ANSWER
          </p>
          <h2 className="text-4xl lg:text-5xl max-w-80 font-bold tracking-tight text-[#111111] leading-[1.1]">
            What are Integration Guides?
          </h2>
          <p className="text-xs font-medium text-[#78716C] mt-2">
            /developers/integration-guides/
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col gap-6 pt-2">
          <p className="text-lg lg:text-xl font-normal text-[#1C1917] leading-[1.6]">
            Integration Guides are the public ZoikoTax architecture-pattern
            documentation for common integration problems and system contexts.
          </p>
          <p className="text-sm lg:text-base font-normal text-[#57534E] leading-[1.7]">
            A guide explains the problem, architecture boundary, conceptual
            sequence, prerequisites only where verified, safe failure behavior
            and evidence/correlation handoffs. It does not create a production
            API contract, customer entitlement, security certification or live
            Coverage claim.
          </p>
        </div>
      </div>
    </section>
  );
}
