import type { Metadata } from "next";
import { DM_Sans, Inter, Roboto_Mono, Sora } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora-next",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono-next",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans-next",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZoikoTax | Telecom Fiscal Compliance Platform",
  description:
    "See how ZoikoTax fits your telecom architecture. Explore the operating model, governed capabilities and market-ready approach for fiscal compliance transformation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} ${dmSans.variable} ${robotoMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[color:var(--foreground)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
