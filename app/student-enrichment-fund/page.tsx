import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonationCta, SiteFooter, SiteHeader } from "../components/DpcShell";
import { PremiumImage } from "../components/PremiumImages";

export const metadata: Metadata = {
  title: "Student Enrichment Fund Tucson | DPC",
  description: "Help fund student enrichment in Tucson: educational field trips, learning supplies, youth sports, tutoring, homeschool programs, and scholarship support.",
  keywords: [
    "student enrichment fund Tucson",
    "educational field trips",
    "learning supplies donations",
    "youth sports support",
    "student activity funding"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/student-enrichment-fund/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/student-enrichment-fund/",
    siteName: "The Diamond People Corp",
    title: "Student Enrichment Fund Tucson | DPC",
    description: "Help fund student enrichment in Tucson: educational field trips, learning supplies, youth sports, tutoring, homeschool programs, and scholarship support.",
    images: [
      {
        url: "/blog/where-education-donations-go.jpg",
        width: 1200,
        height: 630,
        alt: "Educational supplies and student enrichment funded by donations"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Enrichment Fund Tucson | DPC",
    description: "Help fund student enrichment in Tucson: educational field trips, learning supplies, youth sports, tutoring, homeschool programs, and scholarship support.",
    images: ["/blog/where-education-donations-go.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function StudentEnrichmentFundPage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <section className={styles.pageHero}>
          <p className={styles.eyebrow}>Student Enrichment Fund</p>
          <h1>Fund Field Trips, Supplies, Youth Sports, and Student Enrichment</h1>
          <p className={styles.lead}>
            The Student Enrichment Fund exists to help students access the opportunities that make education
            more complete: real-world learning, enrichment activities, supplies, sports, travel, tutoring,
            and student support.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/donate">Support the Fund</Link>
            <Link className={styles.secondaryButton} href="/support-homeschool-families">How Families Benefit</Link>
          </div>
        </section>

        {/* PREMIUM SITE IMAGE START: enrichment hero image */}
        <section className={styles.premiumSingleImageSection}>
          <PremiumImage imageKey="studentFieldTripLearning" priority />
        </section>
        {/* PREMIUM SITE IMAGE END */}

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Education is more than a worksheet.</h2>
            <p>
              Students grow through experiences that build confidence, curiosity, responsibility, and
              leadership. Donations help make those experiences more accessible.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}><h3>Field Trips</h3><p>Help students connect learning to museums, nature, history, science, business, and community experiences.</p></article>
            <article className={styles.card}><h3>Student Activities</h3><p>Support activities that build teamwork, discipline, leadership, and confidence.</p></article>
            <article className={styles.card}><h3>Learning Materials</h3><p>Help families access books, project supplies, technology, and curriculum support.</p></article>
          </div>
        </section>

                {/* PREMIUM SITE IMAGE START: enrichment gallery images */}
        <section className={styles.premiumVisualSection}>
          <div className={styles.premiumVisualCopy}>
            <p className={styles.eyebrow}>Student Enrichment</p>
            <h2>Growth happens through experience, activity, and the right resources.</h2>
            <p>
              Student enrichment includes real-world learning,
              confidence-building activities, and the materials students need to participate fully.
            </p>
          </div>

          <div className={styles.premiumImageGridTwo}>
            <PremiumImage imageKey="youthSportsEnrichment" />
            <PremiumImage imageKey="learningSuppliesEnrichment" />
          </div>
        </section>
        {/* PREMIUM SITE IMAGE END */}

        <DonationCta />
      </main>
      <SiteFooter />
    </div>
  );
}
