/* eslint-disable @next/next/no-img-element */
export interface ProfileProps {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  website: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

export const Profile = ({ name, role, bio, avatar, website }: ProfileProps) => (
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
          backgroundColor: "#f43f5e",
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
          color: "#f43f5e",
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
