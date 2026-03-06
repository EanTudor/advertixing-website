/*
 * ADVERTIXING.COM — Footer
 * Minimal, all-white logo, no cyan X
 */

export default function Footer() {
  return (
    <footer className="border-t py-12 text-center" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div className="mb-3">
          <span className="text-white font-bold text-xl tracking-tight">Advertixing</span>
        </div>
        <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.3)" }}>
          Done-for-you VSL funnels that book qualified sales calls. Guaranteed.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {[
            { label: "What You Get", href: "#deliverables" },
            { label: "How It Works", href: "#process" },
            { label: "The Guarantee", href: "#guarantee" },
            { label: "Book a Call", href: "#apply" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "1.5rem" }} />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
          <span>© {new Date().getFullYear()} Advertixing. All rights reserved.</span>
          <a
            href="mailto:hello@advertixing.com"
            style={{ color: "rgba(255,255,255,0.25)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.25)")}
          >
            hello@advertixing.com
          </a>
        </div>
      </div>
    </footer>
  );
}
