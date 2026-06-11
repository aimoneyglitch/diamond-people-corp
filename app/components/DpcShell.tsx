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

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div>
          <strong>The Diamond People Corp</strong>
          <p>Supporting Traveling Scholars Foundation students and families through scholarships, field trips, homeschool enrichment, youth sports, learning supplies, and community partnerships.</p>
        </div>
        <div>
          <Link href="mailto:info@thediamondpeoplecorp.org">info@thediamondpeoplecorp.org</Link>
          <p>Tucson, Arizona</p>
        </div>
      </div>
    </footer>
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
