import { PillButton, ROUTES, SectionHeading, SectionShell } from "./shared";

export default function IntentionsSection() {
  return (
    <SectionShell className="bg-[#1d0a3c]">
      <SectionHeading
        dark
        eyebrow="Two different intentions"
        title="A commercial question. Or a product demo."
        description="Choose one appropriate route. Neither a demo nor an inquiry is a contract, activation or confirmation of coverage."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-5 rounded-3xl bg-[#301153] p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Sales Inquiry</h3>
          <p className="flex-1 text-base leading-7 text-zinc-300">
            Commercial evaluation and coordination, only through an approved sales process. Pricing, packages,
            discounts, trials, pilots and quote timing are not established on this page.
          </p>
          <p className="text-sm font-semibold leading-5 text-zinc-300">Intake not activated · approval required</p>
        </div>
        <div className="flex flex-col items-start gap-5 rounded-3xl bg-white/5 p-6 outline -outline-offset-1 outline-white/10 sm:p-8">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">Book a Demo</h3>
          <p className="flex-1 text-base leading-7 text-zinc-300">
            The single canonical product-evaluation path at /demo/. No duplicate demo inquiry, second scheduler or
            booking lookup is introduced here.
          </p>
          <PillButton label="Book a Demo" href={ROUTES.demo} />
        </div>
      </div>

      <p className="text-sm leading-5 text-zinc-300">
        Coverage must be separately verified by market and capability. A country selection would not establish support,
        residency or transfers. Public Trust information remains open; exact agreement terms belong with the approved
        Legal process.
      </p>
    </SectionShell>
  );
}
