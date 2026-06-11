import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./donor.module.css";
import { HomepageImpactSection, SiteFooter, SiteHeader } from "./components/DpcShell";

export const metadata: Metadata = {
  title: "Tucson Education Nonprofit | The Diamond People Corp",
  description:
    "Tucson nonprofit supporting Traveling Scholars families with homeschool enrichment, field trips, learning supplies, youth sports, and student opportunity.",
  keywords: [
    "Tucson education nonprofit",
    "Traveling Scholars Foundation",
    "homeschool support Tucson",
    "student enrichment Tucson",
    "education donations Arizona"
  ],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/",
    siteName: "The Diamond People Corp",
    title: "Tucson Education Nonprofit | The Diamond People Corp",
    description:
      "Tucson nonprofit supporting Traveling Scholars families with homeschool enrichment, field trips, learning supplies, youth sports, and student opportunity.",
    images: [
      {
        url: "/og-diamond-people-corp.jpg",
        width: 1200,
        height: 630,
        alt: "The Diamond People Corp logo supporting Traveling Scholars Foundation"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tucson Education Nonprofit | The Diamond People Corp",
    description:
      "Tucson nonprofit supporting Traveling Scholars families with homeschool enrichment, field trips, learning supplies, youth sports, and student opportunity.",
    images: ["/og-diamond-people-corp.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

function HomeImpactStrip() {
  return (
    <section className={styles.homeImpactStrip} aria-label="Impact focus areas">
      <div className={styles.homeImpactItem}>
        <span>01</span>
        <strong>Educational Access</strong>
        <p>Helping families say yes to meaningful learning opportunities.</p>
      </div>

      <div className={styles.homeImpactItem}>
        <span>02</span>
        <strong>Student Enrichment</strong>
        <p>Supporting experiences that build confidence beyond the basics.</p>
      </div>

      <div className={styles.homeImpactItem}>
        <span>03</span>
        <strong>Community Partnership</strong>
        <p>Connecting donors and partners with real student opportunity.</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />

      <main>
        <section className={styles.homeHeroStack}>
          <div className={`${styles.homeHeroPhotoFrame} ${styles.heroBannerOnly}`}>
            <Image
              className={styles.homeHeroPhoto}
              src="/hero-banner.jpg"
              alt="The Diamond People Corp Tucson desert banner supporting Traveling Scholars"
              fill
              priority
              sizes="100vw"
            />
          </div>

          <div className={`${styles.homeHeroMissionCard} ${styles.homeHeroIntroCard}`}>
            <p className={styles.eyebrow}>Tucson, Arizona Education Support</p>
            <h1>Helping Students Access More Than the Basics</h1>
            <p className={styles.lead}>
              The Diamond People Corp supports Traveling Scholars Foundation families by helping remove
              barriers to meaningful learning experiences, enrichment opportunities, field experiences,
              supplies, and student growth.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="/donate">Support Students</Link>
              <Link className={styles.secondaryButton} href="/blog/where-education-donations-go/">See Where Support Goes</Link>
            </div>
          </div>
        </section>

        <HomeImpactStrip />

        <HomepageImpactSection />

        <section className={styles.section} id="mission">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Mission</p>
            <h2>Education support with purpose, dignity, and community behind it.</h2>
            <p>
              The work is centered on students and families connected to Traveling Scholars Foundation:
              helping create access to experiences, resources, and support that can shape a stronger path forward.
            </p>
          </div>

          <div className={styles.cardGrid}>
            <article className={styles.card}>
              <div className={styles.iconCircle}>✦</div>
              <h3>Support Families</h3>
              <p>Help committed families continue building strong, flexible, meaningful education paths.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>◆</div>
              <h3>Open Opportunity</h3>
              <p>Support access to experiences and resources that students may otherwise miss.</p>
            </article>

            <article className={styles.card}>
              <div className={styles.iconCircle}>●</div>
              <h3>Build Confidence</h3>
              <p>Help students grow through learning moments that create exposure, direction, and momentum.</p>
            </article>
          </div>
        </section>

        <section className={styles.section} id="partners">
          <div className={styles.split}>
            <div className={styles.splitText}>
              <p className={styles.eyebrow}>Partners</p>
              <h2>Built for donors, sponsors, churches, businesses, foundations, and community partners.</h2>
              <p>
                High-trust giving starts with clarity. The Diamond People Corp is preparing a clean
                donor path for supporters who want to help students access more than the basics.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/donation-inquiries">Start a Giving Inquiry</Link>
                <Link className={styles.secondaryButton} href="/student-enrichment-fund">View Programs</Link>
              </div>
            </div>

            <div className={styles.splitPanel}>
              <h3>Support focus</h3>
              <ul>
                <li>Student enrichment and learning access</li>
                <li>Family education support</li>
                <li>Field experiences and activity participation</li>
                <li>Community partnerships with measurable purpose</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.section} id="contact">
          <div className={styles.ctaBand}>
            <p className={styles.eyebrow}>Contact</p>
            <h2>Begin a serious support conversation.</h2>
            <p>
              For giving, sponsorship, grant, or partnership questions, contact The Diamond People Corp directly.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="mailto:info@thediamondpeoplecorp.org">
                info@thediamondpeoplecorp.org
              </Link>
              <Link className={styles.secondaryButton} href="/donation-inquiries">
                Donation Inquiries
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
