import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonationCta, SiteFooter, SiteHeader } from "../components/DpcShell";

export const metadata: Metadata = {
  title: "Donate to Homeschool Families in Tucson | The Diamond People Corp",
  description:
    "Donate, sponsor, or partner with The Diamond People Corp to help homeschool families and K-12 students access enrichment, field trips, supplies, youth sports, and scholarships in Tucson and Arizona.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/donate"
  }
};

export default function DonatePage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <section className={styles.pageHero}>
          <p className={styles.eyebrow}>Donation Inquiries</p>
          <h1>Donate to Help Homeschool Families Access Educational Opportunities</h1>
          <p className={styles.lead}>
            Your donation can help reduce the cost of learning supplies, field trips, enrichment,
            youth sports, tutoring, student activities, and scholarship-style assistance for families
            connected to Traveling Scholars Foundation.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="mailto:info@thediamondpeoplecorp.org?subject=Donation%20Inquiry%20for%20The%20Diamond%20People%20Corp">Email a Donation Inquiry</Link>
            <Link className={styles.secondaryButton} href="/support-homeschool-families">See How Families Are Helped</Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>What Your Support Can Help Fund</h2>
            <p>
              Donations and sponsorships help create access to opportunities that students may not be able
              to afford alone.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <article className={styles.card}><h3>Curriculum and Supplies</h3><p>Books, learning materials, technology, project supplies, and everyday educational resources.</p></article>
            <article className={styles.card}><h3>Field Trips and Travel</h3><p>Transportation, admission costs, student travel, and real-world learning experiences.</p></article>
            <article className={styles.card}><h3>Enrichment and Activities</h3><p>Workshops, youth sports, student programs, leadership opportunities, and hands-on learning.</p></article>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.split}>
            <div className={styles.splitText}>
              <h2>Partner with a mission that supports students directly.</h2>
              <p>
                The Diamond People Corp is focused on turning community generosity into educational access
                for homeschool families and K-12 students in Tucson and Arizona.
              </p>
            </div>
            <div className={styles.splitPanel}>
              <h3>For donors, businesses, churches, and foundations</h3>
              <p>
                Contact us to discuss sponsorships, grants, recurring support, program funding, and
                community partnerships.
              </p>
              <p><strong>Email:</strong> info@thediamondpeoplecorp.org</p>
            </div>
          </div>
        </section>

        <DonationCta />
      </main>
      <SiteFooter />
    </div>
  );
}
