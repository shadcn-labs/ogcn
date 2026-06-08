/**
 * blog
 *
 * An article / blog post Open Graph image with a category badge, headline,
 * excerpt, and an author row (avatar, name, and meta).
 *
 * Built for Satori / `next/og` — inline styles only. Pass an `avatar` URL to
 * use a real image; otherwise the author's initials are rendered in a circle.
 */

export interface BlogProps {
  category: string;
  title: string;
  excerpt: string;
  author: string;
  /** Meta line shown next to the author (e.g. date · read time). */
  meta: string;
  /** Optional avatar image URL. Falls back to author initials. */
  avatar?: string;
  accent?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const Blog = ({
  category,
  title,
  excerpt,
  author,
  meta,
  avatar,
  accent,
}: BlogProps) => (
  <div
    style={{
      backgroundColor: "#ffffff",
      color: "#0a0a0a",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      padding: "80px",
      width: "100%",
    }}
  >
    <div
      style={{
        alignSelf: "flex-start",
        backgroundColor: accent,
        borderRadius: "999px",
        color: "#ffffff",
        display: "flex",
        fontSize: "26px",
        fontWeight: 600,
        letterSpacing: "0.02em",
        padding: "10px 22px",
        textTransform: "uppercase",
      }}
    >
      {category}
    </div>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 48 ? 64 : 78,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          maxWidth: "1000px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#52525b",
          display: "flex",
          fontSize: "34px",
          lineHeight: 1.4,
          marginTop: "28px",
          maxWidth: "920px",
        }}
      >
        {excerpt}
      </div>
    </div>

    <div style={{ alignItems: "center", display: "flex", gap: "20px" }}>
      {avatar ? (
        <img
          alt={author}
          src={avatar}
          width={72}
          height={72}
          style={{ borderRadius: "999px" }}
        />
      ) : (
        <div
          style={{
            alignItems: "center",
            backgroundColor: accent,
            borderRadius: "999px",
            color: "#ffffff",
            display: "flex",
            fontSize: "30px",
            fontWeight: 700,
            height: "72px",
            justifyContent: "center",
            width: "72px",
          }}
        >
          {initials(author)}
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: "30px", fontWeight: 600 }}>
          {author}
        </div>
        <div style={{ color: "#71717a", display: "flex", fontSize: "24px" }}>
          {meta}
        </div>
      </div>
    </div>
  </div>
);

Blog.previewProps = {
  accent: "#7c3aed",
  author: "Ada Lovelace",
  avatar: "",
  category: "Engineering",
  excerpt:
    "A deep dive into Satori, the next/og runtime, and shipping fast cards.",
  meta: "Jun 5, 2026 · 6 min read",
  title: "How we generate social images at the edge",
} satisfies BlogProps;
