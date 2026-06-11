export function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "@id": "https://thediamondpeoplecorp.org/#organization",
    name: "The Diamond People Corp",
    url: "https://thediamondpeoplecorp.org/",
    logo: "https://thediamondpeoplecorp.org/og-diamond-people-corp.jpg",
    image: "https://thediamondpeoplecorp.org/og-diamond-people-corp.jpg",
    description:
      "The Diamond People Corp supports Traveling Scholars Foundation students and families through education, opportunity, empowerment, scholarships, enrichment, field trips, learning supplies, and community partnership in Tucson, Arizona.",
    email: "info@thediamondpeoplecorp.org",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      addressCountry: "US"
    },
    areaServed: [
      {
        "@type": "City",
        name: "Tucson"
      },
      {
        "@type": "State",
        name: "Arizona"
      }
    ],
    nonprofitStatus: "NonprofitType",
    knowsAbout: [
      "Homeschool support",
      "Student enrichment",
      "Educational field trips",
      "Learning supplies",
      "Youth sports",
      "Scholarship support",
      "Arizona education support"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@thediamondpeoplecorp.org",
      contactType: "Donation, sponsorship, grant, and partnership inquiries",
      areaServed: "US",
      availableLanguage: "English"
    }
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thediamondpeoplecorp.org/#website",
    url: "https://thediamondpeoplecorp.org/",
    name: "The Diamond People Corp",
    publisher: {
      "@id": "https://thediamondpeoplecorp.org/#organization"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
