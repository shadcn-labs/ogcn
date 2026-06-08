/**
 * profile
 *
 * A personal / portfolio Open Graph image — a circular avatar beside a name,
 * role, short bio, and a website pill.
 *
 * Built for Satori / `next/og` — inline styles only. Pass an `avatar` URL to
 * use a real image; otherwise the person's initials are rendered in a circle.
 */

export interface ProfileProps {
  name: string;
  /** Role / title shown under the name. */
  role: string;
  /** Short supporting bio. */
  bio: string;
  /** Optional avatar image URL. Falls back to initials. */
  avatar?: string;
  /** Website shown in the pill (e.g. "aniketpawar.com"). */
  website: string;
  accent?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const Profile = ({
  name,
  role,
  bio,
  avatar,
  website,
  accent,
}: ProfileProps) => (
  <div
    style={{
      alignItems: "center",
      backgroundColor: "#18181b",
      backgroundImage:
        "radial-gradient(circle at 0% 100%, rgba(244,63,94,0.18), transparent 55%)",
      color: "#fafafa",
      display: "flex",
      gap: "64px",
      height: "100%",
      padding: "80px",
      width: "100%",
    }}
  >
    {avatar ? (
      <img
        alt={name}
        height={300}
        src={avatar}
        style={{
          border: "4px solid rgba(250,250,250,0.15)",
          borderRadius: "999px",
        }}
        width={300}
      />
    ) : (
      <div
        style={{
          alignItems: "center",
          backgroundColor: accent,
          border: "4px solid rgba(250,250,250,0.15)",
          borderRadius: "999px",
          color: "#ffffff",
          display: "flex",
          flexShrink: 0,
          fontSize: "120px",
          fontWeight: 700,
          height: "300px",
          justifyContent: "center",
          width: "300px",
        }}
      >
        {initials(name)}
      </div>
    )}

    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          display: "flex",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
        }}
      >
        {name}
      </div>
      <div
        style={{
          color: accent,
          display: "flex",
          fontSize: "34px",
          fontWeight: 600,
          marginTop: "12px",
        }}
      >
        {role}
      </div>
      <div
        style={{
          color: "#a1a1aa",
          display: "flex",
          fontSize: "28px",
          lineHeight: 1.4,
          marginTop: "24px",
          maxWidth: "560px",
        }}
      >
        {bio}
      </div>
      <div
        style={{
          alignItems: "center",
          alignSelf: "flex-start",
          backgroundColor: "rgba(250,250,250,0.06)",
          border: "1px solid rgba(250,250,250,0.12)",
          borderRadius: "999px",
          color: "#d4d4d8",
          display: "flex",
          fontSize: "26px",
          fontWeight: 500,
          marginTop: "32px",
          padding: "10px 24px",
        }}
      >
        {website}
      </div>
    </div>
  </div>
);

Profile.previewProps = {
  accent: "#f43f5e",
  avatar: "",
  bio: "Building tools for the open web. Writing about design systems, performance, and shipping fast.",
  name: "Ada Lovelace",
  role: "Founder & Engineer",
  website: "ada.dev",
} satisfies ProfileProps;
