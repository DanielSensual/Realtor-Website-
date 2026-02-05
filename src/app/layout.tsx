import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnalyticsProvider } from "@/components/analytics-provider";
import { getSiteUrl, siteConfig } from "@/lib/site";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Luxury Real Estate Brokerage`,
    template: "%s | The Real Estate Collection"
  },
  description: siteConfig.description,
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: "Luxury real estate expertise with a boutique hospitality approach.",
    images: [
      {
        url: "/og-default.svg",
        width: 1200,
        height: 630,
        alt: "The Real Estate Collection"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ivory text-ink">
        <AnalyticsProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
