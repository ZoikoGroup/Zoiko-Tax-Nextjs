import { Info, TriangleAlert } from "lucide-react";
import { SENSITIVE_DATA_WARNING, SectionShell } from "./shared";

export default function NoticesSection() {
  return (
    <SectionShell className="border-b border-gray-200 bg-purple-50">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="flex items-start gap-4 rounded-xl bg-blue-50 p-5 outline -outline-offset-1 outline-blue-100 sm:p-6">
          <Info aria-hidden="true" className="mt-1 size-6 shrink-0 text-blue-600" strokeWidth={2} />
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-bold leading-6 text-blue-900">Community Authority Notice</h2>
            <p className="text-sm leading-6 text-blue-800">
              Community discussions reflect peer experience. Popularity, votes, accepted answers or verified
              participation do not by themselves make a contribution official ZoikoTax guidance.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-xl bg-amber-50 p-5 outline -outline-offset-1 outline-amber-200 sm:p-6">
          <TriangleAlert aria-hidden="true" className="mt-1 size-6 shrink-0 text-amber-600" strokeWidth={2} />
          <div className="flex flex-col gap-2">
            <h2 className="text-base font-bold leading-6 text-amber-900">Protect Sensitive Data</h2>
            <p className="text-sm leading-6 text-amber-800">{SENSITIVE_DATA_WARNING}</p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
