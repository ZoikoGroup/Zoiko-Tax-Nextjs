import Link from "next/link";
import { SectionShell, SectionHeading, Card, StaggerGroup, StaggerItem } from "./shared";

const assets = [
  { title: "Trust Center", body: "Live security posture, subprocessors and compliance status.", href: "#" },
  { title: "Security Whitepaper", body: "Architecture, encryption and access-control details.", href: "#" },
  { title: "Bug Bounty & Reports", body: "How to responsibly disclose a vulnerability.", href: "#" },
  { title: "Documentation", body: "Implementation guides for tax, finance and engineering teams.", href: "#" },
];

export default function TrustAssetSection() {
  return (
    <SectionShell id="trust-assets" tone="light">
      <SectionHeading
        eyebrow="Trust Assets"
        title="Everything you need to evaluate ZoikoTax with confidence."
      />

      <StaggerGroup className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {assets.map((asset) => (
          <StaggerItem key={asset.title}>
            <Link href={asset.href} className="block h-full">
              <Card className="h-full">
                <h3 className="text-base font-semibold text-brand-navy">{asset.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/70">
                  {asset.body}
                </p>
              </Card>
            </Link>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </SectionShell>
  );
}
