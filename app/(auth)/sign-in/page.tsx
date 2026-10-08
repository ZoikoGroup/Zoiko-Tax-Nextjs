import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Globe, Shield } from "lucide-react";
import BrandPanel from "@/components/sign-in/BrandPanel";
import SignInForm from "@/components/sign-in/SignInForm";

export const metadata: Metadata = {
  title: "Sign In | ZoikoTax",
  description: "Secure access to your global tax workspace.",
};

const FOOTER_LINKS = [
  { label: "Privacy", href: "/trust/privacy/" },
  { label: "Security", href: "/trust/security/" },
  { label: "Accessibility", href: "/accessibility/" },
  { label: "Help", href: "/help/" },
];

export default function SignInPage() {
  return (
    <div className="flex min-h-dvh w-full bg-[#FAF9F6] font-['Inter',sans-serif]">
      <BrandPanel />

      <section className="relative flex flex-1 min-w-0 flex-col items-center justify-between px-4 sm:px-8 lg:px-12 pt-20 sm:pt-24 pb-6">
        <label className="absolute right-4 sm:right-8 lg:right-10 top-[18px] h-11 inline-flex items-center gap-2 text-xs text-[#211C24]">
          <Globe className="size-4 text-[#706B74]" strokeWidth={1.5} aria-hidden="true" />
          <span className="sr-only">Language</span>
          <select
            defaultValue="en-GB"
            className="appearance-none bg-transparent pr-4 text-xs text-[#211C24] outline-none cursor-pointer focus-visible:underline"
          >
            <option value="en-GB">English (UK)</option>
            <option value="en-US">English (US)</option>
          </select>
          <ChevronDown className="pointer-events-none -ml-5 size-3 text-[#706B74]" strokeWidth={1.5} aria-hidden="true" />
        </label>

        <div className="w-full max-w-[520px] flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <Link href="/" aria-label="ZoikoTax home" className="self-start">
              <Image src="/layout/zoikotax-logo.png" alt="ZoikoTax" width={209} height={34} priority />
            </Link>
            <p className="text-base text-[#706B74]">Secure access to your global tax workspace.</p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-[32px] sm:text-4xl font-semibold leading-tight sm:leading-10 text-[#260D29]">Welcome back</h1>
              <p className="text-base leading-6 text-[#706B74]">Sign in to your Zoiko Tax workspace.</p>
            </div>

            <SignInForm />

            <p className="h-11 flex items-center gap-2 text-sm text-[#706B74]">
              Trouble signing in?
              <Link
                href="/help/"
                className="inline-flex items-center gap-2 font-semibold text-[#A75930] hover:underline underline-offset-4"
              >
                Get help
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </p>
          </div>
        </div>

        <footer className="mt-12 w-full flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#706B74]">
          <p className="flex items-center gap-2">
            <Shield className="size-5 shrink-0" strokeWidth={1.5} aria-hidden="true" />
            Protected by enterprise-grade authentication
          </p>
          <nav aria-label="Legal and support">
            <ul className="flex flex-wrap items-center">
              {FOOTER_LINKS.map((l, idx) => (
                <li key={l.label} className="flex items-center">
                  {idx > 0 && <span className="mx-2.5 h-2.5 w-px bg-[#DCD8D5]" aria-hidden="true" />}
                  <Link href={l.href} className="hover:text-[#211C24] hover:underline underline-offset-4">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </section>
    </div>
  );
}
