import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonorTrustSection, SiteFooter, SiteHeader, WhereSupportGoesSection } from "../components/DpcShell";

export const metadata: Metadata = {
  title: "Donate to Homeschool Families in Tucson | DPC",
  description: "Donate to help Tucson homeschool families access field trips, learning supplies, enrichment, youth sports, tutoring, and student scholarship support.",
  keywords: [
    "donate to homeschool families",
    "Tucson education donations",
    "homeschool donations Arizona",
    "student scholarship support",
    "support Traveling Scholars"
  ],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/donate/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/donate/",
    siteName: "The Diamond People Corp",
    title: "Donate to Homeschool Families in Tucson | DPC",
    description: "Donate to help Tucson homeschool families access field trips, learning supplies, enrichment, youth sports, tutoring, and student scholarship support.",
    images: [
      {
        url: "/og-diamond-people-corp.jpg",
        width: 1200,
        height: 630,
        alt: "Donate to support Tucson homeschool families and students"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate to Homeschool Families in Tucson | DPC",
    description: "Donate to help Tucson homeschool families access field trips, learning supplies, enrichment, youth sports, tutoring, and student scholarship support.",
    images: ["/og-diamond-people-corp.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function DonatePage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />

      <main>
        <section className={styles.pageHero}>
          <p className={styles.eyebrow}>Give With Purpose</p>
          <h1>Help a student say yes to an opportunity.</h1>
          <p className={styles.lead}>
            Your support helps remove the cost barriers that can keep families from accessing
            meaningful learning experiences, student activities, and enrichment.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/donation-inquiries">
              Start a Donation Inquiry
            </Link>
            <Link className={styles.secondaryButton} href="/blog/where-education-donations-go/">
              See Where Support Goes
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.donatePath}>
            <div className={styles.donatePathIntro}>
              <p className={styles.eyebrow}>How Giving Helps</p>
              <h2>Support turns into access.</h2>
              <p>
                Families may have the commitment, structure, and heart for education while still needing
                help with the costs that sit outside the basics.
              </p>
            </div>

            <div className={styles.donatePathCards}>
              <article>
                <span>01</span>
                <h3>A family has a real need</h3>
                <p>Supplies, trips, activities, tutoring, or program costs can add up quickly.</p>
              </article>

              <article>
                <span>02</span>
                <h3>A donor helps close the gap</h3>
                <p>Support makes it easier for a student to participate instead of sit out.</p>
              </article>

              <article>
                <span>03</span>
                <h3>A student gets the experience</h3>
                <p>The result is confidence, exposure, connection, and a stronger learning path.</p>
              </article>
            </div>
          </div>
        </section>

        <WhereSupportGoesSection />

        <section className={styles.section}>
          <div className={styles.split}>
            <div className={styles.splitText}>
              <p className={styles.eyebrow}>Ways to Participate</p>
              <h2>There is more than one way to help.</h2>
              <p>
                Individuals, businesses, churches, foundations, and community partners can support
                students through giving, sponsorships, supplies, grants, or program partnerships.
              </p>
            </div>

            <div className={styles.splitPanel}>
              <h3>Current giving path</h3>
              <p>
                The organization is currently handling giving conversations directly while the secure
                online donation system is being prepared.
              </p>
              <p><strong>Email:</strong> info@thediamondpeoplecorp.org</p>
              <Link className={styles.primaryButton} href="/donation-inquiries">
                Start an Inquiry
              </Link>
            </div>
          </div>
        </section>

        <DonorTrustSection />
      </main>

      <SiteFooter />
    </div>
  );
}
