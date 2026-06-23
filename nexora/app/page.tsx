import Image from "next/image";

const features = [
  {
    title: "Discover experts",
    body: "Browse profiles, see what they teach, read what others learned",
    action: "Browse",
    tone: "teal",
  },
  {
    title: "Schedule sessions that fit your life",
    body: "Pick a time, confirm it, and show up ready to work",
    action: "Book",
    tone: "gold",
  },
  {
    title: "Pay securely without the friction",
    body: "Simple transactions that protect both you and your teacher",
    action: "Pay",
    tone: "slate",
  },
  {
    title: "Follow your own learning path",
    body: "Roadmaps guide you through skills step by step",
    action: "Roadmaps",
    tone: "copper",
  },
];

const steps = [
  {
    icon: "⌕",
    title: "Find your expert",
    body: "Search the Experts page and read what others have learned.",
  },
  {
    icon: "▣",
    title: "Lock in your session",
    body: "Choose a time on their calendar and confirm the booking.",
  },
  {
    icon: "○",
    title: "Learn and grow",
    body: "Show up ready and follow your skill roadmap to track progress.",
  },
];

const testimonials = [
  {
    quote: "I found exactly what I needed and learned faster than I thought possible.",
    name: "Sarah Chen",
    role: "Product designer, startup",
    avatar: "SC",
  },
  {
    quote: "Teaching here lets me help people without all the overhead of running my own school.",
    name: "Marcus Webb",
    role: "Software engineer, freelance",
    avatar: "MW",
  },
  {
    quote: "The roadmaps kept me focused on what mattered instead of wandering around lost.",
    name: "Elena Rodriguez",
    role: "Photographer, independent",
    avatar: "ER",
  },
];

const faqs = [
  {
    question: "How do I find an expert?",
    answer:
      "Go to the Experts page and browse profiles by skill or specialty. Read reviews from other learners to see who fits your needs.",
  },
  {
    question: "Can I reschedule my session?",
    answer:
      "Yes. Check your Bookings page for options to adjust your time. Both you and your expert need to agree on the new time.",
  },
  {
    question: "What are skill roadmaps?",
    answer:
      "Roadmaps break down a skill into steps you can follow. They guide you from beginner to wherever you want to go.",
  },
  {
    question: "How does payment work?",
    answer:
      "You pay securely through the platform before your session starts. The expert gets paid after the session is complete.",
  },
  {
    question: "Can I become an expert?",
    answer:
      "Absolutely. If you have skills worth sharing, you can apply to teach. We review applications to keep quality high.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <nav className="navbar" aria-label="Primary navigation">
          <a className="logo" href="#">
            Nexora
          </a>
          <div className="nav-links">
            <a href="#experts">Experts</a>
            <a href="#roadmaps">Roadmaps</a>
            <a href="#bookings">Bookings</a>
            <a href="#faq">Learn more⌄</a>
          </div>
          <div className="nav-actions">
            <a className="button button-outline" href="/auth/sign-in">
              Sign in
            </a>
            <a className="button button-primary" href="/auth/sign-up">
              Start
            </a>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-card">
          <div className="hero-copy">
            <h1>Learn from those who know</h1>
            <p>
              Connect with experts who&apos;ve walked the path you&apos;re on.
              Book sessions, pay what&apos;s fair, and build the skills that
              matter to you.
            </p>
            <div className="button-row">
              <a className="button button-primary" href="#experts">
                Explore
              </a>
              <a className="button button-outline" href="/auth/sign-up">
                Join Nexora
              </a>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/peer-learning-hero.png"
              alt="People learning together in a workshop"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 46vw"
            />
          </div>
        </div>

        <section className="essentials" id="experts">
          <p className="kicker">Essentials</p>
          <h2>What makes it work</h2>
          <p>Find the teachers worth your time and attention</p>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className={`feature-card ${feature.tone}`} key={feature.title}>
                <div className="cube-icon" aria-hidden="true" />
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                <a href="#process">{feature.action} ›</a>
              </article>
            ))}
          </div>
        </section>
      </section>

      <section className="process-section" id="process">
        <p className="kicker">Process</p>
        <h2>Three steps to better skills</h2>
        <p className="section-intro">
          Start by finding someone who knows what you want to learn. Then book a
          time that works. The rest follows naturally.
        </p>
        <div className="steps-grid">
          {steps.map((step) => (
            <article className="step-card" key={step.title}>
              <span aria-hidden="true">{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <div className="button-row center">
          <a className="button button-light" href="#start">
            Start
          </a>
          <a className="text-link" href="#experts">
            Explore ›
          </a>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>Real voices</h2>
        <p>What learners and experts say</p>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars" aria-label="Five star rating">
                ★★★★★
              </div>
              <blockquote>&quot;{item.quote}&quot;</blockquote>
              <div className="person">
                <span>{item.avatar}</span>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-wrap" id="start">
        <div className="cta-card">
          <h2>Ready to start learning</h2>
          <p>Find an expert and book your first session today.</p>
          <div className="button-row center">
            <a className="button button-white" href="#experts">
              Explore
            </a>
            <a className="button button-ghost" href="/auth/sign-up">
              Sign up
            </a>
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2>FAQ</h2>
        <p>Answers to what you&apos;re wondering about</p>

        <div className="faq-list">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span aria-hidden="true">+</span>
              </div>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>

        <div className="help-block">
          <h2>Need more help</h2>
          <p>Reach out and we&apos;ll point you in the right direction.</p>
          <a className="button button-outline" href="mailto:hello@learningexchange.com">
            Contact
          </a>
        </div>
      </section>

      <section className="footer-shell">
        <footer className="footer">
          <div>
            <a className="logo" href="#">
              Nexora
            </a>
            <div className="footer-contact">
              <strong>Address</strong>
              <p>Sydney, NSW 2000, Australia</p>
              <strong>Contact</strong>
              <p>1800 555 888 hello@learningexchange.com</p>
            </div>
            <div className="socials" aria-label="Social links">
              <span>f</span>
              <span>◎</span>
              <span>𝕏</span>
              <span>in</span>
              <span>▶</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#experts">Experts</a>
            <a href="#roadmaps">Skill roadmaps</a>
            <a href="#bookings">Bookings</a>
            <a href="#">About us</a>
          </div>
          <div className="footer-links">
            <a href="#">Support</a>
            <a href="#">Community</a>
            <a href="#">Resources</a>
            <a href="#">Blog</a>
            <a href="#">Contact us</a>
          </div>
        </footer>

        <div className="footer-bottom">
          <p>© 2025 Learning Exchange Platform. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Cookies settings</a>
          </div>
        </div>
      </section>
    </main>
  );
}
