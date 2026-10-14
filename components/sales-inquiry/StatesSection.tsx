import { ROUTES, RouteLink, SectionHeading, SectionShell } from "./shared";

const STATES = [
  {
    title: "Editing",
    status: "No data sent",
    description:
      "An editable draft would not mean delivery. Changing intent should warn before discarding an incompatible draft.",
  },
  {
    title: "Submitting",
    status: "Delivery not yet confirmed",
    description: "A configured process should prevent duplicate submissions and preserve the draft safely where supported.",
  },
  {
    title: "Received",
    status: "Only after durable acknowledgment",
    description:
      "A real backend acknowledgment is required before showing “Sales inquiry received”. A timeout or uncertain result is not success.",
  },
];

export default function StatesSection() {
  return (
    <SectionShell className="bg-[#301153]">
      <SectionHeading
        dark
        eyebrow="If an approved workflow is enabled"
        title="Know what sent—and what did not."
        description="Illustrative future patterns only. The preview above is inactive and has not received an inquiry."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {STATES.map((state) => (
          <div
            key={state.title}
            className="flex flex-col gap-3.5 rounded-2xl bg-white/5 p-6 outline -outline-offset-1 outline-white/20"
          >
            <h3 className="text-xl font-bold text-white">{state.title}</h3>
            <p className="text-sm font-semibold text-orange-300">{state.status}</p>
            <p className="text-base leading-7 text-zinc-300">{state.description}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2.5 rounded-2xl p-6 outline -outline-offset-1 outline-white/20">
        <p className="text-xs font-bold uppercase text-orange-300">Illustrative copy · Not a submission confirmation</p>
        <p className="text-xl font-bold text-white">Sales inquiry received</p>
        <p className="text-base leading-7 text-zinc-300">
          Your inquiry has been received. Any next step shown here must come from the approved sales process; this page
          does not promise a response time.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-white">If validation or delivery fails</h3>
          <p className="text-sm leading-5 text-zinc-300">
            A future configured form should show a text error summary and clear inline errors, preserve valid inputs
            safely where supported, and allow retry only through its approved process. Network, provider or timeout
            errors must not imply receipt or create duplicate requests.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold text-white">The right routes remain visible</h3>
          <p className="text-sm leading-5 text-zinc-300">
            No unverified phone, email or calendar is offered as a fallback. No private details belong in URLs,
            marketing telemetry or error logs. No hidden enrichment, scoring or automatic marketing enrollment is
            implied.
          </p>
          <div className="flex flex-wrap gap-6">
            <RouteLink dark label="Book a Demo" href={ROUTES.demo} />
            <RouteLink dark label="Documentation" href={ROUTES.documentation} />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
