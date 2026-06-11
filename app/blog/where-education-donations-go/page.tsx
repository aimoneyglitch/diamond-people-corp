import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "Where Education Donations Go | The Diamond People Corp",
  description: "Donors want to know where their support goes. This guide explains how education donations can help students access supplies, field trips, tutoring, enrichment, and youth activities.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/where-education-donations-go/"
  }
};

export default function Page() {
  return <BlogArticle slug="where-education-donations-go" />;
}
