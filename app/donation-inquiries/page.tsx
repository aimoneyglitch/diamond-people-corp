import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonorTrustSection, SiteFooter, SiteHeader, WhereSupportGoesSection } from "../components/DpcShell";

export const metadata: Metadata = {
  title: "Donation Inquiries | The Diamond People Corp",
  description:
    "Contact The Diamond People Corp about donations, sponsorships, grants, student support, homeschool family support, educational field trips, learning supplies, and community partnerships.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/donation-inquiries/"
  }
};

export default function DonationInquiriesPage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <section className={styles.pageHero}>
          <p className={styles.eyebrow}>Donation Inquiry</p>
          <h1>Start a Donation, Sponsorship, Grant, or Partnership Conversation</h1>
          <p className={styles.lead}>
            The Diamond People Corp connects community support with education-related opportunities
            for homeschool families and K-12 students connected to Traveling Scholars Foundation.
          </p>
          <div className={styles.actions}>
            <Link
              className={styles.primaryButton}
              href="mailto:info@thediamondpeoplecorp.org?subject=Donation%20Inquiry%20-%20The%20Diamond%20People%20Corp"
            >
              Email Donation Inquiry
            </Link>
            <Link className={styles.secondaryButton} href="/blog/where-education-donations-go/">
              See Where Support Goes
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.trustIntro}>
            <p className={styles.eyebrow}>What to Include</p>
            <h2>Send the basics so the organization can respond clearly.</h2>
            <p>
              A clear inquiry helps The Diamond People Corp understand the type of support,
              partnership, or donation conversation you want to start.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.iconCircle}>1</div>
              <h3>Your Name and Organization</h3>
              <p>Include your name, business, church, foundation, or community organization if applicable.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>2</div>
              <h3>Type of Support</h3>
              <p>Mention whether you are asking about donation, sponsorship, grant, supplies, field trips, or partnership.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>3</div>
              <h3>Best Contact Method</h3>
              <p>Include your preferred email or phone contact and any details needed for a follow-up conversation.</p>
            </article>
          </div>
        </section>

        <WhereSupportGoesSection />
        <DonorTrustSection />
      </main>
      <SiteFooter />
    </div>
  );
}
