import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Why Homeschool Families Need Donations | DPC",
  description: "See why homeschool families need donations for curriculum, tutoring, field trips, learning supplies, youth sports, and student enrichment support.",
  keywords: [
    "why homeschool families need donations",
    "educational donations homeschool",
    "homeschool curriculum costs",
    "donate learning supplies",
    "student enrichment donations"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/why-homeschool-families-need-educational-donations/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/blog/why-homeschool-families-need-educational-donations/",
    siteName: "The Diamond People Corp",
    title: "Why Homeschool Families Need Donations | DPC",
    description: "See why homeschool families need donations for curriculum, tutoring, field trips, learning supplies, youth sports, and student enrichment support.",
    images: [
      {
        url: "/blog/why-homeschool-families-need-educational-donations.jpg",
        width: 1200,
        height: 630,
        alt: "Homeschool learning supplies and educational donation needs"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Homeschool Families Need Donations | DPC",
    description: "See why homeschool families need donations for curriculum, tutoring, field trips, learning supplies, youth sports, and student enrichment support.",
    images: ["/blog/why-homeschool-families-need-educational-donations.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <BlogArticle slug="why-homeschool-families-need-educational-donations" />;
}
