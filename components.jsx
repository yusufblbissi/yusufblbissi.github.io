/* ── Shared Components for Yousef Balbisi Portfolio ── */

/* ── Theme Definitions ── */
const THEMES = {
  gallery: {
    name: "Gallery Minimal",
    bg: "#FAF8F5",
    bgAlt: "#F2EDE8",
    text: "#1A1A1A",
    textMuted: "#6B6560",
    accent: "#C4A882",
    accentHover: "#B08E64",
    navBg: "rgba(250,248,245,0.95)",
    cardBg: "#FFFFFF",
    cardBorder: "#E8E2DA",
    heroOverlay: "rgba(250,248,245,0.6)",
    font: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'DM Sans', Helvetica, sans-serif",
  },
  dark: {
    name: "Dark Immersive",
    bg: "#0F0F0F",
    bgAlt: "#1A1917",
    text: "#F0EDE8",
    textMuted: "#9A958D",
    accent: "#D4A96A",
    accentHover: "#E0BB80",
    navBg: "rgba(15,15,15,0.95)",
    cardBg: "#1A1917",
    cardBorder: "#2E2C28",
    heroOverlay: "rgba(15,15,15,0.55)",
    font: "'Cormorant Garamond', Georgia, serif",
    fontBody: "'DM Sans', Helvetica, sans-serif",
  },
  warm: {
    name: "Warm Editorial",
    bg: "#F5EEE4",
    bgAlt: "#EAE0D2",
    text: "#2C2520",
    textMuted: "#7A6E63",
    accent: "#B85C38",
    accentHover: "#A04E2E",
    navBg: "rgba(245,238,228,0.95)",
    cardBg: "#FDF9F4",
    cardBorder: "#DDD4C6",
    heroOverlay: "rgba(245,238,228,0.5)",
    font: "'Playfair Display', Georgia, serif",
    fontBody: "'DM Sans', Helvetica, sans-serif",
  },
};

/* ── Sample artwork data ── */
const ARTWORKS = [
  { id: 1, title: "Penguin Under Stars", medium: "Pen & Ink on Paper", year: "2024", price: "$350", src: "assets/penguin-ink.jpeg", category: "ink" },
  { id: 2, title: "Window to the Mountains", medium: "Pen & Ink with Color", year: "2024", price: "$420", src: "assets/window-mountains.jpeg", category: "ink" },
  { id: 3, title: "Blue Eyes", medium: "Pencil & Color on Paper", year: "2024", price: "$500", src: "assets/blue-eyes.jpeg", category: "portrait" },
  { id: 4, title: "Girl with Bandage", medium: "Pencil on Paper", year: "2024", price: "$480", src: "assets/girl-portrait.jpeg", category: "portrait" },
  { id: 5, title: "Cherry Blossom Tree", medium: "Acrylic on Canvas", year: "2024", price: "$680", src: "assets/cherry-tree.jpeg", category: "acrylic" },
];

/* ── Placeholder Component ── */
function ArtPlaceholder({ text, theme, style }) {
  const t = THEMES[theme];
  return (
    <div style={{
      width: "100%", height: "100%",
      background: `repeating-linear-gradient(135deg, ${t.cardBorder}22, ${t.cardBorder}22 10px, transparent 10px, transparent 20px)`,
      backgroundColor: t.bgAlt,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "monospace", fontSize: 13, color: t.textMuted,
      textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.6,
      ...style,
    }}>
      {text}
    </div>
  );
}

/* ── Navigation ── */
function Nav({ theme, currentPage, setPage }) {
  const t = THEMES[theme];
  const links = ["gallery", "about", "shop", "contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: t.navBg, backdropFilter: "blur(12px)",
      borderBottom: `1px solid ${t.cardBorder}`,
      padding: "0 40px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div
        onClick={() => setPage("gallery")}
        style={{ cursor: "pointer", fontFamily: t.font, fontSize: 22, fontWeight: 600, color: t.text, letterSpacing: 1 }}
      >
        Yousef Balbisi
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {links.map(l => (
          <div
            key={l}
            onClick={() => setPage(l)}
            style={{
              cursor: "pointer", fontFamily: t.fontBody, fontSize: 14,
              textTransform: "uppercase", letterSpacing: 2,
              color: currentPage === l ? t.accent : t.textMuted,
              borderBottom: currentPage === l ? `2px solid ${t.accent}` : "2px solid transparent",
              paddingBottom: 4,
              transition: "all 0.3s",
            }}
            onMouseEnter={e => { e.target.style.color = t.accent; }}
            onMouseLeave={e => { if (currentPage !== l) e.target.style.color = t.textMuted; }}
          >
            {l}
          </div>
        ))}
      </div>
    </nav>
  );
}

