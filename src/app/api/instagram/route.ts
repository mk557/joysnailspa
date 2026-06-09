import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) return new NextResponse("Missing url", { status: 400 });

  const response = await fetch(url, {
    headers: {
      // Spoof a direct browser request
      "User-Agent": "Mozilla/5.0",
      "Referer": "https://www.instagram.com/",
    },
  });

  if (!response.ok) return new NextResponse("Failed to fetch image", { status: 502 });

  const blob = await response.arrayBuffer();
  return new NextResponse(blob, {
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "image/jpeg",
      "Cache-Control": "public, max-age=3600",
    },
  });
}