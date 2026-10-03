"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { SUBSCRIPTION_DATA } from "./webhooks-events-data";
import { SectionContainer, SectionHeader, Reveal, Card, NoticeBox, LAVENDER } from "./shared";

export default function SubscriptionSection() {
  const { lifecycle } = SUBSCRIPTION_DATA;

  return (
    <SectionContainer className={LAVENDER}>
      <div className="flex flex-col gap-10">
        <Reveal>
          <SectionHeader
            eyebrow={SUBSCRIPTION_DATA.eyebrow}
            title={SUBSCRIPTION_DATA.title}
            description={SUBSCRIPTION_DATA.description}
          />
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-3">
          {SUBSCRIPTION_DATA.cards.map((card, idx) => (
            <Reveal key={card.title} delay={0.05 * idx} className="h-full">
              <Card className="lg:min-h-72">
                <h3 className="text-xl sm:text-2xl font-semibold leading-7 text-[#18141B]">{card.title}</h3>
                <p className="text-base leading-6 text-[#665F69]">{card.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="rounded-3xl border border-[#D8CEDD] bg-white p-6 sm:p-8 flex flex-col gap-5">
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xl sm:text-2xl text-[#18141B]">
              {lifecycle.steps.map((step, i) => (
                <React.Fragment key={step}>
                  {i > 0 && <ArrowRight className="h-5 w-5" aria-hidden="true" />}
                  <span>{step}</span>
                </React.Fragment>
              ))}
            </p>
            <p className="text-base leading-6 text-[#665F69]">{lifecycle.description}</p>
          </div>
        </Reveal>

        <Reveal>
          <NoticeBox title={SUBSCRIPTION_DATA.notice.title} description={SUBSCRIPTION_DATA.notice.description} />
        </Reveal>
      </div>
    </SectionContainer>
  );
}
