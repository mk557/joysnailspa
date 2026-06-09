import { NextResponse } from "next/server";
import { getInstagramPosts } from "@/lib/instagram";

export async function GET() {
  try {
    const posts = await getInstagramPosts();
    return NextResponse.json({ posts });
  } catch {
    return NextResponse.json({ posts: [] }, { status: 500 });
  }
}
