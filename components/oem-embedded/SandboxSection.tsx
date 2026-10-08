import Image from "next/image";
import Link from "next/link";
import { Container, Notice } from "./shared";

const checklist = [
  "Accountable implementation owner identified",
  "Approved partner / commercial status confirmed",
  "Actual organization identity model validated",
  "Entitlement authority and scope confirmed",
  "Test availability verified in the exact environment",
  "Escalation and operational owner agreed",
  "Independent production activation gates reviewed",
];

export default function SandboxSection() {
  return (
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 bg-[rgba(240,231,247,1)] overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
            12 / SANDBOX & READINESS
          </span>
          <h2 className="text-[rgba(24,20,27,1)] text-3xl sm:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight font-['Inter',sans-serif]">
            Test the supported scope. Approve production separately.
          </h2>
          <p className="text-[rgba(102,95,105,1)] text-lg sm:text-xl font-normal leading-[1.6] font-['Inter',sans-serif]">
            A sandbox is a separately enabled environment, not a shortcut to production privilege.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-6">
          {/* Testing boundary */}
          <div className="flex-1 p-7 sm:p-9 bg-[rgba(240,231,247,1)] rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-5">
            <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
              TESTING BOUNDARY
            </span>
            <div className="self-stretch text-[rgba(24,20,27,1)] text-[28px] font-normal leading-[1.2] font-['Inter',sans-serif]">
              Verify availability before designing the test.
            </div>
            <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Use Developer Overview and the API Reference for the exact</span>
              <span className="block xl:whitespace-nowrap">authentication and API model. Test provisioning only where the sandbox</span>
              <span className="block xl:whitespace-nowrap">actually supports it.</span>
            </p>
            <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Use synthetic organization-scope validation. Test-vs-production</span>
              <span className="block xl:whitespace-nowrap">entitlement stays separate; review exact Coverage, approved security</span>
              <span className="block xl:whitespace-nowrap">and onboarding requirements.</span>
            </p>
            <p className="self-stretch text-[rgba(102,95,105,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
              <span className="block xl:whitespace-nowrap">Use documented lifecycle events only if they exist in approved sources.</span>
              <span className="block xl:whitespace-nowrap">Webhooks & Events is context, not a promise of provisioning events.</span>
            </p>
            <div className="flex flex-wrap justify-start items-start gap-3 mt-2">
              <Link
                href="/sandbox"
                className="h-[47px] px-5 bg-white hover:bg-neutral-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer"
              >
                <span className="text-[rgba(24,20,27,1)] text-sm font-semibold font-['Inter',sans-serif]">
                  Explore Sandbox
                </span>
                <Image
                  src="/oem-embedded/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4"
                />
              </Link>
              <Link
                href="/integration-guides"
                className="h-[47px] px-5 bg-white hover:bg-neutral-50 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] inline-flex justify-center items-center gap-3 overflow-hidden transition-all cursor-pointer"
              >
                <span className="text-[rgba(24,20,27,1)] text-sm font-semibold font-['Inter',sans-serif]">
                  API Reference
                </span>
                <Image
                  src="/oem-embedded/arrow-right.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="size-4"
                />
              </Link>
            </div>
          </div>

          {/* Review checklist */}
          <div className="flex-1 p-7 sm:p-9 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-[rgba(216,206,221,1)] flex flex-col justify-start items-start gap-5">
            <span className="text-[rgba(214,90,44,1)] text-xs font-bold leading-5 tracking-[0.08em] uppercase font-['Inter',sans-serif]">
              REVIEW CHECKLIST · NOT LIVE COMPLETION
            </span>
            <div className="self-stretch flex flex-col justify-start items-start">
              {checklist.map((item, idx) => (
                <div
                  key={item}
                  className={`self-stretch py-3.5 ${idx !== checklist.length - 1 ? 'border-b border-[rgba(216,206,221,1)]' : ''} flex justify-start items-center gap-3.5`}
                >
                  <Image
                    src="/oem-embedded/square.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="size-[18px] shrink-0"
                  />
                  <div className="flex-1 text-[rgba(24,20,27,1)] text-[15px] font-normal leading-6 font-['Inter',sans-serif]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Notice
          title={<span className="text-[rgba(24,20,27,1)]">No activation-time guarantee</span>}
          body={
            <span className="text-[rgba(102,95,105,1)]">
              <span className="block xl:whitespace-nowrap">Sandbox permissions do not grant production entitlement, and a successful test does not approve activation. Confirm every applicable source and owner</span>
              <span className="block xl:whitespace-nowrap">before progressing.</span>
            </span>
          }
        />
      </Container>
    </section>
  );
}
