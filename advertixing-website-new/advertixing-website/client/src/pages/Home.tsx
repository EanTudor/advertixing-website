/*
 * ADVERTIXING.COM — High-Converting B2B Landing Page
 * Sections: Hero → Logo Carousel → Stats → Benefits → Process → Offer Stack → FAQ → Calendly
 * Design: Black bg, cyan accent oklch(0.82 0.15 200), white headlines, Inter font
 * Nav: What You Get | How It Works | FAQ
 * Calendar: ONLY at the final CTA section
 */

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

const BENEFITS = [
  {
    icon: "📞",
    title: "Qualified Calls — Not Just Leads",
    desc: "Every prospect who books a call has watched your VSL, filled out an application, and self-qualified. You're not chasing leads. You're closing buyers.",
  },
  {
    icon: "⚡",
    title: "Live in 7–14 Days",
    desc: "Your entire funnel — script, pages, emails, ads — is live in under two weeks. We don't run discovery calls for three weeks then disappear into a build.",
  },
  {
    icon: "🎯",
    title: "100% Done For You",
    desc: "You don't write a single word, build a single page, or set up a single automation. We handle everything. You review, approve, and close.",
  },
  {
    icon: "📈",
    title: "Ads That Actually Convert",
    desc: "We write and design the creatives, run the campaigns, optimize daily, and scale what's working. No hand-holding, no weekly strategy calls that go nowhere.",
  },
  {
    icon: "✉️",
    title: "Email Automation That Follows Up",
    desc: "Six sequences running 24/7 — opt-in nurture, VSL abandon, application abandon, pre-call, no-show, and post-call follow-up. No lead falls through the cracks.",
  },
  {
    icon: "📄",
    title: "Copy That Closes Before the Call",
    desc: "A full-length B2B sales page written to close. Your prospect arrives on the call already sold — authority, mechanism, proof, objection handling, and CTA all done.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Strategy Call",
    desc: "We audit your offer, your market, and your current funnel. We map the architecture and confirm we're the right fit. You get a custom plan before we charge you a dollar.",
  },
  {
    num: "02",
    title: "We Build Everything",
    desc: "VSL script, landing pages, email sequences, ad creatives, sales page copy — all written, designed, and built by our team. You review and approve before anything goes live.",
  },
  {
    num: "03",
    title: "Launch & Optimize",
    desc: "We launch your campaigns, run structured A/B tests, and optimize daily based on real data. You're not paying for someone to set it and forget it.",
  },
  {
    num: "04",
    title: "Scale What Works",
    desc: "Once we find the winning creative, audience, and funnel path, we scale budget and volume. More qualified calls without you lifting a finger.",
  },
];

const OFFER_ITEMS = [
  "VSL Script",
  "Opt-In Landing Page",
  "VSL Page",
  "Application Page",
  "Booking Page Setup",
  "6-Sequence Email Automation",
  "Ad Creatives (Static + Video Scripts)",
  "Full-Length Sales Page Copy",
  "Campaign Management & Daily Optimization",
  "Weekly Performance Reporting",
];

