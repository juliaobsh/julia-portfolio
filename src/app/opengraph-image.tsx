import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview card, generated at build time. Kept to system fonts and flat
 * colour so it renders without fetching a font binary.
 */
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
          background: "#F7F5F0",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#78716C",
            }}
          >
            Power BI · Enterprise reporting · Requirements
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#1C1917",
              maxWidth: 900,
            }}
          >
            I make careful changes to reports people rely on every day.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid #E3DED5",
            paddingTop: 32,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 34, fontWeight: 700, color: "#1C1917" }}>
              {site.name}
            </div>
            <div style={{ marginTop: 6, fontSize: 26, color: "#57534E" }}>
              Business Data Analyst · Computer Science Co-op
            </div>
          </div>
          <div
            style={{
              display: "flex",
              background: "#1B48CC",
              color: "#FFFFFF",
              fontSize: 24,
              padding: "14px 28px",
              borderRadius: 14,
            }}
          >
            {site.location}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
