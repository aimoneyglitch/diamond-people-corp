import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Where Education Donations Go | DPC",
  description: "See where education donations go: books, curriculum, field trips, tutoring, enrichment, youth sports, learning supplies, and student activities.",
  keywords: [
    "where education donations go",
    "education donation impact",
    "learning supplies donations",
    "field trip donations",
    "student activity donations"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/where-education-donations-go/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/blog/where-education-donations-go/",
    siteName: "The Diamond People Corp",
    title: "Where Education Donations Go | DPC",
    description: "See where education donations go: books, curriculum, field trips, tutoring, enrichment, youth sports, learning supplies, and student activities.",
    images: [
      {
        url: "/blog/where-education-donations-go.jpg",
        width: 1200,
        height: 630,
        alt: "Educational supplies and student support funded by donations"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Education Donations Go | DPC",
    description: "See where education donations go: books, curriculum, field trips, tutoring, enrichment, youth sports, learning supplies, and student activities.",
    images: ["/blog/where-education-donations-go.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <BlogArticle slug="where-education-donations-go" />;
}
