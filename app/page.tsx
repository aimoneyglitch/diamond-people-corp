import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./donor.module.css";
import { SiteFooter, SiteHeader } from "./components/DpcShell";

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

const supportCards = [
  {
    title: "Learning Resources",
    text: "Books, supplies, project materials, and tools that help students stay engaged.",
    image: "/site-images/learning-supplies-student-enrichment.jpg",
    alt: "Learning supplies and student project materials used for academic enrichment"
  },
  {
    title: "Field Experiences",
    text: "Real-world learning that opens doors beyond the classroom.",
    image: "/site-images/student-field-trip-learning-tucson.jpg",
    alt: "Students participating in a real-world educational field experience in Arizona"
  },
  {
    title: "Student Enrichment",
    text: "Activities and programs that build confidence, direction, and participation.",
    image: "/site-images/tucson-student-education-opportunity.jpg",
    alt: "Tucson student learning with family support and educational resources"
  },
  {
    title: "Activity Participation",
    text: "Supporting sports, clubs, and experiences that help students belong and thrive.",
    image: "/site-images/youth-sports-student-enrichment.jpg",
    alt: "Student participating in youth enrichment activity with confidence and support"
  }
];

export default function Home() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />

      <main>
        <section className={styles.finalHomeHero}>
          <div className={styles.finalHomeHeroInner}>
            <div className={styles.finalHomeHeroCopy}>
              <p className={styles.finalHomeKicker}>Tucson, Arizona Education Support</p>
              <h1>Helping students access opportunities that shape confidence.</h1>
              <p>
                The Diamond People Corp supports Traveling Scholars Foundation families by helping
                connect community generosity with learning resources, student enrichment, field
                experiences, and meaningful educational access.
              </p>

              <div className={styles.finalHomeActions}>
                <Link className={styles.finalHomePrimary} href="/donate">
                  Support the Mission
                </Link>
                <Link className={styles.finalHomeSecondary} href="/student-enrichment-fund">
                  See Our Impact
                </Link>
              </div>

              <div className={styles.finalHomeProof}>
                <span>Education</span>
                <span>Opportunity</span>
                <span>Empowerment</span>
                <span>Impact</span>
              </div>
            </div>

            <div className={styles.finalHomeHeroMedia}>
              <Image
                src="/site-images/tucson-student-education-opportunity.jpg"
                alt="Tucson student learning with family support and educational resources"
                fill
                priority
                className={styles.finalHomeHeroImage}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
              <div className={styles.finalHomeImageBadge}>
                <span>Supporting Students</span>
                <strong>Investing in Futures</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.finalHomeTrustBand} aria-label="Mission trust points">
          <article>
            <div className={styles.finalHomeIcon}>◆</div>
            <h2>Students First</h2>
            <p>Every decision centers on student growth, access, and confidence.</p>
          </article>

          <article>
            <div className={styles.finalHomeIcon}>◇</div>
            <h2>Tucson, Arizona</h2>
            <p>Locally grounded. Community-connected. Mission-driven.</p>
          </article>

          <article>
            <div className={styles.finalHomeIcon}>✦</div>
            <h2>Community Partners</h2>
            <p>Built for donors, churches, businesses, foundations, and sponsors.</p>
          </article>

          <article>
            <div className={styles.finalHomeIcon}>●</div>
            <h2>Clear Impact</h2>
            <p>Support connected to resources, experiences, and student opportunity.</p>
          </article>
        </section>

        <section className={styles.finalHomeSupport}>
          <div className={styles.finalHomeSectionHeader}>
            <p className={styles.finalHomeKickerDark}>How Support Helps</p>
            <h2>Resources. Experiences. Confidence.</h2>
            <p>
              A serious donor experience should make the mission easy to understand and the impact
              easy to believe.
            </p>
          </div>

          <div className={styles.finalHomeSupportGrid}>
            {supportCards.map((card) => (
              <article className={styles.finalHomeSupportCard} key={card.title}>
                <div className={styles.finalHomeCardImageWrap}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={900}
                    height={600}
                    className={styles.finalHomeCardImage}
                    sizes="(max-width: 900px) 100vw, 25vw"
                  />
                </div>
                <div className={styles.finalHomeCardBody}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.finalHomeMission}>
          <div className={styles.finalHomeMissionImageWrap}>
            <Image
              src="/site-images/homeschool-family-support-tucson.jpg"
              alt="Tucson homeschool family working together with learning materials at home"
              width={1200}
              height={900}
              className={styles.finalHomeMissionImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className={styles.finalHomeMissionCopy}>
            <p className={styles.finalHomeKickerDark}>Why Donors Choose Us</p>
            <h2>We turn generosity into opportunity that lasts.</h2>

            <div className={styles.finalHomeCheckList}>
              <div>
                <strong>Clear mission</strong>
                <span>Focused on student access and enrichment.</span>
              </div>
              <div>
                <strong>Local impact</strong>
                <span>Connected to Tucson families and Traveling Scholars Foundation.</span>
              </div>
              <div>
                <strong>Practical support</strong>
                <span>Resources, field experiences, enrichment, and participation support.</span>
              </div>
              <div>
                <strong>Dignity for families</strong>
                <span>Opportunity for students without reducing families to hardship stories.</span>
              </div>
            </div>
          </div>

          <div className={styles.finalHomeMissionPanel}>
            <div className={styles.finalHomePanelIcon}>◇</div>
            <h2>Our Mission</h2>
            <p>
              To help students and families connected to Traveling Scholars Foundation access the
              educational resources, experiences, and support that shape stronger futures.
            </p>
          </div>
        </section>

        <section className={styles.finalHomePartnerSection} id="partners">
          <div>
            <p className={styles.finalHomeKickerDark}>For Donors and Partners</p>
            <h2>Built for supporters who want giving tied to real educational impact.</h2>
            <p>
              The Diamond People Corp welcomes conversations with donors, sponsors, churches,
              businesses, foundations, and community partners who want to support student opportunity
              with clarity and purpose.
            </p>
          </div>

          <div className={styles.finalHomePartnerCards}>
            <article>
              <strong>Donors</strong>
              <span>Individual giving connected to student needs.</span>
            </article>
            <article>
              <strong>Foundations</strong>
              <span>Mission-aligned support for education access.</span>
            </article>
            <article>
              <strong>Businesses</strong>
              <span>Community partnership with visible local impact.</span>
            </article>
          </div>
        </section>

        <section className={styles.finalHomeCta} id="contact">
          <div>
            <p className={styles.finalHomeKickerGold}>Begin the Conversation</p>
            <h2>Your support creates real opportunity.</h2>
            <p>
              For giving, sponsorship, or partnership questions, contact The Diamond People Corp directly.
            </p>
          </div>

          <div className={styles.finalHomeActions}>
            <Link className={styles.finalHomePrimary} href="/donation-inquiries">
              Start a Support Inquiry
            </Link>
            <Link className={styles.finalHomeSecondary} href="mailto:info@thediamondpeoplecorp.org">
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
