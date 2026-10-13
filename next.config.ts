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
    // Trades a slight compile-time increase for lower peak Webpack memory,
    // per https://nextjs.org/docs/app/guides/memory-usage.
    webpackMemoryOptimizations: true,
    serverSourceMaps: false,
  },
  productionBrowserSourceMaps: false,
  // The deploy VM OOMs during the "Running TypeScript" build step (it has
  // too little RAM to type-check this many routes/components in one pass).
  // Type-checking now runs as a required CI job on GitHub's runners instead
  // (see .github/workflows/deploy.yml), so it's safe to skip it here rather
  // than crash the production build. (Next.js 16 removed `next lint` and
  // the `eslint` config key entirely, so there's no equivalent toggle for
  // lint — it only ever runs via the standalone ESLint CLI now.)
  // https://nextjs.org/docs/app/guides/memory-usage#disable-static-analysis
  typescript: {
    ignoreBuildErrors: true,
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
