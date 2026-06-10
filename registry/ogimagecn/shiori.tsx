export interface ShioriProps {
  title: string;
  description: string;
  accent?: string;
  accentSecondary?: string;
}

export const Shiori = ({
  title,
  description,
  accent,
  accentSecondary,
}: ShioriProps) => (
  <div
    style={{
      backgroundColor: "#faf6f1",
      color: "#1a1a1a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "60px",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        background: `linear-gradient(135deg, ${accent}, ${accentSecondary})`,
        borderRadius: "50%",
        height: "96px",
        width: "96px",
      }}
    />

    <div
      style={{
        alignItems: "start",
        bottom: "60px",
        display: "flex",
        justifyContent: "space-between",
        left: "60px",
        position: "absolute",
        right: "60px",
      }}
    >
      <div
        style={{
          flex: "0.2",
          fontSize: "64px",
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: "#8b7e74",
          fontSize: "64px",
          fontWeight: 500,
          lineHeight: 1.3,
          maxWidth: "600px",
        }}
      >
        {description}
      </div>

      <div style={{ flex: "0.2" }} />
    </div>
  </div>
);

Shiori.previewProps = {
  accent: "#f97316",
  accentSecondary: "#ea580c",
  description: "A beautifully simple read-it-later app",
  title: "Shiori",
} satisfies ShioriProps;
