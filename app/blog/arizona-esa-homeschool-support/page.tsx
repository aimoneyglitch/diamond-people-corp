import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Arizona ESA and Homeschool Support | The Diamond People Corp",
  description: "A parent-friendly and donor-friendly overview of Arizona ESA, homeschool support, and why community donations still matter for enrichment, field trips, supplies, and student opportunities.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/arizona-esa-homeschool-support/"
  }
};

export default function Page() {
  return <BlogArticle slug="arizona-esa-homeschool-support" />;
}
