import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
