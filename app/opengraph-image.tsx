import { ImageResponse } from "next/og";
import { CV } from "@/lib/data";

// Social share card (WhatsApp, LinkedIn, iMessage, Slack, etc.).
export const alt = `${CV.name} — ${CV.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SITE = "portfolio-azure-eight-54.vercel.app";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          backgroundColor: "#0A0A0F",
          backgroundImage:
            "radial-gradient(1000px circle at 12% 8%, rgba(34,211,238,0.22), transparent 45%), radial-gradient(1000px circle at 92% 96%, rgba(129,140,248,0.20), transparent 45%)",
        }}
      >
        {/* Top block */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Availability pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              alignSelf: "flex-start",
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              backgroundColor: "rgba(255,255,255,0.04)",
              color: "#C7CCD6",
              fontSize: 24,
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                backgroundColor: "#34D399",
              }}
            />
            {CV.availability}
            <span style={{ color: "#5B616E" }}>·</span>
            {CV.location}
          </div>

          {/* Name */}
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 82,
              fontWeight: 700,
              letterSpacing: -2,
              color: "#F5F7FA",
            }}
          >
            {CV.name}
          </div>

          {/* Title — gradient */}
          <div
            style={{
              display: "flex",
              marginTop: 6,
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: -1,
              backgroundImage: "linear-gradient(90deg, #22D3EE, #818CF8)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {CV.title}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 4,
              fontSize: 30,
              color: "#9BA3AF",
            }}
          >
            Front-end focused · Building with AI
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              marginTop: 30,
              maxWidth: 940,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#8A909C",
            }}
          >
            Production-grade, AI-powered web apps end to end — accessible
            front-ends and the FastAPI/Node backends behind them.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 12 }}>
            {CV.roles.map((role) => (
              <div
                key={role}
                style={{
                  display: "flex",
                  padding: "8px 18px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#C7CCD6",
                  fontSize: 22,
                }}
              >
                {role}
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              color: "#22D3EE",
            }}
          >
            {SITE}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
