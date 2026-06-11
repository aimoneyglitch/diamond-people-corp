import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Homeschool Scholarships Arizona | DPC",
  description: "Learn how Arizona homeschool scholarships and donations can help families afford supplies, field trips, tutoring, enrichment, and student opportunities.",
  keywords: [
    "homeschool scholarships Arizona",
    "Arizona homeschool donations",
    "student scholarship support",
    "homeschool family assistance",
    "education scholarships Arizona"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/homeschool-scholarships-arizona-donations/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/blog/homeschool-scholarships-arizona-donations/",
    siteName: "The Diamond People Corp",
    title: "Homeschool Scholarships Arizona | DPC",
    description: "Learn how Arizona homeschool scholarships and donations can help families afford supplies, field trips, tutoring, enrichment, and student opportunities.",
    images: [
      {
        url: "/blog/homeschool-scholarships-arizona-donations.jpg",
        width: 1200,
        height: 630,
        alt: "Arizona student benefiting from homeschool scholarship support"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeschool Scholarships Arizona | DPC",
    description: "Learn how Arizona homeschool scholarships and donations can help families afford supplies, field trips, tutoring, enrichment, and student opportunities.",
    images: ["/blog/homeschool-scholarships-arizona-donations.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <BlogArticle slug="homeschool-scholarships-arizona-donations" />;
}
