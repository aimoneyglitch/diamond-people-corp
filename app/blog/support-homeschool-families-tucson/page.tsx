import type { Metadata } from "next";
import { BlogArticle } from "../../components/BlogArticle";
import { blogPosts } from "../../lib/seoContent";

const post = blogPosts.find((item) => item.slug === "support-homeschool-families-tucson");

export const metadata: Metadata = {
  title: ${post?.title ?? "Blog"} | The Diamond People Corp,
  description: post?.description ?? "Education support article from The Diamond People Corp.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/support-homeschool-families-tucson/"
  }
};

export default function Page() {
  return <BlogArticle slug="support-homeschool-families-tucson" />;
}
