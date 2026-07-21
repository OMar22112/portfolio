import { ImageResponse } from "next/og";

// Favicon / browser-tab logo — a gradient "O" monogram.
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 8,
          color: "#0A0A0F",
          fontSize: 22,
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
