import { Fragment } from "react";
import clsx from "clsx";
import { Reveal, Section, SectionIntro, StaggerGroup, StaggerItem, introDescription } from "./shared";
import { decisionChain } from "./about-data";

// The design breaks the chain into two rows after the first milestone.
const firstRowLength = decisionChain.findIndex((step) => step.milestone) + 1;
const rows = [decisionChain.slice(0, firstRowLength), decisionChain.slice(firstRowLength)];

export default function DecisionChainSection() {
  return (
    <Section background="/about-us/pattern-decision-chain.webp" className="bg-white">
      <div className="flex flex-col gap-12">
        <Reveal>
          <SectionIntro
            eyebrow="How ZoikoTax responds"
            title="The controlled decision chain."
            description="One governed flow from product offer to replayable evidence."
            descriptionClassName={introDescription}
          />
        </Reveal>

        <Reveal>
          <div className="flex flex-col gap-3 rounded-3xl bg-gradient-to-br from-plum-900 to-[#3d2b70] p-5 sm:p-10 lg:gap-6">
            {rows.map((row, r) => {
              const offset = r === 0 ? 0 : firstRowLength;
              return (
                <StaggerGroup
                  key={offset}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr)_1.5rem)_minmax(0,1fr)] lg:gap-x-4"
                >
                  {row.map((step, i) => (
                    <Fragment key={step.title}>
                      {i > 0 && (
                        <span aria-hidden className="hidden self-center text-center text-lg text-apricot lg:block">
                          →
                        </span>
                      )}
                      <StaggerItem>
                        <div
                          className={clsx(
                            "flex h-full flex-col gap-2 rounded-[10px] p-4 lg:min-h-34",
                            step.milestone
                              ? "bg-purple-900/40 outline outline-1 -outline-offset-1 outline-white/20"
                              : "bg-white/10",
                          )}
                        >
                          <span className="font-mono text-xs text-apricot">
                            {String(offset + i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-base font-semibold text-white lg:text-sm xl:text-base">{step.title}</h3>
                          <p className="text-xs leading-4 text-mist">{step.description}</p>
                        </div>
                      </StaggerItem>
                    </Fragment>
                  ))}
                </StaggerGroup>
              );
            })}
            <p className="text-xs text-mist">
              ZoikoTax Intelligence Fabric™ assists operators; it is not fiscal authority.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
