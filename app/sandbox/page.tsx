import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandbox | ZoikoTax",
  description: "Test ZoikoTax integration patterns in a governed non-production context.",
};

export default function SandboxPage() {
  return (
    <div className="w-full bg-purple-50 inline-flex flex-col justify-start items-start overflow-hidden">
      <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch h-[785px] px-20 py-20 bg-gradient-to-r from-stone-100 via-gray-200/90 to-gray-200/10 flex flex-col justify-start items-start gap-12 overflow-hidden">
              <div className="self-stretch inline-flex justify-start items-center gap-16 overflow-hidden">
                  <div className="w-[736px] inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                      <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">DEVELOPERS · SANDBOX</div>
                      <div className="self-stretch justify-start text-zinc-900 text-6xl font-bold font-['Inter'] leading-[58.24px]">Test ZoikoTax integration patterns in a governed non-production context.</div>
                      <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Use safe test data and source-grounded scenarios to understand approved integration concepts before production. Sandbox does not prove production Coverage, contractual entitlement, regulator readiness or automatic go-live eligibility.</div>
                      <div className="self-stretch inline-flex justify-start items-start gap-3 overflow-hidden">
                          <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
                              <div className="justify-start text-white text-sm font-semibold font-['Inter']">Explore Sandbox Scenarios</div>
                              <div className="size-4 relative overflow-hidden">
                                  <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                              </div>
                          </div>
                          <div className="h-12 px-5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center gap-3 overflow-hidden hover:bg-gray-50 transition-colors cursor-pointer">
                              <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Read API Reference</div>
                              <div className="size-4 relative overflow-hidden">
                                  <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-amber-700" />
                              </div>
                          </div>
                      </div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Explore Integration Guides ↗</div>
                      </div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Non-production only. Exact access, credentials, URLs, limits and promotion requirements remain governed.</div>
                  </div>
              </div>
          </div>
          <div className="self-stretch px-20 py-16 bg-purple-50 inline-flex justify-start items-start gap-16 overflow-hidden hover:bg-purple-100/50 transition-colors">
              <div className="w-80 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">DIRECT ANSWER</div>
                  <div className="self-stretch justify-start text-zinc-900 text-4xl font-bold font-['Inter'] leading-[47.20px]">What is Sandbox?</div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-normal font-['Inter'] leading-8">The Sandbox is the public non-production integration/testing experience for ZoikoTax. It helps engineering teams understand and, where separately enabled, exercise approved integration patterns with synthetic or approved test data.</div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">It is not evidence of production Coverage, customer entitlement, regulator readiness, certification, production credentials or automatic promotion to a live environment.</div>
              </div>
          </div>
      </div>
      <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">GUIDED TESTING JOURNEY</div>
              <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">Understand the contract. Then test the pattern.</div>
              <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Recommended pattern — not a live environment. Follow the same readable path with or without access to a separately enabled environment.</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">01</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Choose integration surface</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">API, SDK, Webhook/Event, Bulk/Batch or a guide-linked surface — only where governed.</div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">02</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Review authoritative contract</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Confirm syntax, version, compatibility and the contract that owns the behavior.</div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">03</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Prepare safe data</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Prefer synthetic fixtures. Use approved fixtures only where separately governed.</div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">04</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Choose scenario</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Select a sourced scenario, or use an explicitly illustrative conceptual walkthrough.</div>
              </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">05</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Execute or simulate</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Use a separately enabled environment, or follow the conceptual walkthrough in docs.</div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">06</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Inspect result</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Compare expected states and permitted traceability with the authoritative contract.</div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">07</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Troubleshoot</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Follow contract-defined recovery. Unknown and unsafe conditions stop safely.</div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-4 overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="justify-start text-orange-700 text-3xl font-semibold font-['Inter']">08</div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Review production readiness</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Verify Coverage, entitlement and controlled implementation prerequisites separately.</div>
              </div>
          </div>
          <div className="self-stretch p-7 bg-violet-100 rounded-2xl inline-flex justify-start items-start gap-6 overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">CONCEPTUAL GUIDANCE</div>
                  </div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Public documentation and safe walkthroughs remain useful even when an environment is unavailable or access is not established.</div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Read Integration Guides ↗</div>
                  </div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">SEPARATELY GOVERNED ACCESS</div>
                  </div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Environment access, credentials and prerequisites must be established through authoritative contracts. Guidance is not entitlement.</div>
              </div>
          </div>
      </div>
      <div className="self-stretch px-20 py-24 bg-purple-50 flex flex-col justify-start items-start gap-10 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">SCENARIO FINDER</div>
              <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">Find a pattern. Keep its source in view.</div>
              <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">No approved registry inventory was supplied. The cards below are illustrative walkthroughs, not proof of released scenarios or live sandbox availability.</div>
          </div>
          <div className="self-stretch p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-5 overflow-hidden shadow-sm">
              <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">RECOMMENDED PATTERN — NOT A LIVE ENVIRONMENT</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2 overflow-hidden">
                  <div className="justify-start text-zinc-900 text-xs font-semibold font-['Inter']">Search public-safe scenario metadata</div>
                  <div className="self-stretch h-12 px-4 rounded-[10px] outline outline-2 outline-offset-[-2px] outline-violet-950 inline-flex justify-start items-center gap-3 overflow-hidden">
                      <div className="size-5 relative overflow-hidden">
                          <div className="size-3.5 left-[2.50px] top-[2.50px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                      </div>
                      <div className="justify-start text-stone-500 text-base font-normal font-['Inter']">Search titles, purpose, surface or controlled aliases</div>
                  </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-end gap-4 overflow-hidden">
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="justify-start text-zinc-900 text-xs font-semibold font-['Inter']">Integration surface</div>
                      <div className="self-stretch h-12 px-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-between items-center overflow-hidden cursor-pointer hover:bg-gray-50">
                          <div className="justify-start text-stone-500 text-sm font-normal font-['Inter']">All governed surfaces</div>
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-500" />
                          </div>
                      </div>
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="justify-start text-zinc-900 text-xs font-semibold font-['Inter']">Scenario intent</div>
                      <div className="self-stretch h-12 px-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-between items-center overflow-hidden cursor-pointer hover:bg-gray-50">
                          <div className="justify-start text-stone-500 text-sm font-normal font-['Inter']">All recommended intents</div>
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-500" />
                          </div>
                      </div>
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="justify-start text-zinc-900 text-xs font-semibold font-['Inter']">Data class</div>
                      <div className="self-stretch h-12 px-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-between items-center overflow-hidden cursor-pointer hover:bg-gray-50">
                          <div className="justify-start text-stone-500 text-sm font-normal font-['Inter']">Synthetic / approved fixtures</div>
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-500" />
                          </div>
                      </div>
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="justify-start text-zinc-900 text-xs font-semibold font-['Inter']">Sort by</div>
                      <div className="self-stretch h-12 px-3.5 bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex justify-between items-center overflow-hidden cursor-pointer hover:bg-gray-50">
                          <div className="justify-start text-stone-500 text-sm font-normal font-['Inter']">Title / governed currentness</div>
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-1 outline-offset-[-0.50px] outline-stone-500" />
                          </div>
                      </div>
                  </div>
                  <div className="h-12 px-5 bg-white rounded-[999px] outline outline-1 outline-offset-[-1px] outline-zinc-300 flex justify-start items-center gap-3 overflow-hidden cursor-pointer hover:bg-gray-50">
                      <div className="justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Clear filters</div>
                      <div className="size-4 relative overflow-hidden">
                          <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-amber-700" />
                      </div>
                  </div>
              </div>
              <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Result-state note: this is an illustrative display, not a live query. Search, URL state and analytics must not contain credentials, payloads, raw errors or customer, subscriber, tax, tenant or private operational data.</div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-3 overflow-hidden">
              <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Illustrative walkthroughs</div>
              <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Recommended example intents: request/response · async job · event delivery · error handling · migration/coexistence · reconciliation/evidence. These are not assertions of released scenarios.</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-5 overflow-hidden">
              <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">ILLUSTRATIVE EXAMPLE</div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">Request / response walkthrough</div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Understand how a safe input and its conceptual outcome relate to an authoritative contract.</div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Integration surface</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">API</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Data requirement</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Synthetic fixtures only in this walkthrough</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Authoritative contract route</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">/developers/api/</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Currentness</div>
                          <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Not published</div>
                      </div>
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Access</div>
                          <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Separately governed</div>
                      </div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Production implication: None</div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5 hover:underline">Read conceptual walkthrough ↗</div>
                  </div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">ILLUSTRATIVE EXAMPLE</div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">Event delivery walkthrough</div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Review conceptual delivery and failure paths without inventing event names or schemas.</div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Integration surface</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Webhooks &amp; Events</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Data requirement</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Synthetic fixtures only in this walkthrough</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Authoritative contract route</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">/developers/webhooks-events/</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Currentness</div>
                          <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Not published</div>
                      </div>
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Access</div>
                          <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Separately governed</div>
                      </div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Production implication: None</div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5 hover:underline">Read conceptual walkthrough ↗</div>
                  </div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer shadow-sm">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">ILLUSTRATIVE EXAMPLE</div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">Async job walkthrough</div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Explore conceptual processing and partial outcomes with synthetic placeholders.</div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Integration surface</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Bulk &amp; Batch</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Data requirement</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Synthetic fixtures only in this walkthrough</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Authoritative contract route</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">/developers/bulk-batch/</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Currentness</div>
                          <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Not published</div>
                      </div>
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Access</div>
                          <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Separately governed</div>
                      </div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-sm font-semibold font-['Inter']">Production implication: None</div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5 hover:underline">Read conceptual walkthrough ↗</div>
                  </div>
              </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-5 overflow-hidden">
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">ILLUSTRATIVE STATE · NO MATCHES</div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">No matching scenario</div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Clear filters or return to the authoritative docs. Zero results do not imply absent product capability or production Coverage.</div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Reset public-safe filters ↗</div>
                  </div>
              </div>
              <div className="flex-1 self-stretch p-6 bg-purple-50 rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">ILLUSTRATIVE STATE · REGISTRY UNAVAILABLE</div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Continue with static documentation</div>
                  <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Do not infer availability. Public contract guidance and conceptual walkthroughs remain the fallback.</div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Read API Reference ↗</div>
                  </div>
              </div>
          </div>
          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Registry metadata is published only from governed sources, with owner, effective state and rollback controls. Ordinary editorial updates cannot establish technical truth, access, Trust or Coverage.</div>
      </div>
      <div className="self-stretch px-20 py-24 bg-slate-900/75 flex flex-col justify-start items-start gap-10 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="justify-start text-orange-300 text-sm font-bold font-['Inter']">SELECTED SCENARIO</div>
              <div className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[51.92px]">Request / response, without invented contracts.</div>
              <div className="self-stretch justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Illustrative example · A conceptual walkthrough for understanding the relationship between a safe fixture, a documented action and an interpreted outcome.</div>
          </div>
          <div className="self-stretch p-9 bg-violet-950 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-600 flex flex-col justify-start items-start gap-8 overflow-hidden shadow-md">
              <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
                  <div className="size- px-3 py-1.5 bg-zinc-700 rounded-[999px] flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">NON-PRODUCTION / ILLUSTRATIVE EXAMPLE</div>
                  </div>
                  <div className="justify-start text-zinc-300 text-xs font-normal font-['Inter']">Access: Separately governed · Currentness: Not published</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-12 overflow-hidden">
                  <div className="w-80 inline-flex flex-col justify-start items-start gap-6 overflow-hidden">
                      <div className="self-stretch justify-start text-white text-2xl font-bold font-['Inter'] leading-8">Start with the source.</div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Identity</div>
                          <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Request / response walkthrough</div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Purpose</div>
                          <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Understand an approved integration pattern conceptually.</div>
                      </div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-300 text-sm font-semibold font-['Inter'] leading-5">API Reference — authoritative contract ↗</div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Prerequisites</div>
                          <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Contract-defined / customer-specific</div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Safe data</div>
                          <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Synthetic placeholders; approved fixtures only where governed.</div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Correlation / traceability</div>
                          <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Placeholder only — no real trace or account identifiers.</div>
                      </div>
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-5 overflow-hidden">
                      <div className="self-stretch justify-start text-white text-2xl font-bold font-['Inter'] leading-8">Read the conceptual walkthrough</div>
                      <div className="self-stretch pb-4 border-b border-gray-600 inline-flex justify-start items-start gap-4 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xl font-semibold font-['Inter']">01</div>
                          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                              <div className="self-stretch justify-start text-white text-lg font-semibold font-['Inter']">Confirm the contract</div>
                              <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Locate the exact documented version and its prerequisites. Do not infer method, path, schema or auth.</div>
                          </div>
                      </div>
                      <div className="self-stretch pb-4 border-b border-gray-600 inline-flex justify-start items-start gap-4 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xl font-semibold font-['Inter']">02</div>
                          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                              <div className="self-stretch justify-start text-white text-lg font-semibold font-['Inter']">Prepare a safe fixture</div>
                              <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Use synthetic placeholders. Confirm approved fixture use separately when applicable.</div>
                          </div>
                      </div>
                      <div className="self-stretch pb-4 border-b border-gray-600 inline-flex justify-start items-start gap-4 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xl font-semibold font-['Inter']">03</div>
                          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                              <div className="self-stretch justify-start text-white text-lg font-semibold font-['Inter']">Follow the documented concept</div>
                              <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Read the conceptual action. Exercise it only in a separately enabled environment, under its contract.</div>
                          </div>
                      </div>
                      <div className="self-stretch pb-4 border-b border-gray-600 inline-flex justify-start items-start gap-4 overflow-hidden">
                          <div className="justify-start text-orange-300 text-xl font-semibold font-['Inter']">04</div>
                          <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5 overflow-hidden">
                              <div className="self-stretch justify-start text-white text-lg font-semibold font-['Inter']">Inspect and interpret</div>
                              <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Compare conceptual states with documented behavior. Keep recovery and traceability contract-defined.</div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
                  <div className="flex-1 p-6 bg-slate-900 rounded-2xl inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
                      <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-6">Expected conceptual states</div>
                      <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Prepared → Ready to test (conceptual only) → Validating → Processing → Completed (non-production). The exact sequence and meaning stay contract-defined.</div>
                  </div>
                  <div className="flex-1 p-6 bg-slate-900 rounded-2xl inline-flex flex-col justify-start items-start gap-3 overflow-hidden">
                      <div className="self-stretch justify-start text-white text-xl font-bold font-['Inter'] leading-6">Failure &amp; degraded paths</div>
                      <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Partial, Failed, Restricted, Temporarily unavailable or Unknown. Stop when unsafe or uncertain; use authoritative recovery guidance.</div>
                  </div>
              </div>
              <div className="self-stretch justify-start text-orange-300 text-base font-semibold font-['Inter'] leading-6">Production implication: None. Review Coverage, entitlement and implementation readiness separately.</div>
              <div className="self-stretch inline-flex justify-start items-center gap-6 overflow-hidden">
                  <div className="h-12 px-5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="justify-start text-white text-sm font-semibold font-['Inter']">Read API Reference</div>
                      <div className="size-4 relative overflow-hidden">
                          <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                      </div>
                  </div>
                  <div className="size- min-h-11 flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-300 text-sm font-semibold font-['Inter'] leading-5">Integration Guides ↗</div>
                  </div>
                  <div className="size- min-h-11 flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-300 text-sm font-semibold font-['Inter'] leading-5">API Changelog ↗</div>
                  </div>
                  <div className="size- min-h-11 flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-300 text-sm font-semibold font-['Inter'] leading-5">Controlled qualification · Book a Demo ↗</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">DATA SAFETY · BEFORE ANY SAMPLE</div>
              <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">Synthetic first. Sensitive data never.</div>
              <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Use synthetic data by default. Approved fixtures are acceptable only when their use is explicitly governed.</div>
          </div>
          <div className="self-stretch p-8 bg-orange-50 rounded-3xl outline outline-1 outline-offset-[-1px] outline-red-300 inline-flex justify-start items-start gap-6 overflow-hidden">
              <div className="size-10 relative overflow-hidden">
                  <div className="w-7 h-8 left-[6.67px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">STOP IF DATA CLASSIFICATION IS UNCERTAIN</div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">Do not paste, submit or upload regulated or private data.</div>
                  <div className="self-stretch justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-6">No real subscribers or customers, tax filings or returns, invoice payloads, secrets, credentials or certificates, tenant or account identifiers, private logs, traces or operational information.</div>
                  <div className="self-stretch justify-start text-zinc-900 text-base font-normal font-['Inter'] leading-6">Safe default: use synthetic data and seek controlled implementation/security guidance. Do not upload regulated data while classification is unresolved. No upload functionality is shown here.</div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Review Trust guidance ↗</div>
                  </div>
              </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-10 overflow-hidden">
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Prefer synthetic fixtures</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">The demonstrations below use descriptive placeholders, not executable payloads or real identifiers.</div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Use approved fixtures only when governed</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Approval, handling and retention come from the exact contract; no retention policy is implied here.</div>
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                  <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Keep context public-safe</div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Preserve only safe route or controlled topic context. Never carry payloads or private data into search, links or analytics.</div>
              </div>
          </div>
      </div>
      <div className="self-stretch px-20 py-24 bg-purple-50 flex flex-col justify-start items-start gap-10 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
              <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">RESULT &amp; DIAGNOSTICS</div>
              <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">Inspect meaning, not a manufactured response.</div>
              <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Illustrative example · Non-production anatomy only. No methods, endpoints, JSON fields, schemas or real trace identifiers are supplied.</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
              <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] flex justify-start items-start overflow-hidden">
                  <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">NON-PRODUCTION / ILLUSTRATIVE EXAMPLE</div>
              </div>
              <div className="justify-start text-stone-500 text-sm font-normal font-['Inter']">Descriptive placeholders · Not executable</div>
          </div>
          <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
              <div className="flex-1 p-8 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-5 overflow-hidden shadow-sm">
                  <div className="self-stretch justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-8">Input anatomy</div>
                  <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">ILLUSTRATIVE EXAMPLE</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Scenario</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Request / response walkthrough</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Authoritative contract</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">API Reference — exact version defined by docs</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Input</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">[Synthetic fixture placeholder — no real data]</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Conceptual action</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Follow the approved documented concept</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Expected state</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">Contract-defined</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-stone-500 text-xs font-semibold font-['Inter']">Correlation</div>
                      <div className="self-stretch justify-start text-zinc-900 text-sm font-normal font-['Inter'] leading-5">[Placeholder only — no trace identifier]</div>
                  </div>
                  <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                      <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Read API Reference ↗</div>
                  </div>
              </div>
              <div className="flex-1 p-8 bg-slate-900 rounded-3xl inline-flex flex-col justify-start items-start gap-5 overflow-hidden shadow-sm">
                  <div className="self-stretch justify-start text-white text-2xl font-bold font-['Inter'] leading-8">Result anatomy</div>
                  <div className="size- px-3 py-1.5 bg-zinc-700 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">NON-PRODUCTION / ILLUSTRATIVE EXAMPLE</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Conceptual result</div>
                      <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">[Outcome placeholder — no live response]</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Interpretation</div>
                      <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Read the state using authoritative contract semantics</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Traceability</div>
                      <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Placeholder only; permitted evidence remains governed</div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-1 overflow-hidden">
                      <div className="justify-start text-orange-300 text-xs font-semibold font-['Inter']">Failure or uncertainty</div>
                      <div className="self-stretch justify-start text-white text-sm font-normal font-['Inter'] leading-5">Stop safely and follow contract-defined recovery</div>
                  </div>
                  <div className="self-stretch p-5 bg-violet-950 rounded-2xl flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-orange-300 text-base font-semibold font-['Inter'] leading-6">Production implication: None — verify Coverage, entitlement and go-live separately.</div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-300 text-sm font-normal font-['Inter'] leading-5">No timing, latency, throughput or production parity is implied.</div>
              </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch justify-start text-zinc-900 text-3xl font-bold font-['Inter'] leading-8">Read the state before deciding what comes next.</div>
              <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Recommended pattern — not a live environment. These text-based meanings are conceptual; the exact lifecycle belongs to the contract.</div>
              <div className="self-stretch inline-flex justify-start items-start gap-3 overflow-hidden">
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Prepared</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Safe fixture and source identified.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Ready to test</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Conceptual only; access is separate.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Validating</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Input assessed against the contract.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Processing</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Conceptual work in progress.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Completed</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Non-production outcome only.</div>
                  </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-3 overflow-hidden">
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Partial</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Some outcome remains unresolved.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Failed</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Conceptual action did not complete.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Restricted</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Access not established; use docs.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-violet-100 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Temporarily unavailable</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Environment use cannot continue.</div>
                  </div>
                  <div className="flex-1 self-stretch p-4 bg-orange-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-base font-bold font-['Inter']">Unknown</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Fail closed; do not infer success.</div>
                  </div>
              </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-5 overflow-hidden">
              <div className="self-stretch justify-start text-zinc-900 text-3xl font-bold font-['Inter'] leading-8">Troubleshoot without exposing private state.</div>
              <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Recommended patterns — not live environment messages. Exact recovery stays contract-defined.</div>
              <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Validation issue</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Review fixture classification and contract-defined requirements.</div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Partial outcome</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Inspect documented partial-state semantics before proceeding.</div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Processing failure</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Use the exact documented recovery path; no retry cadence is implied.</div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Contract/version mismatch</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Return to the authoritative version and compatibility guidance.</div>
                  </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-4 overflow-hidden">
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Access restricted</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Do not assume entitlement. Continue with public guidance.</div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Environment unavailable</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Use static docs; no private incident or environment state is disclosed.</div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Unknown condition</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Stop and seek controlled guidance. Never guess a successful state.</div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Potential sensitive data</div>
                      <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Stop the attempt. Do not submit data; redirect to safety and security guidance.</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">ENVIRONMENT, ACCESS &amp; AUTHENTICATION</div>
                  <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">Know where public guidance stops.</div>
                  <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">The exact environment and access contract owns these details. This page deliberately does not fill in what has not been supplied.</div>
              </div>
              <div className="self-stretch px-7 py-2 bg-purple-50 rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-8 overflow-hidden">
                      <div className="w-52 justify-start text-zinc-900 text-base font-semibold font-['Inter']">Environment</div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Non-production only. No specific URL, region or topology is supplied.</div>
                  </div>
                  <div className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-8 overflow-hidden">
                      <div className="w-52 justify-start text-zinc-900 text-base font-semibold font-['Inter']">Access</div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Separately governed. Public guidance does not create instant entitlement.</div>
                  </div>
                  <div className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-8 overflow-hidden">
                      <div className="w-52 justify-start text-zinc-900 text-base font-semibold font-['Inter']">Authentication</div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Use authoritative docs. No authentication method or protocol is implied.</div>
                  </div>
                  <div className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-8 overflow-hidden">
                      <div className="w-52 justify-start text-zinc-900 text-base font-semibold font-['Inter']">Credentials</div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Placeholders only. No issuance, key or certificate claim.</div>
                  </div>
                  <div className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-8 overflow-hidden">
                      <div className="w-52 justify-start text-zinc-900 text-base font-semibold font-['Inter']">Provisioning</div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">No provisioning time or access delivery promise is supplied.</div>
                  </div>
                  <div className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-8 overflow-hidden">
                      <div className="w-52 justify-start text-zinc-900 text-base font-semibold font-['Inter']">Quotas &amp; limits</div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Omitted unless verified in the authoritative contract.</div>
                  </div>
                  <div className="self-stretch py-4 border-b border-zinc-300 inline-flex justify-start items-start gap-8 overflow-hidden">
                      <div className="w-52 justify-start text-zinc-900 text-base font-semibold font-['Inter']">Availability</div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">No SLA, uptime promise or production parity is asserted.</div>
                  </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-4 overflow-hidden">
                  <div className="size-6 relative overflow-hidden">
                      <div className="w-4 h-5 left-[3px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                  </div>
                  <div className="flex-1 justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Restricted and unavailable messages preserve public docs and never reveal private account, environment or incident state. Retention, support and promotion mechanics remain governed; none are promised here.</div>
              </div>
          </div>
          <div className="self-stretch px-20 py-24 bg-violet-950/80 flex flex-col justify-start items-start gap-10 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div className="justify-start text-orange-300 text-sm font-bold font-['Inter']">PRODUCTION READINESS BOUNDARY</div>
                  <div className="self-stretch justify-start text-white text-5xl font-bold font-['Inter'] leading-[51.92px]">A successful test is not production readiness.</div>
                  <div className="self-stretch justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Non-production results are learning and integration evidence in their governed context — never automatic permission to operate live.</div>
              </div>
              <div className="self-stretch p-8 bg-slate-900 rounded-3xl outline outline-1 outline-offset-[-1px] outline-gray-600 flex flex-col justify-start items-start gap-7 overflow-hidden">
                  <div className="size- px-3 py-1.5 bg-zinc-700 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
                      <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">NO AUTOMATIC PROMOTION · NO CERTIFICATION STATUS</div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-10 overflow-hidden">
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                          <div className="self-stretch inline-flex justify-start items-center gap-3 overflow-hidden">
                              <div className="size-5 relative overflow-hidden">
                                  <div className="size-4 left-[1.66px] top-[1.67px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-300" />
                              </div>
                              <div className="flex-1 justify-start text-white text-lg font-medium font-['Inter']">Production Coverage</div>
                          </div>
                          <div className="self-stretch inline-flex justify-start items-center gap-3 overflow-hidden">
                              <div className="size-5 relative overflow-hidden">
                                  <div className="size-4 left-[1.66px] top-[1.67px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-300" />
                              </div>
                              <div className="flex-1 justify-start text-white text-lg font-medium font-['Inter']">Contractual entitlement</div>
                          </div>
                          <div className="self-stretch inline-flex justify-start items-center gap-3 overflow-hidden">
                              <div className="size-5 relative overflow-hidden">
                                  <div className="size-4 left-[1.66px] top-[1.67px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-300" />
                              </div>
                              <div className="flex-1 justify-start text-white text-lg font-medium font-['Inter']">Regulator readiness</div>
                          </div>
                      </div>
                      <div className="flex-1 inline-flex flex-col justify-start items-start gap-4 overflow-hidden">
                          <div className="self-stretch inline-flex justify-start items-center gap-3 overflow-hidden">
                              <div className="size-5 relative overflow-hidden">
                                  <div className="size-4 left-[1.66px] top-[1.67px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-300" />
                              </div>
                              <div className="flex-1 justify-start text-white text-lg font-medium font-['Inter']">Security / compliance certification</div>
                          </div>
                          <div className="self-stretch inline-flex justify-start items-center gap-3 overflow-hidden">
                              <div className="size-5 relative overflow-hidden">
                                  <div className="size-4 left-[1.66px] top-[1.67px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-300" />
                              </div>
                              <div className="flex-1 justify-start text-white text-lg font-medium font-['Inter']">Production credential issuance</div>
                          </div>
                          <div className="self-stretch inline-flex justify-start items-center gap-3 overflow-hidden">
                              <div className="size-5 relative overflow-hidden">
                                  <div className="size-4 left-[1.66px] top-[1.67px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-300" />
                              </div>
                              <div className="flex-1 justify-start text-white text-lg font-medium font-['Inter']">Performance or SLA evidence</div>
                          </div>
                      </div>
                  </div>
                  <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">A certification path may exist only where separately established. No badge, default pass criteria or automatic promotion is implied.</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-8 overflow-hidden">
                  <div className="h-12 px-5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="justify-start text-white text-sm font-semibold font-['Inter']">Verify Coverage</div>
                      <div className="size-4 relative overflow-hidden">
                          <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                      </div>
                  </div>
                  <div className="h-12 px-5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
                      <div className="justify-start text-white text-sm font-semibold font-['Inter']">Review Trust</div>
                      <div className="size-4 relative overflow-hidden">
                          <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                      </div>
                  </div>
                  <div className="flex-1 inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-300 text-base font-normal font-['Inter'] leading-6">Review exact contracts and controlled implementation/commercial readiness.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-300 text-sm font-semibold font-['Inter'] leading-5">Explore Integration Guides ↗</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">RELATED DOCS</div>
                  <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">The exact contract belongs in the docs.</div>
                  <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Use distinct authoritative destinations for syntax, versions, compatibility, errors and event semantics. Sandbox guidance does not replace them.</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-5 overflow-hidden">
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[2.16px] top-[2.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Developer Overview</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Start with the governed integration landscape.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/developers/ ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[2.16px] top-[3.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">API Reference</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Exact syntax, versions and error semantics.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/developers/api/ ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[2.16px] top-[2.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">SDKs</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Documented packages and compatibility.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/developers/sdks/ ↗</div>
                      </div>
                  </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-5 overflow-hidden">
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[3.25px] top-[3.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Webhooks &amp; Events</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Authoritative delivery and event semantics.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/developers/webhooks-events/ ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[2.16px] top-[2.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Bulk &amp; Batch</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Contract-owned processing behavior.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/developers/bulk-batch/ ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[3.25px] top-[2.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Integration Guides</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Implementation patterns and prerequisites.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/developers/integration-guides/ ↗</div>
                      </div>
                  </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-5 overflow-hidden">
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[3.25px] top-[3.25px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">API Changelog</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Source-owned changes and version context.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/developers/changelog/ ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="size-5 left-[2.16px] top-[2.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Coverage</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Verify production capability separately.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/coverage/ ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="size-6 relative overflow-hidden">
                          <div className="w-4 h-5 left-[4.34px] top-[2.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-orange-700" />
                      </div>
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">Trust</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Security and governance context.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">/trust/ ↗</div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="self-stretch px-20 py-24 bg-purple-50 flex flex-col justify-start items-start gap-10 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">RELATED GUIDANCE · SAFE CONTINUITY</div>
                  <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">Keep the next step useful, even when testing stops.</div>
                  <div className="self-stretch justify-start text-stone-500 text-xl font-normal font-['Inter'] leading-8">Recommended patterns — not a live environment or claims of current service state. Public guidance remains available when a controlled interaction cannot proceed.</div>
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-5 overflow-hidden">
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">For an engineer</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Read the contract → prepare a safe fixture → follow the walkthrough → inspect meaning → review production prerequisites.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Integration Guides ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">For a buyer</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Testing is not production availability. Verify exact Coverage and contractual entitlement before making a production decision.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Verify Coverage ↗</div>
                      </div>
                  </div>
                  <div className="flex-1 self-stretch p-6 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-300 inline-flex flex-col justify-start items-start gap-3.5 overflow-hidden">
                      <div className="self-stretch justify-start text-zinc-900 text-xl font-bold font-['Inter'] leading-6">When access is restricted</div>
                      <div className="self-stretch justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Use public docs and conceptual guidance. Do not disclose private environment state or imply a recovery promise.</div>
                      <div className="size- min-h-11 inline-flex justify-start items-center overflow-hidden cursor-pointer hover:underline">
                          <div className="justify-start text-orange-700 text-sm font-semibold font-['Inter'] leading-5">Read API Reference ↗</div>
                      </div>
                  </div>
              </div>
              <div className="self-stretch p-7 bg-white rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-300 flex flex-col justify-start items-start gap-6 overflow-hidden">
                  <div className="self-stretch inline-flex justify-between items-center overflow-hidden">
                      <div className="flex-1 justify-start text-zinc-900 text-2xl font-bold font-['Inter'] leading-7">Safe-state guide</div>
                      <div className="size- px-3 py-1.5 bg-orange-50 rounded-[999px] flex justify-start items-start overflow-hidden">
                          <div className="justify-start text-orange-700 text-xs font-bold font-['Inter']">RECOMMENDED PATTERNS</div>
                      </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Loading</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">No fabricated result count; keep static guidance visible.</div>
                      </div>
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">No matches / reset</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Clear filters; never infer missing capability or Coverage.</div>
                      </div>
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Registry unavailable</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Continue with authoritative static docs.</div>
                      </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Access restricted</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">No entitlement claim or private account disclosure.</div>
                      </div>
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Temporarily unavailable</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Public guidance remains available; no incident detail.</div>
                      </div>
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Stale metadata</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">No current badge without a governed source.</div>
                      </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-6 overflow-hidden">
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Conflicting metadata</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Do not guess a winner; defer to controlled guidance.</div>
                      </div>
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">Unsafe-data warning</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Stop the attempt and return to synthetic fixtures.</div>
                      </div>
                      <div className="flex-1 p-4 bg-purple-50 rounded-xl inline-flex flex-col justify-start items-start gap-2 overflow-hidden">
                          <div className="self-stretch justify-start text-zinc-900 text-base font-semibold font-['Inter']">No-JS continuity</div>
                          <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Core copy, scenarios, safety and docs remain readable.</div>
                      </div>
                  </div>
                  <div className="self-stretch justify-start text-stone-500 text-sm font-normal font-['Inter'] leading-5">Unknown state fails closed. Preserve safe route or controlled topic context only — never payloads, credentials, raw errors or private operational information.</div>
              </div>
          </div>
          <div className="self-stretch px-20 py-24 flex flex-col justify-start items-start gap-10 overflow-hidden">
              <div className="self-stretch flex flex-col justify-start items-start gap-4 overflow-hidden">
                  <div className="justify-start text-orange-700 text-sm font-bold font-['Inter']">FAQ</div>
                  <div className="self-stretch justify-start text-zinc-900 text-5xl font-bold font-['Inter'] leading-[51.92px]">Direct answers. No production shortcuts.</div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start overflow-hidden">
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">What is Sandbox?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">The public non-production integration/testing experience for ZoikoTax, using synthetic or approved test data. It is not production evidence or automatic promotion.</div>
                  </div>
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">What can I test?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Approved integration concepts, and separately enabled patterns where governed. The walkthroughs here are illustrative; no released scenario inventory is asserted.</div>
                  </div>
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">Which data can I use?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Prefer synthetic fixtures. Approved test fixtures require governed use. Never submit real customer, subscriber, tax, invoice, tenant or account data, secrets or private traces.</div>
                  </div>
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">Is access self-service?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">No self-service access is asserted. Access, credentials and prerequisites are separately governed; public documentation is not an entitlement.</div>
                  </div>
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">Does completing a test mean production ready?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">No. Production Coverage, entitlement, regulator readiness, credentials and implementation/commercial prerequisites must be verified separately.</div>
                  </div>
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">Where are exact contracts?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">In the authoritative API, SDK, Webhooks &amp; Events, Bulk &amp; Batch and Integration Guides documentation. Sandbox prose does not define syntax, versions or semantics.</div>
                  </div>
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">What if the environment is unavailable?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">Continue with public docs and conceptual walkthroughs. Do not infer private account or incident state; exact recovery follows the authoritative contract.</div>
                  </div>
                  <div className="self-stretch py-6 border-b border-zinc-300 inline-flex justify-start items-start gap-14 overflow-hidden">
                      <div className="w-96 flex justify-start items-start gap-4 overflow-hidden">
                          <div className="size-4 relative overflow-hidden">
                              <div className="w-2.5 h-0 left-[3.75px] top-[9px] absolute outline outline-1 outline-offset-[-0.50px] outline-orange-700" />
                          </div>
                          <div className="flex-1 justify-start text-zinc-900 text-lg font-semibold font-['Inter'] leading-6">Does Sandbox certify me?</div>
                      </div>
                      <div className="flex-1 justify-start text-stone-500 text-base font-normal font-['Inter'] leading-6">No. Sandbox does not confer security/compliance certification or regulator readiness. Any certification path must be separately established.</div>
                  </div>
              </div>
          </div>
      </div>
      <div className="self-stretch px-40 py-20 bg-slate-900/75 flex flex-col justify-start items-center gap-7 overflow-hidden">
          <div className="size- px-3 py-1.5 bg-zinc-700 rounded-[999px] inline-flex justify-start items-start overflow-hidden">
              <div className="justify-start text-orange-300 text-xs font-bold font-['Inter']">NON-PRODUCTION ONLY</div>
          </div>
          <div className="self-stretch text-center justify-start text-white text-5xl font-bold font-['Inter'] leading-[49.28px]">Start with the contract. Build with clarity.</div>
          <div className="self-stretch text-center justify-start text-zinc-300 text-xl font-normal font-['Inter'] leading-8">Read the authoritative docs first. For controlled implementation qualification, speak with ZoikoTax.</div>
          <div className="size- inline-flex justify-start items-start gap-3 overflow-hidden">
              <div className="h-12 px-5 bg-amber-700 rounded-[999px] shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] shadow-[inset_0px_-2px_4px_0px_rgba(253,207,190,1.00)] outline outline-1 outline-offset-[-1px] outline-orange-500 flex justify-start items-center gap-3 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
                  <div className="justify-start text-white text-sm font-semibold font-['Inter']">Read API Reference</div>
                  <div className="size-4 relative overflow-hidden">
                      <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                  </div>
              </div>
              <div className="h-12 px-5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="justify-start text-white text-sm font-semibold font-['Inter']">Explore Integration Guides</div>
                  <div className="size-4 relative overflow-hidden">
                      <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                  </div>
              </div>
              <div className="h-12 px-5 bg-white/5 rounded-[999px] outline outline-1 outline-offset-[-1px] outline-gray-600 flex justify-start items-center gap-3 overflow-hidden hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="justify-start text-white text-sm font-semibold font-['Inter']">Book a Demo</div>
                  <div className="size-4 relative overflow-hidden">
                      <div className="size-2.5 left-[3.34px] top-[3.33px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white" />
                  </div>
              </div>
          </div>
          <div className="self-stretch text-center justify-start text-orange-300 text-sm font-normal font-['Inter'] leading-5">Non-production only. Production readiness is separately governed.</div>
          <div className="self-stretch text-center justify-start text-zinc-300 text-xs font-normal font-['Inter'] leading-4">Safe route or controlled topic context only. No payload or private data collection.</div>
      </div>
    </div>
  );
}
