import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center" aria-label="ZoikoTax home">
      <Image
        src="/layout/zoikotax-logo.png"
        alt="ZoikoTax"
        width={226}
        height={37}
        priority
        className="h-8 w-auto sm:h-9"
      />
    </Link>
  );
}
