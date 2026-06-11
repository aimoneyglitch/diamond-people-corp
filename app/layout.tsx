import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://thediamondpeoplecorp.org"),
  title: {
    default: "The Diamond People Corp | Supporting Traveling Scholars",
    template: "%s | The Diamond People Corp"
  },
  description:
    "The Diamond People Corp supports Traveling Scholars Foundation students and families through education, opportunity, empowerment, scholarships, enrichment, field trips, learning supplies, and community partnership in Tucson, Arizona.",
  applicationName: "The Diamond People Corp",
  authors: [{ name: "The Diamond People Corp" }],
  creator: "The Diamond People Corp",
  publisher: "The Diamond People Corp",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/",
    siteName: "The Diamond People Corp",
    title: "The Diamond People Corp | Supporting Traveling Scholars",
    description:
      "Supporting Traveling Scholars Foundation students and families through education, opportunity, empowerment, scholarships, enrichment, field trips, learning supplies, and community partnership.",
    images: [
      {
        url: "/og-diamond-people-corp.jpg",
        width: 1200,
        height: 630,
        alt: "The Diamond People Corp logo supporting Traveling Scholars Foundation"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "The Diamond People Corp | Supporting Traveling Scholars",
    description:
      "Supporting Traveling Scholars Foundation students and families through education, opportunity, empowerment, scholarships, enrichment, field trips, learning supplies, and community partnership.",
    images: ["/og-diamond-people-corp.jpg"]
  },
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/site-icon-512x512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ]
  }
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


