import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Homeschool Scholarships in Arizona: How Donations Help | The Diamond People Corp",
  description: "A clear guide for donors and families on how scholarship-style support can help Arizona homeschool students access learning supplies, enrichment, field trips, and educational opportunities.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/homeschool-scholarships-arizona-donations/"
  }
};

export default function Page() {
  return <BlogArticle slug="homeschool-scholarships-arizona-donations" />;
}
