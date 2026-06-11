import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Why Homeschool Families Need Educational Donations | The Diamond People Corp",
  description: "Homeschool families often carry the cost of curriculum, field trips, enrichment, tutoring, supplies, and student activities. Learn why donor support matters.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/why-homeschool-families-need-educational-donations/"
  }
};

export default function Page() {
  return <BlogArticle slug="why-homeschool-families-need-educational-donations" />;
}