/* ── Hero Section ── */
function Hero({ theme, setPage }) {
  const t = THEMES[theme];
  return (
    <section style={{
      marginTop: 64, height: "calc(100vh - 64px)", display: "flex", alignItems: "center", justifyContent: "center",
      background: t.bg, position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url(assets/penguin-ink.jpeg)",
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: theme === "dark" ? 0.15 : 0.1,
        filter: theme === "dark" ? "none" : "grayscale(100%)",
      }}></div>
      <div style={{ position: "relative", textAlign: "center", maxWidth: 700, padding: 40 }}>
        <h1 style={{
          fontFamily: t.font, fontSize: 64, fontWeight: 400,
          color: t.text, lineHeight: 1.15, margin: 0,
          letterSpacing: -1,
        }}>
          Stories told<br />through ink & color
        </h1>
        <p style={{
          fontFamily: t.fontBody, fontSize: 18, color: t.textMuted,
          marginTop: 24, lineHeight: 1.7, maxWidth: 500, marginLeft: "auto", marginRight: "auto",
        }}>
          Palestinian roots, Syrian memories, Lebanese light — each piece carries a world between its lines.
        </p>
        <div
          onClick={() => setPage("gallery")}
          style={{
            display: "inline-block", marginTop: 40, cursor: "pointer",
            fontFamily: t.fontBody, fontSize: 14, textTransform: "uppercase", letterSpacing: 3,
            color: t.accent, borderBottom: `1px solid ${t.accent}`, paddingBottom: 6,
          }}
        >
          View the collection
        </div>
      </div>
    </section>
  );
}

/* ── Gallery Page ── */
function GalleryPage({ theme, setSelectedArt }) {
  const t = THEMES[theme];
  const [filter, setFilter] = React.useState("all");
  const cats = ["all", "ink", "acrylic", "portrait"];
  const filtered = filter === "all" ? ARTWORKS : ARTWORKS.filter(a => a.category === filter);

  return (
    <section style={{ marginTop: 64, padding: "60px 40px 80px", background: t.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: t.font, fontSize: 42, fontWeight: 400, color: t.text, margin: "0 0 12px" }}>Gallery</h2>
        <p style={{ fontFamily: t.fontBody, fontSize: 16, color: t.textMuted, margin: "0 0 40px" }}>Selected works in pen, ink, and acrylic</p>

        <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
          {cats.map(c => (
            <button key={c} onClick={() => setFilter(c)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: t.fontBody, fontSize: 13, textTransform: "uppercase", letterSpacing: 2,
              color: filter === c ? t.accent : t.textMuted,
              borderBottom: filter === c ? `2px solid ${t.accent}` : "2px solid transparent",
              paddingBottom: 4, transition: "all 0.3s",
            }}>
              {c}
            </button>
          ))}
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: 24,
        }}>
          {filtered.map(art => (
            <ArtCard key={art.id} art={art} theme={theme} onClick={() => setSelectedArt(art)} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ArtCard({ art, theme, onClick }) {
  const t = THEMES[theme];
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer", borderRadius: 4, overflow: "hidden",
        background: t.cardBg, border: `1px solid ${t.cardBorder}`,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? `0 12px 32px ${t.text}15` : "none",
        transition: "all 0.35s ease",
      }}
    >
      <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
        {art.src ? (
          <img src={art.src} alt={art.title} style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hovered ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.5s ease",
          }} />
        ) : (
          <ArtPlaceholder text={art.placeholder} theme={theme} />
        )}
      </div>
      <div style={{ padding: "16px 20px" }}>
        <div style={{ fontFamily: t.font, fontSize: 18, color: t.text, fontWeight: 500 }}>{art.title}</div>
        <div style={{ fontFamily: t.fontBody, fontSize: 13, color: t.textMuted, marginTop: 4 }}>{art.medium} · {art.year}</div>
      </div>
    </div>
  );
}

