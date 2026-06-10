import { GraduationCap, BookOpen, HeartHandshake, Star } from "lucide-react";

export default function Home() {
  return (
    <main>
      <header className="siteHeader">
        <div className="container nav">
          <a className="brand" href="#">
            <img src="/diamond-logo.jpg" alt="The Diamond People Corp logo" />
            <span>
              The Diamond People Corp
              <small>Supporting Traveling Scholars. Investing in Futures.</small>
            </span>
          </a>

          <nav className="navLinks">
            <a href="#mission">Mission</a>
            <a href="#programs">Programs</a>
            <a href="#partners">Partners</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="headerButton" href="#contact">Contact Us</a>
        </div>
      </header>

      <section className="hero">
        <div className="heroOverlay"></div>

        <div className="container heroContent">
          <div className="heroTextBlock">
            <p className="eyebrow">Tucson, Arizona Nonprofit</p>
            <div className="goldLine"></div>

            <h1>
              The<br />
              Diamond<br />
              People<br />
              Corp
            </h1>

            <h2>Supporting Traveling Scholars. Investing in Futures.</h2>

            <p>
              The Diamond People Corp supports students and families through
              scholarships, educational field trips, homeschool enrichment, youth
              sports opportunities, learning supplies, and community partnerships
              connected to Traveling Scholars Foundation.
            </p>

            <div className="buttonRow">
              <a className="button primary" href="#mission">Our Mission</a>
              <a className="button secondary" href="#contact">Partner With Us</a>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="focus">
        <div className="container">
          <p className="sectionLabel">Our Focus</p>
          <div className="goldLine"></div>

          <div className="focusGrid">
            <article><div className="focusIcon"><GraduationCap /></div><h3>Education</h3><p>Empowering students with knowledge and learning opportunities.</p></article>
            <article><div className="focusIcon"><BookOpen /></div><h3>Opportunity</h3><p>Opening doors to new experiences and brighter futures.</p></article>
            <article><div className="focusIcon"><HeartHandshake /></div><h3>Empowerment</h3><p>Building confidence, leadership, and stronger communities.</p></article>
            <article><div className="focusIcon"><Star /></div><h3>Impact</h3><p>Creating lasting change through support and partnership.</p></article>
          </div>
        </div>
      </section>

      <section id="mission" className="section">
        <div className="container">
          <p className="sectionLabel">Our Mission</p>
          <h2>Educational Support for Students and Families</h2>
          <p>Our mission is to remove financial barriers for students by supporting access to educational field trips, homeschool enrichment, youth sports, student activities, and learning opportunities connected to Traveling Scholars Foundation.</p>
        </div>
      </section>

      <section id="partners" className="section alt">
        <div className="container">
          <p className="sectionLabel">Grants and Partnerships</p>
          <h2>Community Partnerships for K-12 Educational Enrichment</h2>
          <p>The Diamond People Corp welcomes grants, sponsorships, donations, and community partnerships that support K-12 educational enrichment, homeschool student opportunities, educational travel, field trips, youth sports, and student scholarships.</p>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="container">
          <p className="sectionLabel">Contact</p>
          <h2>Contact The Diamond People Corp</h2>
          <p>Contact us for grant opportunities, sponsorships, donations, or partnership inquiries.</p>
          <p><strong>Email:</strong> <a className="emailLink" href="mailto:info@thediamondpeoplecorp.org?subject=Partnership%20Inquiry%20-%20The%20Diamond%20People%20Corp">info@thediamondpeoplecorp.org</a></p>
          <p><strong>Location:</strong> Tucson, Arizona</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <h2>The Diamond People Corp</h2>
          <p>Supporting Traveling Scholars Foundation students and families.</p>
        </div>
      </footer>
    </main>
  );
}

