import Image from "next/image";
import { Fragment } from "react";
import { IMAGE_BASE, ROUTES } from "./shared";

const OFFICIAL_LINKS = [
  { label: "Documentation", href: ROUTES.documentation },
  { label: "Customer Support", href: ROUTES.support },
  { label: "System Status", href: ROUTES.status },
  { label: "Developers", href: ROUTES.developers },
];

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-purple-100 bg-stone-100">
      <Image
        src={`${IMAGE_BASE}/hero.webp`}
        alt=""
        aria-hidden="true"
        fill
        priority
        sizes="100vw"
        className="object-cover object-right"
      />
      {/* Extra wash on small screens, where the copy sits over the busy right side of the photo. */}
      <div aria-hidden="true" className="absolute inset-0 bg-stone-100/75 lg:hidden" />

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col justify-center px-5 py-14 sm:px-8 lg:min-h-[782px] lg:py-20">
        <div className="flex w-full max-w-[768px] flex-col items-start">
          <span className="text-sm font-bold uppercase leading-5 tracking-wider text-orange-400">
            Support &amp; Status · Community Forum
          </span>
          <h1 className="pt-4 text-4xl font-extrabold leading-tight text-indigo-950 sm:text-5xl lg:text-6xl lg:leading-[60px]">
            Community Forum
          </h1>
          <p className="pt-6 text-base leading-7 text-gray-700 sm:text-lg">
            Explore peer discussions about using ZoikoTax. Community contributions are not official ZoikoTax support,
            tax or legal advice, and may be incomplete or outdated. Use official ZoikoTax sources for current product,
            Coverage, status, security and support information.
          </p>

          <form role="search" action="#discussions" className="relative mt-10 w-full max-w-[672px]">
            <label htmlFor="forum-search" className="sr-only">
              Search community discussions
            </label>
            <input
              id="forum-search"
              type="search"
              name="q"
              placeholder="Search community discussions..."
              className="h-14 w-full rounded-xl bg-white pl-4 pr-24 text-sm text-gray-900 sm:pl-5 sm:text-base shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] outline -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-orange-400 sm:pr-32"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 h-10 rounded-lg bg-orange-400 px-4 text-base font-semibold text-white transition-colors hover:bg-orange-500 sm:px-6"
            >
              Search
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-4 pt-8">
            <a
              href="#discussions"
              className="inline-flex items-center rounded-[999px] bg-amber-700 px-6 py-3.5 text-base font-semibold text-white shadow-[inset_0px_3px_4px_0px_rgba(255,223,211,1.00)] outline -outline-offset-1 outline-amber-700 transition-colors hover:bg-amber-800"
            >
              Browse discussions
            </a>
            <a
              href="#ask"
              className="inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-violet-950 outline-2 -outline-offset-2 outline-gray-200 transition-colors hover:bg-gray-50"
            >
              Ask the community
            </a>
          </div>

          <p className="mt-8 w-full border-t border-gray-200 pt-6 text-sm leading-6 text-gray-600">
            <span className="mr-3 font-semibold text-gray-900">Need an official answer?</span>
            Use{" "}
            {OFFICIAL_LINKS.map((link, i) => (
              <Fragment key={link.label}>
                {i > 0 ? " · " : null}
                <a href={link.href} className="font-medium text-orange-500 hover:underline">
                  {link.label}
                </a>
              </Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
