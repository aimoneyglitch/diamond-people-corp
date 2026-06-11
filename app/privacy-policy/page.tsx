import type { Metadata } from "next";
import Link from "next/link";
import styles from "../donor.module.css";
import { SiteFooter, SiteHeader } from "../components/DpcShell";

export const metadata: Metadata = {
  title: "Privacy Policy | The Diamond People Corp",
  description:
    "Privacy Policy for The Diamond People Corp, including how donation, sponsorship, grant, partnership, and contact inquiries are handled.",
  alternates: {
    canonical: "https://thediamondpeoplecorp.org/privacy-policy/"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <section className={styles.legalHero}>
          <p className={styles.eyebrow}>Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p>
            The Diamond People Corp respects the privacy of families, donors, sponsors, partners,
            and community members who contact the organization.
          </p>
        </section>

        <section className={styles.legalBody}>
          <h2>Information We May Receive</h2>
          <p>
            When someone contacts The Diamond People Corp by email or through a donation, sponsorship,
            grant, or partnership inquiry, the organization may receive information such as a name,
            email address, phone number, organization name, message details, and the nature of the inquiry.
          </p>

          <h2>How Information May Be Used</h2>
          <p>
            Information may be used to respond to inquiries, discuss donation or sponsorship opportunities,
            coordinate partnership conversations, answer questions, provide follow-up information, and
            support organization-related communication.
          </p>

          <h2>Payments and Donations</h2>
          <p>
            This website currently directs donation and sponsorship conversations through direct contact.
            If an online payment processor is added later, that processor may have its own privacy policy,
            payment terms, and security practices.
          </p>

          <h2>Sharing Information</h2>
          <p>
            The Diamond People Corp does not present this website as a place where visitor information is
            sold. Information may be shared only when needed to respond to a request, comply with legal
            obligations, support organization operations, or coordinate approved donation, sponsorship,
            grant, or partnership activity.
          </p>

          <h2>Children and Families</h2>
          <p>
            The Diamond People Corp supports education-related opportunities for families and students.
            Parents or guardians should contact the organization directly before submitting private
            information about a student.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy questions can be sent to{" "}
            <Link href="mailto:info@thediamondpeoplecorp.org">info@thediamondpeoplecorp.org</Link>.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
