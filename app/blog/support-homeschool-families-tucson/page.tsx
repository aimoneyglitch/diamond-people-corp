import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Support Homeschool Families Tucson | DPC",
  description: "Learn how to support Tucson homeschool families with donations for supplies, field trips, tutoring, enrichment programs, and student opportunity.",
  keywords: [
    "support homeschool families Tucson",
    "Tucson homeschool donations",
    "homeschool enrichment Tucson",
    "education support Tucson",
    "donate to homeschool families"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/support-homeschool-families-tucson/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/blog/support-homeschool-families-tucson/",
    siteName: "The Diamond People Corp",
    title: "Support Homeschool Families Tucson | DPC",
    description: "Learn how to support Tucson homeschool families with donations for supplies, field trips, tutoring, enrichment programs, and student opportunity.",
    images: [
      {
        url: "/blog/support-homeschool-families-tucson.jpg",
        width: 1200,
        height: 630,
        alt: "Tucson homeschool family receiving educational support"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Homeschool Families Tucson | DPC",
    description: "Learn how to support Tucson homeschool families with donations for supplies, field trips, tutoring, enrichment programs, and student opportunity.",
    images: ["/blog/support-homeschool-families-tucson.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <BlogArticle slug="support-homeschool-families-tucson" />;
}
