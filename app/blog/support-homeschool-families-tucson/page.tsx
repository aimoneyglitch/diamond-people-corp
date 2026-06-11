import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";

export const metadata: Metadata = {
  title: "How to Support Homeschool Families in Tucson | The Diamond People Corp",
  description: "A donor-focused guide explaining how community support, sponsorships, and education donations can help Tucson homeschool families access enrichment, field trips, supplies, and student opportunities.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/support-homeschool-families-tucson/"
  }
};

export default function Page() {
  return <BlogArticle slug="support-homeschool-families-tucson" />;
}
