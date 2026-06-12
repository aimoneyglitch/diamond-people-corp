import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/DpcShell";
import styles from "./homeschoolHub.module.css";

const pageUrl = "https://thediamondpeoplecorp.org/homeschool-resources-tucson/";

const heroImage = "/site-images/tucson-az-educational-supplies-donation-impact.png";

export const metadata: Metadata = {
  title: "Tucson Homeschool Resources | ESA, Field Trips, Groups & Support",
  description:
    "Find Tucson homeschool resources including Arizona ESA information, field trip ideas, enrichment activities, learning supplies, homeschool support, and ways the community can help families.",
  keywords: [
    "Tucson homeschool resources",
    "homeschooling in Tucson",
    "Arizona ESA homeschool",
    "Tucson homeschool field trips",
    "Tucson homeschool groups",
    "homeschool enrichment Tucson",
    "homeschool supplies Tucson",
    "homeschool support Tucson"
  ],
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    siteName: "The Diamond People Corp",
    title: "Tucson Homeschool Resources | ESA, Field Trips, Groups & Support",
    description:
      "A Tucson homeschool resource hub for Arizona ESA information, field trips, enrichment activities, learning supplies, and education support.",
    images: [
      {
        url: heroImage,
        width: 2400,
        height: 1350,
        alt: "Tucson homeschool family learning with books curriculum and educational support"
      }
    ],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tucson Homeschool Resources | ESA, Field Trips, Groups & Support",
    description:
      "A Tucson homeschool resource hub for Arizona ESA information, field trips, enrichment activities, learning supplies, and education support.",
    images: [heroImage]
  },
  robots: {
    index: true,
    follow: true
  }
};

const resourceSections = [
  {
    id: "esa",
    eyebrow: "Arizona ESA",
    title: "Arizona ESA homeschool support",
    text:
      "Arizona ESA can help families access education options, but families may still need help finding enrichment, supplies, activities, field experiences, and practical support.",
    image: "/site-images/tucson-az-nonprofit-donor-support-meeting.png", alt: "Parent reviewing homeschool learning materials and educational planning resources",
    links: [
      { href: "/blog/arizona-esa-homeschool-support/", label: "Read the Arizona ESA guide" },
      { href: "/support-homeschool-families/", label: "Support homeschool families" }
    ]
  },
  {
    id: "field-trips",
    eyebrow: "Field Trips",
    title: "Tucson homeschool field trips and real-world learning",
    text:
      "Field experiences help students connect learning to the world around them through science, nature, culture, history, community, and hands-on exploration.",
    image: "/site-images/tucson-az-student-enrichment-field-trip.png",
    alt: "Tucson homeschool field trip and student enrichment learning experience",
    links: [
      { href: "/student-enrichment-fund/", label: "View student enrichment support" },
      { href: "/blog/where-education-donations-go/", label: "See where support goes" }
    ]
  },
  {
    id: "enrichment",
    eyebrow: "Enrichment",
    title: "Homeschool enrichment activities in Tucson",
    text:
      "Students grow through more than worksheets. Enrichment can include STEM projects, art, sports, tutoring, music, workshops, community programs, and confidence-building activities.",
    image: "/site-images/tucson-az-youth-sports-student-enrichment.png",
    alt: "Tucson youth sports and student enrichment activity support",
    links: [
      { href: "/student-enrichment-fund/", label: "Explore the enrichment fund" },
      { href: "/donate/", label: "Support student enrichment" }
    ]
  },
  {
    id: "supplies",
    eyebrow: "Supplies",
    title: "Homeschool supplies and curriculum support",
    text:
      "Books, curriculum materials, notebooks, STEM supplies, art materials, backpacks, and project tools can make a direct difference for families building strong education paths.",
    image: "/site-images/tucson-az-homeschool-family-learning-support-diamond-people-corp-hero.jpg", alt: "Homeschool family learning support with education materials and Diamond People Corp branding",
    links: [
      { href: "/donate/", label: "Donate to education support" },
      { href: "/donation-inquiries/", label: "Start a support inquiry" }
    ]
  }
];

const faqs = [
  {
    question: "What homeschool resources are available in Tucson?",
    answer:
      "Tucson homeschool families may look for Arizona ESA information, homeschool groups, field trip ideas, enrichment activities, curriculum support, learning supplies, and community-backed education support."
  },
  {
    question: "Can Arizona ESA help homeschool families?",
    answer:
      "Arizona ESA may help eligible families access education options and approved education expenses. Families may still need guidance, enrichment opportunities, supplies, activities, and community support."
  },
  {
    question: "What kinds of enrichment activities help homeschool students?",
    answer:
      "Helpful enrichment may include field experiences, STEM projects, tutoring, art, music, sports, workshops, outdoor learning, community programs, and hands-on activities that build confidence."
  },
  {
    question: "How can donors support homeschool families in Tucson?",
    answer:
      "Donors can help support learning supplies, field experiences, enrichment activities, activity participation, and student opportunity through The Diamond People Corp."
  },
  {
    question: "Does The Diamond People Corp provide homeschool support?",
    answer:
      "The Diamond People Corp supports Traveling Scholars Foundation families by helping connect community generosity with student enrichment, learning resources, field experiences, and meaningful educational access."
  }
];

