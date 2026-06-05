/**
 * editorial
 *
 * A poster-style Open Graph image with oversized display type and a large,
 * faint "ghost" word set behind the content. Modeled on the expressive
 * editorial cards (Sculpting Harmony, chevez, Jun Ioneda).
 *
 * Built for Satori / `next/og` — inline styles only.
 */

export interface EditorialProps {
  /** Small kicker / section label. */
  kicker?: string;
  title?: string;
  /** Author or brand shown in the footer. */
  author?: string;
  /** Meta line shown next to the author (e.g. an issue or date). */
  meta?: string;
  /** Large faint word set behind the title. Defaults to the first word. */
  ghost?: string;
  accent?: string;
}

export const Editorial = ({
  kicker = "Essay",
  title = "Designing at the edge of the canvas",
  author = "ogcn",
  meta = "Issue 04",
  ghost,
  accent = "#e11d48",
}: EditorialProps) => (
  <div
    style={{
      backgroundColor: "#f5f1e9",
      color: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      overflow: "hidden",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Oversized faint word behind the content */}
    <div
      style={{
        bottom: "-60px",
        color: "rgba(10,10,10,0.05)",
        display: "flex",
        fontSize: "420px",
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 1,
        position: "absolute",
        right: "-20px",
      }}
    >
      {ghost ?? title.split(" ")[0]}
    </div>

    <div
      style={{
        alignItems: "center",
        alignSelf: "flex-start",
        backgroundColor: accent,
        borderRadius: "999px",
        color: "#ffffff",
        display: "flex",
        fontSize: "26px",
        fontWeight: 700,
        letterSpacing: "0.04em",
        padding: "10px 24px",
        textTransform: "uppercase",
      }}
    >
      {kicker}
    </div>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 36 ? 96 : 120,
        fontWeight: 800,
        letterSpacing: "-0.04em",
        lineHeight: 0.98,
        maxWidth: "1000px",
      }}
    >
      {title}
    </div>

    <div
      style={{
        alignItems: "center",
        borderTop: "2px solid rgba(10,10,10,0.15)",
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "28px",
      }}
    >
      <div style={{ display: "flex", fontSize: "32px", fontWeight: 700 }}>
        {author}
      </div>
      <div style={{ color: "#52525b", display: "flex", fontSize: "30px" }}>
        {meta}
      </div>
    </div>
  </div>
);
