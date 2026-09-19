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
          padding: "64px 72px",
          fontFamily: "sans-serif",
          backgroundColor: "#0E100F",
          color: "#F3F4F1",
          position: "relative",
        }}
      >
        {/* Monogram watermark */}
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: -60,
            fontSize: 420,
            fontWeight: 800,
            letterSpacing: -20,
            color: "rgba(243,244,241,0.05)",
          }}
        >
          {CV.initials}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 26, fontWeight: 600 }}>{CV.name}</div>
          <div
            style={{
              display: "flex",
              fontSize: 18,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#B9DBB0",
            }}
          >
            {CV.title} / {CV.focus}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 104,
              fontWeight: 800,
              letterSpacing: -5,
              lineHeight: 1,
              maxWidth: 900,
            }}
          >
            {CV.headline}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              maxWidth: 820,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#9EA6A0",
            }}
          >
            {CV.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #262B28",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            {CV.roles.map((role) => (
              <div
                key={role}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: "1px solid #3a403d",
                  color: "#C9CEC9",
                  fontSize: 20,
                }}
              >
                {role}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 22, color: "#B9DBB0" }}>{SITE}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
