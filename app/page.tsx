import type { Metadata } from "next";
import Link from "next/link";
import styles from "./donor.module.css";
import { DonationCta, SiteFooter, SiteHeader } from "./components/DpcShell";
import { featuredPrograms } from "./lib/seoContent";

export const metadata: Metadata = {
  title: "Donate to Support Homeschool Families in Tucson | The Diamond People Corp",
  description:
    "The Diamond People Corp receives donations, grants, sponsorships, and partnerships to support homeschool families, K-12 students, field trips, enrichment, learning supplies, youth sports, and scholarships in Tucson and Arizona.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/"
  }
};

export default function Home() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>Tucson, Arizona Nonprofit</p>
            <h1>Donate to Support Homeschool Families in Tucson and Arizona</h1>
            <p className={styles.lead}>
              The Diamond People Corp helps remove financial barriers for homeschool families and K-12
              students by supporting scholarships, educational field trips, homeschool enrichment, youth
              sports opportunities, learning supplies, and community-based educational experiences
              connected to Traveling Scholars Foundation.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/donate">Donate / Partner With Us</Link>
              <Link className={styles.secondaryButton} href="/support-homeschool-families">How We Help Families</Link>
            </div>
          </div>

          <div className={styles.heroPanel} aria-label="Students and families supported through education donations">
            <div className={styles.panelCard}>
              <strong>Support a student. Strengthen a family. Build the future.</strong>
              <p>
                Donations help students access learning experiences that many families could not afford alone.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.quickStats} aria-label="Donation impact areas">
          <div className={styles.stat}><strong>01</strong><span>Homeschool enrichment and learning opportunities</span></div>
          <div className={styles.stat}><strong>02</strong><span>Field trips, travel, youth sports, and student activities</span></div>
          <div className={styles.stat}><strong>03</strong><span>Supplies, curriculum, tutoring, and academic support</span></div>
          <div className={styles.stat}><strong>04</strong><span>Grants, sponsorships, partnerships, and scholarships</span></div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Where Donations Go</p>
            <h2>Helping Students Access Education, Enrichment, and Opportunity</h2>
            <p>
              Every student deserves access to meaningful learning experiences, not just the resources
              their family can personally afford. The Diamond People Corp receives community support
              to help create more opportunity for families and students.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {featuredPrograms.map((program, index) => (
              <article className={styles.card} key={program.title}>
                <div className={styles.iconCircle}>{index + 1}</div>
                <h3>{program.title}</h3>
                <p>{program.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.split}>
            <div className={styles.splitText}>
              <p className={styles.eyebrow}>Why Support Is Needed</p>
              <h2>Homeschool families still face real education costs.</h2>
              <p>
                Homeschooling can give families flexibility, but it can also create financial pressure.
                Curriculum, supplies, tutoring, field trips, enrichment programs, sports, and student
                activities can add up quickly.
              </p>
              <p>
                For many families, the difference between a student participating or sitting out is
                whether community support is available.
              </p>
            </div>

            <div className={styles.splitPanel}>
              <h3>Donors and partners can make a direct impact.</h3>
              <p>
                The Diamond People Corp welcomes grants, sponsorships, donations, and community partnerships
                from individuals, businesses, churches, foundations, and local organizations that want to
                support students and families.
              </p>
              <ul>
                <li>Fund field trips and educational travel.</li>
                <li>Sponsor student opportunities and activities.</li>
                <li>Help provide supplies, materials, and curriculum.</li>
                <li>Support scholarship-style assistance for families.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section} id="partners">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Grants and Partnerships</p>
            <h2>Community Partnerships for K-12 Educational Enrichment</h2>
            <p>
              The Diamond People Corp welcomes grants, sponsorships, donations, and community partnerships
              that support K-12 educational enrichment, homeschool student opportunities, educational
              travel, field trips, youth sports, and student scholarships.
            </p>
          </div>
          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/donate">Become a Donor or Sponsor</Link>
            <Link className={styles.secondaryButton} href="/blog">Read the Education Support Blog</Link>
          </div>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Contact</p>
            <h2>Contact The Diamond People Corp</h2>
            <p>
              Contact us for grant opportunities, sponsorships, donations, community partnerships, or
              student support inquiries.
            </p>
            <p><strong>Email:</strong> <a href="mailto:info@thediamondpeoplecorp.org">info@thediamondpeoplecorp.org</a></p>
            <p><strong>Location:</strong> Tucson, Arizona</p>
          </div>
        </section>

        <DonationCta />
      </main>

      <SiteFooter />
    </div>
  );
}
