import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Caps parallel build workers and lets Next.js scale them down on
  // memory-constrained hosts, instead of defaulting to (CPU count - 1).
  // Without this, `next build` can grind to a crawl (and trip CI/CD
  // timeouts) on small deployment VMs that report more vCPUs than they
  // can actually run concurrently.
  experimental: {
    cpus: 2,
    memoryBasedWorkersCount: true,
  },
  async redirects() {
    return [
      {
        source: "/e-invoicing",
        destination: "/e-invoicing-ctc",
        permanent: false,
      },
      {
        source: "/einvoicing",
        destination: "/e-invoicing-ctc",
        permanent: false,
      },
      {
        source: "/einvoicing-ctc",
        destination: "/e-invoicing-ctc",
        permanent: false,
      },
      {
        source: "/e-invoice",
        destination: "/e-invoicing-ctc",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
