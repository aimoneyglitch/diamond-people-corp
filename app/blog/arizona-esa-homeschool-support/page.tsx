import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Arizona ESA Homeschool Support | DPC",
  description: "Understand Arizona ESA and why homeschool families may still need donations for enrichment, supplies, field trips, tutoring, and student support.",
  keywords: [
    "Arizona ESA homeschool support",
    "ESA homeschool Arizona",
    "homeschool support Arizona",
    "Arizona education donations",
    "ESA enrichment support"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/arizona-esa-homeschool-support/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/blog/arizona-esa-homeschool-support/",
    siteName: "The Diamond People Corp",
    title: "Arizona ESA Homeschool Support | DPC",
    description: "Understand Arizona ESA and why homeschool families may still need donations for enrichment, supplies, field trips, tutoring, and student support.",
    images: [
      {
        url: "/blog/arizona-esa-homeschool-support.jpg",
        width: 1200,
        height: 630,
        alt: "Arizona homeschool parent and child using educational materials"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arizona ESA Homeschool Support | DPC",
    description: "Understand Arizona ESA and why homeschool families may still need donations for enrichment, supplies, field trips, tutoring, and student support.",
    images: ["/blog/arizona-esa-homeschool-support.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <BlogArticle slug="arizona-esa-homeschool-support" />;
}
