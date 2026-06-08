/**
 * stat
 *
 * A metric / dashboard Open Graph image — an eyebrow label, one oversized
 * number with an optional trend pill, and a caption, with a brand footer.
 *
 * Built for Satori / `next/og` — inline styles only.
 */

export interface StatProps {
  /** Small eyebrow label shown above the value. */
  label: string;
  /** The headline metric (e.g. "10M+"). */
  value: string;
  /** Caption shown under the value. */
  caption: string;
  /** Optional trend string shown in a pill (e.g. "+24%"). */
  trend?: string;
  brand: string;
  accent?: string;
}

export const Stat = ({
  label,
  value,
  caption,
  trend,
  brand,
  accent,
}: StatProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      backgroundImage:
        "radial-gradient(circle at 50% 120%, rgba(34,197,94,0.18), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "96px",
      width: "100%",
    }}
  >
    <div
      style={{
        color: "#a1a1aa",
        display: "flex",
        fontSize: "30px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
      }}
    >
      {label}
    </div>

    <div
      style={{
        alignItems: "flex-end",
        display: "flex",
        gap: "28px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: "200px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      {trend ? (
        <div
          style={{
            alignItems: "center",
            backgroundColor: "rgba(34,197,94,0.15)",
            borderRadius: "999px",
            color: accent,
            display: "flex",
            fontSize: "34px",
            fontWeight: 700,
            gap: "10px",
            marginBottom: "36px",
            padding: "10px 22px",
          }}
        >
          {/* Upward trend arrow — inline SVG so it renders regardless of font */}
          <svg
            fill="none"
            height="26"
            stroke={accent}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
            width="26"
          >
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
          {trend}
        </div>
      ) : null}
    </div>

    <div
      style={{
        color: "#d4d4d8",
        display: "flex",
        fontSize: "34px",
        lineHeight: 1.4,
        marginTop: "28px",
        maxWidth: "820px",
      }}
    >
      {caption}
    </div>

    <div
      style={{
        alignItems: "center",
        bottom: "56px",
        color: "#71717a",
        display: "flex",
        fontSize: "26px",
        fontWeight: 600,
        gap: "12px",
        position: "absolute",
      }}
    >
      <div
        style={{
          backgroundColor: accent,
          borderRadius: "8px",
          height: "24px",
          width: "24px",
        }}
      />
      {brand}
    </div>
  </div>
);

Stat.previewProps = {
  accent: "#22c55e",
  brand: "ogcn",
  caption: "Open Graph images generated with next/og this year.",
  label: "Images rendered",
  trend: "+24%",
  value: "10M+",
} satisfies StatProps;
