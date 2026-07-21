import { ImageResponse } from "next/og";

// Home-screen / bookmark icon for iOS.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #22D3EE 0%, #818CF8 100%)",
          borderRadius: 40,
          color: "#0A0A0F",
          fontSize: 118,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        O
      </div>
    ),
    { ...size }
  );
}
