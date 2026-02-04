import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnalyticsProvider } from "@/components/analytics-provider";

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
    default: "The Real Estate Collection | Luxury Real Estate Brokerage",
    template: "%s | The Real Estate Collection"
  },
  description: "A boutique luxury real estate brokerage in Florida offering curated listings, concierge service, and expert agents.",
  metadataBase: new URL("https://www.therealestatecollection.com"),
  openGraph: {
    type: "website",
    siteName: "The Real Estate Collection",
    title: "The Real Estate Collection",
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
