import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./donor.module.css";
import { HomepageImpactSection, SiteFooter, SiteHeader } from "./components/DpcShell";

export const metadata: Metadata = {
  title: "Tucson Education Nonprofit | The Diamond People Corp",
  description:
    "Tucson education nonprofit supporting Traveling Scholars families through student enrichment, field experiences, learning access, and community partnership.",
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
      "Tucson education nonprofit supporting Traveling Scholars families through student enrichment, field experiences, learning access, and community partnership.",
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
      "Tucson education nonprofit supporting Traveling Scholars families through student enrichment, field experiences, learning access, and community partnership.",
    images: ["/og-diamond-people-corp.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

function ExecutiveTrustStrip() {
  return (
    <section className={styles.executiveTrustStrip} aria-label="Mission trust points">
      <article>
        <span className={styles.trustMark}>◆</span>
        <strong>Student-Centered</strong>
        <p>Support is focused on educational access, confidence, and student opportunity.</p>
      </article>

      <article>
        <span className={styles.trustMark}>◇</span>
        <strong>Tucson, Arizona</strong>
        <p>Locally grounded education support connected to Traveling Scholars Foundation families.</p>
      </article>

      <article>
        <span className={styles.trustMark}>●</span>
        <strong>Clear Support Path</strong>
        <p>Built for donors, sponsors, businesses, churches, foundations, and partners.</p>
      </article>

      <article>
        <span className={styles.trustMark}>✦</span>
        <strong>Meaningful Access</strong>
        <p>Helping students participate in enrichment, resources, and real-world learning.</p>
      </article>
    </section>
  );
}

function ExecutiveSupportAreas() {
  return (
    <section className={styles.executiveSupportAreas}>
      <div className={styles.executiveSectionHeader}>
        <p className={styles.eyebrow}>Support Focus</p>
        <h2>Generosity becomes access, resources, and experience.</h2>
        <p>
          The Diamond People Corp connects community support with practical needs that help
          students and families continue building strong education paths.
        </p>
      </div>

      <div className={styles.executiveAreaGrid}>
        <article>
          <span>01</span>
          <h3>Learning Resources</h3>
          <p>Books, supplies, project materials, and tools that help students stay engaged.</p>
        </article>

        <article>
          <span>02</span>
          <h3>Field Experiences</h3>
          <p>Real-world learning connected to science, culture, history, nature, and community.</p>
        </article>

        <article>
          <span>03</span>
          <h3>Student Enrichment</h3>
          <p>Activities, tutoring, workshops, and programs that build confidence and direction.</p>
        </article>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />

      <main>
        <section className={styles.executiveHero}>
          <div className={styles.executiveHeroCopy}>
            <p className={styles.executiveKicker}>Tucson, Arizona Education Support</p>
            <h1>Opening Educational Doors for Students and Families</h1>
            <p className={styles.executiveLead}>
              The Diamond People Corp supports Traveling Scholars Foundation families by helping
              connect donor generosity with learning resources, student enrichment, field experiences,
              and meaningful educational access.
            </p>

            <div className={styles.executiveHeroActions}>
              <Link className={styles.executivePrimaryButton} href="/donate">
                Support the Mission
              </Link>
              <Link className={styles.executiveSecondaryButton} href="/student-enrichment-fund">
                View Impact Areas
              </Link>
            </div>

            <div className={styles.executiveMiniProof}>
              <span>Education</span>
              <span>Opportunity</span>
              <span>Empowerment</span>
              <span>Impact</span>
            </div>
          </div>

          <div className={styles.executiveHeroVisual}>
            <Image
              className={styles.executiveHeroImage}
              src="/hero-banner.jpg"
              alt="The Diamond People Corp Tucson desert education support banner"
              fill
              priority
              sizes="(max-width: 920px) 100vw, 50vw"
            />

            <div className={styles.executiveHeroGlass}>
              <span>Supporting Traveling Scholars</span>
              <strong>Investing in Futures</strong>
            </div>
          </div>
        </section>

        <ExecutiveTrustStrip />

        <ExecutiveSupportAreas />

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
                Serious support starts with a clear mission. The Diamond People Corp is creating a
                student-centered path for supporters who want their generosity tied to real educational access.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/donation-inquiries">Start a Support Inquiry</Link>
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
              For giving, sponsorship, or partnership questions, contact The Diamond People Corp directly.
            </p>
            <div className={styles.actions}>
              <Link className={styles.primaryButton} href="mailto:info@thediamondpeoplecorp.org">
                info@thediamondpeoplecorp.org
              </Link>
              <Link className={styles.secondaryButton} href="/donation-inquiries">
                Support Inquiries
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
