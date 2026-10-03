import Image from "next/image";
import { Container, Notice, SectionHeader, SecondaryButton } from "./shared";

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
    <section className="relative w-full flex justify-center items-start py-20 lg:py-24 overflow-hidden">
      <Container className="relative z-10 flex flex-col gap-10">
        <SectionHeader
          eyebrow="12 / SANDBOX & READINESS"
          title="Test the supported scope. Approve production separately."
          description="A sandbox is a separately enabled environment, not a shortcut to production privilege."
        />

        <div className="flex flex-col lg:flex-row justify-start items-stretch gap-8">
          {/* Testing boundary */}
          <div className="flex-1 p-7 sm:p-9 bg-purple-50 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5">
            <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              TESTING BOUNDARY
            </span>
            <div className="self-stretch text-zinc-900 text-3xl font-normal leading-9 font-['Inter',sans-serif]">
              Verify availability before designing the test.
            </div>
            <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Use Developer Overview and the API Reference for the exact
              authentication and API model. Test provisioning only where the
              sandbox actually supports it.
            </p>
            <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Use synthetic organization-scope validation. Test-vs-production
              entitlement stays separate; review exact Coverage, approved
              security and onboarding requirements.
            </p>
            <p className="self-stretch text-stone-500 text-base font-normal leading-6 font-['Inter',sans-serif]">
              Use documented lifecycle events only if they exist in approved
              sources. Webhooks & Events is context, not a promise of
              provisioning events.
            </p>
            <div className="flex flex-wrap justify-start items-start gap-3">
              <SecondaryButton href="/sandbox">Explore Sandbox</SecondaryButton>
              <SecondaryButton href="/integration-guides">
                API Reference
              </SecondaryButton>
            </div>
          </div>

          {/* Review checklist */}
          <div className="flex-1 p-7 sm:p-9 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5">
            <span className="text-orange-600 text-xs font-bold leading-5 font-['Inter',sans-serif]">
              REVIEW CHECKLIST · NOT LIVE COMPLETION
            </span>
            {checklist.map((item) => (
              <div
                key={item}
                className="self-stretch pb-4 border-b border-zinc-300 flex justify-start items-start gap-3.5"
              >
                <Image
                  src="/oem-embedded/square.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5 shrink-0 mt-0.5"
                />
                <div className="flex-1 text-zinc-900 text-base font-normal leading-6 font-['Inter',sans-serif]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Notice
          title="No activation-time guarantee"
          body="Sandbox permissions do not grant production entitlement, and a successful test does not approve activation. Confirm every applicable source and owner before progressing."
        />
      </Container>
    </section>
  );
}
