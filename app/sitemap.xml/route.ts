export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

const staticLinks = ["/", "/about"];
const SITE_DOMAIN_URL = "https://abubakarsarwar.vercel.app";

export async function GET() {
  const now = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticLinks
        .map(
          (item) =>
            `<url><loc>${SITE_DOMAIN_URL}${item}</loc><lastmod>${now}</lastmod></url>`
        )
        .join("")}
    </urlset>
  `;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
