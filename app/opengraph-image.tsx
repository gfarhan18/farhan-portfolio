import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "M. Farhan — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #121110 0%, #2a1d0c 50%, #121110 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#e79e36",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          M. Farhan
        </div>
        <div style={{ fontSize: 36, color: "#a8a29e" }}>
          Full Stack Developer · React · Next.js · Nest.js
        </div>
      </div>
    ),
    { ...size }
  );
}
