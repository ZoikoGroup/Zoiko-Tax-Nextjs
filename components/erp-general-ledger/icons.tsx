import Image from "next/image";

type IconProps = { className?: string };

/* ---------- Exported PNG icons ---------- */

export function InfoIcon({ className = "size-6" }: IconProps) {
  return <Image src="/erp-general-ledger/info.png" alt="" width={24} height={24} className={className} />;
}

export function LinkIcon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/link.png" alt="" width={20} height={20} className={className} />;
}

export function RefreshCwIcon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/refresh-cw (1).png" alt="" width={20} height={20} className={className} />;
}

export function FlowDirectionIcon({ className = "" }: IconProps) {
  return <Image src="/erp-general-ledger/Flow direction.png" alt="" width={15} height={13} className={className} />;
}

export function DefinedRelationshipIcon({ className = "" }: IconProps) {
  return <Image src="/erp-general-ledger/Defined relationship.png" alt="" width={30} height={17} className={className} />;
}

export function LinkMarkerIcon({ className = "" }: IconProps) {
  return <Image src="/erp-general-ledger/Link marker.png" alt="" width={14} height={7} className={className} />;
}

export function Code2Icon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/icons/code-2.svg" alt="" width={20} height={20} className={className} />;
}

export function LayersIcon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/icons/layers.svg" alt="" width={20} height={20} className={className} />;
}

export function RadioIcon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/icons/radio.svg" alt="" width={20} height={20} className={className} />;
}

export function FlaskConicalIcon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/icons/flask-conical.svg" alt="" width={20} height={20} className={className} />;
}

export function GitCompareArrowsIcon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/icons/git-compare-arrows.svg" alt="" width={20} height={20} className={className} />;
}

export function GlobeSvgIcon({ className = "size-5" }: IconProps) {
  return <Image src="/erp-general-ledger/icons/globe.svg" alt="" width={20} height={20} className={className} />;
}

export function SquareIcon({ className = "size-4" }: IconProps) {
  return <Image src="/erp-general-ledger/icons/square.svg" alt="" width={16} height={16} className={className} />;
}


/* ---------- Inline SVG icons (currentColor) ---------- */

function Svg({ className = "size-6", children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const BookIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
  </Svg>
);

export const FileIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
  </Svg>
);

export const FileTextIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </Svg>
);

export const BracesIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
    <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
  </Svg>
);

export const PackageIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="M3.3 7 12 12l8.7-5" />
    <path d="M12 22V12" />
  </Svg>
);

export const BellIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </Svg>
);

export const DownloadIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </Svg>
);

export const RotateIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </Svg>
);

export const CalendarIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </Svg>
);

export const CopyIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </Svg>
);

export const ClipboardCheckIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </Svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const GlobeIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </Svg>
);

export const FlaskIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" />
    <path d="M8.5 2h7" />
    <path d="M7 16h10" />
  </Svg>
);

export const LinkSvgIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </Svg>
);

export const GitForkIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <circle cx="12" cy="18" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="18" cy="6" r="3" />
    <path d="M18 9v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9" />
    <path d="M12 13v2" />
  </Svg>
);

export const GitBranchIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <line x1="6" x2="6" y1="3" y2="15" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M18 9a9 9 0 0 1-9 9" />
  </Svg>
);

export const FileEditIcon = ({ className }: IconProps) => (
  <Svg className={className}>
    <path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l1-3.95 5.42-5.44Z" />
  </Svg>
);

