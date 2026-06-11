import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./donor.module.css";
import { SiteFooter, SiteHeader } from "./components/DpcShell";

export const metadata: Metadata = {
  title: "The Diamond People Corp | Supporting Traveling Scholars in Tucson, Arizona",
  description:
    "The Diamond People Corp supports Traveling Scholars Foundation students and families through scholarships, educational field trips, homeschool enrichment, youth sports opportunities, learning supplies, and community partnerships.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/"
  }
};

export default function Home() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />

      <main className={styles.main}>
        <section className={styles.homeHeroStack}>
          <div className={styles.homeHeroPhotoFrame}>
            <Image
              src="/hero-banner.jpg"
              alt="The Diamond People Corp Tucson education banner"
              fill
              priority
              sizes="100vw"
              className={styles.homeHeroPhoto}
            />
          </div>

          <div className={styles.homeHeroMissionCard}>
            <p className={styles.eyebrow}>Tucson, Arizona Nonprofit</p>
            <h1>The Diamond People Corp</h1>
            <p className={styles.lead}>
              Supporting Traveling Scholars. Investing in Futures.
            </p>
            <p className={styles.lead}>
              The Diamond People Corp supports students and families through scholarships,
              educational field trips, homeschool enrichment, youth sports opportunities,
              learning supplies, and community partnerships connected to Traveling Scholars Foundation.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="#mission">Our Mission</Link>
              <Link className={styles.secondaryButton} href="#partners">Partner With Us</Link>
            </div>
          </div>
        </section>

        <section className={styles.quickStats} aria-label="Our focus areas">
          <div className={styles.stat}>
            <strong>Education</strong>
            <span>Empowering students with knowledge and learning opportunities.</span>
          </div>
          <div className={styles.stat}>
            <strong>Opportunity</strong>
            <span>Opening doors to new experiences and brighter futures.</span>
          </div>
          <div className={styles.stat}>
            <strong>Empowerment</strong>
            <span>Building confidence, leadership, and stronger communities.</span>
          </div>
          <div className={styles.stat}>
            <strong>Impact</strong>
            <span>Creating lasting change through support and partnership.</span>
          </div>
        </section>

        <section className={styles.section} id="mission">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Our Mission</p>
            <h2>Educational Support for Students and Families</h2>
            <p>
              Our mission is to remove financial barriers for students by supporting access to
              educational field trips, homeschool enrichment, youth sports, student activities,
              scholarships, learning supplies, and meaningful learning opportunities connected
              to Traveling Scholars Foundation.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.iconCircle}>1</div>
              <h3>Scholarships and Family Support</h3>
              <p>Helping students and families access opportunities that may otherwise be out of reach.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>2</div>
              <h3>Educational Field Trips</h3>
              <p>Supporting real-world learning through travel, field trips, cultural experiences, and community-based education.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>3</div>
              <h3>Homeschool Enrichment</h3>
              <p>Helping homeschool families access enrichment activities, supplies, programs, and student learning experiences.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>4</div>
              <h3>Youth Sports and Activities</h3>
              <p>Supporting confidence, teamwork, discipline, leadership, and student development.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>5</div>
              <h3>Learning Supplies</h3>
              <p>Helping provide materials, books, curriculum support, and educational resources.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>6</div>
              <h3>Community Partnerships</h3>
              <p>Connecting donors, sponsors, grants, and community partners with student opportunity.</p>
            </article>
          </div>
        </section>

        <section className={styles.section} id="partners">
          <div className={styles.split}>
            <div className={styles.splitText}>
              <p className={styles.eyebrow}>Grants and Partnerships</p>
              <h2>Community Partnerships for K-12 Educational Enrichment</h2>
              <p>
                The Diamond People Corp welcomes grants, sponsorships, donations, and community
                partnerships that support K-12 educational enrichment, homeschool student opportunities,
                educational travel, field trips, youth sports, and student scholarships.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/donate">Donation and Sponsorship Inquiries</Link>
                <Link className={styles.secondaryButton} href="/blog">Read Our Blog</Link>
              </div>
            </div>

            <div className={styles.splitPanel}>
              <h3>Partner with a mission built around student opportunity.</h3>
              <p>
                Businesses, churches, foundations, donors, and community organizations can help
                support students and families through educational programs, scholarships, supplies,
                enrichment, and real-world learning experiences.
              </p>
              <ul>
                <li>Support Traveling Scholars Foundation students and families.</li>
                <li>Help fund educational field trips and enrichment opportunities.</li>
                <li>Sponsor youth sports, student activities, and learning supplies.</li>
                <li>Partner with a Tucson-based education support mission.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Contact</p>
            <h2>Contact The Diamond People Corp</h2>
            <p>
              Contact us for grant opportunities, sponsorships, donations, or partnership inquiries.
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@thediamondpeoplecorp.org">info@thediamondpeoplecorp.org</a>
            </p>
            <p>
              <strong>Location:</strong> Tucson, Arizona
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
