import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 shrink-0"
      aria-label="ZoikoTax home"
    >
      {/* Replace /public/logo.svg with your own logo image */}
      <Image src="/logo.svg" alt="ZoikoTax logo" width={36} height={36} priority />
      <span className="text-xl font-bold tracking-tight text-brand-navy">
        ZOIKO
        <span className="text-brand-orange">Tax</span>
        <sup className="ml-0.5 text-[10px] font-semibold text-brand-gray">TM</sup>
      </span>
    </Link>
  );
}