function JsonLd() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://thediamondpeoplecorp.org/"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tucson Homeschool Resources",
        item: pageUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tucson Homeschool Resources for Families",
    description:
      "A Tucson homeschool resource hub covering Arizona ESA, field trips, enrichment activities, learning supplies, homeschool support, and ways the community can help families.",
    image: "https://thediamondpeoplecorp.org/site-images/tucson-az-homeschool-family-learning-support-diamond-people-corp-hero.jpg",
    mainEntityOfPage: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "The Diamond People Corp",
      url: "https://thediamondpeoplecorp.org/"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </>
  );
}

export default function HomeschoolResourcesTucsonPage() {
  return (
    <div className={styles.hubShell}>
      <JsonLd />
      <SiteHeader />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroImageWrap}>
            <Image
              src={heroImage}
              alt="Tucson homeschool family learning with books curriculum and educational support"
              fill
              priority
              className={styles.heroImage}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>

          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Tucson Homeschool Resources</p>
            <h1>Tucson homeschool resources for families.</h1>
            <p>
              A practical resource hub for Tucson families exploring homeschool support,
              Arizona ESA information, enrichment activities, field trip ideas, learning
              supplies, and community-backed education support.
            </p>

            <div className={styles.heroActions}>
              <Link className={styles.primaryButton} href="/support-homeschool-families/">
                Support Families
              </Link>
              <Link className={styles.secondaryButton} href="/student-enrichment-fund/">
                Student Enrichment
              </Link>
            </div>
          </div>
        </section>

        <nav className={styles.jumpNav} aria-label="Tucson homeschool resource topics">
          <a href="#esa">Arizona ESA</a>
          <a href="#field-trips">Field Trips</a>
          <a href="#enrichment">Enrichment</a>
          <a href="#supplies">Supplies</a>
          <a href="#community">Community Help</a>
          <a href="#faq">FAQ</a>
        </nav>

        <section className={styles.introGrid}>
          <article>
            <span>01</span>
            <h2>For families</h2>
            <p>
              Find starting points for homeschool planning, Arizona ESA, enrichment, field
              experiences, learning materials, and support options in Tucson.
            </p>
          </article>

          <article>
            <span>02</span>
            <h2>For donors</h2>
            <p>
              Understand how education support can help families access supplies, activities,
              enrichment, and real-world learning opportunities.
            </p>
          </article>

          <article>
            <span>03</span>
            <h2>For partners</h2>
            <p>
              Businesses, churches, sponsors, and community organizations can help expand
              student opportunity through practical education support.
            </p>
          </article>
        </section>

        <section className={styles.resourceStack}>
          {resourceSections.map((section) => (
            <article className={styles.resourceSection} id={section.id} key={section.title}>
              <div className={styles.resourceImageWrap}>
                <Image
                  src={section.image}
                  alt={section.alt}
                  width={1400}
                  height={950}
                  className={styles.resourceImage}
                  sizes="(max-width: 900px) 100vw, 46vw"
                />
              </div>

              <div className={styles.resourceCopy}>
                <p className={styles.eyebrow}>{section.eyebrow}</p>
                <h2>{section.title}</h2>
                <p>{section.text}</p>

                <div className={styles.resourceLinks}>
                  {section.links.map((link) => (
                    <Link href={link.href} key={link.href}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.communitySection} id="community">
          <div>
            <p className={styles.eyebrow}>Community Support</p>
            <h2>How the community can help homeschool families in Tucson.</h2>
            <p>
              Community support can help families say yes to learning experiences, supplies,
              enrichment activities, field trips, tutoring, workshops, and participation opportunities
              that may otherwise be out of reach.
            </p>
          </div>

          <div className={styles.communityCards}>
            <article>
              <strong>Give</strong>
              <span>Support student enrichment, supplies, and learning access.</span>
            </article>
            <article>
              <strong>Sponsor</strong>
              <span>Help fund activities, field experiences, or education support needs.</span>
            </article>
            <article>
              <strong>Partner</strong>
              <span>Connect a business, church, foundation, or community group with the mission.</span>
            </article>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Related Guides</p>
            <h2>Continue exploring homeschool support.</h2>
          </div>

          <div className={styles.relatedGrid}>
            <Link href="/blog/arizona-esa-homeschool-support/">
              Arizona ESA homeschool support
            </Link>
            <Link href="/blog/support-homeschool-families-tucson/">
              Support homeschool families in Tucson
            </Link>
            <Link href="/blog/homeschool-scholarships-arizona-donations/">
              Homeschool scholarships and donations in Arizona
            </Link>
            <Link href="/blog/where-education-donations-go/">
              Where education donations go
            </Link>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2>Tucson homeschool resource questions.</h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <p className={styles.eyebrowGold}>Support the Mission</p>
            <h2>Help students access meaningful educational opportunity.</h2>
            <p>
              The Diamond People Corp welcomes giving, sponsorship, grant, and partnership
              conversations connected to homeschool support and student enrichment in Tucson.
            </p>
          </div>

          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/donate/">
              Donate
            </Link>
            <Link className={styles.secondaryButtonDark} href="/donation-inquiries/">
              Start a Support Inquiry
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