/* ── Lightbox ── */
function Lightbox({ art, theme, onClose }) {
  const t = THEMES[theme];
  if (!art) return null;
  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 200,
      background: theme === "dark" ? "rgba(0,0,0,0.92)" : "rgba(0,0,0,0.85)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 40, cursor: "pointer",
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        display: "flex", gap: 40, maxWidth: 1000, width: "100%",
        alignItems: "center", cursor: "default",
      }}>
        <div style={{ flex: "1 1 60%", maxHeight: "80vh", borderRadius: 4, overflow: "hidden" }}>
          {art.src ? (
            <img src={art.src} alt={art.title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          ) : (
            <ArtPlaceholder text={art.placeholder} theme="dark" style={{ minHeight: 400 }} />
          )}
        </div>
        <div style={{ flex: "1 1 35%", color: "#F0EDE8" }}>
          <h3 style={{ fontFamily: THEMES.gallery.font, fontSize: 32, fontWeight: 400, margin: 0 }}>{art.title}</h3>
          <p style={{ fontFamily: THEMES.gallery.fontBody, fontSize: 15, color: "#9A958D", marginTop: 8 }}>{art.medium} · {art.year}</p>
          <p style={{ fontFamily: THEMES.gallery.fontBody, fontSize: 24, color: "#D4A96A", marginTop: 24 }}>{art.price}</p>
          <button style={{
            marginTop: 24, padding: "14px 32px", background: "none",
            border: "1px solid #D4A96A", color: "#D4A96A", cursor: "pointer",
            fontFamily: THEMES.gallery.fontBody, fontSize: 13, textTransform: "uppercase",
            letterSpacing: 2, borderRadius: 2, transition: "all 0.3s",
          }}
          onMouseEnter={e => { e.target.style.background = "#D4A96A"; e.target.style.color = "#0F0F0F"; }}
          onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = "#D4A96A"; }}
          >
            Inquire about this piece
          </button>
          <div onClick={onClose} style={{
            marginTop: 40, fontFamily: THEMES.gallery.fontBody, fontSize: 13,
            color: "#9A958D", cursor: "pointer", textTransform: "uppercase", letterSpacing: 2,
          }}>← Back to gallery</div>
        </div>
      </div>
    </div>
  );
}

