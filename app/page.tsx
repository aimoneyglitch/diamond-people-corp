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

function EditorialPillars() {
  return (
    <section className={styles.editorialPillars} aria-label="Support focus areas">
      <article>
        <span>01</span>
        <h3>Learning Access</h3>
        <p>Helping families access the materials, tools, and support students need to keep moving forward.</p>
      </article>

      <article>
        <span>02</span>
        <h3>Field Experiences</h3>
        <p>Opening doors to real-world learning through culture, science, nature, history, and community.</p>
      </article>

      <article>
        <span>03</span>
        <h3>Student Enrichment</h3>
        <p>Supporting activities and programs that build confidence, direction, and participation.</p>
      </article>
    </section>
  );
}

function ImpactGallery() {
  const items = [
    {
      src: "/site-images/homeschool-family-support-tucson.jpg",
      alt: "Tucson homeschool family receiving educational support at home",
      label: "Family Support"
    },
    {
      src: "/site-images/student-field-trip-learning-tucson.jpg",
      alt: "Students participating in a field experience in Tucson Arizona",
      label: "Field Learning"
    },
    {
      src: "/site-images/youth-sports-student-enrichment.jpg",
      alt: "Student participating in youth enrichment activity with support",
      label: "Enrichment"
    }
  ];

  return (
    <section className={styles.editorialGallery}>
      <div className={styles.editorialSectionHeader}>
        <p className={styles.eyebrow}>Visible Impact</p>
        <h2>Support should feel real before anyone gives.</h2>
        <p>
          Donors need to see the human side and the practical outcome: families supported,
          students equipped, and opportunities made possible.
        </p>
      </div>

      <div className={styles.editorialGalleryGrid}>
        {items.map((item) => (
          <figure key={item.label} className={styles.editorialPhotoCard}>
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={900}
              className={styles.editorialPhoto}
              sizes="(max-width: 900px) 100vw, 33vw"
            />
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />

      <main>
        <section className={styles.editorialHero}>
          <div className={styles.editorialHeroCopy}>
            <p className={styles.editorialKicker}>Tucson Education Support</p>

            <h1>Helping students access the opportunities that shape confidence.</h1>

            <p className={styles.editorialLead}>
              The Diamond People Corp supports Traveling Scholars Foundation families by helping
              connect community generosity with learning resources, enrichment, field experiences,
              and meaningful educational access.
            </p>

            <div className={styles.editorialHeroActions}>
              <Link className={styles.editorialPrimary} href="/donate">
                Support the Mission
              </Link>
              <Link className={styles.editorialSecondary} href="/student-enrichment-fund">
                Explore Student Enrichment
              </Link>
            </div>

            <div className={styles.editorialProofLine}>
              <span>Tucson, Arizona</span>
              <span>Traveling Scholars Foundation</span>
              <span>Student Opportunity</span>
            </div>
          </div>

          <div className={styles.editorialHeroMedia}>
            <Image
              src="/site-images/tucson-student-education-opportunity.jpg"
              alt="Tucson student learning with family support and educational resources"
              fill
              priority
              className={styles.editorialHeroImage}
              sizes="(max-width: 920px) 100vw, 48vw"
            />

            <div className={styles.editorialMediaBadge}>
              <span>Supporting Students</span>
              <strong>Investing in Futures</strong>
            </div>
          </div>
        </section>

        <EditorialPillars />

        <section className={styles.editorialImpactSplit}>
          <div className={styles.editorialImpactImage}>
            <Image
              src="/site-images/education-support-impact-tucson.jpg"
              alt="Educational supplies and learning materials showing student support impact in Tucson"
              width={1600}
              height={900}
              className={styles.editorialSplitImage}
              sizes="(max-width: 920px) 100vw, 50vw"
            />
          </div>

          <div className={styles.editorialImpactCopy}>
            <p className={styles.eyebrow}>Where Support Goes</p>
            <h2>Generosity becomes learning materials, experiences, and student growth.</h2>
            <p>
              Strong giving is not vague. It helps students participate, helps families carry
              practical education costs, and connects support to real needs.
            </p>

            <div className={styles.editorialCheckList}>
              <div>
                <strong>Learning Resources</strong>
                <span>Books, supplies, project materials, and academic tools.</span>
              </div>
              <div>
                <strong>Field Experiences</strong>
                <span>Educational trips and real-world learning opportunities.</span>
              </div>
              <div>
                <strong>Student Enrichment</strong>
                <span>Activities, tutoring, athletics, and confidence-building programs.</span>
              </div>
            </div>
          </div>
        </section>

        <ImpactGallery />

        <section className={styles.editorialDonorPanel} id="partners">
          <div>
            <p className={styles.eyebrow}>For Donors and Partners</p>
            <h2>Built for supporters who want their giving tied to real educational impact.</h2>
            <p>
              The Diamond People Corp welcomes conversations with donors, sponsors, businesses,
              churches, foundations, and community partners who want to support student opportunity
              with clarity and purpose.
            </p>
          </div>

          <div className={styles.editorialDonorList}>
            <article>
              <strong>Clear mission</strong>
              <span>Education support connected to students and families.</span>
            </article>
            <article>
              <strong>Local relevance</strong>
              <span>Focused on Tucson, Arizona and Traveling Scholars Foundation families.</span>
            </article>
            <article>
              <strong>Practical impact</strong>
              <span>Support connected to resources, enrichment, field experiences, and access.</span>
            </article>
          </div>
        </section>

        <section className={styles.editorialFinalCta} id="contact">
          <div>
            <p className={styles.eyebrow}>Begin the Conversation</p>
            <h2>Support educational opportunity in Tucson.</h2>
            <p>
              For giving, sponsorship, or partnership questions, contact The Diamond People Corp directly.
            </p>
          </div>

          <div className={styles.editorialFinalActions}>
            <Link className={styles.editorialPrimary} href="/donation-inquiries">
              Start a Support Inquiry
            </Link>
            <Link className={styles.editorialSecondaryLight} href="mailto:info@thediamondpeoplecorp.org">
              Email the Organization
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
