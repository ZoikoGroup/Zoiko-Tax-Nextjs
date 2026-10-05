"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

// Full-screen routes (e.g. sign-in) render without the marketing header and footer.
const BARE_ROUTES = ["/sign-in"];

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

  return (
    <>
      {!bare && header}
      <main className="flex-1">{children}</main>
      {!bare && footer}
    </>
  );
}
