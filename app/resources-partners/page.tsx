import type { Metadata } from "next";
import { ResourcesPartnersContent } from "@/components/resources-partners";

export const metadata: Metadata = {
  title: "Partners | Telecom Fiscal Compliance Ecosystem | ZoikoTax",
  description:
    "Understand technology, implementation and ecosystem relationships—where current, approved public evidence defines the role and scope.",
};

export default function ResourcesPartnersPage() {
  return <ResourcesPartnersContent />;
}
