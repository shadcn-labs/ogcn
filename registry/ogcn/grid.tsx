/**
 * grid
 *
 * A framed, technical-looking Open Graph image with a dashed border grid and
 * a corner brand mark. Great for docs, dev tools, and changelogs.
 *
 * Built for Satori / `next/og` — inline styles only, renders identically in
 * the browser and as a server-generated PNG.
 */

export interface GridProps {
  title?: string;
  description?: string;
  brand?: string;
  accent?: string;
}

export const Grid = ({
  title = "Build your own OG images",
  description = "Composable components powered by Satori and the next/og runtime.",
  brand = "ogcn",
  accent = "#22d3ee",
}: GridProps) => (
  <div
    style={{
      backgroundColor: "#0a0a0a",
      color: "#ffffff",
      display: "flex",
      height: "100%",
      position: "relative",
      width: "100%",
    }}
  >
    {/* Vertical guide lines */}
    <div
      style={{
        borderLeft: "1px dashed #292929",
        bottom: 0,
        left: "64px",
        position: "absolute",
        top: 0,
        width: "1px",
      }}
    />
    <div
      style={{
        borderLeft: "1px dashed #292929",
        bottom: 0,
        position: "absolute",
        right: "64px",
        top: 0,
        width: "1px",
      }}
    />
    {/* Horizontal guide lines */}
    <div
      style={{
        borderTop: "1px dashed #292929",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
        top: "64px",
      }}
    />
    <div
      style={{
        borderTop: "1px dashed #292929",
        bottom: "64px",
        height: "1px",
        left: 0,
        position: "absolute",
        right: 0,
      }}
    />

    {/* Content */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        left: "128px",
        position: "absolute",
        right: "128px",
        top: "128px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: title.length > 36 ? 68 : 84,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          maxWidth: "880px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#a3a3a3",
          display: "flex",
          fontSize: "34px",
          lineHeight: 1.4,
          marginTop: "32px",
          maxWidth: "780px",
        }}
      >
        {description}
      </div>
    </div>

    {/* Brand mark, bottom-right inside the frame */}
    <div
      style={{
        alignItems: "center",
        bottom: "104px",
        display: "flex",
        fontSize: "30px",
        fontWeight: 600,
        gap: "14px",
        position: "absolute",
        right: "104px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          backgroundColor: accent,
          borderRadius: "12px",
          color: "#0a0a0a",
          display: "flex",
          fontSize: "26px",
          fontWeight: 800,
          height: "44px",
          justifyContent: "center",
          width: "44px",
        }}
      >
        {brand.charAt(0).toUpperCase()}
      </div>
      {brand}
    </div>
  </div>
);
