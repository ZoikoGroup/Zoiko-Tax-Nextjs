import type { Metadata } from "next";
import {
  SystemStatusHero,
  SystemStatusActiveIncidents,
  SystemStatusServiceHealth,
  SystemStatusPlannedMaintenance,
  SystemStatusTroubleHandoff,
  SystemStatusFAQ,
} from "@/components/system-status";

export const metadata: Metadata = {
  title: "System Status | ZoikoTax",
  description:
    "Current ZoikoTax service status — with freshness and source visible. See the current source-backed state of approved ZoikoTax services, active incidents and planned maintenance.",
};

export default function SystemStatusPage() {
  return (
    <div className="w-full bg-white overflow-x-clip">
      <SystemStatusHero />
      <SystemStatusActiveIncidents />
      <SystemStatusServiceHealth />
      <SystemStatusPlannedMaintenance />
      <SystemStatusTroubleHandoff />
      <SystemStatusFAQ />
    </div>
  );
}
