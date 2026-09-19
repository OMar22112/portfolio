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
          background: "#B9DBB0",
          borderRadius: 40,
          color: "#0E100F",
          fontSize: 84,
          letterSpacing: -5,
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        OA
      </div>
    ),
    { ...size }
  );
}
