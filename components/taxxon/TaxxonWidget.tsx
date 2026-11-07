// Floating launcher: opens ZoikoTax Intelligence, the site's one public
// assistant, at /intelligence. Never auto-opened.

import Link from "next/link";

export default function TaxxonWidget() {
  return (
    <Link
      href="/intelligence"
      aria-label="Ask Zoiko Tax"
      className="taxxon-launcher fixed z-[60] flex h-14 w-14 items-center justify-center rounded-2xl text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-taxxon-aubergine"
      style={{ right: "max(24px, env(safe-area-inset-right))", bottom: "max(24px, env(safe-area-inset-bottom))" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- the official favicon, served as-is */}
      <img src="/icon.svg" alt="" width={34} height={34} className="h-[34px] w-[34px] drop-shadow-sm" />
    </Link>
  );
}
