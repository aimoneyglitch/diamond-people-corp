import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../donor.module.css";
import { DonationCta, SiteFooter, SiteHeader } from "./DpcShell";
import { blogPosts } from "../lib/seoContent";

function publicImagePath(imageFile: string) {
  return imageFile.startsWith("public/") ? imageFile.replace("public", "") : imageFile;
}

export function BlogArticle({ slug }: { slug: string }) {
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.donorShell}>
      <SiteHeader />
      <main>
        <article>
          <header className={styles.articleHeader}>
            <p className={styles.eyebrow}>{post.keyword}</p>
            <h1>{post.title}</h1>
            <p className={styles.lead}>{post.description}</p>
            <div className={styles.articleMeta}>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>The Diamond People Corp</span>
            </div>
          </header>

          <div className={styles.articleFeaturedImageWrap}>
            <Image
              src={publicImagePath(post.imageFile)}
              alt={post.imageAlt}
              width={1600}
              height={900}
              priority
              className={styles.articleFeaturedImage}
              sizes="(max-width: 920px) 100vw, 920px"
            />
          </div>

          <div className={styles.articleBody}>
            <div className={styles.articleCallout}>
              <h2>Donation Impact Summary</h2>
              <p>
                This guide helps donors, partners, and families understand how community support can
                help students access learning supplies, enrichment, field trips, tutoring, youth sports,
                student activities, and scholarship-style assistance.
              </p>
            </div>

            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2>Frequently Asked Questions</h2>
              {post.faqs.map((faq) => (
                <div className={styles.faq} key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>

            <section>
              <h2>Support Homeschool Families Through The Diamond People Corp</h2>
              <p>
                Help The Diamond People Corp support homeschool families and K-12 students with curriculum,
                learning supplies, field trips, enrichment opportunities, youth sports, student activities,
                and scholarship-style assistance connected to Traveling Scholars Foundation.
              </p>
              <div className={styles.actions}>
                <Link className={styles.primaryButton} href="/donate">Donate or Partner With Us</Link>
                <Link className={styles.secondaryButton} href="/support-homeschool-families">Learn How Families Are Helped</Link>
              </div>
            </section>
          </div>
        </article>

        <DonationCta />
      </main>
      <SiteFooter />
    </div>
  );
}
