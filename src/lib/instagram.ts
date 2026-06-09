export type InstagramPost = {
  id: string;
  imageUrl: string;
  permalink: string;
};

const USERNAME = "joysnailspa";
const CACHE_SECONDS = 3600;

function fetchOptions(): RequestInit {
  return { next: { revalidate: CACHE_SECONDS } };
}

function unescapeUrl(url: string): string {
  return decodeURIComponent(
    url
      .replace(/\\\\\//g, "/")
      .replace(/\\\//g, "/")
      .replace(/\\\\/g, "")
      .replace(/\\/g, "")
      .replace(/&amp;/g, "&")
      .replace(/\\u0026/g, "&")
  );
}

async function fetchFromGraphApi(token: string, userId?: string): Promise<InstagramPost[]> {
  const id = userId || "me";
  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
  const url = `https://graph.instagram.com/v21.0/${id}/media?fields=${fields}&limit=9&access_token=${token}`;

  const res = await fetch(url, fetchOptions());
  if (!res.ok) return [];

  const data = (await res.json()) as {
    data?: Array<{
      id: string;
      media_type: string;
      media_url?: string;
      thumbnail_url?: string;
      permalink: string;
    }>;
  };

  return (data.data ?? [])
    .filter((item) => item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM")
    .map((item) => ({
      id: item.id,
      imageUrl: item.media_url || item.thumbnail_url || "",
      permalink: item.permalink,
    }))
    .filter((item) => item.imageUrl);
}

async function fetchFromEmbedPage(): Promise<InstagramPost[]> {
  const res = await fetch(`https://www.instagram.com/${USERNAME}/embed`, {
    headers: {
      // Minimal UA returns server-rendered embed HTML with post data.
      "User-Agent": "Mozilla/5.0 (compatible; JoysNailSpa/1.0)",
      Accept: "text/html",
    },
    ...fetchOptions(),
  });

  if (!res.ok) return [];

  const html = await res.text();
  return parseInstagramEmbedHtml(html);
}

function parseInstagramEmbedHtml(html: string): InstagramPost[] {
  const seen = new Set<string>();
  const posts: InstagramPost[] = [];

  const delimiters = ['shortcode\\":\\"', '"shortcode":"', 'shortcode":"'];
  let parts: string[] = [];

  for (const delimiter of delimiters) {
    const split = html.split(delimiter);
    if (split.length > parts.length) {
      parts = split;
    }
  }

  for (const part of parts.slice(1)) {
    const shortcodeMatch = part.match(/^([A-Za-z0-9_-]+)/);
    const urlMatch =
      part.match(/display_url\\":\\"(https:[^"]+)/) ||
      part.match(/"display_url":"(https:[^"]+)"/);
    if (!shortcodeMatch || !urlMatch) continue;

    const shortcode = shortcodeMatch[1];
    if (seen.has(shortcode)) continue;
    seen.add(shortcode);

    posts.push({
      id: shortcode,
      imageUrl: unescapeUrl(urlMatch[1]),
      permalink: `https://www.instagram.com/p/${shortcode}/`,
    });

    if (posts.length >= 9) break;
  }

  return posts;
}


export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (token) {
    const posts = await fetchFromGraphApi(token, process.env.INSTAGRAM_USER_ID);
    if (posts.length > 0) return posts;
  }

  return fetchFromEmbedPage();
}
