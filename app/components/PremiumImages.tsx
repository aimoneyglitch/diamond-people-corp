import Image from "next/image";
import styles from "../donor.module.css";

export const premiumImages = {
  tucsonStudentOpportunity: {
    src: "/site-images/tucson-student-education-opportunity.jpg",
    alt: "Tucson student in a learning environment with educational support and family encouragement"
  },
  educationSupportImpact: {
    src: "/site-images/education-support-impact-tucson.jpg",
    alt: "Educational supplies and learning materials that show the impact of student support in Tucson"
  },
  donateHomeschoolFamilies: {
    src: "/site-images/donate-to-homeschool-families-tucson.jpg",
    alt: "Homeschool parent and student in Tucson working together with educational materials"
  },
  studentEnrichmentDonationImpact: {
    src: "/site-images/student-enrichment-donation-impact.jpg",
    alt: "Student enrichment materials including books supplies and activity resources funded through donations"
  },
  homeschoolFamilySupport: {
    src: "/site-images/homeschool-family-support-tucson.jpg",
    alt: "Homeschool family in Tucson working together with learning materials at home"
  },
  homeschoolStudentOpportunity: {
    src: "/site-images/homeschool-student-learning-opportunity.jpg",
    alt: "Homeschool student working confidently on a hands-on educational activity"
  },
  studentFieldTripLearning: {
    src: "/site-images/student-field-trip-learning-tucson.jpg",
    alt: "Students participating in a real-world educational field trip in Tucson Arizona"
  },
  youthSportsEnrichment: {
    src: "/site-images/youth-sports-student-enrichment.jpg",
    alt: "Student participating in youth sports or enrichment activity with confidence and support"
  },
  learningSuppliesEnrichment: {
    src: "/site-images/learning-supplies-student-enrichment.jpg",
    alt: "Student learning supplies and educational materials used for enrichment and academic growth"
  },
  donationInquiryMeeting: {
    src: "/site-images/donation-inquiry-support-meeting.jpg",
    alt: "Professional donation planning meeting for educational support and nonprofit giving"
  }
} as const;

type PremiumImageKey = keyof typeof premiumImages;

export function PremiumImage({
  imageKey,
  priority = false,
  className = ""
}: {
  imageKey: PremiumImageKey;
  priority?: boolean;
  className?: string;
}) {
  const image = premiumImages[imageKey];

  return (
    <div className={`${styles.premiumImageFrame} ${className}`.trim()}>
      <Image
        src={image.src}
        alt={image.alt}
        width={1600}
        height={900}
        priority={priority}
        className={styles.premiumSiteImage}
        sizes="(max-width: 920px) 100vw, 50vw"
      />
    </div>
  );
}
