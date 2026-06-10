export interface OwnerProps {
  eyebrow: string;
  title: string;
  brand: string;
  images?: string[];
}

const getRotation = (i: number) => {
  if (i === 0) {
    return -3;
  }
  if (i === 2) {
    return 3;
  }
  return 0;
};

export const Owner = ({
  eyebrow,
  title,
  brand,
  images = [
    "https://picsum.photos/id/1005/400/400",
    "https://picsum.photos/id/1012/400/400",
    "https://picsum.photos/id/1025/400/400",
  ],
}: OwnerProps) => (
  <div
    style={{
      backgroundColor: "#f5f5f5",
      color: "#1a1a1a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      padding: "80px",
      position: "relative",
      width: "100%",
    }}
  >
    <div
      style={{
        alignItems: "center",
        display: "flex",
        gap: "12px",
        position: "absolute",
        right: "80px",
        top: "80px",
      }}
    >
      <svg
        height="40"
        viewBox="0 0 24 24"
        width="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a10 10 0 0 0-10 10c0 7.5 10 12 10 12s10-4.5 10-12A10 10 0 0 0 12 2z" />
      </svg>
      <span
        style={{
          fontSize: "32px",
          fontWeight: 700,
        }}
      >
        {brand}
      </span>
    </div>

    <div
      style={{
        color: "#a3a3a3",
        display: "flex",
        fontSize: "64px",
        fontWeight: 400,
        letterSpacing: "-0.02em",
      }}
    >
      {eyebrow}
    </div>

    <div
      style={{
        display: "flex",
        fontSize: title.length > 50 ? 72 : 80,
        fontWeight: 700,
        letterSpacing: "-0.03em",
        lineHeight: 1.05,
        marginTop: "16px",
        maxWidth: "900px",
      }}
    >
      {title}
    </div>

    <div
      style={{
        bottom: "60px",
        display: "flex",
        gap: "28px",
        left: "80px",
        position: "absolute",
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            borderRadius: "24px",
            height: "320px",
            overflow: "hidden",
            transform: `rotate(${getRotation(i)}deg)`,
            width: "300px",
          }}
        >
          <img
            alt=""
            src={src}
            style={{
              height: "100%",
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

Owner.previewProps = {
  brand: "Owner",
  eyebrow: "Meet Owner.",
  images: [
    "https://picsum.photos/id/1005/400/400",
    "https://picsum.photos/id/1012/400/400",
    "https://picsum.photos/id/1025/400/400",
  ],
  title: "We make online growth easy for restaurants.",
} satisfies OwnerProps;
