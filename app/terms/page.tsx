import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { SiteFooter, SiteHeader } from "../components/DpcShell";

export const metadata: Metadata = {
  title: "Terms of Use | The Diamond People Corp",
  description: "Review The Diamond People Corp website terms for donation inquiries, sponsorship conversations, education-support content, and partnerships.",
  keywords: [
    "The Diamond People Corp terms",
    "donation inquiry terms",
    "education support website terms"
],
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/terms/"
  },
  openGraph: {
    type: "website",
    url: "https://thediamondpeoplecorp.org/terms/",
    siteName: "The Diamond People Corp",
    title: "Terms of Use | The Diamond People Corp",
    description: "Review The Diamond People Corp website terms for donation inquiries, sponsorship conversations, education-support content, and partnerships.",
    images: [
      {
        url: "/og-diamond-people-corp.jpg",
        width: 1200,
        height: 630,
        alt: "The Diamond People Corp terms of use"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | The Diamond People Corp",
    description: "Review The Diamond People Corp website terms for donation inquiries, sponsorship conversations, education-support content, and partnerships.",
    images: ["/og-diamond-people-corp.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function TermsPage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <section className={styles.legalHero}>
          <p className={styles.eyebrow}>Terms of Use</p>
          <h1>Terms of Use</h1>
          <p>
            These terms explain how visitors may use The Diamond People Corp website and information
            related to donation, sponsorship, grant, partnership, and education-support inquiries.
          </p>
        </section>

        <section className={styles.legalBody}>
          <h2>Website Purpose</h2>
          <p>
            This website provides information about The Diamond People Corp, its support for Traveling
            Scholars Foundation students and families, education-related opportunities, donation inquiries,
            sponsorship inquiries, grant conversations, and community partnerships.
          </p>

          <h2>No Tax, Legal, or Financial Advice</h2>
          <p>
            Information on this website is provided for general informational purposes only. It should not
            be treated as tax, legal, accounting, or financial advice. Donors should consult their own
            qualified advisor for questions about tax treatment, deductions, documentation, or giving strategy.
          </p>

          <h2>No Automatic Donation Guarantee</h2>
          <p>
            Submitting a donation, sponsorship, grant, or partnership inquiry does not guarantee approval,
            participation, funding, placement, acceptance, or a specific outcome. Inquiries are reviewed
            directly by The Diamond People Corp.
          </p>

          <h2>Website Content</h2>
          <p>
            The website content, branding, images, graphics, copy, and layout are provided for organization
            communication and may not be copied, misrepresented, or reused in a misleading way.
          </p>

          <h2>External Services</h2>
          <p>
            If the website later connects to payment processors, forms, email platforms, social networks,
            analytics tools, or other third-party services, those services may have their own terms and
            privacy practices.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to{" "}
            <Link href="mailto:info@thediamondpeoplecorp.org">info@thediamondpeoplecorp.org</Link>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
