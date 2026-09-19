import { ImageResponse } from "next/og";

// Favicon / browser-tab logo: "OA" monogram on the sage accent.
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
          background: "#B9DBB0",
          borderRadius: 7,
          color: "#0E100F",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: -1,
          fontFamily: "sans-serif",
        }}
      >
        OA
      </div>
    ),
    { ...size }
  );
}
