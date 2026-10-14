import { LifeBuoy, MessagesSquare, Presentation } from "lucide-react";
import { PendingNote, ROUTES, RouteLink, SectionHeading, SectionShell } from "./shared";

const CARD = "flex flex-col items-start gap-4 rounded-2xl bg-white p-6 outline -outline-offset-1 outline-zinc-300";

export default function RouteSection() {
  return (
    <SectionShell className="bg-purple-50">
      <SectionHeading
        eyebrow="Choose your route"
        title="Start with the question. Not the form."
        description="Use the destination that owns the answer. No sales inquiry is needed to explore public information."
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className={CARD}>
          <MessagesSquare aria-hidden="true" className="size-6 text-orange-600" strokeWidth={1.6} />
          <h3 className="text-xl font-bold leading-7 text-zinc-900 sm:text-2xl">Commercial question</h3>
          <p className="flex-1 text-base leading-7 text-stone-500">
            For a buying or commercial evaluation question that is not better answered by a demo or specialist source.
          </p>
          <PendingNote>Sales intake · approval pending</PendingNote>
        </div>
        <div className={CARD}>
          <Presentation aria-hidden="true" className="size-6 text-orange-600" strokeWidth={1.6} />
          <h3 className="text-xl font-bold leading-7 text-zinc-900 sm:text-2xl">Book a Demo</h3>
          <p className="flex-1 text-base leading-7 text-stone-500">
            Want to see the product? Go directly to the single Book a Demo path. No separate sales form or scheduler
            here.
          </p>
          <RouteLink label="Book a Demo" href={ROUTES.demo} />
        </div>
        <div className={`${CARD} md:col-span-2 lg:col-span-1`}>
          <LifeBuoy aria-hidden="true" className="size-6 text-orange-600" strokeWidth={1.6} />
          <h3 className="text-xl font-bold leading-7 text-zinc-900 sm:text-2xl">Existing customer</h3>
          <p className="flex-1 text-base leading-7 text-stone-500">
            Already use ZoikoTax? Start with Customer Support for product or account help.
          </p>
          <RouteLink label="Customer Support" href={ROUTES.support} />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="flex flex-1 flex-col gap-4 rounded-2xl bg-[#301153] p-6">
          <h3 className="text-xl font-bold text-white sm:text-2xl">Trust / Coverage / Documentation</h3>
          <p className="text-base leading-7 text-zinc-300">
            Go to the public source for security, availability or technical detail. These facts are not established by
            a sales conversation.
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <RouteLink dark label="Documentation" href={ROUTES.documentation} />
            <RouteLink dark label="Developers" href={ROUTES.developers} />
            <RouteLink dark label="Country & regulatory packs" href={ROUTES.packs} />
          </div>
          <p className="text-sm leading-5 text-zinc-300">
            Trust and live System Status links await source-approved destinations.
          </p>
        </div>
        <div className={`${CARD} lg:w-[416px] lg:shrink-0`}>
          <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">General contact</h3>
          <p className="flex-1 text-base leading-7 text-stone-500">
            For a general question, use the existing General Contact destination. It is not a dedicated sales intake.
          </p>
          <RouteLink label="General Contact" href={ROUTES.contact} />
        </div>
      </div>

      <p className="text-sm leading-5 text-stone-500">
        Technical Support and Partnerships remain source-gated family destinations. No new inquiry route is activated
        here.
      </p>
    </SectionShell>
  );
}
