import React from "react";
import Image from "next/image";

export default function WhiteBgPattern({
  className = "object-cover object-center",
}: {
  className?: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Image
        src="/shadow-assurance/white-bg.png"
        alt=""
        fill
        sizes="100vw"
        className={className}
      />
    </div>
  );
}
