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

export function HomepageImpactSection() {
  return (
    <section className={styles.homepageImpact}>
      <div className={styles.homepageImpactIntro}>
        <p className={styles.eyebrow}>Why This Matters</p>
        <h2>Opportunity should not depend on whether a family can cover every extra cost.</h2>
        <p>
          The Diamond People Corp helps connect community support with meaningful educational access
          for families connected to Traveling Scholars Foundation.
        </p>
      </div>

      <div className={styles.homepageImpactGrid}>
        <article>
          <span>Access</span>
          <h3>Remove financial barriers</h3>
          <p>Support helps students participate in learning experiences that might otherwise be out of reach.</p>
        </article>

        <article>
          <span>Growth</span>
          <h3>Invest beyond the basics</h3>
          <p>Enrichment, activities, and real-world learning help students build confidence and direction.</p>
        </article>

        <article>
          <span>Community</span>
          <h3>Stand behind families</h3>
          <p>Local partners and donors can help families continue building strong education paths.</p>
        </article>
      </div>
    </section>
  );
}

export function WhereSupportGoesSection() {
  const items = [
    {
      title: "Learning Access",
      text: "Materials, tools, curriculum support, and practical resources that help students keep moving forward."
    },
    {
      title: "Student Experiences",
      text: "Field learning, enrichment activities, athletics, workshops, and programs that expand opportunity."
    },
    {
      title: "Family Support",
      text: "Scholarship-style assistance that helps reduce pressure when educational costs become a barrier."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.trustIntro}>
        <p className={styles.eyebrow}>Use of Support</p>
        <h2>Every giving conversation starts with student access.</h2>
        <p>
          Support is focused on practical needs that help families say yes to meaningful educational opportunities.
        </p>
      </div>

      <div className={styles.supportGridCompact}>
        {items.map((item) => (
          <article className={styles.supportCard} key={item.title}>
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
        <h2>A clear mission with a direct giving conversation.</h2>
        <p>
          The Diamond People Corp presents support opportunities clearly so donors, sponsors,
          and partners understand the purpose before participating.
        </p>
      </div>

      <div className={styles.trustChecklist}>
        <div>
          <strong>Student-centered</strong>
          <p>Support is focused on education, access, confidence, and opportunity.</p>
        </div>
        <div>
          <strong>Locally grounded</strong>
          <p>The work is connected to Tucson, Arizona families and Traveling Scholars Foundation.</p>
        </div>
        <div>
          <strong>Direct communication</strong>
          <p>Giving, sponsorship, grant, and partnership questions are handled intentionally.</p>
        </div>
        <div>
          <strong>Responsible language</strong>
          <p>The site does not make tax-treatment promises without proper confirmation.</p>
        </div>
      </div>
    </section>
  );
}

export function DonationCta() {
  return (
    <section className={styles.ctaBand}>
      <p className={styles.eyebrow}>Support Students</p>
      <h2>Help open the next door for a student.</h2>
      <p>
        Start a giving, sponsorship, grant, or partnership conversation with The Diamond People Corp.
      </p>
      <div className={styles.actions}>
        <Link className={styles.primaryButton} href="/donate">Give or Sponsor</Link>
        <Link className={styles.secondaryButton} href="/donation-inquiries">Donation Inquiries</Link>
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
          <h2>Helping students access more than the basics.</h2>
          <p>
            The Diamond People Corp supports Traveling Scholars Foundation families through
            education, enrichment, and community partnership.
          </p>
        </div>
        <Link className={styles.footerDonateButton} href="/donate">Give or Sponsor</Link>
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
            A Tucson-based education-support organization helping connect community generosity
            with student opportunity.
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h3>Give</h3>
          <Link href="/donate">Donate</Link>
          <Link href="/donation-inquiries">Donation Inquiries</Link>
          <Link href="/support-homeschool-families">Support Families</Link>
          <Link href="/#partners">Partner With Us</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Programs</h3>
          <Link href="/student-enrichment-fund">Student Enrichment</Link>
          <Link href="/support-homeschool-families">Family Support</Link>
          <Link href="/blog/where-education-donations-go/">Where Support Goes</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Resources</h3>
          <Link href="/blog/">Blog</Link>
          <Link href="/blog/support-homeschool-families-tucson/">Homeschool Support</Link>
          <Link href="/blog/arizona-esa-homeschool-support/">Arizona ESA</Link>
        </div>

        <div className={styles.footerColumn}>
          <h3>Contact</h3>
          <Link href="mailto:info@thediamondpeoplecorp.org">info@thediamondpeoplecorp.org</Link>
          <span>Tucson, Arizona</span>
          <span>Giving, sponsorship, grant, and partnership inquiries welcome.</span>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>
          <p>© The Diamond People Corp. Supporting Traveling Scholars Foundation students and families.</p>
          <p>Inquiries are reviewed directly by The Diamond People Corp.</p>
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
