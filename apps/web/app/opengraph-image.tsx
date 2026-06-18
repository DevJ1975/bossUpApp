import { ImageResponse } from "next/og";

export const alt = "BossUp — Turn frontline talent into frontline leaders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0b1224 0%, #05070f 100%)",
          padding: "80px",
          color: "#eaf0ff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: 2,
            color: "#93a0c4",
          }}
        >
          In partnership with Workplace Learning Systems
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 800 }}>
            Help every employee
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 92,
              fontWeight: 800,
              color: "#ffb020",
            }}
          >
            Boss Up.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 28, color: "#93a0c4" }}>
          Workforce development for Hartsfield-Jackson Atlanta International
          Airport
        </div>
      </div>
    ),
    { ...size }
  );
}
