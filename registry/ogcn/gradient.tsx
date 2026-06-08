/**
 * gradient
 *
 * A bold, colorful Open Graph image with a vibrant gradient backdrop and a
 * frosted glass content panel.
 *
 * Built for Satori / `next/og` — inline styles only.
 */

export interface GradientProps {
  label: string;
  title: string;
  description: string;
  /** CSS gradient applied to the background. */
  gradient?: string;
}

export const Gradient = ({
  label,
  title,
  description,
  gradient,
}: GradientProps) => (
  <div
    style={{
      backgroundImage: gradient,
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "center",
      padding: "80px",
      width: "100%",
    }}
  >
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "36px",
        display: "flex",
        flexDirection: "column",
        padding: "64px",
      }}
    >
      <div
        style={{
          alignSelf: "flex-start",
          backgroundColor: "rgba(0,0,0,0.25)",
          borderRadius: "999px",
          display: "flex",
          fontSize: "26px",
          fontWeight: 600,
          letterSpacing: "0.02em",
          padding: "10px 22px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 36 ? 76 : 92,
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginTop: "36px",
          maxWidth: "920px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "rgba(255,255,255,0.9)",
          display: "flex",
          fontSize: "36px",
          lineHeight: 1.35,
          marginTop: "32px",
          maxWidth: "820px",
        }}
      >
        {description}
      </div>
    </div>
  </div>
);

Gradient.previewProps = {
  description: "Drop-in OG image components with a single component import.",
  gradient: "linear-gradient(135deg, #6d28d9 0%, #db2777 50%, #f59e0b 100%)",
  label: "Announcing",
  title: "Ship a stunning social card",
} satisfies GradientProps;
