import Image from "next/image";
import Link from "next/link";
import styles from "../donor.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link className={styles.brand} href="/">
          <Image
            className={styles.logo}
            src="/diamond-logo.jpg"
            alt="The Diamond People Corp logo"
            width={108}
            height={108}
            priority
          />
          <span className={styles.brandText}>
            <span className={styles.brandName}>The Diamond People Corp</span>
            <span className={styles.brandTagline}>Supporting Traveling Scholars. Investing in Futures.</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/">Home</Link>
          <Link href="/donate">Donate</Link>
          <Link href="/support-homeschool-families">Families</Link>
          <Link href="/student-enrichment-fund">Programs</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/#partners">Partners</Link>
          <Link href="/#contact">Contact</Link>
          <Link className={styles.navDonate} href="/donate">Support Students</Link>
        </nav>
      </div>
    </header>
  );
}

export function WhereSupportGoesSection() {
  const items = [
    {
      title: "Educational Field Trips",
      text: "Help students experience museums, cultural learning, local history, science, nature, travel, and real-world education."
    },
    {
      title: "Learning Supplies",
      text: "Support books, curriculum materials, school supplies, project materials, technology needs, and hands-on learning tools."
    },
    {
      title: "Homeschool Enrichment",
      text: "Help families access workshops, enrichment activities, student programs, tutoring support, and community-based learning."
    },
    {
      title: "Youth Sports and Activities",
      text: "Support confidence, discipline, teamwork, leadership, fitness, and student development beyond the classroom."
    },
    {
      title: "Scholarship-Style Assistance",
      text: "Help reduce the financial barriers that keep students from participating in meaningful educational opportunities."
    },
    {
      title: "Community Partnerships",
      text: "Connect donors, businesses, churches, foundations, and local partners with student opportunity in Tucson and Arizona."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.trustIntro}>
        <p className={styles.eyebrow}>Where Support Goes</p>
        <h2>Donations help turn financial pressure into educational access.</h2>
        <p>
          The Diamond People Corp receives donation, sponsorship, grant, and partnership inquiries
          to help support homeschool families and K-12 students connected to Traveling Scholars Foundation.
        </p>
      </div>

      <div className={styles.supportGrid}>
        {items.map((item, index) => (
          <article className={styles.supportCard} key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function DonorTrustSection() {
  return (
    <section className={styles.trustBand}>
      <div className={styles.trustBandText}>
        <p className={styles.eyebrow}>Donor Confidence</p>
        <h2>Built for families, students, donors, and community partners.</h2>
        <p>
          People should know what they are supporting before they give. The Diamond People Corp is focused on
          clear communication, local educational impact, and support that helps families access real opportunities.
        </p>
      </div>

      <div className={styles.trustChecklist}>
        <div>
          <strong>Clear Mission</strong>
          <p>Support students and families through education, enrichment, scholarships, field trips, supplies, and activities.</p>
        </div>
        <div>
          <strong>Local Focus</strong>
          <p>Serving a Tucson, Arizona education-support mission connected to Traveling Scholars Foundation.</p>
        </div>
        <div>
          <strong>Direct Contact</strong>
          <p>Donation, sponsorship, grant, and partnership questions can be sent directly to the organization.</p>
        </div>
        <div>
          <strong>Responsible Language</strong>
          <p>No tax-deduction promises are made online without proper confirmation and documentation.</p>
        </div>
      </div>
    </section>
  );
}

export function DonationCta() {
  return (
    <section className={styles.ctaBand}>
      <p className={styles.eyebrow}>Donate • Sponsor • Partner</p>
      <h2>Help homeschool families access the opportunities students deserve.</h2>
      <p>
        Your support can help fund learning supplies, field trips, enrichment programs, youth sports,
        tutoring, student activities, and scholarship-style assistance for families connected to
        Traveling Scholars Foundation.
      </p>
      <div className={styles.actions}>
        <Link className={styles.primaryButton} href="/donate">Start With a Donation Inquiry</Link>
        <Link className={styles.secondaryButton} href="mailto:info@thediamondpeoplecorp.org">Email Us</Link>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerCta}>
        <div>
          <p className={styles.eyebrow}>Tucson Education Support</p>
          <h2>Support Traveling Scholars. Invest in futures.</h2>
          <p>
            Help The Diamond People Corp connect community generosity with homeschool families,
            K-12 students, enrichment opportunities, scholarships, field trips, youth sports,
            learning supplies, and educational support.
          </p>
        </div>
        <Link className={styles.footerDonateButton} href="/donate">Donation Inquiry</Link>
      </div>

      <div className={styles.footerGrid}>
        <div className={styles.footerBrandBlock}>
          <Image
            className={styles.footerLogo}
            src="/diamond-logo.jpg"
            alt="The Diamond People Corp logo"
            width={120}
            height={120}
          />
          <strong>The Diamond People Corp</strong>
          <p>
            Supporting Traveling Scholars Foundation students and families through education,
            opportunity, empowerment, and community partnership.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Donate</h3>
          <Link href="/donate">Donation Inquiries</Link>
          <Link href="/donate">Sponsor a Student</Link>
          <Link href="/support-homeschool-families">Support Families</Link>
          <Link href="/#partners">Partner With Us</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Programs</h3>
          <Link href="/student-enrichment-fund">Student Enrichment Fund</Link>
          <Link href="/support-homeschool-families">Homeschool Support</Link>
          <Link href="/student-enrichment-fund">Field Trips</Link>
          <Link href="/student-enrichment-fund">Learning Supplies</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Resources</h3>
          <Link href="/blog/">Blog</Link>
          <Link href="/blog/support-homeschool-families-tucson/">Support Homeschool Families</Link>
          <Link href="/blog/where-education-donations-go/">Where Donations Go</Link>
          <Link href="/blog/arizona-esa-homeschool-support/">Arizona ESA Support</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <Link href="mailto:info@thediamondpeoplecorp.org">info@thediamondpeoplecorp.org</Link>
          <span>Tucson, Arizona</span>
          <span>Donation, sponsorship, grant, and partnership inquiries welcome.</span>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>
          <p>© The Diamond People Corp. Supporting Traveling Scholars Foundation students and families.</p>
          <p>Donation and sponsorship inquiries are reviewed directly by The Diamond People Corp.</p>
        </div>
        <div className={styles.footerLegalLinks}>
          <Link href="/donation-inquiries/">Donation Inquiries</Link>
          <Link href="/privacy-policy/">Privacy Policy</Link>
          <Link href="/terms/">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
