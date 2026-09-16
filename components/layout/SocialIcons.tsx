type IconProps = {
  size?: number;
  className?: string;
};

export function LinkedInIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001ZM3 9.98h4v10.02H3V9.98Zm7.5 0h3.83v1.37h.05c.53-1 1.85-2.05 3.8-2.05 4.06 0 4.82 2.67 4.82 6.14v6.56h-4V16.2c0-1.46-.03-3.34-2.04-3.34-2.04 0-2.35 1.6-2.35 3.24v6.9h-4V9.98Z" />
    </svg>
  );
}

export function YouTubeIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M22.5 7.2a2.9 2.9 0 0 0-2.05-2.06C18.66 4.7 12 4.7 12 4.7s-6.66 0-8.45.44A2.9 2.9 0 0 0 1.5 7.2 30.2 30.2 0 0 0 1.05 12a30.2 30.2 0 0 0 .45 4.8 2.9 2.9 0 0 0 2.05 2.06c1.79.44 8.45.44 8.45.44s6.66 0 8.45-.44a2.9 2.9 0 0 0 2.05-2.06A30.2 30.2 0 0 0 22.95 12a30.2 30.2 0 0 0-.45-4.8ZM9.75 15.4V8.6L15.9 12l-6.15 3.4Z" />
    </svg>
  );
}

export function XIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M18.9 2.5h3.1l-6.77 7.73L23.4 21.5h-6.58l-5.15-6.74-5.9 6.74H2.66l7.25-8.28L2 2.5h6.74l4.66 6.16L18.9 2.5Zm-1.09 17.1h1.72L7.28 4.3H5.44l12.37 15.3Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
