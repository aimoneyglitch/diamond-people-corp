import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonorTrustSection, DonationCta, SiteFooter, SiteHeader, WhereSupportGoesSection } from "../components/DpcShell";

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
          <p className={styles.eyebrow}>Donation and Sponsorship Inquiries</p>
          <h1>Help Students Access the Educational Opportunities They Deserve</h1>
          <p className={styles.lead}>
            The Diamond People Corp receives donation, sponsorship, grant, and partnership inquiries
            to help homeschool families and K-12 students access enrichment, field trips, learning
            supplies, youth sports, student activities, and scholarship-style support.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="mailto:info@thediamondpeoplecorp.org?subject=Donation%20Inquiry%20for%20The%20Diamond%20People%20Corp">
              Email a Donation Inquiry
            </Link>
            <Link className={styles.secondaryButton} href="/support-homeschool-families">
              See How Families Are Helped
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.trustIntro}>
            <p className={styles.eyebrow}>Why Give</p>
            <h2>Your support can help a student say yes to an opportunity.</h2>
            <p>
              Many families are committed to their child&apos;s education but still face real costs:
              curriculum, supplies, tutoring, field trips, enrichment programs, sports, travel,
              and student activities. Community support can help close that gap.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.iconCircle}>1</div>
              <h3>Support the Need</h3>
              <p>Help reduce the financial pressure that can keep students from participating.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>2</div>
              <h3>Create Access</h3>
              <p>Help students access supplies, enrichment, trips, tutoring, sports, and learning experiences.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>3</div>
              <h3>Strengthen Families</h3>
              <p>Support families who are working to build strong, flexible, meaningful education paths.</p>
            </article>
          </div>
        </section>

        <WhereSupportGoesSection />

        <section className={styles.section}>
          <div className={styles.split}>
            <div className={styles.splitText}>
              <p className={styles.eyebrow}>Ways to Support</p>
              <h2>Individuals, businesses, churches, foundations, and community partners can help.</h2>
              <p>
                Support may come through donations, sponsorships, grants, program funding, school supplies,
                learning materials, field trip support, student activity sponsorships, or community partnerships.
              </p>
            </div>

            <div className={styles.splitPanel}>
              <h3>Contact before sending support.</h3>
              <p>
                The Diamond People Corp currently routes donation, sponsorship, grant, and partnership
                conversations through direct contact so questions can be answered clearly.
              </p>
              <p><strong>Email:</strong> info@thediamondpeoplecorp.org</p>
              <ul>
                <li>Donation inquiries</li>
                <li>Business sponsorships</li>
                <li>Grant conversations</li>
                <li>Community partnerships</li>
                <li>Student support opportunities</li>
              </ul>
            </div>
          </div>
        </section>

        <DonorTrustSection />
        <DonationCta />
      </main>

      <SiteFooter />
    </div>
  );
}