const FAQS = [
  {
    q: "How long does it take to build the funnel?",
    a: "7–14 business days from strategy call to live funnel. You'll have a complete, live funnel in under two weeks.",
  },
  {
    q: "What do I need to provide?",
    a: "Your offer details, target market, and any existing assets (testimonials, case studies, content). We handle everything else.",
  },
  {
    q: "Do I need to have run ads before?",
    a: "No. We build the funnel first, then launch ads once everything is in place. If ads didn't work before, it's almost always a funnel problem — not an ads problem.",
  },
  {
    q: "What ad platforms do you run on?",
    a: "Primarily Meta (Facebook/Instagram). We can also run on YouTube and Google depending on your market. We'll recommend the right platform on the strategy call.",
  },
  {
    q: "How much should I budget for ads?",
    a: "We recommend starting with $3K–$5K/month in ad spend. This gives us enough data to optimize quickly. We scale from there once we find what's working.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "Most agencies run ads and send reports. We build the entire system — VSL, pages, emails, ads — and then run it for you. A complete, conversion-optimized funnel, not just traffic.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col items-center justify-center text-center pt-28 pb-16 px-4">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 0%, oklch(0.82 0.15 200 / 0.07) 0%, transparent 65%)",
        }} />

        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Pre-Headline */}
          <div className="flex justify-center mb-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full"
              style={{ color: "oklch(0.82 0.15 200)", background: "oklch(0.82 0.15 200 / 0.08)", border: "1px solid oklch(0.82 0.15 200 / 0.2)" }}>
              For B2B businesses that close clients on sales calls
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white font-extrabold leading-[1.05] mb-5"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)" }}>
            We'll Fill Your Calendar With{" "}
            <span style={{ color: "oklch(0.82 0.15 200)" }}>Qualified Sales Calls.</span>{" "}
            <span className="text-white">Guaranteed.</span>
          </h1>

          {/* Subheadline */}
          <p className="mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}>
            We build your entire VSL funnel — script, pages, ads, and email automation — then run it for you. You show up and close.
          </p>

          {/* CTA */}
          <a href="#apply" className="btn-cyan px-10 py-4 text-base inline-flex">
            Book a Free Strategy Call
          </a>
        </div>
      </section>



      {/* ─── STATS BAR ────────────────────────────────────────── */}
      <section className="py-14 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-8 text-center max-w-2xl mx-auto">
            {[
              { val: "7–14", unit: "Days", label: "Build Time" },
              { val: "100%", unit: "", label: "Done For You" },
              { val: "1", unit: "System", label: "Everything Included" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-extrabold leading-none mb-1" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: "oklch(0.82 0.15 200)" }}>
                  {s.val}<span className="text-base font-semibold ml-1" style={{ color: "oklch(0.82 0.15 200 / 0.7)" }}>{s.unit}</span>
                </div>
                <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS / WHAT YOU GET ──────────────────────────── */}
      <section id="deliverables" className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container max-w-5xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="section-label mb-4">What You Get</div>
            <h2 className="text-white font-extrabold" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
            <span className="text-white">A Complete System</span><br />
            <span style={{ color: "oklch(0.82 0.15 200)" }}>Not Just Ads</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="rounded-xl p-6 h-full" style={{ background: "oklch(0.09 0 0)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl mb-4">{b.icon}</div>
                  <h3 className="text-white font-semibold mb-2 text-sm leading-snug">{b.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS / HOW IT WORKS ───────────────────────────── */}
      <section id="process" className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "oklch(0.055 0 0)" }}>
        <div className="container max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="section-label mb-4">How It Works</div>
            <h2 className="text-white font-extrabold" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
              From Strategy Call<br />
              <span style={{ color: "oklch(0.82 0.15 200)" }}>To Booked Calls</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-xl p-7 h-full" style={{ background: "oklch(0.09 0 0)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="font-extrabold mb-3" style={{ fontSize: "2.2rem", color: "oklch(0.82 0.15 200 / 0.18)", lineHeight: 1 }}>{s.num}</div>
                  <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OFFER STACK ──────────────────────────────────────── */}
      <section className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="container max-w-xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="section-label mb-4">Everything Included</div>
            <h2 className="text-white font-extrabold" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
              <span style={{ color: "oklch(0.82 0.15 200)" }}>The Complete System</span>
            </h2>
          </Reveal>
          <Reveal>
            <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {OFFER_ITEMS.map((item, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4"
                  style={{
                    background: i % 2 === 0 ? "oklch(0.09 0 0)" : "oklch(0.075 0 0)",
                    borderBottom: i < OFFER_ITEMS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none"
                  }}>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>{item}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="oklch(0.82 0.15 200)" strokeWidth="1.2"/>
                    <path d="M5 8l2 2 4-4" stroke="oklch(0.82 0.15 200)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
              <div className="px-6 py-5" style={{ background: "oklch(0.82 0.15 200 / 0.07)", borderTop: "1px solid oklch(0.82 0.15 200 / 0.2)" }}>
                <p className="text-sm font-semibold text-center" style={{ color: "oklch(0.82 0.15 200)" }}>
                  Everything above — built, launched, and managed by our team.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={200} className="text-center mt-10">
            <a href="#apply" className="btn-cyan px-8 py-3.5">Book a Free Strategy Call</a>
          </Reveal>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section id="faq" className="py-24 border-b" style={{ borderColor: "rgba(255,255,255,0.06)", background: "oklch(0.055 0 0)" }}>
        <div className="container max-w-2xl mx-auto">
          <Reveal className="text-center mb-14">
            <div className="section-label mb-4">FAQ</div>
            <h2 className="text-white font-extrabold" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
              Questions We Get<br />
              <span style={{ color: "oklch(0.82 0.15 200)" }}>Before Every Discovery Call</span>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                    style={{ background: "oklch(0.09 0 0)" }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ background: "oklch(0.82 0.15 200 / 0.1)", border: "1px solid oklch(0.82 0.15 200 / 0.3)" }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                        style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.2s ease" }}>
                        <path d="M5 1v8M1 5h8" stroke="oklch(0.82 0.15 200)" strokeWidth="1.4" strokeLinecap="round"/>
                      </svg>
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 pt-1" style={{ background: "oklch(0.09 0 0)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.52)" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA + CALENDLY ─────────────────────────────── */}
      <section id="apply" className="py-24 relative">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 100%, oklch(0.82 0.15 200 / 0.05) 0%, transparent 70%)",
        }} />
        <div className="container relative z-10 text-center max-w-3xl mx-auto">
          <Reveal>
            <div className="section-label mb-4">Book a Call</div>
            <h2 className="text-white font-extrabold mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Pick a Time That Works for You
            </h2>
            <p className="mb-10" style={{ color: "rgba(255,255,255,0.42)", fontSize: "1rem" }}>
              30 minutes. We'll audit your offer and show you exactly what we'd build.
            </p>
            <div className="w-full" style={{ minHeight: 700 }}>
              <iframe
                src="https://calendly.com/ean-advertixing/30min?embed_domain=advertixing.com&embed_type=Inline&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=00d4d4"
                width="100%"
                height="700"
                frameBorder="0"
                title="Book a Strategy Call"
                style={{ borderRadius: "0.75rem", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
