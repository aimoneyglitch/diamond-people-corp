import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { DonorTrustSection, SiteFooter, SiteHeader, WhereSupportGoesSection } from "../components/DpcShell";
import { PremiumImage } from "../components/PremiumImages";

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
          <h1>Help a student access the opportunity in front of them.</h1>
          <p className={styles.lead}>
            The Diamond People Corp connects donor support with education-related needs for
            families connected to Traveling Scholars Foundation.
          </p>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/donation-inquiries">
              Start a Giving Inquiry
            </Link>
            <Link className={styles.secondaryButton} href="/blog/where-education-donations-go/">
              See the Impact Areas
            </Link>
          </div>
        </section>

        {/* PREMIUM SITE IMAGE START: donate hero image */}
        <section className={styles.premiumSingleImageSection}>
          <PremiumImage imageKey="donateHomeschoolFamilies" priority />
        </section>
        {/* PREMIUM SITE IMAGE END */}

        <section className={styles.section}>
          <div className={styles.donatePath}>
            <div className={styles.donatePathIntro}>
              <p className={styles.eyebrow}>Donor Path</p>
              <h2>A cleaner way to support student access.</h2>
              <p>
                Whether the support comes from an individual donor, business, church, foundation,
                or community partner, the goal is the same: help students participate in meaningful
                learning opportunities.
              </p>
            </div>

            <div className={styles.donatePathCards}>
              <article>
                <span>01</span>
                <h3>Start the conversation</h3>
                <p>Share the type of giving, sponsorship, grant, or partnership you want to discuss.</p>
              </article>

              <article>
                <span>02</span>
                <h3>Align the support</h3>
                <p>The organization can help identify the best fit for the mission and student needs.</p>
              </article>

              <article>
                <span>03</span>
                <h3>Move with clarity</h3>
                <p>Donors and partners get a more intentional path than a generic email button.</p>
              </article>
            </div>
          </div>
        </section>

                {/* PREMIUM SITE IMAGE START: donate impact image */}
        <section className={styles.premiumVisualSection}>
          <div className={styles.premiumVisualCopy}>
            <p className={styles.eyebrow}>What Giving Becomes</p>
            <h2>Support should translate into visible student opportunity.</h2>
            <p>
              Strong donor presentation means showing the human side and the practical outcome:
              families supported, students equipped, and opportunities made possible.
            </p>
          </div>
          <PremiumImage imageKey="studentEnrichmentDonationImpact" />
        </section>
        {/* PREMIUM SITE IMAGE END */}

        <WhereSupportGoesSection />

        <section className={styles.section}>
          <div className={styles.split}>
            <div className={styles.splitText}>
              <p className={styles.eyebrow}>Digital Giving</p>
              <h2>A secure online giving option is the next step.</h2>
              <p>
                The site is being prepared for a dedicated giving page connected to a trusted
                donation platform. Bank information should stay inside the payment provider,
                not inside the website code.
              </p>
            </div>

            <div className={styles.splitPanel}>
              <h3>Current status</h3>
              <p>
                Larger gifts, sponsorships, grants, and partnership conversations can begin through
                direct inquiry while the secure donation system is finalized.
              </p>
              <Link className={styles.primaryButton} href="/donation-inquiries">
                Start a Giving Inquiry
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
