/**
 * product
 *
 * A two-column product / pricing Open Graph image — brand and copy on the
 * left, a product shot on the right, with a price pill anchored to the bottom.
 *
 * Built for Satori / `next/og` — inline styles only. Pass an `image` URL for
 * the product shot; when omitted a soft gradient panel is shown instead.
 */

export interface ProductProps {
  /** Brand name shown in the top-left. */
  brand: string;
  title: string;
  description: string;
  /** Price string shown in the pill (e.g. "$49" or "Free"). */
  price: string;
  /** Product image URL. Must be absolute when rendered on the server. */
  image?: string;
  accent?: string;
}

export const Product = ({
  brand,
  title,
  description,
  price,
  image,
  accent,
}: ProductProps) => (
  <div
    style={{
      backgroundColor: "#09090b",
      color: "#fafafa",
      display: "flex",
      height: "100%",
      padding: "72px",
      width: "100%",
    }}
  >
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: "56px",
      }}
    >
      <div style={{ alignItems: "center", display: "flex", gap: "14px" }}>
        <div
          style={{
            backgroundColor: accent,
            borderRadius: "10px",
            height: "32px",
            width: "32px",
          }}
        />
        <div style={{ display: "flex", fontSize: "28px", fontWeight: 600 }}>
          {brand}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 64 : 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "560px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            color: "#a1a1aa",
            display: "flex",
            fontSize: "30px",
            lineHeight: 1.4,
            marginTop: "24px",
            maxWidth: "520px",
          }}
        >
          {description}
        </div>
      </div>

      <div
        style={{
          alignItems: "center",
          alignSelf: "flex-start",
          backgroundColor: accent,
          borderRadius: "999px",
          color: "#ffffff",
          display: "flex",
          fontSize: "32px",
          fontWeight: 700,
          padding: "14px 32px",
        }}
      >
        {price}
      </div>
    </div>

    <div
      style={{
        alignItems: "center",
        backgroundColor: "#18181b",
        backgroundImage: image
          ? `url(${image})`
          : "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",
        backgroundPosition: "center",
        backgroundSize: "486px 486px",
        border: "1px solid rgba(250,250,250,0.1)",
        borderRadius: "28px",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "486px",
      }}
    />
  </div>
);

Product.previewProps = {
  accent: "#6366f1",
  brand: "ogcn",
  description: "Copy-paste social cards rendered with next/og.",
  image: "",
  price: "$49",
  title: "The OG image toolkit",
} satisfies ProductProps;
