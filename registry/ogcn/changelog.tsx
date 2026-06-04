/**
 * changelog
 *
 * A release / changelog Open Graph image with a version pill, date, title, and
 * a checklist of highlights.
 *
 * Built for Satori / `next/og` — inline styles only.
 */

export interface ChangelogProps {
  version?: string;
  date?: string;
  title?: string;
  /** Up to ~4 highlight lines. */
  items?: string[];
  brand?: string;
  accent?: string;
}

export const Changelog = ({
  version = "v2.0",
  date = "June 2026",
  title = "What's new",
  items = [
    "Seven new OG image components",
    "Live in-browser previews",
    "One-line shadcn install",
  ],
  brand = "ogcn",
  accent = "#34d399",
}: ChangelogProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      backgroundImage:
        "radial-gradient(circle at 100% 0%, rgba(52,211,153,0.16), transparent 50%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "80px",
      width: "100%",
    }}
  >
    <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
      <div
        style={{
          backgroundColor: accent,
          borderRadius: "999px",
          color: "#0a0a0a",
          display: "flex",
          fontSize: "28px",
          fontWeight: 700,
          padding: "10px 22px",
        }}
      >
        {version}
      </div>
      <div style={{ color: "#a1a1aa", display: "flex", fontSize: "28px" }}>
        {date}
      </div>
    </div>

    <div
      style={{
        display: "flex",
        fontSize: "80px",
        fontWeight: 700,
        letterSpacing: "-0.03em",
        marginTop: "32px",
      }}
    >
      {title}
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "22px",
        marginTop: "44px",
      }}
    >
      {items.slice(0, 4).map((item) => (
        <div
          key={item}
          style={{ alignItems: "center", display: "flex", gap: "20px" }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "rgba(52,211,153,0.15)",
              borderRadius: "999px",
              display: "flex",
              height: "40px",
              justifyContent: "center",
              width: "40px",
            }}
          >
            {/* Inline SVG so the check renders regardless of the loaded font */}
            <svg
              fill="none"
              height="22"
              stroke={accent}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              viewBox="0 0 24 24"
              width="22"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <div style={{ color: "#e4e4e7", display: "flex", fontSize: "34px" }}>
            {item}
          </div>
        </div>
      ))}
    </div>

    <div
      style={{
        bottom: "64px",
        color: "#71717a",
        display: "flex",
        fontSize: "28px",
        fontWeight: 600,
        position: "absolute",
        right: "80px",
      }}
    >
      {brand}
    </div>
  </div>
);
