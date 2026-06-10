import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thediamondpeople.org"),
  title: "The Diamond People Corp | Scholarships, Educational Support & Homeschool Enrichment",
  description:
    "The Diamond People Corp is a Tucson, Arizona nonprofit supporting Traveling Scholars Foundation students and families through scholarships, educational field trips, homeschool enrichment, youth sports, and community partnerships.",
  keywords: [
    "The Diamond People Corp",
    "Traveling Scholars Foundation",
    "homeschool scholarships Arizona",
    "educational nonprofit Tucson",
    "student scholarships Arizona",
    "homeschool enrichment programs",
    "educational field trips",
    "youth sports scholarships",
    "K-12 educational support",
    "community education partnerships",
  ],
  openGraph: {
    title: "The Diamond People Corp",
    description:
      "Supporting Traveling Scholars. Investing in Futures.",
    url: "https://the-diamond-people.pages.dev",
    siteName: "The Diamond People Corp",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/diamond-logo.jpg",
        width: 1200,
        height: 1200,
        alt: "The Diamond People Corp logo",
      },
    ],
  },
};

const nonprofitSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: "The Diamond People Corp",
  description:
    "A nonprofit organization supporting students and families through scholarships, educational enrichment, homeschool opportunities, youth sports, field trips, and community partnerships connected to Traveling Scholars Foundation.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tucson",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  areaServed: "Arizona",
  nonprofitStatus: "NonprofitType",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(nonprofitSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}


