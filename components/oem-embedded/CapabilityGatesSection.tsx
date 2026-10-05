import Image from "next/image";
import { Container, Notice } from "./shared";

export default function CapabilityGatesSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(24,20,27,1)] overflow-hidden">
      {/* Section background image */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-screen opacity-50">
        <Image
          src="/oem-embedded/Capability entitlement and activation.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            04 / CAPABILITY GATES
          </span>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            A provisioned context is not permission to run.
          </h2>
          <p className="text-[rgba(217,208,223,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            Approve the exact capability, Coverage and environment independently before production activation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {/* Card 1 */}
          <div className="self-stretch p-5 bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-3.5">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 font-['Inter',sans-serif]">
              01 ➔
            </span>
            <div className="self-stretch text-white text-lg font-semibold leading-6 font-['Inter',sans-serif]">
              Provisioned context
            </div>
            <div className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">An approved organization context</span>
              <span className="block xl:whitespace-nowrap">exists under the actual model.</span>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="self-stretch p-5 bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-3.5">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 font-['Inter',sans-serif]">
              02 ➔
            </span>
            <div className="self-stretch text-white text-lg font-semibold leading-6 font-['Inter',sans-serif]">
              Entitlement approved
            </div>
            <div className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">The commercial / product grant</span>
              <span className="block xl:whitespace-nowrap">source authorizes the specific</span>
              <span className="block xl:whitespace-nowrap">scope.</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="self-stretch p-5 bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-3.5">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 font-['Inter',sans-serif]">
              03 ➔
            </span>
            <div className="self-stretch text-white text-lg font-semibold leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Coverage / environment /</span>
              <span className="block xl:whitespace-nowrap">security validated</span>
            </div>
            <div className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Review capability-specific country,</span>
              <span className="block xl:whitespace-nowrap">pack, network and environment</span>
              <span className="block xl:whitespace-nowrap">gates.</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="self-stretch p-5 bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-3.5">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 font-['Inter',sans-serif]">
              04 ➔
            </span>
            <div className="self-stretch text-white text-lg font-semibold leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Production activation</span>
              <span className="block xl:whitespace-nowrap">approval</span>
            </div>
            <div className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">A separately controlled approval</span>
              <span className="block xl:whitespace-nowrap">establishes the permitted production</span>
              <span className="block xl:whitespace-nowrap">scope.</span>
            </div>
          </div>
        </div>

        {/* Catalog authority band */}
        <div className="self-stretch p-7 bg-[rgba(255,255,255,0.04)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-8">
          <div className="w-full lg:w-96 shrink-0 flex flex-col justify-start items-start gap-3">
            <span className="text-[rgba(244,162,97,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
              CATALOG AUTHORITY
            </span>
            <div className="self-stretch text-white text-2xl font-normal leading-[1.4] font-['Inter',sans-serif]">
              Partner-eligible capability details require approved source
            </div>
          </div>
          <p className="flex-1 text-[rgba(217,208,223,1)] text-base font-normal leading-[1.6] font-['Inter',sans-serif]">
            <span className="block xl:whitespace-nowrap">Only the approved partner-eligible catalog can establish eligibility. Exact states, effective changes and</span>
            <span className="block xl:whitespace-nowrap">revocation behavior follow formally governed sources. Public navigation is not a catalog grant and</span>
            <span className="block xl:whitespace-nowrap">does not make capabilities available automatically to every partner or tenant.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Bottom Card 1 */}
          <div className="self-stretch p-7 bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-4">
            <Image
              src="/oem-embedded/file-check.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="self-stretch text-white text-xl font-semibold leading-7 font-['Inter',sans-serif]">
                Grant authority
              </div>
              <div className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">Confirm the commercial / product entitlement</span>
                <span className="block xl:whitespace-nowrap">source and effective scope; never infer a grant</span>
                <span className="block xl:whitespace-nowrap">from creation or configuration.</span>
              </div>
            </div>
          </div>

          {/* Bottom Card 2 */}
          <div className="self-stretch p-7 bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-4">
            <Image
              src="/oem-embedded/globe.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="self-stretch text-white text-xl font-semibold leading-7 font-['Inter',sans-serif]">
                Exact Coverage
              </div>
              <div className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">Validate each capability against its country,</span>
                <span className="block xl:whitespace-nowrap">pack and network Coverage. A broad market</span>
                <span className="block xl:whitespace-nowrap">label is not sufficient.</span>
              </div>
            </div>
          </div>

          {/* Bottom Card 3 */}
          <div className="self-stretch p-7 bg-[rgba(48,17,83,1)] rounded-2xl outline outline-1 outline-offset-[-1px] outline-[rgba(128,100,151,1)] flex flex-col justify-start items-start gap-4">
            <Image
              src="/oem-embedded/shield-check.svg"
              alt=""
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="self-stretch text-white text-xl font-semibold leading-7 font-['Inter',sans-serif]">
                Independent environment
              </div>
              <div className="self-stretch text-[rgba(217,208,223,1)] text-[15px] font-normal leading-[1.6] font-['Inter',sans-serif]">
                <span className="block xl:whitespace-nowrap">Test permission is not production entitlement.</span>
                <span className="block xl:whitespace-nowrap">Security and production activation approval</span>
                <span className="block xl:whitespace-nowrap">remain separate gates.</span>
              </div>
            </div>
          </div>
        </div>

        <Notice
          dark
          className="!bg-[rgba(48,17,83,1)]"
          title={<span className="text-white">No inherited entitlement</span>}
          body={
            <span className="text-[rgba(217,208,223,1)]">
              <span className="block xl:whitespace-nowrap">Text equivalent: provisioned context ➔ entitlement approved ➔ Coverage / environment / security validated ➔ production activation approval. Navigation,</span>
              <span className="block xl:whitespace-nowrap">partner context and sandbox access do not bypass any gate.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
