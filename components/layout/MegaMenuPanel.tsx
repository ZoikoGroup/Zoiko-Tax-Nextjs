import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import type { MegaMenu } from "./menu-data";

type MegaMenuPanelProps = {
  menu: MegaMenu;
  id: string;
  onNavigate: () => void;
};

const ctaClass =
  "inline-flex h-9 items-center justify-center rounded-full bg-copper px-5 font-sora text-xs font-bold text-white outline outline-1 -outline-offset-1 outline-copper-bright shadow-[inset_0_3px_4px_0_rgba(255,223,211,1),inset_0_-2px_4px_0_rgba(253,207,190,1)] transition-colors hover:bg-copper-bright";

export default function MegaMenuPanel({ menu, id, onNavigate }: MegaMenuPanelProps) {
  const { sections, feature } = menu;

  return (
    <div
      id={id}
      className="flex max-h-[calc(100vh-6rem)] gap-7 overflow-y-auto rounded-3xl bg-white p-7 shadow-[0_4px_4px_0_rgba(0,0,0,0.09)]"
    >
      <div className="flex flex-1 items-stretch gap-6">
        {sections.map((section, i) => (
          <Fragment key={section.title}>
            {i > 0 && <div aria-hidden className="w-px self-stretch bg-menu-line" />}

            <div className="flex min-w-44 flex-1 flex-col gap-10">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-menu-surface">
                    <section.icon className="size-5 text-menu-accent" strokeWidth={2} />
                  </span>
                  <h3 className="font-sora text-base font-bold text-menu-title">
                    {section.title}
                  </h3>
                </div>
                <div aria-hidden className="h-px bg-menu-line" />
              </div>

              <ul className="flex flex-col gap-6">
                {section.items.map((entry) => (
                  <li key={entry.label}>
                    <Link
                      href={entry.href}
                      onClick={onNavigate}
                      className="group flex flex-col gap-[3px] rounded-md py-1"
                    >
                      <span className="flex items-center gap-2">
                        <entry.icon className="size-3.5 shrink-0 text-menu-accent" strokeWidth={2} />
                        <span className="flex-1 font-sora text-xs font-bold text-menu-title transition-colors group-hover:text-menu-accent">
                          {entry.label}
                        </span>
                        <ChevronRight
                          className="size-3 shrink-0 text-menu-accent transition-transform group-hover:translate-x-0.5"
                          strokeWidth={2.5}
                        />
                      </span>
                      <span className="pl-5.5 font-dm-sans text-xs leading-4 text-menu-text">
                        {entry.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Fragment>
        ))}
      </div>

      <div className="flex w-60 shrink-0 flex-col overflow-hidden rounded-2xl bg-menu-surface shadow-[0_4px_4px_0_rgba(0,0,0,0.09)] xl:w-72">
        <div className="relative h-56 xl:h-64">
          <Image src={feature.image} alt="" fill sizes="288px" className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col justify-center gap-4 p-5">
          <div className="flex flex-col gap-2">
            {feature.eyebrow && (
              <p className="font-sans text-[10px] font-semibold uppercase tracking-wide text-menu-accent">
                {feature.eyebrow}
              </p>
            )}
            <p className="font-sora text-base font-bold leading-5 text-menu-title">
              {feature.title}
            </p>
            {feature.description && (
              <p className="font-sans text-xs leading-5 text-menu-muted">
                {feature.description}
              </p>
            )}
          </div>
          <Link href={feature.href} onClick={onNavigate} className={`${ctaClass} self-start`}>
            {feature.cta} →
          </Link>
        </div>
      </div>
    </div>
  );
}
