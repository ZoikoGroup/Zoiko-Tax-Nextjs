import type { Metadata } from "next";
import { BulkBatchContent } from "@/components/bulk-batch";

export const metadata: Metadata = {
  title: "Bulk & Batch | Developers | ZoikoTax",
  description:
    "Public ZoikoTax Bulk & Batch guidance for high-volume asynchronous ingestion and export patterns: governed job lifecycle, validation, partial outcomes, result retrieval and authority boundaries—without assuming production limits or SLAs.",
};

export default function BulkBatchPage() {
  return <BulkBatchContent />;
}
