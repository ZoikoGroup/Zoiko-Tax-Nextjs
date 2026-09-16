import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Sign In | ZoikoTax",
};

export default function SignInPage() {
  return (
    <section className="flex min-h-[calc(100vh-4.5rem)] items-center justify-center bg-slate-50 py-16">
      <Reveal className="w-full max-w-sm rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
        <h1 className="text-xl font-bold text-brand-navy">Sign in to ZoikoTax</h1>
        <p className="mt-1 text-sm text-brand-navy/60">
          Access your compliance workspace.
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-brand-navy">
              Work email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="mt-1.5 w-full rounded-lg border border-black/10 px-3 py-2.5 text-sm text-brand-navy outline-none transition-colors focus:border-brand-orange"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-brand-navy">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-lg border border-black/10 px-3 py-2.5 text-sm text-brand-navy outline-none transition-colors focus:border-brand-orange"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-orange-light"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-brand-navy/50">
          Need access?{" "}
          <Link href="#book-a-demo" className="font-medium text-brand-orange">
            Talk to our team
          </Link>
        </p>
      </Reveal>
    </section>
  );
}
