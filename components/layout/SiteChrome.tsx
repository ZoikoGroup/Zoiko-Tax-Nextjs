"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import TaxxonWidget from "@/components/taxxon/TaxxonWidget";

// Full-screen routes (e.g. sign-in) render without the marketing header and footer.
const BARE_ROUTES = ["/sign-in"];
// The full-page assistant is the chat itself, so it needs no floating launcher.
const NO_LAUNCHER_ROUTES = ["/intelligence"];

export default function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const bare = BARE_ROUTES.some((route) => pathname === route || pathname?.startsWith(`${route}/`));
  const launcher = !bare && !NO_LAUNCHER_ROUTES.includes(pathname ?? "");

  return (
    <>
      {!bare && header}
      <main className="flex-1">{children}</main>
      {!bare && footer}
      {/* Public Taxxon assistant: never on the customer sign-in, so the public
          and authenticated trust boundaries are not confused (Doc 01 §1). */}
      {launcher && <TaxxonWidget />}
    </>
  );
}
