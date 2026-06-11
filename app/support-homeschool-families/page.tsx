import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonationCta, SiteFooter, SiteHeader } from "../components/DpcShell";

export const metadata: Metadata = {
  title: "Support Homeschool Families in Tucson | DPC",
  description: "Support Tucson homeschool families with donations for curriculum, field trips, tutoring, learning supplies, enrichment programs, and student activities.",
  keywords: [
    "support homeschool families Tucson",
    "homeschool help Arizona",
    "curriculum donations",
    "field trip support",
    "learning supplies for homeschool"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/support-homeschool-families/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/support-homeschool-families/",
    siteName: "The Diamond People Corp",
    title: "Support Homeschool Families in Tucson | DPC",
    description: "Support Tucson homeschool families with donations for curriculum, field trips, tutoring, learning supplies, enrichment programs, and student activities.",
    images: [
      {
        url: "/blog/support-homeschool-families-tucson.jpg",
        width: 1200,
        height: 630,
        alt: "Tucson homeschool family receiving educational support"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Homeschool Families in Tucson | DPC",
    description: "Support Tucson homeschool families with donations for curriculum, field trips, tutoring, learning supplies, enrichment programs, and student activities.",
    images: ["/blog/support-homeschool-families-tucson.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function SupportHomeschoolFamiliesPage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <section className={styles.pageHero}>
          <p className={styles.eyebrow}>Family Support</p>
          <h1>Support Homeschool Families With Real Educational Access</h1>
          <p className={styles.lead}>
            The Diamond People Corp helps connect donor support to the real needs of homeschool families:
            supplies, enrichment, field trips, tutoring, youth sports, student activities, and learning
            opportunities that build confidence and opportunity.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/donate">Help Fund Student Opportunities</Link>
            <Link className={styles.secondaryButton} href="/blog">Read Our Guides</Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Why Homeschool Families Need Support</h2>
            <p>
              Homeschooling can be flexible and powerful, but families often have to pay directly for
              curriculum, supplies, field trips, tutoring, enrichment programs, and student activities.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}><h3>Financial Barriers</h3><p>Educational opportunities can be limited when families cannot afford the added costs.</p></article>
            <article className={styles.card}><h3>Enrichment Access</h3><p>Students benefit from learning experiences outside the home, including field trips, sports, and hands-on programs.</p></article>
            <article className={styles.card}><h3>Community Connection</h3><p>Local donors and partners can help students feel supported by the community around them.</p></article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.split}>
            <div className={styles.splitText}>
              <h2>Support that goes beyond textbooks.</h2>
              <p>
                A strong education includes academic learning, real-world exposure, confidence, leadership,
                discipline, creativity, and community connection.
              </p>
            </div>
            <div className={styles.splitPanel}>
              <h3>Support may help with:</h3>
              <ul>
                <li>Homeschool enrichment and educational workshops</li>
                <li>Field trips and educational travel</li>
                <li>Learning supplies and curriculum</li>
                <li>Tutoring and academic support</li>
                <li>Youth sports and student activities</li>
                <li>Scholarship-style family assistance</li>
              </ul>
            </div>
          </div>
        </section>

        <DonationCta />
      </main>
      <SiteFooter />
    </div>
  );
}
