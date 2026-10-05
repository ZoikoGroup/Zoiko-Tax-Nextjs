import { ControlCard, NoticeCard, SectionHeading, SectionShell } from "./shared";

const CARDS = [
  {
    icon: "server",
    title: "Hosting & compute",
    description:
      "Publication requires approved hosting and compute scope. Provider, location and topology assumptions are not evidence.",
  },
  {
    icon: "network",
    title: "Segmentation & boundaries",
    description:
      "Publication requires approved separation boundaries and their applicability. The conceptual zones do not imply network segmentation.",
  },
  {
    icon: "settings",
    title: "Hardening & patch lifecycle",
    description:
      "Publication requires approved configuration and patch-lifecycle evidence, including scope and review—not an inferred baseline.",
  },
  {
    icon: "box",
    title: "Runtime & containers",
    description:
      "Publish only if a verified runtime or container domain exists in scope. No packaging, orchestration or isolation model is assumed.",
  },
  {
    icon: "waypoints",
    title: "Edge & DDoS",
    description:
      "Publication requires approved ingress and edge-protection scope. No mitigation capability, provider or guarantee is supplied.",
  },
  {
    icon: "layers",
    title: "Environment separation",
    description:
      "Publication requires approved environment boundaries and change responsibilities. No production or non-production separation is asserted.",
  },
];

export default function PlatformInfraSection() {
  return (
    <SectionShell className="bg-purple-50">
      <div className="flex flex-col gap-9">
        <SectionHeading
          eyebrow="05 / PLATFORM & INFRASTRUCTURE"
          title="Safe boundaries. No invented topology."
          description="These domains are conditional on verified architecture scope. An unknown source cannot imply an implemented platform or network protection."
        />

        <div className="grid grid-cols-1 gap-4 self-stretch md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <ControlCard
              key={card.title}
              title={card.title}
              description={card.description}
              footer="Control detail not supplied"
              icon={card.icon}
            />
          ))}
        </div>

        <NoticeCard
          title="A public summary is not an attack-surface map"
          description="Internal hosts, network rules, attack paths, provider-specific layouts and administrative interfaces remain out of public scope. Approved boundary descriptions should be sufficient without sensitive operational detail."
        />
      </div>
    </SectionShell>
  );
}
