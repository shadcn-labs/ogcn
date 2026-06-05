/**
 * logo
 *
 * A centered brand / wordmark Open Graph image — a logo tile, a large
 * wordmark, and an optional tagline on a soft gradient field. Modeled on the
 * common "just the brand" social cards (OpenAI, area, TWYG).
 *
 * Built for Satori / `next/og` — inline styles only.
 */

export interface LogoProps {
  /** The wordmark text. */
  brand?: string;
  /** Optional tagline shown under the wordmark. */
  tagline?: string;
  /** Monogram shown in the logo tile. Defaults to the brand's first letter. */
  monogram?: string;
  accent?: string;
  /** Background CSS color or gradient. */
  background?: string;
}

export const Logo = ({
  brand = "ogcn",
  tagline = "Open Graph images, built on Satori",
  monogram,
  accent = "#7c3aed",
  background = "#09090b",
}: LogoProps) => {
  const isColor = background.startsWith("#");

  return (
    <div
      style={{
        alignItems: "center",
        backgroundColor: isColor ? background : "#09090b",
        backgroundImage: isColor
          ? `radial-gradient(circle at 50% 50%, ${accent}33, transparent 60%)`
          : background,
        color: "#fafafa",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: accent,
          borderRadius: "28px",
          boxShadow: `0 24px 80px ${accent}55`,
          color: "#ffffff",
          display: "flex",
          fontSize: "72px",
          fontWeight: 800,
          height: "140px",
          justifyContent: "center",
          width: "140px",
        }}
      >
        {monogram ?? brand.charAt(0).toUpperCase()}
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "96px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          marginTop: "44px",
        }}
      >
        {brand}
      </div>

      {tagline ? (
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: "32px",
            marginTop: "16px",
          }}
        >
          {tagline}
        </div>
      ) : null}
    </div>
  );
};
