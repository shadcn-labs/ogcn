/**
 * terminal
 *
 * A minimal, technical statement Open Graph image — a small wordmark with an
 * accent side-bar at the top and a large, wide-tracked uppercase headline.
 * Modeled on the spare developer-tool cards (Stripe, early).
 *
 * Built for Satori / `next/og` — inline styles only.
 */

export interface TerminalProps {
  brand?: string;
  title?: string;
  /** Optional kicker shown under the title. */
  caption?: string;
  accent?: string;
}

export const Terminal = ({
  brand = "ogcn",
  title = "Ship beautiful OG images",
  caption = "npx shadcn@latest add ogcn",
  accent = "#22c55e",
}: TerminalProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
      <div
        style={{
          backgroundColor: accent,
          borderRadius: "4px",
          height: "44px",
          width: "6px",
        }}
      />
      <div style={{ display: "flex", fontSize: "34px", fontWeight: 700 }}>
        {brand}
      </div>
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 28 ? 84 : 104,
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        {title}
      </div>
      {caption ? (
        <div
          style={{
            alignSelf: "flex-start",
            backgroundColor: "rgba(250,250,250,0.06)",
            border: "1px solid rgba(250,250,250,0.12)",
            borderRadius: "10px",
            color: accent,
            display: "flex",
            fontSize: "30px",
            fontWeight: 600,
            marginTop: "36px",
            padding: "12px 24px",
          }}
        >
          {caption}
        </div>
      ) : null}
    </div>
  </div>
);
