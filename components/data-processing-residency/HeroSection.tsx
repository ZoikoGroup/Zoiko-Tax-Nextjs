import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SectionShell } from "@/components/ai-governance/shared";

export default function HeroSection() {
  return (
    <SectionShell 
      id="hero" 
      className="bg-[rgba(250,243,255,1)] min-h-[770px] flex items-center pt-24"
      imageSrc="/about-us/Residency hero (1).png"
      imageClassName="object-cover"
    >
      <div className="max-w-[760px] flex flex-col gap-6">
        <span className="text-[13px] font-bold text-[rgba(214,90,44,1)] tracking-wider uppercase">
          TRUST · DATA PROCESSING & RESIDENCY
        </span>
        <h1 className="text-[58px] font-bold leading-[1.1] text-[rgba(24,20,27,1)] tracking-tight">
          Residency claims scoped to the data domain you can actually verify.
        </h1>
        <p className="text-xl font-medium leading-relaxed text-[rgba(102,95,105,1)] max-w-[720px]">
          Review approved ZoikoTax deployment, processing-location and residency controls without assuming every service, capability or customer has the same regional options.
        </p>

        <div className="flex flex-col gap-3.5 mt-2">
          <Link
            href="#deployment-domains"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-[rgba(191,103,53,1)] px-5.5 py-3.5 text-sm font-semibold text-white transition hover:bg-[rgba(214,90,44,1)]"
          >
            <span>View supported processing/residency scope</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/trust/privacy/"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-white border border-[rgba(216,206,221,1)] px-5.5 py-3.5 text-sm font-semibold text-[rgba(24,20,27,1)] transition hover:border-[rgba(214,90,44,1)]"
            >
              <span>Privacy & Data Protection</span>
              <ArrowRight className="h-4 w-4 text-[rgba(24,20,27,1)]" />
            </Link>
            <Link
              href="/trust/"
              className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-[rgba(214,90,44,1)] hover:underline"
            >
              Trust Center <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
