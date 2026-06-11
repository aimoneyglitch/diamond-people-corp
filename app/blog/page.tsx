import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonationCta, SiteFooter, SiteHeader } from "../components/DpcShell";
import { blogPosts } from "../lib/seoContent";

export const metadata: Metadata = {
  title: "Education Donation Blog Tucson | DPC",
  description: "Read education donation guides for Tucson homeschool families, Arizona ESA support, scholarships, field trips, learning supplies, and student enrichment.",
  keywords: [
    "education donation blog",
    "homeschool donations Tucson",
    "Arizona ESA support",
    "homeschool scholarships Arizona",
    "where education donations go"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/blog/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/blog/",
    siteName: "The Diamond People Corp",
    title: "Education Donation Blog Tucson | DPC",
    description: "Read education donation guides for Tucson homeschool families, Arizona ESA support, scholarships, field trips, learning supplies, and student enrichment.",
    images: [
      {
        url: "/og-diamond-people-corp.jpg",
        width: 1200,
        height: 630,
        alt: "The Diamond People Corp education support blog"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Donation Blog Tucson | DPC",
    description: "Read education donation guides for Tucson homeschool families, Arizona ESA support, scholarships, field trips, learning supplies, and student enrichment.",
    images: ["/og-diamond-people-corp.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

function publicImagePath(imageFile: string) {
  return imageFile.startsWith("public/") ? imageFile.replace("public", "") : imageFile;
}

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
              <Link className={styles.blogCard} href={`/blog/${post.slug}/`} key={post.slug}>
                <div className={styles.blogImageWrap}>
                  <Image
                    src={publicImagePath(post.imageFile)}
                    alt={post.imageAlt}
                    width={900}
                    height={506}
                    className={styles.blogImage}
                    sizes="(max-width: 920px) 100vw, 33vw"
                  />
                </div>
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