/* ── About Page ── */
function AboutPage({ theme }) {
  const t = THEMES[theme];
  return (
    <section style={{ marginTop: 64, padding: "80px 40px", background: t.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" }}>
        <div>
          <div style={{
            aspectRatio: "3/4", borderRadius: 4, overflow: "hidden",
            background: `repeating-linear-gradient(135deg, ${t.cardBorder}22, ${t.cardBorder}22 10px, transparent 10px, transparent 20px)`,
            backgroundColor: t.bgAlt,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "monospace", fontSize: 13, color: t.textMuted,
          }}>
            Artist portrait photo
          </div>
        </div>
        <div>
          <h2 style={{ fontFamily: t.font, fontSize: 42, fontWeight: 400, color: t.text, margin: "0 0 8px" }}>About</h2>
          <div style={{ width: 40, height: 2, background: t.accent, marginBottom: 32 }}></div>
          <p style={{ fontFamily: t.fontBody, fontSize: 16, color: t.text, lineHeight: 1.8, margin: "0 0 20px" }}>
            I am Yousef Balbisi, a Palestinian artist born in Syria and raised between worlds. With a Lebanese mother and a life shaped by the landscapes of Damascus, Beirut, and the stories carried across borders, my work is a conversation between memory and presence.
          </p>
          <p style={{ fontFamily: t.fontBody, fontSize: 16, color: t.text, lineHeight: 1.8, margin: "0 0 20px" }}>
            My practice moves between pen and ink — where every line is deliberate and permanent — and acrylic painting, where color becomes emotion. I draw portraits that search for truth in a face, and landscapes that hold the weight of places I carry with me.
          </p>
          <p style={{ fontFamily: t.fontBody, fontSize: 16, color: t.text, lineHeight: 1.8, margin: "0 0 32px" }}>
            Based in Lebanon, I work from a small studio where the Mediterranean light meets the ink on my desk. Each piece is an act of remembering, of insisting that beauty survives.
          </p>
          <div style={{ fontFamily: t.fontBody, fontSize: 13, color: t.textMuted, textTransform: "uppercase", letterSpacing: 2 }}>
            Beirut, Lebanon
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Shop Page ── */
function ShopPage({ theme, setSelectedArt }) {
  const t = THEMES[theme];
  return (
    <section style={{ marginTop: 64, padding: "60px 40px 80px", background: t.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2 style={{ fontFamily: t.font, fontSize: 42, fontWeight: 400, color: t.text, margin: "0 0 12px" }}>Shop</h2>
        <p style={{ fontFamily: t.fontBody, fontSize: 16, color: t.textMuted, margin: "0 0 40px" }}>Original works available for purchase. Contact for commissions.</p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 24,
        }}>
          {ARTWORKS.map(art => (
            <div key={art.id} onClick={() => setSelectedArt(art)} style={{
              cursor: "pointer", borderRadius: 4, overflow: "hidden",
              background: t.cardBg, border: `1px solid ${t.cardBorder}`,
              transition: "all 0.3s",
            }}>
              <div style={{ aspectRatio: "1/1", overflow: "hidden" }}>
                {art.src ? (
                  <img src={art.src} alt={art.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <ArtPlaceholder text={art.placeholder} theme={theme} />
                )}
              </div>
              <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div>
                  <div style={{ fontFamily: t.font, fontSize: 17, color: t.text }}>{art.title}</div>
                  <div style={{ fontFamily: t.fontBody, fontSize: 12, color: t.textMuted, marginTop: 2 }}>{art.medium}</div>
                </div>
                <div style={{ fontFamily: t.fontBody, fontSize: 16, color: t.accent, fontWeight: 500 }}>{art.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Contact Page ── */
function ContactPage({ theme }) {
  const t = THEMES[theme];
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ marginTop: 64, padding: "80px 40px", background: t.bg, minHeight: "100vh" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h2 style={{ fontFamily: t.font, fontSize: 42, fontWeight: 400, color: t.text, margin: "0 0 8px" }}>Get in touch</h2>
        <div style={{ width: 40, height: 2, background: t.accent, marginBottom: 16 }}></div>
        <p style={{ fontFamily: t.fontBody, fontSize: 16, color: t.textMuted, margin: "0 0 40px", lineHeight: 1.7 }}>
          For commissions, purchases, or exhibition inquiries — I'd love to hear from you.
        </p>
        {sent ? (
          <div style={{
            padding: 40, textAlign: "center", background: t.cardBg,
            border: `1px solid ${t.cardBorder}`, borderRadius: 4,
          }}>
            <div style={{ fontFamily: t.font, fontSize: 28, color: t.text }}>Thank you</div>
            <p style={{ fontFamily: t.fontBody, fontSize: 15, color: t.textMuted, marginTop: 8 }}>I'll respond within a few days.</p>
          </div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[{ label: "Name", type: "text" }, { label: "Email", type: "email" }].map(f => (
              <div key={f.label}>
                <label style={{ fontFamily: t.fontBody, fontSize: 12, color: t.textMuted, textTransform: "uppercase", letterSpacing: 2, display: "block", marginBottom: 8 }}>{f.label}</label>
                <input type={f.type} required style={{
                  width: "100%", padding: "12px 16px", background: t.cardBg,
                  border: `1px solid ${t.cardBorder}`, borderRadius: 2,
                  fontFamily: t.fontBody, fontSize: 15, color: t.text,
                  outline: "none", boxSizing: "border-box",
                  transition: "border 0.3s",
                }}
                onFocus={e => e.target.style.borderColor = t.accent}
                onBlur={e => e.target.style.borderColor = t.cardBorder}
                />
              </div>
            ))}
            <div>
              <label style={{ fontFamily: t.fontBody, fontSize: 12, color: t.textMuted, textTransform: "uppercase", letterSpacing: 2, display: "block", marginBottom: 8 }}>Message</label>
              <textarea required rows={5} style={{
                width: "100%", padding: "12px 16px", background: t.cardBg,
                border: `1px solid ${t.cardBorder}`, borderRadius: 2,
                fontFamily: t.fontBody, fontSize: 15, color: t.text,
                outline: "none", resize: "vertical", boxSizing: "border-box",
                transition: "border 0.3s",
              }}
              onFocus={e => e.target.style.borderColor = t.accent}
              onBlur={e => e.target.style.borderColor = t.cardBorder}
              ></textarea>
            </div>
            <button type="submit" style={{
              padding: "14px 32px", background: t.accent, border: "none",
              color: "#fff", cursor: "pointer", borderRadius: 2,
              fontFamily: t.fontBody, fontSize: 13, textTransform: "uppercase",
              letterSpacing: 2, transition: "background 0.3s", alignSelf: "flex-start",
            }}
            onMouseEnter={e => e.target.style.background = t.accentHover}
            onMouseLeave={e => e.target.style.background = t.accent}
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ── Footer ── */
function Footer({ theme }) {
  const t = THEMES[theme];
  return (
    <footer style={{
      padding: "40px", background: t.bgAlt,
      borderTop: `1px solid ${t.cardBorder}`,
      textAlign: "center",
    }}>
      <div style={{ fontFamily: t.font, fontSize: 18, color: t.text }}>Yousef Balbisi</div>
      <div style={{ fontFamily: t.fontBody, fontSize: 13, color: t.textMuted, marginTop: 8 }}>
        Palestinian artist · Beirut, Lebanon
      </div>
    </footer>
  );
}

/* ── Export ── */
Object.assign(window, {
  THEMES, ARTWORKS,
  ArtPlaceholder, Nav, Hero, GalleryPage, ArtCard, Lightbox,
  AboutPage, ShopPage, ContactPage, Footer,
});
