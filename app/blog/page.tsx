import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonationCta, SiteFooter, SiteHeader } from "../components/DpcShell";
import { blogPosts } from "../lib/seoContent";

export const metadata: Metadata = {
  title: "Homeschool Donation and Education Support Blog | The Diamond People Corp",
  description:
    "Guides about supporting homeschool families, education donations, homeschool scholarships, Arizona ESA, student enrichment, field trips, supplies, and community partnerships.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog"
  }
};

export default function BlogPage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <section className={styles.pageHero}>
          <p className={styles.eyebrow}>Education Support Blog</p>
          <h1>Guides for Donors, Partners, and Homeschool Families</h1>
          <p className={styles.lead}>
            Helpful articles about donating to homeschool families, supporting K-12 enrichment, funding
            field trips, understanding student needs, and creating educational opportunity in Tucson and Arizona.
          </p>
        </section>

        <section className={styles.section}>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <Link className={styles.blogCard} href={`/blog/${post.slug}`} key={post.slug}>
                <div className={styles.imagePlaceholder}>{post.imageFile}</div>
                <span className={styles.keyword}>{post.keyword}</span>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <p><strong>{post.readTime}</strong></p>
              </Link>
            ))}
          </div>
        </section>

        <DonationCta />
      </main>
      <SiteFooter />
    </div>
  );
}
